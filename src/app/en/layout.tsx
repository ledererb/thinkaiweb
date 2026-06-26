import type { Metadata } from "next";

const baseUrl = "https://thinkai.hu";

export const metadata: Metadata = {
    title: "ThinkAI — Working AI Solutions for Businesses",
    description:
        "We deliver working AI solutions: customer service automation, custom development, grant support. More than 20 successful projects with measurable results.",
    keywords: [
        "AI solutions",
        "artificial intelligence",
        "AI consulting",
        "AI development",
        "customer service automation",
        "AI grant",
        "chatbot",
        "business automation",
        "ThinkAI",
    ],
    openGraph: {
        title: "ThinkAI — Working AI Solutions for Businesses",
        description: "We deliver working AI solutions that create immediate value.",
        locale: "en_US",
        alternateLocale: "hu_HU",
        url: `${baseUrl}/en`,
    },
    alternates: {
        canonical: `${baseUrl}/en`,
        languages: {
            "en": `${baseUrl}/en`,
            "hu": baseUrl,
            "x-default": baseUrl,
        },
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <script
                dangerouslySetInnerHTML={{
                    __html: `document.documentElement.lang="en"`,
                }}
            />
            {children}
        </>
    );
}
