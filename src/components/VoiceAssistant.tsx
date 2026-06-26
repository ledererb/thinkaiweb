"use client";

export default function VoiceAssistant() {
  return (
    <section className="va-section" id="ugyfelszolgalat">
      <div className="container">
        <div className="va-layout">
          {/* Left: text content */}
          <div className="va-text">
            <span className="va-badge">ÚJ</span>
            <h2 className="va-heading">Ügyfélszolgálati megoldások</h2>
            <p className="va-desc">
              AI-alapú hangasszisztensünk valós időben kezeli az
              ügyfélhívásokat — 24/7, emberi beavatkozás nélkül. Próbáld ki
              demo asszisztensünket élőben!
            </p>
            <ul className="va-features">
              <li>
                <span className="va-check">✓</span>
                Természetes magyar nyelvű beszédfelismerés
              </li>
              <li>
                <span className="va-check">✓</span>
                Időpontfoglalás és ügyfélszolgálat automatizálás
              </li>
              <li>
                <span className="va-check">✓</span>
                24/7 elérhetőség, emberi beavatkozás nélkül
              </li>
              <li>
                <span className="va-check">✓</span>
                Egyedi hangidentitás és személyre szabott válaszok
              </li>
            </ul>
          </div>

          {/* Right: voice widget link */}
          <div className="va-widget-wrap">
            <div className="va-widget">
              {/* FAB Link */}
              <a
                className="va-fab"
                href="https://agentdemo.thinkai.hu/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Hangasszisztens megnyitása"
              >
                <span className="fab-icon">🎙️</span>
              </a>
              <span className="va-fab-caption">Próbáld ki most!</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        /* ── Section ── */
        .va-section {
          padding: 100px 0;
          background: var(--background-dark);
        }

        .va-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        /* ── Text side ── */
        .va-badge {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          padding: 5px 14px;
          border-radius: 50px;
          background: linear-gradient(135deg, rgba(180, 126, 255, 0.2), rgba(126, 255, 245, 0.2));
          color: #7efff5;
          border: 1px solid rgba(126, 255, 245, 0.2);
          margin-bottom: 20px;
        }
        .va-heading {
          font-size: clamp(1.8rem, 3.5vw, 2.8rem);
          line-height: 1.15;
          margin-bottom: 18px;
          color: #fff;
        }
        .va-desc {
          color: #94a3b8;
          font-size: 1.05rem;
          line-height: 1.75;
          margin-bottom: 28px;
          max-width: 500px;
        }
        .va-features {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .va-features li {
          display: flex;
          gap: 10px;
          align-items: baseline;
          color: #cbd5e1;
          font-size: 0.95rem;
          line-height: 1.5;
        }
        .va-check {
          color: #10b981;
          font-weight: 700;
          font-size: 1rem;
          flex-shrink: 0;
        }

        /* ── Widget side ── */
        .va-widget-wrap {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .va-widget {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
        }

        /* ── FAB ── */
        .va-fab {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          border: none;
          cursor: pointer;
          background: linear-gradient(135deg, #b47eff, #7efff5);
          box-shadow: 0 12px 48px rgba(126, 255, 245, 0.35),
            0 4px 16px rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 42px;
          transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1),
            box-shadow 0.2s;
          position: relative;
          overflow: hidden;
          text-decoration: none;
        }
        .va-fab:hover {
          transform: scale(1.08);
          box-shadow: 0 18px 56px rgba(126, 255, 245, 0.5);
        }
        .va-fab .fab-icon {
          transition: transform 0.25s, opacity 0.2s;
        }
        .va-fab-caption {
          margin-top: 14px;
          font-size: 1.25rem;
          font-weight: 300;
          color: #fff;
          letter-spacing: 0.02em;
          text-align: center;
          text-transform: uppercase;
          border: 2px solid #fff;
          border-radius: 50px;
          padding: 0.6rem 1.8rem;
        }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .va-layout {
            grid-template-columns: 1fr;
            gap: 40px;
            text-align: center;
          }
          .va-desc {
            margin-left: auto;
            margin-right: auto;
          }
          .va-features {
            align-items: center;
          }
        }
      `}</style>
    </section>
  );
}
