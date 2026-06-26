"use client";

import AnimatedLightBg from "@/components/AnimatedLightBg";
import { useLang } from "@/i18n/LanguageContext";
import dict, { t } from "@/i18n/dictionaries";

export default function Misszionk() {
  const lang = useLang();
  const m = dict.mission;

  return (
    <section className="misszionk" id={lang === 'hu' ? 'rolunk' : 'about'}>
      <AnimatedLightBg />

      <div className="container misszionk-inner">
        <div className="hook">
          <h2>
            {t(m.hookLine1, lang)}
            <span className="hook-accent">{t(m.hookAccent, lang)}</span>
          </h2>
        </div>

        <div className="mission-row">
          <div className="mission-content">
            <div className="mission-section">
              <p dangerouslySetInnerHTML={{ __html: t(m.body, lang) }} />
            </div>

            <div className="mission-cta">
              <a href={lang === 'hu' ? '#ajanlatkeres' : '#get-quote'} className="btn btn-large">{t(m.cta, lang)}</a>
            </div>
          </div>

          <div className="mission-image-wrapper">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/misszionk-dashboard.webp" alt={t(m.imgAlt, lang)} className="mission-img" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .misszionk {
          position: relative;
          padding: var(--spacing-section) 0;
          background: var(--background-alt);
          color: var(--foreground-light);
          overflow: hidden;
        }

        /* ── Animated bg accents ── */
        .misszionk-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }
        .accent-line {
          position: absolute;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--accent), transparent);
          opacity: 0.15;
          animation: lineSlide 12s linear infinite;
        }
        .accent-line-1 {
          width: 60%;
          top: 25%;
          left: -10%;
          animation-delay: 0s;
        }
        .accent-line-2 {
          width: 45%;
          top: 55%;
          right: -10%;
          animation-delay: 4s;
          animation-direction: reverse;
        }
        .accent-line-3 {
          width: 50%;
          top: 80%;
          left: 20%;
          animation-delay: 8s;
        }
        @keyframes lineSlide {
          0% { transform: translateX(-20%); opacity: 0; }
          50% { opacity: 0.2; }
          100% { transform: translateX(20%); opacity: 0; }
        }
        .accent-dot {
          position: absolute;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent);
          opacity: 0;
          animation: dotPulse 4s ease-in-out infinite;
        }
        .accent-dot-1 { top: 20%; right: 15%; animation-delay: 0s; }
        .accent-dot-2 { top: 60%; left: 10%; animation-delay: 1.5s; }
        .accent-dot-3 { bottom: 15%; right: 30%; animation-delay: 3s; }
        @keyframes dotPulse {
          0%, 100% { opacity: 0; transform: scale(0.5); }
          50% { opacity: 0.4; transform: scale(1.2); }
        }

        /* ── Content ── */
        .misszionk-inner {
          position: relative;
          z-index: 1;
        }

        .hook {
          max-width: 800px;
          margin: 0 auto 4rem;
          text-align: center;
        }
        .hook h2 {
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          line-height: 1.3;
          color: var(--foreground-light);
        }
        .hook-accent {
          color: var(--accent);
        }

        .mission-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
          max-width: 1100px;
          margin: 0 auto;
        }

        .mission-content {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .mission-section h3 {
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 1.2rem;
          color: var(--foreground-light);
        }
        .mission-section p {
          color: var(--text-muted-light);
          line-height: 1.8;
          font-size: 1.1rem;
          margin-bottom: 0;
        }
        .mission-section strong {
          color: var(--foreground-light);
        }

        .mission-image-wrapper {
          display: flex;
          justify-content: center;
        }
        .mission-img {
          width: 100%;
          max-width: 480px;
          border-radius: 16px;
          border: 2px solid transparent;
          background-image: linear-gradient(var(--background-alt), var(--background-alt)), linear-gradient(135deg, #8B5CF6, #3B82F6, #47D7D1, #2DD4BF);
          background-origin: border-box;
          background-clip: padding-box, border-box;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);
          transition: transform 0.5s ease;
        }
        .mission-img:hover {
          transform: scale(1.02);
        }

        .mission-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }
        .mission-list li {
          font-size: 1.05rem;
          color: var(--text-muted-light);
          padding: 0.8rem 1.5rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
        }
        .mission-list li strong {
          color: var(--accent);
        }

        .mission-cta {
          padding-top: 0.5rem;
        }

        @media (max-width: 768px) {
          .mission-row {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .mission-content {
            text-align: center;
          }
          .mission-cta {
            text-align: center;
          }
          .hook {
            margin-bottom: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
}
