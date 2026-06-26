"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function CookiePolicyPage() {
    return (
        <div className="main-wrapper">
            <Navigation />
            <main className="page-content">
                <section className="section-page">
                    <div className="container legal-content">
                        <h1>Cookie (süti) szabályzat</h1>
                        <p className="last-updated">Utolsó frissítés: 2025. március 1.</p>

                        <h2>1. Mi az a cookie (süti)?</h2>
                        <p>
                            A cookie-k (sütik) kis szöveges fájlok, amelyeket a weboldal az Ön böngészőjében
                            tárol el a weboldal használata során. Segítségükkel a weboldal képes emlékezni
                            az Ön beállításaira és tevékenységeire.
                        </p>

                        <h2>2. Milyen sütiket használunk?</h2>

                        <h3>Feltétlenül szükséges sütik</h3>
                        <p>
                            Ezek a sütik a weboldal működéséhez elengedhetetlenek. Ide tartozik például
                            a cookie-hozzájárulás állapotának tárolása. Ezek nélkül a weboldal egyes
                            funkciói nem működnének.
                        </p>

                        <h3>Analitikai sütik</h3>
                        <p>
                            Ezek a sütik segítenek megérteni, hogyan használják látogatóink a weboldalt.
                            Az összegyűjtött adatok névtelenek és kizárólag statisztikai célokra használjuk.
                            Ide tartozik például a Google Analytics.
                        </p>

                        <h3>Marketing sütik</h3>
                        <p>
                            Ezek a sütik lehetővé teszik, hogy releváns hirdetéseket jelenítsünk meg
                            Önnek más weboldalakon. Harmadik fél szolgáltatók is elhelyezhetnek ilyen sütiket.
                        </p>

                        <h2>3. Az Ön választási lehetőségei</h2>
                        <p>
                            A weboldalunk első látogatásakor megjelenő cookie-hozzájárulási sávon
                            eldöntheti, hogy mely sütiket fogadja el. Döntését bármikor módosíthatja
                            a böngészője beállításaiban.
                        </p>
                        <p>
                            A legtöbb böngészőben a sütik kezelésére az alábbi lehetőségek állnak rendelkezésre:
                        </p>
                        <ul>
                            <li>Az összes süti elfogadása</li>
                            <li>Értesítés, ha egy weboldal sütit kíván elhelyezni</li>
                            <li>Az összes süti elutasítása</li>
                            <li>A már tárolt sütik törlése</li>
                        </ul>

                        <h2>4. A sütik élettartama</h2>
                        <p>
                            <strong>Munkamenet-sütik:</strong> A böngésző bezárásakor automatikusan törlődnek.
                        </p>
                        <p>
                            <strong>Állandó sütik:</strong> A beállított lejárati időig maradnak a böngészőben,
                            hacsak Ön nem törli őket korábban.
                        </p>

                        <h2>5. Kapcsolat</h2>
                        <p>
                            Ha kérdése van a cookie-szabályzatunkkal kapcsolatban, keresse fel a{" "}
                            <a href="/#kapcsolat">kapcsolat</a> oldalt vagy írjon a{" "}
                            <a href="mailto:info@thinkai.hu">info@thinkai.hu</a> címre.
                        </p>
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
        .legal-content {
          max-width: 750px;
        }
        h1 {
          font-size: clamp(2rem, 4vw, 2.8rem);
          color: #fff;
          margin-bottom: 0.5rem;
        }
        .last-updated {
          color: #94a3b8;
          font-size: 0.9rem;
          margin-bottom: 3rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        h2 {
          color: #fff;
          font-size: 1.3rem;
          margin-top: 2.5rem;
          margin-bottom: 0.8rem;
        }
        h3 {
          color: var(--accent);
          font-size: 1.05rem;
          margin-top: 1.5rem;
          margin-bottom: 0.5rem;
        }
        p {
          color: #94a3b8;
          font-size: 0.95rem;
          line-height: 1.8;
          margin-bottom: 1rem;
        }
        ul {
          padding-left: 1.5rem;
          margin-bottom: 1rem;
        }
        li {
          color: #94a3b8;
          font-size: 0.95rem;
          line-height: 1.8;
          margin-bottom: 0.3rem;
        }
        a {
          color: var(--accent);
          transition: opacity 0.2s;
        }
        a:hover {
          opacity: 0.8;
        }
      `}</style>
        </div>
    );
}
