"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { caseStudies } from "@/data/caseStudies";

const mainPages = [
    { label: "Főoldal", href: "/" },
    { label: "Módszerünk", href: "/modszerunk" },
    { label: "Sikertörténetek", href: "/sikertortenetek" },
    { label: "Pályázat", href: "/palyazat" },
];

const services = [
    { label: "AI Ügyfélszolgálat", href: "/ai-ugyfelszolgalat" },
];

const legalPages = [
    { label: "Adatvédelem", href: "/adatvedelem" },
    { label: "Cookie szabályzat", href: "/cookie-szabalyzat" },
];

export default function SitemapPage() {
    return (
        <div className="main-wrapper">
            <Navigation />
            <main className="page-content">
                <section className="section-page">
                    <div className="container">
                        <h1>Oldaltérkép</h1>
                        <p className="lead">A ThinkAI weboldal teljes struktúrája</p>

                        <div className="sitemap-grid">
                            <div className="sitemap-section">
                                <h2>Főoldalak</h2>
                                <ul>
                                    {mainPages.map((link, j) => (
                                        <li key={j}><Link href={link.href}>{link.label}</Link></li>
                                    ))}
                                </ul>
                            </div>

                            <div className="sitemap-section">
                                <h2>Szolgáltatások</h2>
                                <ul>
                                    {services.map((link, j) => (
                                        <li key={j}><Link href={link.href}>{link.label}</Link></li>
                                    ))}
                                </ul>
                            </div>

                            <div className="sitemap-section full-width">
                                <h2>Sikertörténetek</h2>
                                <ul className="case-studies-list">
                                    {caseStudies.map((cs, j) => (
                                        <li key={j}><Link href={`/sikertortenetek/${cs.slug}`}>{cs.title}</Link></li>
                                    ))}
                                </ul>
                            </div>

                            <div className="sitemap-section">
                                <h2>Jogi</h2>
                                <ul>
                                    {legalPages.map((link, j) => (
                                        <li key={j}><Link href={link.href}>{link.label}</Link></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />

            <style jsx>{`
        .section-page {
          padding: 9rem 0 5rem;
          background: var(--background-dark);
          min-height: 80vh;
        }
        h1 {
          font-size: clamp(2rem, 4vw, 2.8rem);
          color: #fff;
          margin-bottom: 0.5rem;
        }
        .lead {
          color: #94a3b8;
          font-size: 1.1rem;
          margin-bottom: 3rem;
        }
        .sitemap-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 2.5rem;
        }
        .sitemap-section.full-width {
          grid-column: 1 / -1;
        }
        .case-studies-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 0.2rem 2rem;
        }
        .sitemap-section h2 {
          color: var(--accent);
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 1rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        li {
          margin-bottom: 0.6rem;
        }
        li :global(a) {
          color: rgba(255,255,255,0.7);
          font-size: 0.95rem;
          transition: color 0.2s;
        }
        li :global(a:hover) {
          color: var(--accent);
        }
      `}</style>
        </div>
    );
}
