"use client";

import Link from 'next/link';
import { useLang } from "@/i18n/LanguageContext";
import dict, { t } from "@/i18n/dictionaries";

export default function Pillars() {
  const lang = useLang();
  const p = dict.pillars;
  const r = dict.routes;
  const cards = p.cards;

  const cardLinks = [
    t(r.contact, lang),
    t(r.aiService, lang),
    null, // EAISY has "coming soon" instead
  ];

  return (
    <section className="section section-dark">
      <div className="container">
        <h2 className="section-title">{t(p.title, lang)}</h2>
        <p className="section-intro">{t(p.intro, lang)}</p>
        <div className="pillars-grid">
          {cards.map((card, i) => (
            <div key={i} className={`pillar-card${i === 2 ? ' highlight' : ''}`}>
              <div className="pillar-card-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={card.img} alt={t(card.imgAlt, lang)} />
              </div>
              <div className="pillar-card-body">
                <h3>{t(card.title, lang)}</h3>
                <p>{t(card.desc, lang)}</p>
                {i < 2 ? (
                  <Link href={cardLinks[i]!} className="btn btn-teal">
                    {t((cards[i] as typeof cards[0]).cta, lang)}
                  </Link>
                ) : (
                  <span className="coming-soon">
                    {t((cards[2] as typeof cards[2]).comingSoon, lang)}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .section-title {
          text-align: center;
          margin-bottom: 1rem;
        }
        .section-intro {
          text-align: center;
          max-width: 600px;
          margin: 0 auto 4rem;
          opacity: 0.8;
        }
        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          max-width: 1100px;
          margin: 0 auto;
        }
        .pillar-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--card-radius);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: transform 0.3s ease, border-color 0.3s;
        }
        .pillar-card-img {
          width: 100%;
          height: 180px;
          overflow: hidden;
        }
        .pillar-card-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }
        .pillar-card:hover .pillar-card-img img {
          transform: scale(1.05);
        }
        .pillar-card-body {
          padding: 1.5rem 2rem 2rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .pillar-card:hover {
          transform: translateY(-8px);
          border-color: var(--accent);
        }
        .pillar-card.highlight {
          background: linear-gradient(135deg, rgba(59,130,246,0.08), rgba(10,17,24,1));
          border-color: rgba(59,130,246,0.25);
        }
        .pillar-card.highlight:hover {
          border-color: var(--accent-blue);
        }
        h3 {
          font-size: 1.4rem;
          margin-bottom: 1rem;
          color: #fff;
        }
        .highlight h3 {
          color: var(--accent-blue);
        }
        p {
          opacity: 0.8;
          margin-bottom: 2rem;
          flex-grow: 1;
          line-height: 1.7;
        }
        .btn-teal {
          background: var(--accent) !important;
          border-color: var(--accent) !important;
          color: var(--background-dark) !important;
          font-weight: 700;
          width: 100%;
          text-align: center;
          white-space: nowrap;
        }
        .btn-teal:hover {
          filter: brightness(1.15);
          box-shadow: 0 6px 20px rgba(71,215,209,0.3);
        }
        .coming-soon {
          display: inline-block;
          padding: 0.65rem 1.5rem;
          border: 1px dashed rgba(59,130,246,0.4);
          border-radius: 8px;
          color: rgba(59,130,246,0.7);
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          width: 100%;
          text-align: center;
        }
        @media (max-width: 900px) {
          .pillars-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
