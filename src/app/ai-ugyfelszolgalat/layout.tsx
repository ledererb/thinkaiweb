import { LanguageProvider } from "@/i18n/LanguageContext";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "AI Ügyfélszolgálat — 0-24 Intelligens Híváskezelés",
    description:
        "AI-alapú ügyfélszolgálati megoldás: azonnali híváskezelés, többcsatornás jelenlét, emberi minőségű válaszok magyar nyelven. Akár 2 hét alatt élesíthető.",
    openGraph: {
        title: "AI Ügyfélszolgálat — 0-24 Intelligens Híváskezelés",
        description:
            "AI-alapú ügyfélszolgálati megoldás: azonnali híváskezelés, többcsatornás jelenlét, emberi minőségű válaszok.",
    },
    alternates: {
        canonical: "https://thinkai.hu/ai-ugyfelszolgalat",
        languages: {
            "hu": "https://thinkai.hu/ai-ugyfelszolgalat",
            "en": "https://thinkai.hu/en/ai-customer-service",
        },
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <LanguageProvider lang="hu">{children}</LanguageProvider>;
}
