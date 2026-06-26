import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Method — How We Work",
    description:
        "Transparent, structured approach: from audit to implementation. Two paths, one goal — your business AI transformation.",
    openGraph: {
        title: "Our Method — How We Work",
        description: "Transparent, structured approach to AI implementation.",
        locale: "en_US",
    },
    alternates: {
        canonical: "https://thinkai.hu/en/our-method",
        languages: {
            "en": "https://thinkai.hu/en/our-method",
            "hu": "https://thinkai.hu/modszerunk",
        },
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
