"use client";

import AnimatedLightBg from "@/components/AnimatedLightBg";
import { useLang } from "@/i18n/LanguageContext";
import dict, { t } from "@/i18n/dictionaries";

export default function HowWeWork() {
  const lang = useLang();
  const hw = dict.howWeWork;

  return (
    <section className="section section-light" id="hogyan" style={{ position: 'relative', overflow: 'hidden' }}>
      <AnimatedLightBg />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <h2 className="hw-title">{t(hw.title, lang)}</h2>
        <p className="section-intro">{t(hw.intro, lang)}</p>

        <div className="paths-grid">
          {/* Path A */}
          <div className="path-col">
            <div className="path-header path-header-a">
              <div className="path-header-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/howwework-audit.webp" alt="Audit" />
              </div>
              <h3>{t(hw.pathA.title, lang)}</h3>
            </div>
            <div className="steps">
              {hw.pathA.steps.map((step) => (
                <div key={step.num} className="step-card">
                  <div className="step-number">{step.num}</div>
                  <div className="step-content">
                    <h4>{t(step.title, lang)}</h4>
                    <p>{t(step.desc, lang)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Path B */}
          <div className="path-col">
            <div className="path-header path-header-b">
              <div className="path-header-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/howwework-technical.webp" alt="Technical Meeting" />
              </div>
              <h3>{t(hw.pathB.title, lang)}</h3>
            </div>
            <div className="steps">
              {hw.pathB.steps.map((step) => (
                <div key={step.num} className="step-card">
                  <div className="step-number">{step.num}</div>
                  <div className="step-content">
                    <h4>{t(step.title, lang)}</h4>
                    <p>{t(step.desc, lang)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Guarantee Badge */}
        <div className="guarantee-badge">
          <div className="badge-inner">
            <div className="badge-shield">🛡️</div>
            <div className="badge-text">
              <h4>{t(hw.guarantee.title, lang)}</h4>
              <p>{t(hw.guarantee.desc, lang)}</p>
            </div>
          </div>
        </div>

        {/* Closing statement */}
        <div className="closing-statement">
          <blockquote>
            {t(hw.quote, lang)}
          </blockquote>
        </div>

        <div className="method-link-wrap">
          <a href={lang === 'hu' ? '/modszerunk' : '/en/our-method'} className="method-link">
            {t(hw.methodLink, lang)}
          </a>
        </div>
      </div>

      <style jsx>{`
        .hw-title {
          text-align: center;
          font-size: clamp(1.8rem, 4vw, 2.5rem);
          margin-bottom: 1rem;
          color: var(--foreground-light);
        }
        .section-intro {
          text-align: center;
          color: var(--text-muted-light);
          font-size: 1.15rem;
          margin-bottom: 3.5rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        /* ── Paths Grid ── */
        .paths-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
          margin-bottom: 3rem;
        }
        .path-col {
          background: #fff;
          border-radius: var(--card-radius);
          padding: 2rem;
          box-shadow: 0 4px 20px rgba(0,0,0,0.04);
          border: 1px solid rgba(0,0,0,0.06);
        }
        .path-header {
          margin-bottom: 2rem;
          padding-bottom: 1.5rem;
          border-bottom: 2px solid rgba(0,0,0,0.06);
        }
        .path-header-img {
          width: 100%;
          height: 160px;
          overflow: hidden;
          border-radius: 12px;
          margin-bottom: 1rem;
        }
        .path-header-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .path-label {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          padding: 4px 14px;
          border-radius: 50px;
          margin-bottom: 0.75rem;
        }
        .path-header-a .path-label {
          background: rgba(71,215,209,0.12);
          color: var(--accent);
        }
        .path-header-b .path-label {
          background: rgba(139,92,246,0.12);
          color: var(--accent-purple);
        }
        .path-header h3 {
          font-size: 1.1rem;
          font-weight: 600;
          line-height: 1.5;
          color: var(--foreground-light);
        }

        /* ── Steps ── */
        .steps {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .step-card {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }
        .step-number {
          font-size: 2.5rem;
          font-weight: 800;
          font-family: var(--heading-font), 'Montserrat', sans-serif;
          color: rgba(71, 215, 209, 0.25);
          line-height: 1;
          flex-shrink: 0;
          width: 48px;
        }
        .step-content h4 {
          font-size: 1rem;
          font-weight: 700;
          color: var(--foreground-light);
          margin-bottom: 0.3rem;
        }
        .step-content p {
          color: var(--text-muted-light);
          font-size: 0.92rem;
          line-height: 1.6;
          margin: 0;
        }

        /* ── Guarantee Badge ── */
        .guarantee-badge {
          max-width: 650px;
          margin: 0 auto 2.5rem;
          background: linear-gradient(135deg, rgba(71,215,209,0.08), rgba(16,185,129,0.08));
          border: 2px solid var(--accent);
          border-radius: var(--card-radius);
          padding: 2rem 2.5rem;
          box-shadow: 0 8px 30px rgba(71,215,209,0.1);
        }
        .badge-inner {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        .badge-shield {
          font-size: 3.5rem;
          flex-shrink: 0;
        }
        .badge-text h4 {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--accent);
          margin-bottom: 0.4rem;
        }
        .badge-text p {
          margin: 0;
          font-size: 0.95rem;
          color: var(--text-muted-light);
          line-height: 1.5;
        }

        /* ── Closing Statement ── */
        .closing-statement {
          max-width: 750px;
          margin: 0 auto 2.5rem;
          text-align: center;
        }
        .closing-statement blockquote {
          font-size: 1.1rem;
          line-height: 1.8;
          color: var(--text-muted-light);
          font-style: italic;
          border-left: 3px solid var(--accent);
          padding-left: 1.5rem;
          text-align: left;
          margin: 0;
        }

        /* ── Method Link ── */
        .method-link-wrap {
          text-align: center;
        }
        .method-link {
          color: var(--accent);
          font-weight: 600;
          font-size: 1rem;
          text-decoration: none;
          transition: opacity 0.2s;
        }
        .method-link:hover {
          opacity: 0.8;
        }

        @media (max-width: 768px) {
          .paths-grid {
            grid-template-columns: 1fr;
          }
          .badge-inner {
            flex-direction: column;
            text-align: center;
          }
          .closing-statement blockquote {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
}
