import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sitemap | ThinkAI",
    description: "Complete sitemap of the ThinkAI website. Overview of all pages and subpages.",
    alternates: {
        canonical: "https://thinkai.hu/en/sitemap",
        languages: { "en": "https://thinkai.hu/en/sitemap", "hu": "https://thinkai.hu/oldalterkep" },
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
