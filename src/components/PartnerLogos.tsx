"use client";

import Image from "next/image";
import { useLang } from "@/i18n/LanguageContext";
import dict, { t } from "@/i18n/dictionaries";

const logos: { src: string; alt: string; w: number; h: number }[] = [
  { src: "/logos/develor.webp", alt: "Develor", w: 170, h: 128 },
  { src: "/logos/clearservice.webp", alt: "ClearService", w: 170, h: 81 },
  { src: "/logos/duna-auto.webp", alt: "Duna Autó", w: 100, h: 100 },
  { src: "/logos/wwf.svg", alt: "WWF Hungary", w: 120, h: 80 },
  { src: "/logos/agrolynx.webp", alt: "AgroLYNX", w: 180, h: 60 },
  { src: "/logos/taxology.svg", alt: "Taxology", w: 160, h: 50 },
  { src: "/logos/metrical.webp", alt: "Metrical", w: 160, h: 50 },
  { src: "/logos/magination.webp", alt: "Magination", w: 160, h: 50 },
  { src: "/logos/piktorfestek.webp", alt: "Piktorfesték", w: 140, h: 50 },
  { src: "/logos/diego.webp", alt: "Diego", w: 140, h: 140 },
  { src: "/logos/homan-transport.webp", alt: "Homan Transport", w: 160, h: 80 },
  { src: "/logos/hungarorisk.webp", alt: "HungaroRisk", w: 180, h: 80 },
];

export default function PartnerLogos() {
  const lang = useLang();
  return (
    <section className="partners">
      <div className="container">
        <p className="partners-label">{t(dict.partners.title, lang)}</p>
        <div className="logo-strip">
          {logos.map((logo) => (
            <div key={logo.alt} className="logo-item">
              {logo.src.endsWith(".svg") ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.w}
                  height={logo.h}
                  style={{ objectFit: "contain", maxHeight: 50, width: "auto" }}
                  loading="lazy"
                />
              ) : (
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.w}
                  height={logo.h}
                  style={{ objectFit: "contain", maxHeight: 50, width: "auto" }}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .partners {
          padding: 60px 0;
          background: #0c1222;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }
        .partners-label {
          text-align: center;
          color: #64748b;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 3px;
          margin-bottom: 32px;
          font-weight: 500;
        }
        .logo-strip {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 48px;
          flex-wrap: wrap;
        }
        .logo-item {
          opacity: 0.55;
          filter: brightness(0) invert(1);
          transition: opacity 0.3s;
          display: flex;
          align-items: center;
        }
        .logo-item:hover {
          opacity: 0.9;
        }
        @media (max-width: 700px) {
          .logo-strip {
            gap: 32px;
          }
        }
      `}</style>
    </section>
  );
}
