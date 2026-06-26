import { LanguageProvider } from "@/i18n/LanguageContext";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Adatvédelmi Tájékoztató",
    description:
        "ThinkAI Kft. adatvédelmi tájékoztatója. Személyes adatok kezelése a GDPR előírásai szerint.",
    robots: { index: true, follow: true },
    alternates: {
        canonical: "https://thinkai.hu/adatvedelem",
        languages: {
            "hu": "https://thinkai.hu/adatvedelem",
            "en": "https://thinkai.hu/en/privacy",
        },
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <LanguageProvider lang="hu">{children}</LanguageProvider>;
}
