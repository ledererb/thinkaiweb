"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import dict, { t } from "@/i18n/dictionaries";
import type { Lang } from "@/i18n/LanguageContext";

export default function CookieConsent() {
  const pathname = usePathname();
  const lang: Lang = pathname.startsWith('/en') ? 'en' : 'hu';
  const c = dict.cookie;
  const r = dict.routes;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <>
      <div className="cookie-backdrop" />
      <div className="cookie-banner">
        <div className="cookie-content">
          <div className="cookie-text">
            <p>
              {t(c.text, lang)}{" "}
              <Link href={t(r.privacy, lang)} className="cookie-link">
                {t(c.privacyLink, lang)}
              </Link>
            </p>
          </div>
          <div className="cookie-actions">
            <button className="cookie-btn cookie-btn-accept" onClick={accept}>
              {t(c.accept, lang)}
            </button>
            <button className="cookie-btn cookie-btn-decline" onClick={decline}>
              {t(c.decline, lang)}
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .cookie-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
          z-index: 9998;
          animation: fadeIn 0.4s ease;
        }
        .cookie-banner {
          position: fixed;
          bottom: 24px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 9999;
          width: calc(100% - 48px);
          max-width: 720px;
          background: #0D1520;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 24px 28px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(71, 215, 209, 0.08);
          animation: slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .cookie-content {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .cookie-text {
          flex: 1;
        }
        .cookie-text p {
          color: #94A3B8;
          font-size: 0.9rem;
          line-height: 1.6;
          margin: 0;
        }
        .cookie-link {
          color: var(--accent, #47D7D1) !important;
          text-decoration: none;
          font-weight: 600;
          transition: opacity 0.2s;
        }
        .cookie-link:hover {
          opacity: 0.8;
        }
        .cookie-actions {
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex-shrink: 0;
        }
        .cookie-btn {
          padding: 10px 24px;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.25s ease;
          border: none;
          white-space: nowrap;
          font-family: inherit;
          letter-spacing: 0.5px;
        }
        .cookie-btn-accept {
          background: linear-gradient(135deg, var(--accent, #47D7D1), var(--accent-blue, #3B82F6));
          color: #0A1118;
        }
        .cookie-btn-accept:hover {
          filter: brightness(1.1);
          box-shadow: 0 4px 16px rgba(71, 215, 209, 0.3);
        }
        .cookie-btn-decline {
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #94A3B8;
        }
        .cookie-btn-decline:hover {
          border-color: rgba(255, 255, 255, 0.3);
          color: #fff;
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @media (max-width: 640px) {
          .cookie-banner {
            bottom: 12px;
            width: calc(100% - 24px);
            padding: 20px;
          }
          .cookie-content {
            flex-direction: column;
            text-align: center;
          }
          .cookie-actions {
            flex-direction: row;
            width: 100%;
          }
          .cookie-btn {
            flex: 1;
          }
        }
      `}</style>
    </>
  );
}
