import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Case Studies — AI Projects with Real Results",
    description:
        "More than 20 implemented AI projects: financial automation, e-commerce optimization, customer service chatbots. See the results.",
    openGraph: {
        title: "Case Studies — AI Projects with Real Results",
        description: "More than 20 implemented AI projects with real business results.",
        locale: "en_US",
    },
    alternates: {
        canonical: "https://thinkai.hu/en/case-studies",
        languages: {
            "en": "https://thinkai.hu/en/case-studies",
            "hu": "https://thinkai.hu/sikertortenetek",
        },
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
