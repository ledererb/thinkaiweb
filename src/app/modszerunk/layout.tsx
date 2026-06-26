import { LanguageProvider } from "@/i18n/LanguageContext";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Módszerünk — Hogyan Dolgozunk",
    description:
        "Átlátható, strukturált megközelítés: audittól a megvalósításig. Két út, egy cél — a te vállalkozásod AI-fejlesztése.",
    openGraph: {
        title: "Módszerünk — Hogyan Dolgozunk",
        description:
            "Átlátható, strukturált megközelítés az AI bevezetéshez.",
    },
    alternates: {
        canonical: "https://thinkai.hu/modszerunk",
        languages: {
            "hu": "https://thinkai.hu/modszerunk",
            "en": "https://thinkai.hu/en/our-method",
        },
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <LanguageProvider lang="hu">{children}</LanguageProvider>;
}
