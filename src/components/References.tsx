export default function References() {
  const partners = Array(8).fill("Partner Logo");

  return (
    <section className="section section-alt">
      <div className="container">
        <h2 className="section-title">Akikkel már együtt dolgozunk</h2>
        <div className="logos-grid">
          {partners.map((_, i) => (
            <div key={i} className="logo-placeholder">
              <span>LOGO {i + 1}</span>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .section-title {
          text-align: center;
          margin-bottom: 3rem;
          color: #333;
          font-weight: 300;
          text-transform: uppercase;
        }
        .logos-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 2rem;
        }
        .logo-placeholder {
          height: 80px;
          background: #fff;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          color: #ccc;
          border: 1px solid #eee;
          transition: all 0.3s ease;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }
        .logo-placeholder:hover {
          transform: scale(1.05);
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          border-color: var(--accent);
          color: var(--accent);
        }
      `}</style>
    </section>
  );
}
