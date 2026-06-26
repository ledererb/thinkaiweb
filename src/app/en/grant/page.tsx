"use client";

import { LanguageProvider } from "@/i18n/LanguageContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedHeroBg from "@/components/AnimatedHeroBg";

export default function GrantPage() {
  return (
    <LanguageProvider lang="en">
      <div className="main-wrapper">
        <Navigation />

        <main className="page-content">
          {/* Hero — DARK */}
          <section className="hero-small">
            <AnimatedHeroBg />
            <div className="container hero-inner">
              <span className="hero-tag">DIMOP Plus Grant 2025</span>
              <h1>Up to HUF 200 million for AI development — with 45% non-refundable funding</h1>
              <p className="lead">
                With minimal self-financing, partially non-refundable support, and a 0% interest loan,
                you can modernize your business. MFB-backed grant with continuous evaluation —
                contract within 60 days of submission.
              </p>
              <a href="#grant-details" className="btn btn-large">Details →</a>
            </div>
          </section>

          {/* Two programs — WHITE */}
          <section className="section section-white" id="grant-details">
            <div className="container">
              <h2 className="section-heading">Two Available Grant Programs</h2>
              <p className="section-sub">
                Both programs are available nationwide with continuous evaluation.
                Choose based on your business size and needs.
              </p>

              <div className="programs-grid">
                <div className="program-card">
                  <div className="program-badge">Smaller Projects</div>
                  <h3>DIMOP Plus 1.2.3/A-24</h3>
                  <div className="program-amount">max. HUF 20M</div>
                  <p className="program-desc">
                    Supporting smaller-scale digitalization and AI development projects,
                    even for sole proprietors.
                  </p>
                  <a
                    href="https://www.palyazat.gov.hu/programok/szechenyi-terv-plusz/dimop-plusz/dimop-plusz-123a-24/dokumentumok"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="program-link"
                  >
                    Official Documents →
                  </a>
                </div>
                <div className="program-card featured">
                  <div className="program-badge best">Larger Projects</div>
                  <h3>DIMOP Plus 1.2.3/B-24</h3>
                  <div className="program-amount">max. HUF 200M</div>
                  <p className="program-desc">
                    For complex, multi-area AI automation projects
                    that transform entire business operations.
                  </p>
                  <a
                    href="https://www.palyazat.gov.hu/programok/szechenyi-terv-plusz/dimop-plusz/dimop-plusz-123b-24/dokumentumok"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="program-link"
                  >
                    Official Documents →
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Financing — DARK */}
          <section className="section section-dark">
            <div className="container">
              <h2 className="section-heading">Funding Structure</h2>
              <p className="section-sub">
                A unique program: minimal risk, maximum value creation.
                100% pre-financed — funds are disbursed immediately after signing the contract.
              </p>

              <div className="financing-grid">
                <div className="finance-card green-card">
                  <div className="finance-percent">45%</div>
                  <h3>Non-Refundable</h3>
                  <p>
                    Nearly half of the project is covered by government support.
                    This amount never has to be repaid — ever.
                  </p>
                </div>
                <div className="finance-card blue-card">
                  <div className="finance-percent">45%</div>
                  <h3>0% Interest Loan, 8 Years</h3>
                  <p>
                    Interest-subsidized loan with an 8-year term.
                    Monthly repayments start from year 3. Zero interest, zero hidden costs.
                  </p>
                </div>
                <div className="finance-card accent-card">
                  <div className="finance-percent">10%</div>
                  <h3>Self-Financing</h3>
                  <p>
                    Only 10% of own funds required.
                    This is the lowest entry threshold on the market.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Conditions — WHITE */}
          <section className="section section-white">
            <div className="container">
              <h2 className="section-heading">Conditions &amp; Key Information</h2>
              <div className="conditions-grid">
                <div className="condition-card">
                  <div className="condition-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  </div>
                  <h3>Nationwide Coverage</h3>
                  <p>Available across the entire country, no regional restrictions.</p>
                </div>
                <div className="condition-card">
                  <div className="condition-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="20" x2="12" y2="10" /><line x1="18" y1="20" x2="18" y2="4" /><line x1="6" y1="20" x2="6" y2="16" /></svg>
                  </div>
                  <h3>Revenue Cap</h3>
                  <p>The grant amount cannot exceed the revenue of the previous closed fiscal year.</p>
                </div>
                <div className="condition-card">
                  <div className="condition-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>
                  </div>
                  <h3>Operating Profit</h3>
                  <p>The grant cannot exceed 10x the operating profit of the previous closed fiscal year.</p>
                </div>
                <div className="condition-card">
                  <div className="condition-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                  </div>
                  <h3>Headcount</h3>
                  <p>Minimum 1 statistical employee required, though higher headcount is preferred in evaluation.</p>
                </div>
                <div className="condition-card">
                  <div className="condition-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                  </div>
                  <h3>Fast Evaluation</h3>
                  <p>MFB-backed grant with continuous evaluation — contract within 60 days of submission.</p>
                </div>
                <div className="condition-card">
                  <div className="condition-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="12" rx="2" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M6 16h.01" /></svg>
                  </div>
                  <h3>Pre-Financed</h3>
                  <p>100% pre-financed: funds are disbursed immediately after contract signing.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Deadline + CTA — DARK */}
          <section className="section section-dark">
            <div className="container">
              <div className="highlight-box deadline-box">
                <div>
                  <h3>Deadline: March 31, 2027</h3>
                  <p>
                    The grant is available until the budget is exhausted — don&apos;t wait too long.
                    Our experienced grant writer handles the entire process,
                    with a <strong>100% success rate</strong> on this grant type so far.
                  </p>
                </div>
              </div>

              <div className="cta-section">
                <h2>Ready for the Next Step?</h2>
                <p>
                  Request a free pre-qualification and find out how much you can gain from this grant.
                  We help you through the entire process from idea to implementation.
                </p>
                <div className="cta-buttons">
                  <a href="/en#contact" className="btn btn-large">Free Consultation</a>
                  <a href="/en#contact" className="btn btn-outline btn-large">Contact Us</a>
                </div>
              </div>
            </div>
          </section>

        </main>

        <Footer />

        <style jsx>{`
          .hero-small {
            padding: 9rem 0 5rem; position: relative; overflow: hidden; text-align: center;
            background: var(--background-dark);
          }
          .hero-tag {
            display: inline-block; background: rgba(18,187,188,0.1);
            border: 1px solid rgba(18,187,188,0.25); color: var(--accent);
            padding: 0.4rem 1.2rem; border-radius: 50px; font-size: 0.8rem;
            font-weight: 600; letter-spacing: 0.5px; text-transform: uppercase; margin-bottom: 1.5rem;
          }
          h1 {
            font-size: clamp(2rem,4.5vw,2.8rem); margin-bottom: 1.5rem; font-weight: 800;
            line-height: 1.15; max-width: 850px; margin-left: auto; margin-right: auto; color: #fff;
          }
          .hero-inner { position: relative; z-index: 1; }
          .lead { font-size: 1.1rem; color: #cbd5e1; max-width: 680px; margin: 0 auto 2.5rem; line-height: 1.8; }

          .section { padding: 5rem 0; }
          .section-dark { background: var(--background-dark); color: #fff; }
          .section-white { background: #fff; color: var(--foreground-light); }

          .section-heading { text-align: center; font-size: clamp(1.6rem,3.5vw,2.2rem); margin-bottom: 0.8rem; }
          .section-white .section-heading { color: var(--foreground-light); }
          .section-dark .section-heading { color: #fff; }

          .section-sub { text-align: center; max-width: 680px; margin: 0 auto 3.5rem; font-size: 1.05rem; line-height: 1.7; }
          .section-white .section-sub { color: var(--text-muted-light); }
          .section-dark .section-sub { color: #94a3b8; }

          /* Programs — white bg */
          .programs-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 1.5rem; max-width: 900px; margin: 0 auto; }
          .program-card {
            padding: 2.5rem 2rem; border-radius: 16px; text-align: center;
            transition: transform 0.3s ease, box-shadow 0.3s ease; position: relative;
            background: #fff; border: 1px solid rgba(0,0,0,0.08);
            box-shadow: 0 4px 20px rgba(0,0,0,0.04);
          }
          .program-card:hover { transform: translateY(-6px); box-shadow: 0 15px 40px rgba(0,0,0,0.1); }
          .program-card.featured { border-color: var(--accent); background: linear-gradient(160deg, rgba(18,187,188,0.04), #fff); }
          .program-badge {
            display: inline-block; padding: 0.3rem 1rem; border-radius: 50px;
            font-size: 0.72rem; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase;
            background: rgba(0,0,0,0.04); color: var(--text-muted-light);
            border: 1px solid rgba(0,0,0,0.08); margin-bottom: 1.2rem;
          }
          .program-badge.best { background: rgba(18,187,188,0.1); color: var(--accent); border-color: rgba(18,187,188,0.25); }
          .program-card h3 { font-size: 1.3rem; margin-bottom: 0.8rem; color: var(--foreground-light); }
          .program-amount {
            font-family: var(--heading-font), 'Montserrat', sans-serif;
            font-size: 2.5rem; font-weight: 900; margin-bottom: 1rem; line-height: 1; color: var(--accent);
          }
          .program-desc { color: var(--text-muted-light); font-size: 0.92rem; line-height: 1.7; margin-bottom: 1.5rem; }
          .program-link { color: var(--accent); font-weight: 600; font-size: 0.9rem; transition: opacity 0.2s; }
          .program-link:hover { opacity: 0.8; }

          /* Financing — dark bg */
          .financing-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1.5rem; }
          .finance-card {
            padding: 2.5rem 2rem; border-radius: 16px;
            border: 1px solid rgba(255,255,255,0.08); text-align: center;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .finance-card:hover { transform: translateY(-6px); box-shadow: 0 15px 40px rgba(0,0,0,0.4); }
          .accent-card { background: linear-gradient(160deg, rgba(18,187,188,0.08), rgba(18,187,188,0.02)); border-color: rgba(18,187,188,0.2); }
          .green-card { background: linear-gradient(160deg, rgba(16,185,129,0.08), rgba(16,185,129,0.02)); border-color: rgba(16,185,129,0.2); }
          .blue-card { background: linear-gradient(160deg, rgba(59,130,246,0.08), rgba(59,130,246,0.02)); border-color: rgba(59,130,246,0.2); }
          .finance-percent { font-family: var(--heading-font), 'Montserrat', sans-serif; font-size: 3.5rem; font-weight: 900; margin-bottom: 0.5rem; line-height: 1; }
          .accent-card .finance-percent { color: var(--accent); }
          .green-card .finance-percent { color: #10b981; }
          .blue-card .finance-percent { color: #3b82f6; }
          .finance-card h3 { font-size: 1.2rem; margin-bottom: 0.8rem; color: #fff; }
          .finance-card p { color: #94a3b8; font-size: 0.92rem; line-height: 1.7; margin: 0; }

          /* Conditions — white bg */
          .conditions-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1.5rem; }
          .condition-card {
            padding: 2rem 1.8rem; border-radius: 16px;
            border: 1px solid rgba(0,0,0,0.08); background: #fff;
            box-shadow: 0 4px 20px rgba(0,0,0,0.04);
            transition: transform 0.3s, box-shadow 0.3s;
          }
          .condition-card:hover { transform: translateY(-3px); box-shadow: 0 10px 30px rgba(0,0,0,0.08); }
          .condition-icon { font-size: 1.8rem; margin-bottom: 0.8rem; color: var(--accent); }
          .condition-card h3 { font-size: 1.05rem; margin-bottom: 0.5rem; color: var(--foreground-light); }
          .condition-card p { color: var(--text-muted-light); font-size: 0.9rem; line-height: 1.65; margin: 0; }

          /* Deadline highlight */
          .highlight-box {
            max-width: 800px; margin: 0 auto 3rem;
            background: linear-gradient(135deg, rgba(18,187,188,0.06), rgba(255,255,255,0.02));
            border: 1px solid rgba(18,187,188,0.2); border-radius: 16px;
            padding: 2.5rem; text-align: center;
          }
          .highlight-box h3 { font-size: 1.4rem; color: var(--accent); margin-bottom: 0.8rem; }
          .highlight-box p { color: #94a3b8; font-size: 1.05rem; line-height: 1.7; margin: 0; }
          .highlight-box strong { color: var(--accent); }

          /* CTA */
          .cta-section { text-align: center; max-width: 650px; margin: 0 auto; padding-top: 2rem; border-top: 1px solid rgba(255,255,255,0.06); }
          .cta-section h2 { font-size: clamp(1.6rem,3vw,2.2rem); margin-bottom: 1rem; }
          .cta-section p { color: #94a3b8; font-size: 1.05rem; line-height: 1.7; margin-bottom: 2.5rem; }
          .cta-buttons { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }

          @media (max-width: 900px) {
            .programs-grid, .financing-grid, .conditions-grid { grid-template-columns: 1fr; max-width: 450px; margin-left: auto; margin-right: auto; }
            .hero-small { padding: 7rem 0 3rem; }
            .section { padding: 3.5rem 0; }
          }
        `}</style>
      </div>
    </LanguageProvider>
  );
}