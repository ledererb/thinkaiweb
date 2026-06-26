import type { CaseStudy } from "./caseStudies";
import { caseStudyTranslations, categoryTranslations } from "./caseStudiesEn";

/**
 * Returns a translated copy of a case study when lang === "en".
 * Falls back to the original Hungarian values for any field without a translation.
 */
export function translateCaseStudy(cs: CaseStudy, lang: "hu" | "en"): CaseStudy {
    if (lang === "hu") return cs;

    const tr = caseStudyTranslations[cs.slug];
    if (!tr) {
        // No translation entry — just translate the category
        return {
            ...cs,
            category: categoryTranslations[cs.category] || cs.category,
        };
    }

    return {
        ...cs,
        title: tr.title || cs.title,
        shortTitle: tr.shortTitle || cs.shortTitle,
        shortDescription: tr.shortDescription || cs.shortDescription,
        category: categoryTranslations[cs.category] || cs.category,
        feladat: tr.feladat || cs.feladat,
        megoldas: tr.megoldas || cs.megoldas,
        elonyok: tr.elonyok || cs.elonyok,
    };
}

/**
 * Translates the category name.
 */
export function translateCategory(name: string, lang: "hu" | "en"): string {
    if (lang === "hu") return name;
    return categoryTranslations[name] || name;
}
