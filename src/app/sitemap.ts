import type { MetadataRoute } from "next";
import { caseStudies } from "@/data/caseStudies";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://thinkai.hu";

    const huPages: MetadataRoute.Sitemap = [
        { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
        { url: `${baseUrl}/ai-ugyfelszolgalat`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
        { url: `${baseUrl}/sikertortenetek`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
        { url: `${baseUrl}/modszerunk`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
        { url: `${baseUrl}/palyazat`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
        { url: `${baseUrl}/adatvedelem`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
        { url: `${baseUrl}/cookie-szabalyzat`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
        { url: `${baseUrl}/oldalterkep`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
    ];

    const enPages: MetadataRoute.Sitemap = [
        { url: `${baseUrl}/en`, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
        { url: `${baseUrl}/en/ai-customer-service`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
        { url: `${baseUrl}/en/case-studies`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
        { url: `${baseUrl}/en/our-method`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
        { url: `${baseUrl}/en/grant`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
        { url: `${baseUrl}/en/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
        { url: `${baseUrl}/en/cookie-policy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
        { url: `${baseUrl}/en/sitemap`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
    ];

    const huCaseStudies: MetadataRoute.Sitemap = caseStudies.map((cs) => ({
        url: `${baseUrl}/sikertortenetek/${cs.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.6,
    }));

    const enCaseStudies: MetadataRoute.Sitemap = caseStudies.map((cs) => ({
        url: `${baseUrl}/en/case-studies/${cs.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.6,
    }));

    return [...huPages, ...enPages, ...huCaseStudies, ...enCaseStudies];
}
