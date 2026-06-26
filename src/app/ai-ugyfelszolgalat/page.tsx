"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedHeroBg from "@/components/AnimatedHeroBg";
import AnimatedLightBg from "@/components/AnimatedLightBg";
import VoiceAssistant from "@/components/VoiceAssistant";

export default function AiUgyfelszolgalat() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="hero-section">
          <AnimatedHeroBg />
          <div className="container hero-inner">
            <div className="hero-text">
              <span className="hero-tag">AI-ügyfélszolgálat</span>
              <h1>
                Ügyfélszolgálat, ami <span className="accent">soha nem alszik</span>
              </h1>
              <p className="hero-lead">
                Intelligens virtuális asszisztensek, amelyek emberi minőségben kezelik
                az ügyfelek hívásait, e-mailjeit és chatüzeneteit — 0-24, hétvégén is.
              </p>
              <div className="hero-cta">
                <a href="/#kapcsolat" className="btn btn-primary btn-large">
                  Ingyenes konzultáció
                </a>
              </div>
            </div>
            <div className="hero-image-wrapper">
              <img
                src="/images/ai-dashboard.webp"
                alt="AI ügyfélszolgálati dashboard"
                className="hero-dashboard-img"
              />
            </div>
          </div>
        </section>

        {/* Pain points */}
        <section className="pain-section">
          <div className="container">
            <h2>Ismerős helyzetek?</h2>
            <div className="pain-grid">
              <div className="pain-card">
                <h3>Elveszett hívások</h3>
                <p>
                  Munkaidő után és hétvégén senki nem veszi fel a telefont — az ügyfelek
                  a konkurenciához fordulnak.
                </p>
              </div>
              <div className="pain-card">
                <h3>Túlterhelt csapat</h3>
                <p>
                  A munkatársak idejük nagy részét ismétlődő kérdések megválaszolásával
                  töltik a helyett, hogy értékteremtő feladatokkal foglalkoznának.
                </p>
              </div>
              <div className="pain-card">
                <h3>Lassú válaszidő</h3>
                <p>
                  A várakoztatott ügyfelek elégedetlenné válnak, és a panaszok
                  halmozódnak — pedig a legtöbb kérdésre azonnali válasz létezik.
                </p>
              </div>
              <div className="pain-card">
                <h3>Skálázhatóság hiánya</h3>
                <p>
                  Egy új munkatárs felvétele hónapokig tart és többe kerül, mint egy
                  AI-rendszer teljes bevezetése.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="solution-section">
          <AnimatedLightBg />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <h2>Amit az AI-ügyfélszolgálatunk nyújt</h2>
            <div className="solution-grid">
              <div className="solution-card">
                <div className="solution-number">01</div>
                <h3>Azonnali híváskezelés</h3>
                <p>
                  Az AI valós időben veszi fel és kezeli a beérkező hívásokat, természetes
                  hangon, magyar nyelven. Az ügyfél nem észleli, hogy géppel beszél.
                </p>
              </div>
              <div className="solution-card">
                <div className="solution-number">02</div>
                <h3>Többcsatornás jelenlét</h3>
                <p>
                  Telefon, e-mail, webchat, WhatsApp — egyetlen rendszer kezeli az összes
                  csatornát egységes tudásbázisból.
                </p>
              </div>
              <div className="solution-card">
                <div className="solution-number">03</div>
                <h3>Tanulékony rendszer</h3>
                <p>
                  Az AI folyamatosan tanul a korábbi interakciókból, egyre pontosabb
                  válaszokat adva. A tudásbázis bármikor bővíthető.
                </p>
              </div>
              <div className="solution-card">
                <div className="solution-number">04</div>
                <h3>Emberi eszkáláció</h3>
                <p>
                  Komplex esetekben az AI intelligensen továbbítja a hívást élő operátornak,
                  teljes kontextussal — az ügyfélnek nem kell újra elmagyaráznia a problémát.
                </p>
              </div>
              <div className="solution-card">
                <div className="solution-number">05</div>
                <h3>Analitika és riportok</h3>
                <p>
                  Minden interakció naplózásra kerül. Valós idejű dashboardon követheti
                  a hívásmennyiséget, elégedettséget és a leggyakoribb kérdéseket.
                </p>
              </div>
              <div className="solution-card">
                <div className="solution-number">06</div>
                <h3>Gyors bevezetés</h3>
                <p>
                  A rendszer akár 2 hét alatt élesíthető. Nincs hosszadalmas IT-projekt —
                  a meglévő telefonszámhoz és rendszerekhez csatlakoztatjuk.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Voice Assistant Demo */}
        <VoiceAssistant />

        {/* Stats */}
        <section className="stats-section">
          <div className="container">
            <div className="stats-grid">
              <div className="stat">
                <div className="stat-number">85%</div>
                <div className="stat-label">Hívások kezelése emberi beavatkozás nélkül</div>
              </div>
              <div className="stat">
                <div className="stat-number">&lt;3s</div>
                <div className="stat-label">Átlagos válaszidő</div>
              </div>
              <div className="stat">
                <div className="stat-number">0-24</div>
                <div className="stat-label">Elérhetőség, hétvégén is</div>
              </div>
              <div className="stat">
                <div className="stat-number">70%</div>
                <div className="stat-label">Költségcsökkenés az élő operátorhoz képest</div>
              </div>
            </div>
          </div>
        </section>

        {/* Use cases */}
        <section className="usecase-section">
          <AnimatedLightBg />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <h2>Kinek ajánljuk?</h2>
            <div className="usecase-grid">
              <div className="usecase-card">
                <h3>Egészségügyi szolgáltatók</h3>
                <p>Időpontfoglalás, recept-ismétlés, betegirányítás — automatizáltan.</p>
              </div>
              <div className="usecase-card">
                <h3>E-kereskedelmi vállalkozások</h3>
                <p>Rendeléskövetés, csereigények, termékajánlás — másodpercek alatt.</p>
              </div>
              <div className="usecase-card">
                <h3>Pénzügyi és biztosítási szektor</h3>
                <p>Számlaegyenleg, kárbejelentés, szerződésmódosítás — biztonságosan.</p>
              </div>
              <div className="usecase-card">
                <h3>Szolgáltató cégek</h3>
                <p>Hibabejelentés, technikus kiküldés, állapotkövetés — non-stop.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <div className="container">
            <h2>Próbáld ki saját ügyfélszolgálatodon</h2>
            <p>
              Kérj ingyenes konzultációt, és 30 percben megmutatjuk, hogyan
              automatizálhatod ügyfélszolgálatodat AI-val.
            </p>
            <div className="cta-buttons">
              <a href="/#kapcsolat" className="btn btn-primary btn-large">
                Ingyenes konzultáció
              </a>
              <a href="/sikertortenetek" className="btn btn-outline btn-large">
                Referenciák
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style jsx>{`
        main {
          background: var(--background-dark);
          color: #fff;
        }

        /* Hero */
        .hero-section {
          padding: 140px 0 80px;
          position: relative;
          overflow: hidden;
        }
        .hero-inner {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 3rem;
        }
        .hero-text {
          text-align: left;
        }
        .hero-tag {
          display: inline-block;
          padding: 8px 24px;
          border: 1px solid var(--accent);
          border-radius: 50px;
          color: var(--accent);
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 24px;
        }
        .hero-section h1 {
          font-size: clamp(2rem, 4vw, 3.2rem);
          line-height: 1.15;
          margin-bottom: 20px;
        }
        .accent {
          color: var(--accent);
        }
        .hero-lead {
          color: #cbd5e1;
          font-size: 1.1rem;
          max-width: 520px;
          margin: 0 0 32px;
          line-height: 1.7;
        }
        .hero-cta {
          display: flex;
        }

        /* Dashboard image */
        .hero-image-wrapper {
          perspective: 1200px;
          display: flex;
          justify-content: center;
        }
        .hero-dashboard-img {
          width: 100%;
          max-width: 520px;
          border-radius: 16px;
          box-shadow:
            0 30px 60px rgba(0, 0, 0, 0.5),
            0 0 100px rgba(71, 215, 209, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transform: perspective(1200px) rotateY(-8deg) rotateX(2deg);
          transition: transform 0.5s ease;
        }
        .hero-dashboard-img:hover {
          transform: perspective(1200px) rotateY(-2deg) rotateX(0deg) scale(1.02);
        }

        /* Pain points */
        .pain-section {
          padding: 80px 0;
          background: rgba(255,255,255,0.02);
        }
        .pain-section h2 {
          text-align: center;
          font-size: clamp(1.6rem, 3vw, 2.4rem);
          margin-bottom: 48px;
        }
        .pain-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          max-width: 900px;
          margin: 0 auto;
        }
        .pain-card {
          padding: 28px;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          background: rgba(255,255,255,0.03);
          border-left: 3px solid #ef4444;
        }
        .pain-card h3 {
          font-size: 1.1rem;
          margin-bottom: 8px;
          color: #fff;
        }
        .pain-card p {
          color: #94a3b8;
          font-size: 0.92rem;
          line-height: 1.65;
        }

        /* Solution — light */
        .solution-section {
          padding: 80px 0;
          background: #fff;
          position: relative;
          overflow: hidden;
        }
        .solution-section h2 {
          text-align: center;
          font-size: clamp(1.6rem, 3vw, 2.4rem);
          margin-bottom: 48px;
          color: var(--foreground-light);
        }
        .solution-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          max-width: 1100px;
          margin: 0 auto;
        }
        .solution-card {
          padding: 28px;
          border: 1px solid rgba(0,0,0,0.08);
          border-radius: 16px;
          background: rgba(0,0,0,0.02);
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .solution-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0,0,0,0.08);
        }
        .solution-number {
          color: var(--accent-dark, #0d9488);
          font-size: 0.85rem;
          font-weight: 700;
          font-family: "Montserrat", sans-serif;
          margin-bottom: 10px;
        }
        .solution-card h3 {
          font-size: 1.1rem;
          margin-bottom: 8px;
          color: var(--foreground-light);
        }
        .solution-card p {
          color: var(--text-muted-light);
          font-size: 0.9rem;
          line-height: 1.65;
        }

        /* Stats */
        .stats-section {
          padding: 60px 0;
          background: linear-gradient(135deg, rgba(71,215,209,0.06), rgba(59,130,246,0.06));
          border-top: 1px solid rgba(255,255,255,0.06);
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
          text-align: center;
          max-width: 1000px;
          margin: 0 auto;
        }
        .stat-number {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          color: var(--accent);
          margin-bottom: 8px;
        }
        .stat-label {
          color: #94a3b8;
          font-size: 0.9rem;
          line-height: 1.5;
        }

        /* Use cases — light */
        .usecase-section {
          padding: 80px 0;
          background: #fff;
          position: relative;
          overflow: hidden;
        }
        .usecase-section h2 {
          text-align: center;
          font-size: clamp(1.6rem, 3vw, 2.4rem);
          margin-bottom: 48px;
          color: var(--foreground-light);
        }
        .usecase-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          max-width: 900px;
          margin: 0 auto;
        }
        .usecase-card {
          padding: 28px;
          border: 1px solid rgba(0,0,0,0.08);
          border-radius: 16px;
          background: rgba(0,0,0,0.02);
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .usecase-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.06);
        }
        .usecase-card h3 {
          font-size: 1.05rem;
          margin-bottom: 8px;
          color: var(--accent-dark, #0d9488);
        }
        .usecase-card p {
          color: var(--text-muted-light);
          font-size: 0.9rem;
          line-height: 1.6;
        }

        /* CTA */
        .cta-section {
          padding: 80px 0;
          text-align: center;
          border-top: 1px solid rgba(255,255,255,0.06);
        }
        .cta-section h2 {
          font-size: clamp(1.6rem, 3vw, 2.4rem);
          margin-bottom: 12px;
        }
        .cta-section p {
          color: #94a3b8;
          margin-bottom: 32px;
          max-width: 520px;
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
          .hero-inner {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-text {
            text-align: center;
          }
          .hero-lead {
            margin: 0 auto 32px;
          }
          .hero-cta {
            justify-content: center;
          }
          .hero-dashboard-img {
            transform: none;
          }
          .pain-grid,
          .usecase-grid {
            grid-template-columns: 1fr;
          }
          .solution-grid {
            grid-template-columns: 1fr;
          }
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }
        }
      `}</style>
    </>
  );
}
