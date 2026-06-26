"use client";

import { LanguageProvider } from "@/i18n/LanguageContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function CookiePolicyPage() {
    return (
        <LanguageProvider lang="en">
            <div className="main-wrapper">
                <Navigation />
                <main className="page-content">
                    <section className="section-page">
                        <div className="container legal-content">
                            <h1>Cookie Policy</h1>
                            <p className="last-updated">Last updated: March 1, 2025</p>

                            <h2>1. What Are Cookies?</h2>
                            <p>
                                Cookies are small text files that the website stores in your browser
                                during your visit. They help the website remember your settings
                                and activities.
                            </p>

                            <h2>2. What Cookies Do We Use?</h2>

                            <h3>Strictly Necessary Cookies</h3>
                            <p>
                                These cookies are essential for the website to function properly. For example,
                                they store the state of your cookie consent. Without these cookies, certain
                                features of the website would not work.
                            </p>

                            <h3>Analytics Cookies</h3>
                            <p>
                                These cookies help us understand how visitors use the website.
                                The data collected is anonymous and used solely for statistical purposes.
                                This includes, for example, Google Analytics.
                            </p>

                            <h3>Marketing Cookies</h3>
                            <p>
                                These cookies allow us to display relevant advertisements to you
                                on other websites. Third-party providers may also place such cookies.
                            </p>

                            <h2>3. Your Choices</h2>
                            <p>
                                When you first visit our website, a cookie consent banner allows you
                                to decide which cookies to accept. You can change your decision at any time
                                through your browser settings.
                            </p>
                            <p>
                                Most browsers offer the following options for managing cookies:
                            </p>
                            <ul>
                                <li>Accept all cookies</li>
                                <li>Receive notification when a website wants to place a cookie</li>
                                <li>Reject all cookies</li>
                                <li>Delete previously stored cookies</li>
                            </ul>

                            <h2>4. Cookie Lifespan</h2>
                            <p>
                                <strong>Session cookies:</strong> These are automatically deleted when you close your browser.
                            </p>
                            <p>
                                <strong>Persistent cookies:</strong> These remain in your browser until their
                                expiration date, unless you delete them earlier.
                            </p>

                            <h2>5. Contact</h2>
                            <p>
                                If you have any questions about our cookie policy, please visit our{" "}
                                <a href="/en#contact">contact</a> page or email us at{" "}
                                <a href="mailto:info@thinkai.hu">info@thinkai.hu</a>.
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
        </LanguageProvider>
    );
}
