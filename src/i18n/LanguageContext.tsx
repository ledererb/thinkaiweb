"use client";

import { createContext, useContext, type ReactNode } from "react";

export type Lang = "hu" | "en";

interface LangContextValue {
    lang: Lang;
}

const LangContext = createContext<LangContextValue>({ lang: "hu" });

export function LanguageProvider({
    lang,
    children,
}: {
    lang: Lang;
    children: ReactNode;
}) {
    return (
        <LangContext.Provider value={{ lang }}>{children}</LangContext.Provider>
    );
}

export function useLang(): Lang {
    return useContext(LangContext).lang;
}
