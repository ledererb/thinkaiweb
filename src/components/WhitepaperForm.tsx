export default function WhitepaperForm() {
    return (
        <div className="whitepaper-card">
            <div className="card-header">
                <h3>Ingyenes Pályázati Kisokos</h3>
                <p>Iratkozzon fel és töltse le részletes összefoglalónkat az aktuális lehetőségekről.</p>
            </div>

            <form className="wp-form">
                <div className="form-group">
                    <label>Név</label>
                    <input type="text" required placeholder="Teljes név" />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" required placeholder="Email cím" />
                </div>
                <div className="form-group">
                    <label>Cégnév</label>
                    <input type="text" required placeholder="Vállalkozás neve" />
                </div>
                <button type="submit" className="btn btn-block">
                    Letöltés (PDF)
                </button>
            </form>

            <style jsx>{`
        .whitepaper-card {
          background: linear-gradient(135deg, rgba(1, 22, 39, 0.8), rgba(26, 188, 156, 0.05));
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          overflow: hidden;
        }
        .card-header {
          background: rgba(255, 255, 255, 0.03);
          padding: 2rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
        h3 {
          margin-bottom: 0.5rem;
          color: #fff;
        }
        p {
          margin: 0;
          font-size: 0.9rem;
          opacity: 0.8;
        }
        .wp-form {
          padding: 2rem;
        }
        .form-group {
          margin-bottom: 1.5rem;
        }
        label {
          display: block;
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
          opacity: 0.7;
        }
        input {
          width: 100%;
          padding: 0.8rem;
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          color: #fff;
        }
        input:focus {
          outline: none;
          border-color: var(--accent);
        }
        .btn-block {
          width: 100%;
          margin-top: 1rem;
        }
      `}</style>
        </div>
    );
}
