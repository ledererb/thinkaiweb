"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useLang } from '@/i18n/LanguageContext';
import dict, { t } from '@/i18n/dictionaries';

/* Map HU paths ↔ EN paths for the language switcher */
const routeMap: Record<string, string> = {
  '/': '/en',
  '/en': '/',
  '/modszerunk': '/en/our-method',
  '/en/our-method': '/modszerunk',
  '/sikertortenetek': '/en/case-studies',
  '/en/case-studies': '/sikertortenetek',
  '/palyazat': '/en/grant',
  '/en/grant': '/palyazat',
  '/ai-ugyfelszolgalat': '/en/ai-customer-service',
  '/en/ai-customer-service': '/ai-ugyfelszolgalat',
  '/adatvedelem': '/en/privacy',
  '/en/privacy': '/adatvedelem',
};

function getOtherLangPath(pathname: string): string {
  // Direct match
  if (routeMap[pathname]) return routeMap[pathname];
  // Case study detail page
  if (pathname.startsWith('/sikertortenetek/'))
    return pathname.replace('/sikertortenetek/', '/en/case-studies/');
  if (pathname.startsWith('/en/case-studies/'))
    return pathname.replace('/en/case-studies/', '/sikertortenetek/');
  // Fallback
  if (pathname.startsWith('/en')) return '/';
  return '/en';
}

export default function Navigation() {
  const lang = useLang();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const n = dict.nav;
  const r = dict.routes;

  const otherLang = lang === 'hu' ? 'en' : 'hu';
  const switchPath = getOtherLangPath(pathname);

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link href={t(r.home, lang)} className="logo">
          <img src="/logo.webp" alt="ThinkAI Logo" style={{ height: '28px', width: 'auto', maxWidth: '120px' }} />
        </Link>

        <button
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <Link href={t(r.about, lang)} onClick={() => setMenuOpen(false)}>{t(n.about, lang)}</Link>
          <Link href={t(r.method, lang)} onClick={() => setMenuOpen(false)}>{t(n.method, lang)}</Link>
          <Link href={t(r.caseStudies, lang)} onClick={() => setMenuOpen(false)}>{t(n.caseStudies, lang)}</Link>
          <Link href={t(r.grant, lang)} onClick={() => setMenuOpen(false)}>{t(n.grant, lang)}</Link>
          <Link href={t(r.contact, lang)} onClick={() => setMenuOpen(false)}>{t(n.contact, lang)}</Link>
          <Link href={t(r.quote, lang)} className="btn btn-outline" onClick={() => setMenuOpen(false)}>{t(n.cta, lang)}</Link>

          <Link href={switchPath} className="lang-switch" onClick={() => setMenuOpen(false)}>
            {otherLang.toUpperCase()}
          </Link>
        </div>
      </div>
      <style jsx global>{`
        .navbar {
          position: sticky;
          top: 0;
          background: rgba(1, 22, 39, 0.95);
          backdrop-filter: blur(10px);
          padding: 1rem 0;
          z-index: 1000;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }
        .logo img {
          height: 28px;
          width: auto;
          max-width: 120px;
          object-fit: contain;
        }
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 5px;
          z-index: 1001;
        }
        .hamburger span {
          display: block;
          width: 28px;
          height: 2px;
          background: #fff;
          transition: all 0.3s ease;
          border-radius: 2px;
        }
        .hamburger.active span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }
        .hamburger.active span:nth-child(2) {
          opacity: 0;
        }
        .hamburger.active span:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }
        .nav-links {
          display: flex;
          gap: 1.8rem;
          align-items: center;
        }
        .nav-links a {
          color: #ffffff;
          font-size: 0.85rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          transition: color 0.3s;
        }
        .nav-links a:hover {
          color: var(--accent);
        }
        .nav-links .btn {
          color: #fff;
        }
        .nav-links .btn:hover {
          color: #fff;
        }
        .lang-switch {
          padding: 4px 12px !important;
          border: 1px solid rgba(255,255,255,0.35) !important;
          border-radius: 6px !important;
          font-size: 0.75rem !important;
          letter-spacing: 1px !important;
          font-weight: 700 !important;
          transition: all 0.25s !important;
        }
        .lang-switch:hover {
          background: rgba(255,255,255,0.1) !important;
          border-color: var(--accent) !important;
          color: var(--accent) !important;
        }
        @media (max-width: 768px) {
          .hamburger {
            display: flex;
          }
          .nav-links {
            position: fixed;
            top: 0;
            right: -100%;
            width: 80%;
            max-width: 320px;
            height: 100vh;
            background: #011627;
            flex-direction: column;
            justify-content: center;
            gap: 2rem;
            padding: 2rem;
            transition: right 0.3s ease;
            border-left: 1px solid rgba(255, 255, 255, 0.1);
          }
          .nav-links.open {
            right: 0;
          }
          .nav-links a {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </nav>
  );
}
