import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cookie szabályzat | ThinkAI",
    description: "A ThinkAI cookie (süti) használatára vonatkozó szabályzata. Tájékozódjon a weboldal által használt sütikről.",
    alternates: {
        canonical: "https://thinkai.hu/cookie-szabalyzat",
        languages: { "en": "https://thinkai.hu/en/cookie-policy", "hu": "https://thinkai.hu/cookie-szabalyzat" },
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
