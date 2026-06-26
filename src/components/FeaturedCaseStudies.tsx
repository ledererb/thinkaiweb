"use client";

import Link from "next/link";
import { caseStudies } from "@/data/caseStudies";
import { useLang } from "@/i18n/LanguageContext";
import dict, { t } from "@/i18n/dictionaries";
import { translateCaseStudy } from "@/data/translateCaseStudy";

const featured = [
  "listamester",
  "crm",
  "konyveles-automatizacio",
];

export default function FeaturedCaseStudies() {
  const lang = useLang();
  const f = dict.featured;
  const r = dict.routes;
  const csPage = dict.caseStudiesPage;

  const items = featured
    .map((slug) => caseStudies.find((cs) => cs.slug === slug)!)
    .filter(Boolean)
    .map((cs) => translateCaseStudy(cs, lang));

  const csBasePath = lang === 'hu' ? '/sikertortenetek' : '/en/case-studies';

  return (
    <section className="section featured-cs" id="projektek">
      <div className="container">
        <h2 className="section-title">{t(f.title, lang)}</h2>
        <p className="section-sub">{t(f.subtitle, lang)}</p>

        <div className="cs-grid">
          {items.map((cs) => (
            <Link
              key={cs.slug}
              href={`${csBasePath}/${cs.slug}`}
              className="cs-card"
              style={{ "--cat-color": cs.categoryColor } as React.CSSProperties}
            >
              <div className="cs-head">
                <span className="cs-badge">{cs.category}</span>
              </div>
              <h3>{cs.shortTitle}</h3>
              <p>{cs.shortDescription}</p>
              <div className="cs-footer">
                <span className="cs-link">
                  {t(csPage.readMore, lang)}
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link
            href={t(r.caseStudies, lang)}
            style={{
              display: 'inline-block',
              color: 'var(--accent)',
              fontWeight: 600,
              fontSize: '1rem',
              textDecoration: 'none',
              padding: '14px 36px',
              border: '2px solid var(--accent)',
              borderRadius: '50px',
              letterSpacing: '0.5px',
              transition: 'all 0.3s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--accent)';
              e.currentTarget.style.color = '#0a0e1a';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = 'var(--accent)';
            }}
          >
            {t(f.viewAll, lang)}
          </Link>
        </div>
      </div>

      <style jsx global>{`
        .featured-cs {
          padding: 100px 0;
          background: var(--background-dark);
        }
        .section-title {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 0.8rem;
          font-weight: 300;
          color: #fff;
        }
        .section-sub {
          text-align: center;
          color: #94a3b8;
          font-size: 1.05rem;
          margin-bottom: 3.5rem;
        }
        .cs-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }
        .cs-card {
          display: flex;
          flex-direction: column;
          background-image: linear-gradient(#0D1520, #0D1520), linear-gradient(135deg, #8B5CF6, #3B82F6, #47D7D1, #2DD4BF);
          background-origin: border-box;
          background-clip: padding-box, border-box;
          border: 2px solid transparent;
          border-radius: 20px;
          padding: 32px 28px;
          text-decoration: none;
          transition: all 0.35s ease;
          color: inherit;
          position: relative;
          overflow: hidden;
        }
        .cs-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--cat-color);
          opacity: 0.6;
          transition: opacity 0.35s;
        }
        .cs-card:hover {
          background-image: linear-gradient(#111827, #111827), linear-gradient(135deg, #8B5CF6, #6366F1, #3B82F6, #47D7D1);
          transform: translateY(-6px);
          box-shadow: 0 16px 48px rgba(0, 0, 0, 0.35), 0 0 24px rgba(139, 92, 246, 0.15);
        }
        .cs-card:hover::before {
          opacity: 1;
        }
        .cs-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 18px;
        }
        .cs-icon {
          font-size: 2.2rem;
        }
        .cs-badge {
          display: inline-block;
          padding: 5px 14px;
          border-radius: 50px;
          font-size: 0.72rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          background: color-mix(in srgb, var(--cat-color) 15%, transparent);
          color: var(--cat-color);
        }
        h3 {
          font-size: 1.25rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 12px;
          line-height: 1.3;
        }
        p {
          color: #94a3b8;
          font-size: 0.9rem;
          line-height: 1.65;
          flex: 1;
        }
        .cs-footer {
          margin-top: 20px;
          padding-top: 16px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
        }
        .cs-link {
          color: var(--cat-color, var(--accent));
          font-weight: 600;
          font-size: 0.88rem;
        }
        .arrow {
          display: inline-block;
          transition: transform 0.2s;
        }
        .cs-card:hover .arrow {
          transform: translateX(5px);
        }
        .all-link-wrap {
          text-align: center;
          margin-top: 3rem;
        }
        .all-link {
          display: inline-block;
          color: var(--accent);
          font-weight: 600;
          font-size: 1rem;
          text-decoration: none;
          padding: 14px 36px;
          border: 2px solid var(--accent);
          border-radius: 50px;
          transition: all 0.3s;
          letter-spacing: 0.5px;
        }
        .all-link:hover {
          background: var(--accent);
          color: #0a0e1a;
        }
        @media (max-width: 900px) {
          .cs-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
