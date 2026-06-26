"use client";

import Link from "next/link";
import AnimatedHeroBg from "./AnimatedHeroBg";
import { useLang } from "@/i18n/LanguageContext";
import dict, { t } from "@/i18n/dictionaries";

export default function Footer() {
  const lang = useLang();
  const f = dict.footer;
  const n = dict.nav;
  const r = dict.routes;

  return (
    <footer className="footer">
      <AnimatedHeroBg />
      <div className="container footer-content">
        <div className="footer-brand">
          <div className="logo">
            <img src="/logo.webp" alt="ThinkAI Logo" style={{ height: '30px', width: 'auto', maxWidth: '120px' }} />
          </div>
          <p style={{ color: 'rgba(255,255,255,0.5)' }}>&copy; {new Date().getFullYear()} {t(f.copyright, lang)}</p>
        </div>

        <div className="footer-links">
          <h4>{t(f.siteMap, lang)}</h4>
          <Link href={t(r.about, lang)}>{t(n.about, lang)}</Link>
          <Link href={t(r.method, lang)}>{t(n.method, lang)}</Link>
          <Link href={t(r.caseStudies, lang)}>{t(n.caseStudies, lang)}</Link>
          <Link href={t(r.grant, lang)}>{t(n.grant, lang)}</Link>
          <Link href={t(r.contact, lang)}>{t(n.contact, lang)}</Link>
        </div>

        <div className="footer-legal">
          <h4>{t(f.legal, lang)}</h4>
          <Link href={t(r.privacy, lang)}>{t(f.privacy, lang)}</Link>
          <Link href={t(r.cookiePolicy, lang)}>{t(f.cookiePolicy, lang)}</Link>
          <Link href={t(r.sitemapPage, lang)}>{t(f.sitemapPage, lang)}</Link>
        </div>
      </div>
      <style jsx global>{`
        .footer {
          background: #010e18;
          padding: 4rem 0 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          margin-top: auto;
          position: relative;
          overflow: hidden;
        }
        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 4rem;
          position: relative;
          z-index: 1;
        }
        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            text-align: center;
          }
        }
        .logo {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
        }
        .logo img {
          height: 35px;
          width: auto;
        }
        .footer-brand p {
          opacity: 0.5;
          font-size: 0.9rem;
        }
        h4 {
          margin-bottom: 1.5rem;
          color: #fff;
          opacity: 0.9;
        }
        .footer-links, .footer-legal {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }
        .footer-links a, .footer-legal a {
          color: rgba(255,255,255,0.7);
          transition: opacity 0.3s, color 0.3s;
        }
        .footer-links a:hover, .footer-legal a:hover {
          opacity: 1;
          color: #47D7D1;
        }
      `}</style>
    </footer>
  );
}
