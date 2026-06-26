import { NextRequest, NextResponse } from "next/server";

// ── Twenty CRM helper ──
async function createTwentyCrmRecords(
    name: string,
    company: string | undefined,
    email: string,
    phone: string | undefined,
    message: string,
    cegmeret?: string,
    iparag?: string
) {
    const twentyUrl = process.env.TWENTY_CRM_URL;
    const twentyKey = process.env.TWENTY_API_KEY;
    if (!twentyUrl || !twentyKey) {
        console.warn("Twenty CRM env vars not set, skipping");
        return false;
    }

    const headers = {
        Authorization: `Bearer ${twentyKey}`,
        "Content-Type": "application/json",
    };

    // Split name into first/last
    const nameParts = name.trim().split(/\s+/);
    const firstName = nameParts[0] || name;
    const lastName = nameParts.slice(1).join(" ") || "";

    // Extract domain from email for company domain
    const emailDomain = email.split("@")[1] || "";

    // 1. Create Company
    const companyName = company || (lastName ? `${firstName} ${lastName}` : firstName);
    const companyRes = await fetch(`${twentyUrl}/rest/companies`, {
        method: "POST",
        headers,
        body: JSON.stringify({
            name: companyName,
            domainName: {
                primaryLinkLabel: emailDomain,
                primaryLinkUrl: emailDomain ? `https://${emailDomain}` : "",
                secondaryLinks: [],
            },
        }),
    });

    if (!companyRes.ok) {
        console.error("Twenty: company create failed:", await companyRes.text());
        return false;
    }
    const companyData = await companyRes.json();
    const companyId = companyData.data?.createCompany?.id;
    if (!companyId) {
        console.error("Twenty: no company ID returned");
        return false;
    }

    // 2. Create Person linked to Company
    const personRes = await fetch(`${twentyUrl}/rest/people`, {
        method: "POST",
        headers,
        body: JSON.stringify({
            name: { firstName, lastName },
            emails: {
                primaryEmail: email,
                additionalEmails: [],
            },
            phones: {
                primaryPhoneNumber: phone || "",
                additionalPhones: [],
            },
            companyId,
        }),
    });

    if (!personRes.ok) {
        console.error("Twenty: person create failed:", await personRes.text());
        return false;
    }
    const personData = await personRes.json();
    const personId = personData.data?.createPerson?.id;
    if (!personId) {
        console.error("Twenty: no person ID returned");
        return false;
    }

    // 3. Create Opportunity linked to Company + Person
    const opportunityRes = await fetch(`${twentyUrl}/rest/opportunities`, {
        method: "POST",
        headers,
        body: JSON.stringify({
            name: `Ajánlatkérés: ${name}`,
            stage: "NEW",
            companyId,
            pointOfContactId: personId,
        }),
    });

    if (!opportunityRes.ok) {
        console.error(
            "Twenty: opportunity create failed:",
            await opportunityRes.text()
        );
        return false;
    }

    // 4. Create a Note on the opportunity with the message
    const oppData = await opportunityRes.json();
    const oppId = oppData.data?.createOpportunity?.id;
    if (oppId && message) {
        try {
            // Create note
            const noteRes = await fetch(`${twentyUrl}/rest/notes`, {
                method: "POST",
                headers,
                body: JSON.stringify({
                    title: "Ajánlatkérés üzenet",
                    bodyV2: { markdown: `**Cégméret**: ${cegmeret || "-"}\n**Iparág**: ${iparag || "-"}\n\n**Üzenet**:\n${message}` },
                }),
            });
            if (noteRes.ok) {
                const noteData = await noteRes.json();
                const noteId = noteData.data?.createNote?.id;
                if (noteId) {
                    // Link note to opportunity via noteTarget
                    await fetch(`${twentyUrl}/rest/noteTargets`, {
                        method: "POST",
                        headers,
                        body: JSON.stringify({
                            noteId,
                            targetOpportunityId: oppId,
                        }),
                    });
                }
            }
        } catch (noteErr) {
            console.error("Twenty: note creation failed:", noteErr);
            // Non-critical, don't fail the whole flow
        }
    }

    return true;
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, company, email, phone, message, marketingConsent, cegmeret, source } = body;

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Name, email, and message are required." },
                { status: 400 }
            );
        }

        const results = { brevo: false, mailerlite: false, twentyCrm: false };

        // ── 1. Send email via Brevo ──
        if (source !== "sales-form") {
            try {
                const brevoRes = await fetch("https://api.brevo.com/v3/smtp/email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "api-key": process.env.BREVO_API_KEY!,
                },
                body: JSON.stringify({
                    sender: { name: "ThinkAI Website", email: "hello@thinkai.hu" },
                    to: [{ email: "hello@thinkai.hu", name: "ThinkAI" }],
                    replyTo: { email, name },
                    subject: `Új ajánlatkérés: ${name}`,
                    htmlContent: `
            <h2>Új ajánlatkérés a weboldalról</h2>
            <table style="border-collapse:collapse;width:100%;max-width:600px;">
              <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Név</td><td style="padding:8px;border:1px solid #ddd;">${name}</td></tr>
              <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Cégnév</td><td style="padding:8px;border:1px solid #ddd;">${company || "–"}</td></tr>
              <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Cégméret</td><td style="padding:8px;border:1px solid #ddd;">${cegmeret || "–"}</td></tr>
              <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">E-mail</td><td style="padding:8px;border:1px solid #ddd;">${email}</td></tr>
              <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Telefon</td><td style="padding:8px;border:1px solid #ddd;">${phone || "–"}</td></tr>
              <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Marketing hozzájárulás</td><td style="padding:8px;border:1px solid #ddd;">${marketingConsent ? "Igen" : "Nem"}</td></tr>
            </table>
            <h3 style="margin-top:20px;">Üzenet</h3>
            <p style="white-space:pre-wrap;background:#f5f5f5;padding:16px;border-radius:8px;">${message}</p>
          `,
                }),
            });

            if (brevoRes.ok) {
                results.brevo = true;
                } else {
                    const brevoErr = await brevoRes.text();
                    console.error("Brevo error:", brevoErr);
                }
            } catch (brevoErr) {
                console.error("Brevo exception:", brevoErr);
            }
        }

        // ── 2. Add to MailerLite with group ──
        if (source !== "sales-form") {
            try {
                const mlApiKey = process.env.MAILERLITE_API_KEY!;
            const targetGroupName = marketingConsent
                ? "Marketingnyilatkoztatva"
                : "Ajánlatkérő";

            // Get groups to find the target group ID
            const groupsRes = await fetch(
                "https://connect.mailerlite.com/api/groups?filter[name]=" +
                encodeURIComponent(targetGroupName),
                {
                    headers: {
                        Authorization: `Bearer ${mlApiKey}`,
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                }
            );

            let groupId: string | null = null;
            if (groupsRes.ok) {
                const groupsData = await groupsRes.json();
                if (groupsData.data && groupsData.data.length > 0) {
                    groupId = groupsData.data[0].id;
                }
            }

            // Add subscriber
            const subscriberPayload: Record<string, unknown> = {
                email,
                fields: {
                    name,
                    company_name: company || "",
                    phone: phone || "",
                },
                groups: groupId ? [groupId] : [],
            };

            const mlRes = await fetch(
                "https://connect.mailerlite.com/api/subscribers",
                {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${mlApiKey}`,
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify(subscriberPayload),
                }
            );

            if (mlRes.ok) {
                results.mailerlite = true;
                } else {
                    const mlErr = await mlRes.text();
                    console.error("MailerLite error:", mlErr);
                }
            } catch (mlErr) {
                console.error("MailerLite exception:", mlErr);
            }
        }

        // ── 3. Create records in Twenty CRM ──
        if (source !== "sales-form") {
            try {
                results.twentyCrm = await createTwentyCrmRecords(
                name,
                company,
                email,
                phone,
                message,
                cegmeret
                );
            } catch (crmErr) {
                console.error("Twenty CRM exception:", crmErr);
            }
        }

        // ── 4. Send to Lovable Webhook (Sales Form only) ──
        if (source === "sales-form") {
            try {
                let headcount = 0;
                if (cegmeret === "0-1") headcount = 1;
                else if (cegmeret === "2-5") headcount = 5;
                else if (cegmeret === "6-20") headcount = 20;
                else if (cegmeret === "20+") headcount = 25;
                else if (cegmeret) headcount = parseInt(cegmeret) || 0;

                const lovablePayload = {
                    name: company || name,
                    email: email,
                    phones: phone ? [phone] : [],
                    owners: [name],
                    address: "",
                    headcount: headcount,
                    payroll_cost: 0,
                    status: "uj",
                    notes: message
                };

                const lovableRes = await fetch("https://thinkaisales.lovable.app/api/public/ingest/companies", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "X-Webhook-Secret": "whk_7cae30aa5302fa2a51c883a8da9046568bbe34ee92fc3b28"
                    },
                    body: JSON.stringify(lovablePayload)
                });

                if (!lovableRes.ok) {
                    console.error("Lovable Webhook error:", await lovableRes.text());
                } else {
                    console.log("Lovable Webhook success");
                }
            } catch (webhookErr) {
                console.error("Lovable Webhook exception:", webhookErr);
            }
        }

        // Return success if at least one service worked or if it's the sales form (since it doesn't return brevo/mailerlite/twentyCrm)
        if (results.brevo || results.mailerlite || results.twentyCrm || source === "sales-form") {
            return NextResponse.json({ success: true, results });
        }

        // All failed
        return NextResponse.json(
            { error: "Failed to process submission.", results },
            { status: 500 }
        );
    } catch (err) {
        console.error("Contact API error:", err);
        return NextResponse.json(
            { error: "Internal server error." },
            { status: 500 }
        );
    }
}
