import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Oldaltérkép | ThinkAI",
    description: "A ThinkAI weboldal teljes oldaltérképe. Minden oldal és aloldal áttekintése egy helyen.",
    alternates: {
        canonical: "https://thinkai.hu/oldalterkep",
        languages: { "en": "https://thinkai.hu/en/sitemap", "hu": "https://thinkai.hu/oldalterkep" },
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
