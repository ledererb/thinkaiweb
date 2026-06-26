"use client";

import { LanguageProvider } from "@/i18n/LanguageContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedHeroBg from "@/components/AnimatedHeroBg";

const phases = [
  {
    number: "01",
    title: "Comprehensive Organizational Audit",
    color: "#12bbbc",
    subtitle: "Thorough assessment of your organization",
    blocks: [
      {
        heading: "Documentation & Database Analysis",
        items: [
          "Documentation and database analysis",
          "Mapping organizational, business, and workflow processes",
          "IT environment assessment to evaluate existing infrastructure capacity",
        ],
      },
      {
        heading: "AI Applicability Assessment",
        items: [
          "Preliminary estimates of the most suitable methods and tools for your needs",
          "Efficiency and cost analyses",
          "Considering regulatory compliance, organizational changes, and HR implications",
        ],
      },
    ],
  },
  {
    number: "02",
    title: "AI Strategy",
    color: "#3b82f6",
    subtitle: "Developing short and medium-term recommendations",
    blocks: [
      {
        heading: "Process Optimization",
        items: [
          "Recommendations for implementing AI-driven process optimizations",
        ],
      },
      {
        heading: "Development Planning",
        items: [
          "Automation implementation roadmap",
          "ROI calculations",
          "Change management recommendations",
        ],
      },
      {
        heading: "Data Management & Quality",
        items: [
          "Analysis and organization of data required for AI solutions",
          "Optimization of data collection and storage practices",
          "Developing recommendations for data quality improvement",
        ],
      },
    ],
  },
  {
    number: "03",
    title: "Development",
    color: "#10b981",
    subtitle: "Implementing technological solutions",
    blocks: [
      {
        heading: "Technology Integration",
        items: [
          "Seamless integration of selected AI technologies into your existing IT infrastructure",
        ],
      },
      {
        heading: "Team Training & Support",
        items: [
          "Preparing your team for the new systems",
          "Building confidence in using the technology",
          "Establishing effective workflows",
        ],
      },
    ],
  },
  {
    number: "04",
    title: "Support",
    color: "#8b5cf6",
    subtitle: "Ensuring long-term sustainability",
    blocks: [
      {
        heading: "Ongoing Technology Monitoring",
        items: [
          "Regular updates and further development of AI solutions",
          "Ensuring efficient, state-of-the-art AI tools for our clients",
        ],
      },
      {
        heading: "User Support & Training",
        items: [
          "Facilitating smooth user adaptation to new systems",
          "Providing support services and training",
        ],
      },
    ],
  },
];

