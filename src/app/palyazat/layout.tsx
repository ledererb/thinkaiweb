import { LanguageProvider } from "@/i18n/LanguageContext";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pályázat — AI Fejlesztés EU Pályázati Támogatással",
    description:
        "GINOP Plusz pályázat: akár 24 millió Ft támogatás AI és digitalizálási projektekhez. Segítünk a pályázattól a megvalósításig.",
    openGraph: {
        title: "Pályázat — AI Fejlesztés EU Támogatással",
        description:
            "Akár 24 millió Ft támogatás AI és digitalizálási projektekhez.",
    },
    alternates: {
        canonical: "https://thinkai.hu/palyazat",
        languages: {
            "hu": "https://thinkai.hu/palyazat",
            "en": "https://thinkai.hu/en/grant",
        },
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <LanguageProvider lang="hu">{children}</LanguageProvider>;
}
