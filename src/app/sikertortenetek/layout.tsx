import { LanguageProvider } from "@/i18n/LanguageContext";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sikertörténetek — AI Projektek Valós Eredményekkel",
    description:
        "Több mint 20 megvalósított AI projekt: pénzügyi automatizálás, e-kereskedelmi optimalizálás, ügyfélszolgálati chatbotok. Nézd meg az eredményeket.",
    openGraph: {
        title: "Sikertörténetek — AI Projektek Valós Eredményekkel",
        description:
            "Több mint 20 megvalósított AI projekt valós üzleti eredményekkel.",
    },
    alternates: {
        canonical: "https://thinkai.hu/sikertortenetek",
        languages: {
            "hu": "https://thinkai.hu/sikertortenetek",
            "en": "https://thinkai.hu/en/case-studies",
        },
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <LanguageProvider lang="hu">{children}</LanguageProvider>;
}
