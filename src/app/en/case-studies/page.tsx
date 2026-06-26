"use client";

import { useState } from "react";
import { LanguageProvider } from "@/i18n/LanguageContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import AnimatedHeroBg from "@/components/AnimatedHeroBg";
import { caseStudies, categories } from "@/data/caseStudies";
import { translateCaseStudy, translateCategory } from "@/data/translateCaseStudy";

export default function CaseStudies() {
    const [activeCategory, setActiveCategory] = useState("All");

    // Build EN category list
    const enCategories = categories
        .filter(c => c.name !== "Összes")
        .map(c => ({ name: translateCategory(c.name, "en"), color: c.color, huName: c.name }));

    // Translate all case studies
    const translatedStudies = caseStudies.map(cs => translateCaseStudy(cs, "en"));

    const filtered =
        activeCategory === "All"
            ? translatedStudies
            : translatedStudies.filter((cs) => cs.category === activeCategory);

    return (
        <LanguageProvider lang="en">
            <Navigation />
            <main>
                {/* Hero */}
                <section className="cs-hero">
                    <AnimatedHeroBg />
                    <div className="container cs-hero-inner">
                        <span className="hero-tag">{translatedStudies.length} completed projects</span>
                        <h1>Our Case Studies</h1>
                        <p className="lead">
                            Real AI solutions with real results. See how we helped
                            our clients with automation.
                        </p>
                    </div>
                </section>

                {/* Category Filter */}
                <section className="cs-filters">
                    <div className="container">
                        <div className="filter-bar">
                            <button
                                className={`filter-btn ${activeCategory === "All" ? "active" : ""}`}
                                style={
                                    activeCategory === "All"
                                        ? { background: "#47D7D1", borderColor: "#47D7D1" }
                                        : {}
                                }
                                onClick={() => setActiveCategory("All")}
                            >
                                All
                            </button>
                            {enCategories.map((cat) => (
                                <button
                                    key={cat.name}
                                    className={`filter-btn ${activeCategory === cat.name ? "active" : ""}`}
                                    style={
                                        activeCategory === cat.name
                                            ? { background: cat.color, borderColor: cat.color }
                                            : {}
                                    }
                                    onClick={() => setActiveCategory(cat.name)}
                                >
                                    {cat.name}
                                </button>
                            ))}
                        </div>
                        <p className="filter-count">
                            {filtered.length} project{filtered.length !== 1 ? "s" : ""}
                        </p>
                    </div>
                </section>

                {/* Cards Grid */}
                <section className="cs-grid-section">
                    <div className="container">
                        <div className="cs-grid">
                            {filtered.map((cs, i) => (
                                <Link
                                    key={cs.slug}
                                    href={`/en/case-studies/${cs.slug}`}
                                    className="cs-card"
                                    style={
                                        {
                                            "--card-accent": cs.categoryColor,
                                            animationDelay: `${i * 0.05}s`,
                                        } as React.CSSProperties
                                    }
                                >
                                    {cs.image && (
                                        <div className="cs-card-image">
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img src={cs.image} alt={cs.shortTitle} />
                                        </div>
                                    )}
                                    <div className="cs-card-body">
                                        <div className="cs-card-head">
                                            <span
                                                className="cs-badge"
                                                style={{ background: `${cs.categoryColor}22`, color: cs.categoryColor }}
                                            >
                                                {cs.category}
                                            </span>
                                        </div>
                                        <h3 className="cs-card-title">{cs.shortTitle}</h3>
                                        <p className="cs-card-desc">{cs.shortDescription}</p>
                                        <div className="cs-card-footer">
                                            <span className="cs-card-link">
                                                Read More <span className="arrow">→</span>
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />

            <style jsx global>{`
                main { background: var(--background-dark); color: #fff; }
                .cs-hero {
                    padding: 160px 0 80px; text-align: center; position: relative; overflow: hidden;
                    background: linear-gradient(180deg, var(--background-dark) 0%, rgba(18,187,188,0.06) 100%);
                }
                .hero-tag { display: inline-block; padding: 8px 24px; border: 1px solid var(--accent); border-radius: 50px; color: var(--accent); font-size: 0.85rem; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 24px; }
                .cs-hero h1 { font-size: clamp(2.4rem,5vw,3.8rem); margin-bottom: 16px; color: #fff; }
                .cs-hero-inner { position: relative; z-index: 1; }
                .lead { color: #cbd5e1; font-size: 1.15rem; max-width: 600px; margin: 0 auto; line-height: 1.7; }
                .cs-filters { padding: 0 0 24px; }
                .filter-bar { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; }
                .filter-btn { padding: 8px 20px; border-radius: 50px; border: 1px solid rgba(255,255,255,0.15); background: transparent; color: #94a3b8; font-size: 0.85rem; cursor: pointer; transition: all 0.25s; font-family: inherit; }
                .filter-btn:hover { border-color: rgba(255,255,255,0.4); color: #fff; }
                .filter-btn.active { color: #fff; border-color: transparent; font-weight: 600; }
                .filter-count { text-align: center; color: #94a3b8; font-size: 0.85rem; margin-top: 16px; }
                .cs-grid-section { padding: 24px 0 80px; }
                .cs-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 24px; }
                .cs-card {
                    display: flex; flex-direction: column;
                    background-image: linear-gradient(#0D1520, #0D1520), linear-gradient(135deg, #8B5CF6, #3B82F6, #47D7D1, #2DD4BF);
                    background-origin: border-box; background-clip: padding-box, border-box;
                    border: 2px solid transparent; border-radius: 16px;
                    text-decoration: none; color: inherit; transition: all 0.35s;
                    animation: fadeUp 0.5s ease both; position: relative; overflow: hidden;
                }
                .cs-card:hover { transform: translateY(-4px); box-shadow: 0 12px 36px rgba(0,0,0,0.3), 0 0 24px rgba(139,92,246,0.15); background-image: linear-gradient(#111827, #111827), linear-gradient(135deg, #8B5CF6, #6366F1, #3B82F6, #47D7D1); }
                @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
                .cs-card-image { width: 100%; height: 180px; overflow: hidden; border-radius: 14px 14px 0 0; }
                .cs-card-image img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.5s ease; }
                .cs-card:hover .cs-card-image img { transform: scale(1.05); }
                .cs-card-body { padding: 20px 22px 22px; display: flex; flex-direction: column; flex: 1; }
                .cs-card-head { display: flex; align-items: center; justify-content: flex-start; margin-bottom: 10px; }
                .cs-badge { font-size: 0.7rem; padding: 4px 12px; border-radius: 50px; font-weight: 600; letter-spacing: 0.8px; text-transform: uppercase; }
                .cs-card-title { font-size: 1.05rem; margin-bottom: 6px; font-weight: 700; color: #fff; }
                .cs-card-desc { color: #94a3b8; font-size: 0.85rem; line-height: 1.6; flex: 1; }
                .cs-card-footer { margin-top: 12px; padding-top: 10px; border-top: 1px solid rgba(255,255,255,0.06); }
                .cs-card-link { color: var(--card-accent, var(--accent)); font-size: 0.85rem; font-weight: 600; display: flex; align-items: center; gap: 6px; }
                .cs-card-link .arrow { transition: transform 0.25s; }
                .cs-card:hover .cs-card-link .arrow { transform: translateX(5px); }
                @media (max-width: 1024px) { .cs-grid { grid-template-columns: repeat(2,1fr); } }
                @media (max-width: 640px) { .cs-grid { grid-template-columns: 1fr; } .filter-bar { gap: 6px; } .filter-btn { padding: 6px 14px; font-size: 0.8rem; } }
            `}</style>
        </LanguageProvider>
    );
}
