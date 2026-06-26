"use client";

import AnimatedLightBg from "@/components/AnimatedLightBg";
import { useLang } from "@/i18n/LanguageContext";
import dict, { t } from "@/i18n/dictionaries";

export default function Industries() {
  const lang = useLang();
  const ind = dict.industries;

  return (
    <section className="section section-light" style={{ position: 'relative', overflow: 'hidden' }}>
      <AnimatedLightBg />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="content-wrapper">
          <div className="text-content">
            <h2 className="section-title">{t(ind.title, lang)}</h2>
            <p className="subtitle">{t(ind.subtitle, lang)}</p>
          </div>
        </div>

        <div className="industries-grid">
          {ind.cards.map((card, i) => (
            <div key={i} className={`industry-card${i === 0 ? ' highlight' : ''}`}>
              <div className="industry-card-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={card.img} alt={t(card.imgAlt, lang)} />
              </div>
              <h3>{t(card.title, lang)}</h3>
              <p>{t(card.desc, lang)}</p>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .industries-section {
          position: relative;
          overflow: hidden;
          background: #fff;
        }
        .section-title {
          text-align: center;
          font-size: 2.5rem;
          color: var(--foreground-light);
        }
        .subtitle {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 4rem;
          color: var(--text-muted-light);
          font-size: 1.1rem;
        }
        .industries-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        .industry-card {
          background: rgba(0, 0, 0, 0.03);
          border-radius: 16px;
          border: 1px solid rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          overflow: hidden;
        }
        .industry-card-img {
          width: 100%;
          height: 180px;
          overflow: hidden;
        }
        .industry-card-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }
        .industry-card:hover .industry-card-img img {
          transform: scale(1.05);
        }
        .industry-card h3,
        .industry-card p {
          padding: 0 1.5rem;
        }
        .industry-card h3 {
          padding-top: 1.5rem;
        }
        .industry-card p {
          padding-bottom: 1.5rem;
        }
        .industry-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
          background: rgba(0, 0, 0, 0.02);
        }
        .industry-card.highlight {
          border-color: var(--accent);
          background: linear-gradient(145deg, rgba(71, 215, 209, 0.06), rgba(255, 255, 255, 1));
        }
        .industry-card h3 {
          color: var(--foreground-light);
          margin-bottom: 1rem;
          font-size: 1.5rem;
        }
        .industry-card.highlight h3 {
          color: var(--accent-dark, #0d9488);
        }
        .industry-card p {
          color: var(--text-muted-light);
          margin: 0;
        }
      `}</style>
    </section>
  );
}
