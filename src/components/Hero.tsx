"use client";

import AnimatedHeroBg from "./AnimatedHeroBg";
import { useLang } from "@/i18n/LanguageContext";
import dict, { t } from "@/i18n/dictionaries";

export default function Hero() {
  const lang = useLang();
  const h = dict.hero;
  const r = dict.routes;

  return (
    <section className="hero">
      <AnimatedHeroBg />
      <div className="container hero-content">
        <div className="logo-icon">
          <img src="/logo.webp" alt="ThinkAI Logo" />
        </div>
        <h1>
          <span className="hero-line hero-line-1">{t(h.line1, lang)}</span>
          <span className="hero-line hero-line-2 hero-highlight">{t(h.line2, lang)}</span>
        </h1>
        <p>{t(h.subtitle, lang)}</p>
        <a href={t(r.quote, lang).replace(/^\/en/, '')} className="btn btn-large">
          {t(h.cta, lang)}
        </a>
      </div>
      <style jsx>{`
        .hero {
          min-height: 90vh;
          display: flex;
          align-items: center;
          background: var(--hero-gradient);
          position: relative;
          overflow: hidden;
          padding-top: 80px;
        }
        .hero-content {
          max-width: 900px;
          position: relative;
          z-index: 1;
        }
        .logo-icon {
          margin-bottom: 2rem;
          opacity: 0.9;
        }
        .logo-icon img {
          height: 60px;
          width: auto;
        }
        h1 {
          font-size: 3.5rem;
          margin-bottom: 2rem;
          font-weight: 300;
          line-height: 1.15;
          color: #fff;
        }
        .hero-line {
          display: block;
          opacity: 0;
          transform: translateY(20px);
          animation: heroReveal 0.8s ease-out forwards;
        }
        .hero-line-1 {
          animation-delay: 0.2s;
        }
        .hero-line-2 {
          animation-delay: 0.6s;
          margin-top: 0.3rem;
        }
        .hero-highlight {
          font-weight: 800;
          background: linear-gradient(135deg, #fff 0%, var(--accent) 50%, var(--accent-purple) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        @keyframes heroReveal {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        p {
          font-size: 1.2rem;
          margin-bottom: 3rem;
          opacity: 0;
          max-width: 700px;
          line-height: 1.8;
          font-weight: 300;
          color: var(--text-muted-dark);
          animation: heroReveal 0.8s ease-out 1s forwards;
        }
        .btn-large {
          padding: 1rem 3rem;
          font-size: 1rem;
          opacity: 0;
          animation: heroReveal 0.8s ease-out 1.3s forwards;
        }
        @media (max-width: 768px) {
          h1 {
            font-size: 2.2rem;
          }
          .hero {
             min-height: auto;
             padding: 6rem 0;
          }
        }
      `}</style>
    </section>
  );
}
