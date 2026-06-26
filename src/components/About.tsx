export default function About() {
  return (
    <section className="section section-dark about-section" id="rolunk">
      <div className="container">
        <div className="grid">
          <div className="content">
            <h2>Kik Vagyunk?</h2>
            <p>
              Csapatunk fejlesztőkből, AI-szakértőkből és ügynökségi szakemberekből állt össze,
              felismerve, hogy a mesterséges intelligencia széleskörű elterjedése alapjaiban fogja
              megváltoztatni, ahogy a munkáról és a folyamatokról gondolkodunk.
            </p>

            <h2 className="mt-large">Mit csinálunk?</h2>
            <p>
              Azonosítjuk vállalata azon folyamatait, amelyek időrablóak, nem hatékonyak,
              vagy egyszerűen csak fölösleges emberi erőforrást pazarolni rájuk.
              Pont ott segítünk, ahol a legnagyobb szükség van rá, hogy vállalata
              hatékonyabb és versenyképesebb lehessen.
            </p>
          </div>
          <div className="image-container">
            {/* Placeholder for About Image */}
            <div className="placeholder-image">
              <span>Think_Ai Team</span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .about-section {
          position: relative;
        }
        .grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        @media (max-width: 768px) {
          .grid {
            grid-template-columns: 1fr;
          }
        }
        .mt-large {
          margin-top: 3rem;
        }
        p {
          opacity: 0.8;
          font-size: 1.1rem;
          margin-bottom: 2rem;
        }
        .placeholder-image {
          width: 100%;
          height: 400px;
          background: linear-gradient(135deg, rgba(1, 22, 39, 0.5), rgba(26, 188, 156, 0.2));
          border: 1px solid rgba(26, 188, 156, 0.3);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent);
          font-family: var(--heading-font);
          letter-spacing: 2px;
        }
      `}</style>
    </section>
  );
}
