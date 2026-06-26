import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cookie Policy | ThinkAI",
    description: "ThinkAI's cookie policy. Learn about the cookies used on our website.",
    alternates: {
        canonical: "https://thinkai.hu/en/cookie-policy",
        languages: { "en": "https://thinkai.hu/en/cookie-policy", "hu": "https://thinkai.hu/cookie-szabalyzat" },
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
