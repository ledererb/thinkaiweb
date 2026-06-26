import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "AI Customer Service — 24/7 Intelligent Call Handling",
    description:
        "AI-powered customer service: instant call handling, multi-channel presence, human-quality responses. Deployable in just 2 weeks.",
    openGraph: {
        title: "AI Customer Service — 24/7 Intelligent Call Handling",
        description: "AI-powered customer service solution with instant call handling.",
        locale: "en_US",
    },
    alternates: {
        canonical: "https://thinkai.hu/en/ai-customer-service",
        languages: {
            "en": "https://thinkai.hu/en/ai-customer-service",
            "hu": "https://thinkai.hu/ai-ugyfelszolgalat",
        },
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