export default function OurMethodPage() {
  return (
    <LanguageProvider lang="en">
      <>
        <Navigation />
        <main>
          {/* Hero — DARK */}
          <section className="method-hero">
            <AnimatedHeroBg />
            <div className="container hero-inner">
              <span className="hero-tag">Our Method</span>
              <h1>
                The complete lifecycle of<br />
                <span className="highlight">AI transformation</span>
              </h1>
              <p className="lead">
                A comprehensive service from AI implementation to long-term
                maintenance — step by step, tailored to your business.
              </p>
            </div>
          </section>

          {/* Phases 01–02 — WHITE */}
          <section className="method-section section-white">
            <div className="container">
              <h2 className="section-heading">Audit & Strategy</h2>
              <p className="section-sub">We understand your organization and develop the strategy</p>
              <div className="phases-wrapper">
                {phases.slice(0, 2).map((phase, pi) => (
                  <div
                    key={pi}
                    className="phase"
                    style={{ "--phase-color": phase.color } as React.CSSProperties}
                  >
                    <div className="phase-header">
                      <div className="phase-number">{phase.number}</div>
                      <div>
                        <h3 className="phase-title">{phase.title}</h3>
                        <p className="phase-subtitle">{phase.subtitle}</p>
                      </div>
                    </div>
                    <div className="phase-blocks">
                      {phase.blocks.map((block, bi) => (
                        <div key={bi} className="block-card">
                          <h4>{block.heading}</h4>
                          <ul>
                            {block.items.map((item, ii) => (
                              <li key={ii}>
                                <span className="check" style={{ color: phase.color }}>✓</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Phases 03–04 — DARK */}
          <section className="method-section section-dark">
            <div className="container">
              <h2 className="section-heading">Development & Support</h2>
              <p className="section-sub">We implement and maintain the solutions</p>
              <div className="phases-wrapper">
                {phases.slice(2, 4).map((phase, pi) => (
                  <div
                    key={pi}
                    className="phase"
                    style={{ "--phase-color": phase.color } as React.CSSProperties}
                  >
                    <div className="phase-header">
                      <div className="phase-number">{phase.number}</div>
                      <div>
                        <h3 className="phase-title">{phase.title}</h3>
                        <p className="phase-subtitle">{phase.subtitle}</p>
                      </div>
                    </div>
                    <div className="phase-blocks">
                      {phase.blocks.map((block, bi) => (
                        <div key={bi} className="block-card">
                          <h4>{block.heading}</h4>
                          <ul>
                            {block.items.map((item, ii) => (
                              <li key={ii}>
                                <span className="check" style={{ color: phase.color }}>✓</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Summary — WHITE */}
          <section className="method-section section-white">
            <div className="container">
              <h2 className="section-heading">What We Guarantee</h2>
              <div className="summary-grid">
                <div className="summary-card">
                  <div className="summary-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
                  </div>
                  <h3>Efficiency</h3>
                  <p>Automated processes, less manual work</p>
                </div>
                <div className="summary-card">
                  <div className="summary-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 20V10M12 20V4M6 20v-6" /></svg>
                  </div>
                  <h3>ROI</h3>
                  <p>Data-driven decisions, measurable results</p>
                </div>
                <div className="summary-card">
                  <div className="summary-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                  </div>
                  <h3>Security</h3>
                  <p>Regulatory compliance, data protection</p>
                </div>
                <div className="summary-card">
                  <div className="summary-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                  </div>
                  <h3>Support</h3>
                  <p>Continuous maintenance and development</p>
                </div>
              </div>
            </div>
          </section>

          {/* Guarantee + CTA — DARK */}
          <section className="method-section section-dark">
            <div className="container">
              <div className="guarantee-box">
                <div className="guarantee-content">
                  <h3>100% Money-Back Guarantee</h3>
                  <p>
                    If you are not satisfied with the audit results, we will
                    refund the full amount — no questions asked. Try our method
                    risk-free.
                  </p>
                </div>
              </div>

              <div className="cta-block">
                <h2>Ready to take the first step?</h2>
                <p>
                  Request a free consultation and discover how you can
                  automate your processes with AI.
                </p>
                <div className="cta-buttons">
                  <a href="/en#contact" className="btn btn-large btn-primary">
                    Free Consultation
                  </a>
                  <a href="/en/grant" className="btn btn-large btn-outline">
                    Grant Opportunities
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />

        <style jsx>{`
          main { background: var(--background-dark); color: #fff; }
          .method-hero {
            padding: 160px 0 100px; position: relative; overflow: hidden; text-align: center;
            background: linear-gradient(180deg, var(--background-dark) 0%, rgba(18,187,188,0.06) 100%);
          }
          .hero-inner { position: relative; z-index: 1; }
          .hero-tag {
            display: inline-block; padding: 8px 24px;
            border: 1px solid var(--accent); border-radius: 50px;
            color: var(--accent); font-size: 0.85rem;
            text-transform: uppercase; letter-spacing: 2px; margin-bottom: 24px;
          }
          h1 { font-size: clamp(2.4rem,5vw,3.8rem); margin-bottom: 20px; font-weight: 300; line-height: 1.2; color: #fff; }
          .highlight {
            font-weight: 800;
            background: linear-gradient(135deg, #fff 0%, var(--accent) 100%);
            -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
          }
          .lead { color: #cbd5e1; font-size: 1.15rem; max-width: 650px; margin: 0 auto; line-height: 1.7; }

          .method-section { padding: 80px 0; }
          .section-white { background: #fff; color: var(--foreground-light); }
          .section-dark { background: var(--background-dark); color: #fff; }
          .section-heading { text-align: center; font-size: clamp(1.6rem,3.5vw,2.2rem); margin-bottom: 0.8rem; }
          .section-white .section-heading { color: var(--foreground-light); }
          .section-dark .section-heading { color: #fff; }
          .section-sub { text-align: center; max-width: 680px; margin: 0 auto 3rem; font-size: 1.05rem; line-height: 1.7; }
          .section-white .section-sub { color: var(--text-muted-light); }
          .section-dark .section-sub { color: #94a3b8; }

          .phases-wrapper { display: flex; flex-direction: column; gap: 48px; }
          .phase { position: relative; padding-left: 40px; }
          .phase::before {
            content: ''; position: absolute; left: 18px; top: 0; bottom: 0; width: 2px;
            background: linear-gradient(180deg, var(--phase-color) 0%, rgba(128,128,128,0.15) 100%);
          }
          .phase-header { display: flex; align-items: center; gap: 20px; margin-bottom: 24px; }
          .phase-number {
            width: 38px; height: 38px; border-radius: 50%;
            display: flex; align-items: center; justify-content: center;
            font-size: 0.85rem; font-weight: 800;
            background: var(--phase-color); color: #fff; flex-shrink: 0;
            position: relative; left: -40px; margin-right: -40px;
            box-shadow: 0 0 20px color-mix(in srgb, var(--phase-color) 40%, transparent); z-index: 1;
          }
          .phase-title { font-size: 1.4rem; font-weight: 700; margin: 0; }
          .section-white .phase-title { color: var(--foreground-light); }
          .section-dark .phase-title { color: #fff; }
          .phase-subtitle { font-size: 0.92rem; margin-top: 4px; }
          .section-white .phase-subtitle { color: var(--text-muted-light); }
          .section-dark .phase-subtitle { color: #94a3b8; }
          .phase-blocks { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px,1fr)); gap: 16px; padding-left: 18px; }

          .section-white .block-card {
            background: #fff; border: 1px solid rgba(0,0,0,0.08); border-radius: 14px;
            padding: 24px; transition: all 0.3s ease; box-shadow: 0 4px 20px rgba(0,0,0,0.04);
          }
          .section-white .block-card:hover { transform: translateY(-3px); box-shadow: 0 8px 30px rgba(0,0,0,0.08); border-color: var(--phase-color); }
          .section-white .block-card h4 { color: var(--foreground-light); font-size: 1rem; font-weight: 700; margin-bottom: 14px; }
          .section-white .block-card li { color: var(--text-muted-light); }

          .section-dark .block-card {
            background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07);
            border-radius: 14px; padding: 24px; transition: all 0.3s ease;
          }
          .section-dark .block-card:hover { background: rgba(255,255,255,0.06); border-color: var(--phase-color); transform: translateY(-3px); box-shadow: 0 8px 30px rgba(0,0,0,0.3); }
          .section-dark .block-card h4 { color: #fff; font-size: 1rem; font-weight: 700; margin-bottom: 14px; }
          .section-dark .block-card li { color: #cbd5e1; }

          .block-card ul { list-style: none; padding: 0; margin: 0; }
          .block-card li { display: flex; align-items: flex-start; gap: 10px; padding: 6px 0; font-size: 0.9rem; line-height: 1.6; }
          .check { font-weight: 700; flex-shrink: 0; margin-top: 2px; }

          .summary-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 24px; }
          .section-white .summary-card {
            text-align: center; padding: 32px 20px; background: #fff;
            border: 1px solid rgba(0,0,0,0.08); border-radius: 16px;
            transition: all 0.3s ease; box-shadow: 0 4px 20px rgba(0,0,0,0.04);
          }
          .section-white .summary-card:hover { transform: translateY(-4px); box-shadow: 0 10px 30px rgba(0,0,0,0.08); }
          .summary-icon { font-size: 2.2rem; margin-bottom: 12px; color: var(--accent); }
          .section-white .summary-card h3 { font-size: 1.1rem; margin-bottom: 8px; color: var(--foreground-light); font-weight: 700; }
          .section-white .summary-card p { color: var(--text-muted-light); font-size: 0.88rem; line-height: 1.6; margin: 0; }

          .guarantee-box {
            max-width: 700px; margin: 0 auto 60px;
            background: linear-gradient(135deg, rgba(18,187,188,0.06), rgba(255,255,255,0.02));
            border: 1px solid rgba(18,187,188,0.25); border-radius: 16px;
            padding: 40px; text-align: center;
          }
          .guarantee-content h3 { color: var(--accent); font-size: 1.3rem; margin-bottom: 10px; font-weight: 700; }
          .guarantee-content p { color: #94a3b8; font-size: 0.95rem; line-height: 1.7; margin: 0; max-width: 500px; margin: 0 auto; }

          .cta-block { text-align: center; padding-top: 40px; border-top: 1px solid rgba(255,255,255,0.06); }
          .cta-block h2 { font-size: clamp(1.6rem,3vw,2.4rem); margin-bottom: 12px; font-weight: 700; color: #fff; }
          .cta-block p { color: #94a3b8; margin-bottom: 32px; max-width: 500px; margin-left: auto; margin-right: auto; margin-bottom: 32px; }
          .cta-buttons { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }

          @media (max-width: 900px) { .summary-grid { grid-template-columns: repeat(2,1fr); } }
          @media (max-width: 600px) {
            .phase { padding-left: 28px; }
            .phase::before { left: 12px; }
            .phase-number { left: -28px; margin-right: -28px; width: 28px; height: 28px; font-size: 0.72rem; }
            .phase-blocks { grid-template-columns: 1fr; padding-left: 8px; }
            .summary-grid { grid-template-columns: 1fr; }
          }
        `}</style>
      </>
    </LanguageProvider>
  );
}