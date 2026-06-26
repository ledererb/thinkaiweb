import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description:
        "ThinkAI Ltd. privacy policy. Personal data handling in accordance with GDPR regulations.",
    openGraph: {
        title: "Privacy Policy",
        description: "ThinkAI privacy policy and data handling practices.",
        locale: "en_US",
    },
    alternates: {
        canonical: "https://thinkai.hu/en/privacy",
        languages: {
            "en": "https://thinkai.hu/en/privacy",
            "hu": "https://thinkai.hu/adatvedelem",
        },
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
