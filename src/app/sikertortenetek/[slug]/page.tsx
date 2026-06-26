"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import AnimatedHeroBg from "@/components/AnimatedHeroBg";
import { caseStudies, getCaseStudyBySlug } from "@/data/caseStudies";
import { notFound } from "next/navigation";



export default function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const cs = getCaseStudyBySlug(params.slug);
  if (!cs) return notFound();

  const currentIndex = caseStudies.findIndex((c) => c.slug === cs.slug);
  const prev = currentIndex > 0 ? caseStudies[currentIndex - 1] : null;
  const next =
    currentIndex < caseStudies.length - 1 ? caseStudies[currentIndex + 1] : null;

  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="detail-hero">
          <AnimatedHeroBg />
          <div className="container detail-hero-inner">
            <Link href="/sikertortenetek" className="back-link">
              ← Összes projekt
            </Link>
            <div className="detail-hero-content">
              <span
                className="detail-badge"
                style={{
                  background: `${cs.categoryColor}22`,
                  color: cs.categoryColor,
                }}
              >
                {cs.category}
              </span>
              <h1>{cs.title}</h1>
              <p className="detail-lead">{cs.shortDescription}</p>
            </div>
          </div>
        </section>

        {/* Feladat + Image */}
        <section className="detail-section">
          <div className="container">
            <div className="feladat-layout">
              <div className="feladat-text">
                <h2>Feladat</h2>
                <p className="label-hint">A kihívás, amellyel az ügyfél szembesült</p>
                <p className="feladat-body">{cs.feladat}</p>
              </div>
              {cs.image && (
                <div className="feladat-image">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={cs.image} alt={cs.title} />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Megoldás */}
        <section className="detail-section megoldas-section">
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="detail-grid">
              <div className="detail-label">
                <h2 className="megoldas-title">Megoldás</h2>
                <p className="label-hint megoldas-hint">Az AI-alapú rendszer képességei</p>
              </div>
              <div className="detail-content">
                <ul className="solution-list">
                  {cs.megoldas.map((item, i) => (
                    <li key={i}>
                      <span className="check" style={{ color: '#1e293b' }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Előnyök */}
        <section className="detail-section">
          <div className="container">
            <h2 className="benefits-heading">Előnyök az ügyfél számára</h2>
            <div className="benefits-grid">
              {cs.elonyok.map((e, i) => (
                <div
                  key={i}
                  className="benefit-card"
                  style={{ "--delay": `${i * 0.08}s` } as React.CSSProperties}
                >
                  <div
                    className="benefit-number"
                    style={{ color: cs.categoryColor }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3>{e.title}</h3>
                  <p>{e.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Navigation between case studies */}
        <section className="detail-nav">
          <div className="container">
            <div className="nav-row">
              {prev ? (
                <Link
                  href={`/sikertortenetek/${prev.slug}`}
                  className="nav-link nav-prev"
                >
                  <span className="nav-dir">← Előző</span>
                  <span className="nav-title">{prev.shortTitle}</span>
                </Link>
              ) : (
                <div />
              )}
              {next ? (
                <Link
                  href={`/sikertortenetek/${next.slug}`}
                  className="nav-link nav-next"
                >
                  <span className="nav-dir">Következő →</span>
                  <span className="nav-title">{next.shortTitle}</span>
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="detail-cta">
          <div className="container">
            <h2>Hasonló megoldást szeretnél?</h2>
            <p>
              Kérj ingyenes konzultációt, és tervezzük meg együtt a te
              AI megoldását.
            </p>
            <div className="cta-buttons">
              <a href="/#contact" className="btn btn-primary btn-large">
                Ingyenes konzultáció
              </a>
              <a href="/palyazat" className="btn btn-outline btn-large">
                Pályázati finanszírozás
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style jsx>{`
        /* ── Page ── */
        main {
          background: var(--background-dark);
          color: #fff;
        }

        /* ── Hero ── */
        .detail-hero {
          padding: 120px 0 60px;
          position: relative;
          overflow: hidden;
          background: linear-gradient(
            180deg,
            var(--background-dark) 0%,
            rgba(18, 187, 188, 0.05) 100%
          );
        }
        .back-link {
          display: inline-block;
          color: var(--accent);
          text-decoration: none;
          font-size: 0.9rem;
          margin-bottom: 32px;
          transition: opacity 0.2s;
        }
        .back-link:hover {
          opacity: 0.7;
        }
        .detail-hero-inner {
          position: relative;
          z-index: 1;
        }
        .detail-hero-content {
          max-width: 720px;
        }
        .detail-badge {
          display: inline-block;
          font-size: 0.78rem;
          padding: 5px 16px;
          border-radius: 50px;
          font-weight: 600;
          letter-spacing: 0.5px;
          margin-bottom: 20px;
        }
        .detail-hero h1 {
          font-size: clamp(2rem, 4.5vw, 3rem);
          line-height: 1.15;
          margin-bottom: 16px;
        }
        .detail-lead {
          color: #cbd5e1;
          font-size: 1.1rem;
          line-height: 1.7;
        }

        /* ── Feladat + Image ── */
        .feladat-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
        }
        .feladat-text h2 {
          font-size: 1.4rem;
          margin-bottom: 6px;
        }
        .feladat-text .label-hint {
          color: #94a3b8;
          font-size: 0.85rem;
          margin-bottom: 20px;
        }
        .feladat-body {
          color: #cbd5e1;
          font-size: 1.05rem;
          line-height: 1.8;
        }
        .feladat-image {
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: 0 16px 40px rgba(0,0,0,0.3);
          transform: perspective(1200px) rotateY(-8deg) rotateX(2deg);
          transition: transform 0.5s ease;
        }
        .feladat-image img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          aspect-ratio: 4/3;
        }
        .feladat-image:hover {
          transform: perspective(1200px) rotateY(-2deg) rotateX(0deg) scale(1.02);
        }

        /* ── Sections ── */
        .detail-section {
          padding: 64px 0;
        }
        .section-alt {
          background: rgba(255, 255, 255, 0.02);
        }
        .megoldas-section {
          background: #fff;
          position: relative;
          overflow: hidden;
        }
        .megoldas-title {
          color: var(--foreground-light) !important;
        }
        .megoldas-hint {
          color: var(--text-muted-light) !important;
        }
        .megoldas-section .solution-list li {
          color: var(--text-muted-light);
        }
        .detail-grid {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 48px;
          align-items: start;
        }
        .detail-label h2 {
          font-size: 1.4rem;
          margin-bottom: 6px;
        }
        .label-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          margin-bottom: 14px;
        }
        .label-hint {
          color: #94a3b8;
          font-size: 0.85rem;
        }
        .detail-content p {
          color: #94a3b8;
          font-size: 1.05rem;
          line-height: 1.8;
        }

        /* Solution list */
        .solution-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .solution-list li {
          display: flex;
          gap: 12px;
          align-items: baseline;
          color: #94a3b8;
          font-size: 1.02rem;
          line-height: 1.6;
        }
        .check {
          font-weight: 700;
          font-size: 1.1rem;
          flex-shrink: 0;
        }

        /* ── Benefits ── */
        .benefits-heading {
          text-align: center;
          font-size: clamp(1.4rem, 3vw, 2rem);
          margin-bottom: 40px;
        }
        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 20px;
        }
        .benefit-card {
          padding: 24px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.03);
          transition: transform 0.3s, border-color 0.3s;
        }
        .benefit-card:hover {
          transform: translateY(-2px);
          border-color: rgba(255, 255, 255, 0.15);
        }
        .benefit-number {
          font-size: 0.85rem;
          font-weight: 700;
          font-family: "Montserrat", sans-serif;
          margin-bottom: 10px;
        }
        .benefit-card h3 {
          font-size: 1.05rem;
          margin-bottom: 6px;
        }
        .benefit-card p {
          color: #94a3b8;
          font-size: 0.9rem;
          line-height: 1.6;
        }

        /* ── Navigation ── */
        .detail-nav {
          padding: 40px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
        }
        .nav-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .nav-link {
          text-decoration: none;
          color: inherit;
          transition: opacity 0.2s;
        }
        .nav-link:hover {
          opacity: 0.7;
        }
        .nav-dir {
          display: block;
          font-size: 0.8rem;
          color: var(--accent);
          margin-bottom: 4px;
        }
        .nav-title {
          font-size: 1rem;
          font-weight: 600;
        }
        .nav-next {
          text-align: right;
        }

        /* ── CTA ── */
        .detail-cta {
          padding: 80px 0;
          text-align: center;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
        }
        .detail-cta h2 {
          font-size: clamp(1.5rem, 3vw, 2.2rem);
          margin-bottom: 12px;
        }
        .detail-cta p {
          color: #94a3b8;
          margin-bottom: 32px;
          max-width: 480px;
          margin-left: auto;
          margin-right: auto;
        }
        .cta-buttons {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .feladat-layout {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .detail-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .benefits-grid {
            grid-template-columns: 1fr;
          }
          .nav-row {
            flex-direction: column;
            gap: 20px;
          }
          .nav-next {
            text-align: left;
          }
        }
      `}</style>
    </>
  );
}
