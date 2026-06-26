"use client";

import { useState, FormEvent } from "react";
import { useLang } from "@/i18n/LanguageContext";
import dict, { t } from "@/i18n/dictionaries";
import AnimatedHeroBg from "@/components/AnimatedHeroBg";

export default function SalesFormPage() {
  const lang = useLang();
  const c = dict.contact;

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      cegmeret: (form.elements.namedItem("cegmeret") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      marketingConsent: (form.elements.namedItem("marketing") as HTMLInputElement).checked,
      source: "sales-form",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const fbq = (window as Record<string, any>).fbq;
        if (typeof fbq === "function") {
          fbq("track", "Lead", {
            content_name: "Sales Form",
            content_category: "Ajánlatkérés",
          });
        }
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const successMsg = lang === "hu"
    ? "Köszönjük megkeresését! Hamarosan felvesszük Önnel a kapcsolatot."
    : "Thank you for your message! We'll get back to you shortly.";

  const errorMsg = lang === "hu"
    ? "Hiba történt. Kérjük próbálja újra, vagy írjon a hello@thinkai.hu címre."
    : "Something went wrong. Please try again or email hello@thinkai.hu.";

  const sendingMsg = lang === "hu" ? "Küldés..." : "Sending...";

  return (
    <div className="main-wrapper">
      <main className="page-content">
        <section className="hero-small">
          <AnimatedHeroBg />
          <div className="container hero-inner">
            <h1>Kérjen ajánlatot</h1>
            <p className="lead">
              Kérjük, adja meg az alábbi adatokat, hogy a legpontosabb ajánlatot adhassuk Önnek.
            </p>
          </div>
        </section>

        <section className="section section-dark">
          <div className="container form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              {status === "success" ? (
                <div className="form-status success">{successMsg}</div>
              ) : (
                <>
                  <div className="form-group">
                    <label htmlFor="name">{t(c.name, lang)}</label>
                    <input type="text" id="name" name="name" required placeholder={t(c.namePlaceholder, lang)} />
                  </div>

                  <div className="form-row">
                    <div className="form-group half">
                      <label htmlFor="company">{t(c.company, lang)}</label>
                      <input type="text" id="company" name="company" placeholder={t(c.companyPlaceholder, lang)} />
                    </div>
                    <div className="form-group half">
                      <label htmlFor="cegmeret">{lang === 'hu' ? 'Cégméret (fő)' : 'Company size'}</label>
                      <select id="cegmeret" name="cegmeret" required>
                        <option value="">Kérjük válasszon...</option>
                        <option value="0-1">0-1 fő</option>
                        <option value="2-5">2-5 fő</option>
                        <option value="6-20">6-20 fő</option>
                        <option value="20+">20+ fő</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group half">
                      <label htmlFor="email">{t(c.email, lang)}</label>
                      <input type="email" id="email" name="email" required placeholder={t(c.emailPlaceholder, lang)} />
                    </div>
                    <div className="form-group half">
                      <label htmlFor="phone">{t(c.phone, lang)}</label>
                      <input type="tel" id="phone" name="phone" placeholder={t(c.phonePlaceholder, lang)} />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">{t(c.message, lang)}</label>
                    <textarea id="message" name="message" rows={5} placeholder={t(c.messagePlaceholder, lang)} required></textarea>
                  </div>

                  <div className="form-check">
                    <input type="checkbox" id="privacy" required />
                    <label htmlFor="privacy" dangerouslySetInnerHTML={{ __html: t(c.privacy, lang) }} />
                  </div>

                  <div className="form-check">
                    <input type="checkbox" id="marketing" />
                    <label htmlFor="marketing">{t(c.marketingConsent, lang)}</label>
                  </div>

                  {status === "error" && (
                    <div className="form-status error">{errorMsg}</div>
                  )}

                  <button type="submit" className="btn btn-block" disabled={status === "sending"}>
                    {status === "sending" ? sendingMsg : t(c.submit, lang)}
                  </button>
                </>
              )}
            </form>
          </div>
        </section>
      </main>

      <style jsx>{`
        .hero-small {
          padding: 8rem 0 4rem; position: relative; overflow: hidden; text-align: center;
          background: var(--background-dark);
        }
        h1 {
          font-size: clamp(2rem,4.5vw,2.8rem); margin-bottom: 1rem; font-weight: 800;
          line-height: 1.15; color: #fff;
        }
        .hero-inner { position: relative; z-index: 1; }
        .lead { font-size: 1.1rem; color: #cbd5e1; max-width: 680px; margin: 0 auto; line-height: 1.8; }
        .section-dark { background: var(--background-dark); color: #fff; padding-bottom: 6rem; }
        
        .form-container {
          max-width: 700px;
          margin: 0 auto;
        }

        .contact-form {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: var(--card-radius);
          padding: 2.5rem;
        }
        .form-group { margin-bottom: 1.5rem; }
        .form-row { display: flex; gap: 1.5rem; margin-bottom: 1.5rem; }
        .form-row .half { flex: 1; margin-bottom: 0; }
        
        label { display: block; margin-bottom: 0.5rem; font-size: 0.9rem; font-weight: 600; }
        input, select, textarea {
          width: 100%;
          padding: 0.8rem 1rem;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px;
          color: #fff;
          font-family: inherit;
          font-size: 0.95rem;
          transition: border-color 0.3s;
        }
        select option {
          background: #111113;
          color: #fff;
        }
        input:focus, select:focus, textarea:focus {
          outline: none;
          border-color: var(--accent);
          box-shadow: 0 0 0 2px rgba(71,215,209,0.1);
        }
        .form-check {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }
        .form-check input { width: auto; margin-top: 4px; }
        .form-check label { margin-bottom: 0; font-weight: 400; font-size: 0.85rem; color: var(--text-muted-dark); }
        .btn-block { width: 100%; padding: 1rem; font-size: 1.05rem; }
        button:disabled { opacity: 0.6; cursor: not-allowed; }
        .form-status {
          padding: 1.5rem;
          border-radius: 8px;
          text-align: center;
          font-size: 1rem;
          line-height: 1.6;
        }
        .form-status.success {
          background: rgba(16,185,129,0.1);
          border: 1px solid rgba(16,185,129,0.3);
          color: #10b981;
        }
        .form-status.error {
          background: rgba(239,68,68,0.1);
          border: 1px solid rgba(239,68,68,0.3);
          color: #ef4444;
          margin-bottom: 1rem;
        }

        @media (max-width: 600px) {
          .form-row { flex-direction: column; gap: 1.5rem; }
        }
      `}</style>
    </div>
  );
}
