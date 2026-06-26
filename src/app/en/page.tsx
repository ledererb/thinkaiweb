"use client";

import { LanguageProvider } from "@/i18n/LanguageContext";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Misszionk from "@/components/Misszionk";
import PartnerLogos from "@/components/PartnerLogos";
import HowWeWork from "@/components/HowWeWork";
import FeaturedCaseStudies from "@/components/FeaturedCaseStudies";
import Industries from "@/components/Industries";
import Pillars from "@/components/Pillars";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function EnglishHome() {
    return (
        <LanguageProvider lang="en">
            <div className="main-wrapper">
                <Navigation />
                <main>
                    <Hero />
                    <Misszionk />
                    <PartnerLogos />
                    <HowWeWork />
                    <FeaturedCaseStudies />
                    <Industries />
                    <Pillars />
                    <Contact />
                </main>
                <Footer />
            </div>
        </LanguageProvider>
    );
}
