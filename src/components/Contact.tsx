"use client";

import { useState, FormEvent } from "react";
import { useLang } from "@/i18n/LanguageContext";
import dict, { t } from "@/i18n/dictionaries";

export default function Contact() {
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
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      marketingConsent: (form.elements.namedItem("marketing") as HTMLInputElement).checked,
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
        // Fire Meta Pixel Lead conversion
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const fbq = (window as Record<string, any>).fbq;
        if (typeof fbq === "function") {
          fbq("track", "Lead", {
            content_name: "Contact Form",
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
    <section className="section section-dark" id={lang === 'hu' ? 'kapcsolat' : 'contact'}>
      <div className="container contact-container">
        <div className="contact-info">
          <h2 className="section-title">{t(c.title, lang)}</h2>
          <p>{t(c.subtitle, lang)}</p>
          <div className="contact-details">
            <div className="detail-item">
              <span className="icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><polyline points="22,7 12,13 2,7" /></svg></span>
              <a href="mailto:hello@thinkai.hu">hello@thinkai.hu</a>
            </div>
            <div className="detail-item">
              <span className="icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg></span>
              <span>Budapest, Hungary</span>
            </div>
          </div>
        </div>

        <form className="contact-form" id={lang === 'hu' ? 'ajanlatkeres' : 'get-quote'} onSubmit={handleSubmit}>
          {status === "success" ? (
            <div className="form-status success">{successMsg}</div>
          ) : (
            <>
              <div className="form-group">
                <label htmlFor="name">{t(c.name, lang)}</label>
                <input type="text" id="name" name="name" required placeholder={t(c.namePlaceholder, lang)} />
              </div>

              <div className="form-group">
                <label htmlFor="company">{t(c.company, lang)}</label>
                <input type="text" id="company" name="company" placeholder={t(c.companyPlaceholder, lang)} />
              </div>

              <div className="form-group">
                <label htmlFor="email">{t(c.email, lang)}</label>
                <input type="email" id="email" name="email" required placeholder={t(c.emailPlaceholder, lang)} />
              </div>

              <div className="form-group">
                <label htmlFor="phone">{t(c.phone, lang)}</label>
                <input type="tel" id="phone" name="phone" placeholder={t(c.phonePlaceholder, lang)} />
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
      <style jsx>{`
        .contact-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }
        @media (max-width: 768px) {
          .contact-container {
            grid-template-columns: 1fr;
          }
        }
        h2 { margin-bottom: 1.5rem; }
        p { color: var(--text-muted-dark); line-height: 1.8; margin-bottom: 2rem; }
        .contact-details { display: flex; flex-direction: column; gap: 1rem; }
        .detail-item { display: flex; align-items: center; gap: 1rem; }
        .detail-item a { color: var(--accent); }
        .icon { display: flex; align-items: center; color: var(--accent); }
        .contact-form {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: var(--card-radius);
          padding: 2.5rem;
        }
        .form-group { margin-bottom: 1.5rem; }
        label { display: block; margin-bottom: 0.5rem; font-size: 0.9rem; font-weight: 600; }
        input, textarea {
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
        input:focus, textarea:focus {
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
        .btn-block { width: 100%; }
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
      `}</style>
    </section>
  );
}
