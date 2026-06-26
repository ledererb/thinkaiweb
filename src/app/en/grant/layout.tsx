import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Grant — AI Development with EU Funding",
    description:
        "GINOP Plus grant: up to €70,000 in funding for AI and digitalization projects. We help from application to implementation.",
    openGraph: {
        title: "Grant — AI Development with EU Funding",
        description: "Up to €70,000 in funding for AI and digitalization projects.",
        locale: "en_US",
    },
    alternates: {
        canonical: "https://thinkai.hu/en/grant",
        languages: {
            "en": "https://thinkai.hu/en/grant",
            "hu": "https://thinkai.hu/palyazat",
        },
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
