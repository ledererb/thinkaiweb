import type { Lang } from "./LanguageContext";

/* ────────────────────────────────────────────
   Master dictionary — every UI string lives here
   ──────────────────────────────────────────── */

const dict = {
    /* ─── Navigation ─── */
    nav: {
        about: { hu: "Rólunk", en: "About" },
        method: { hu: "Módszerünk", en: "Our Method" },
        caseStudies: { hu: "Sikertörténetek", en: "Case Studies" },
        grant: { hu: "Pályázat", en: "Grant" },
        contact: { hu: "Kapcsolat", en: "Contact" },
        cta: { hu: "AJÁNLATKÉRÉS", en: "GET A QUOTE" },
    },

    /* ─── Routes (for language switcher) ─── */
    routes: {
        home: { hu: "/", en: "/en" },
        about: { hu: "/#rolunk", en: "/en#about" },
        method: { hu: "/modszerunk", en: "/en/our-method" },
        caseStudies: { hu: "/sikertortenetek", en: "/en/case-studies" },
        grant: { hu: "/palyazat", en: "/en/grant" },
        contact: { hu: "/#kapcsolat", en: "/en#contact" },
        quote: { hu: "/#ajanlatkeres", en: "/en#get-quote" },
        privacy: { hu: "/adatvedelem", en: "/en/privacy" },
        aiService: { hu: "/ai-ugyfelszolgalat", en: "/en/ai-customer-service" },
        sitemapPage: { hu: "/oldalterkep", en: "/en/sitemap" },
        cookiePolicy: { hu: "/cookie-szabalyzat", en: "/en/cookie-policy" },
    },

    /* ─── Hero ─── */
    hero: {
        line1: {
            hu: "A jövő tegnap volt.",
            en: "The future was yesterday.",
        },
        line2: {
            hu: "Mi a holnap vagyunk.",
            en: "We are tomorrow.",
        },
        subtitle: {
            hu: "Működő AI megoldásokat szállítunk, amelyek azonnal értéket teremtenek. Nem beszélünk róla — megcsináljuk.",
            en: "We deliver working AI solutions that create value immediately. We don't talk about it — we build it.",
        },
        cta: { hu: "AJÁNLATKÉRÉS", en: "GET A QUOTE" },
    },

    /* ─── Misszionk / Mission ─── */
    mission: {
        hookLine1: {
            hu: "A legtöbb cég még mindig úgy dolgozik, mint 10 éve.",
            en: "Most companies still work the same way they did 10 years ago.",
        },
        hookAccent: {
            hu: " Mi ezt megváltoztatjuk.",
            en: " We're changing that.",
        },
        body: {
            hu: "Nem prezentációkat készítünk az AI lehetőségeiről — <strong>működő rendszereket</strong> építünk, amelyek azonnal értéket teremtenek. Az ügyfélszolgálat automatizálásától a logisztikai optimalizáláson át a pénzügyi folyamatok intelligens kezeléséig: minden megoldásunk valós üzleti problémát old meg, mérhető eredménnyel.",
            en: "We don't create presentations about AI possibilities — we build <strong>working systems</strong> that create value immediately. From customer service automation to logistics optimization to intelligent financial process management: every solution we build solves real business problems with measurable results.",
        },
        cta: { hu: "KÉRJ AJÁNLATOT", en: "REQUEST A QUOTE" },
        imgAlt: { hu: "AI Dashboard", en: "AI Dashboard" },
    },

    /* ─── How We Work ─── */
    howWeWork: {
        title: { hu: "Hogyan dolgozunk?", en: "How We Work" },
        intro: {
            hu: "Mindenki másképp érkezik – mi mindkét úton végigkísérünk.",
            en: "Everyone arrives differently — we guide you along both paths.",
        },
        pathA: {
            title: {
                hu: "Még nem tudod, mit szeretnél, de optimalizálnod kell, hogy versenyképes maradj",
                en: "You're not sure what you need, but you must optimize to stay competitive",
            },
            steps: [
                {
                    num: "01",
                    title: { hu: "Audit", en: "Audit" },
                    desc: {
                        hu: "Teljeskörű szervezeti átvilágítás, hogy pontosan tudjuk, hol rejlik a valódi lehetőség.",
                        en: "A comprehensive organizational review so we know exactly where the real opportunities lie.",
                    },
                },
                {
                    num: "02",
                    title: { hu: "Prezentáció", en: "Presentation" },
                    desc: {
                        hu: "Személyre szabott javaslatok és stratégia – megmutatjuk, mi illik valóban hozzád.",
                        en: "Tailored proposals and strategy — we show you what truly fits your business.",
                    },
                },
                {
                    num: "03",
                    title: { hu: "Kiválasztás", en: "Selection" },
                    desc: {
                        hu: "Közösen döntünk az irányról. Nincs felesleges megoldás, csak a számodra megfelelő.",
                        en: "We decide together on the direction. No unnecessary solutions — only what works for you.",
                    },
                },
                {
                    num: "04",
                    title: { hu: "Megvalósítás", en: "Implementation" },
                    desc: {
                        hu: "Fejlesztés és bevezetés – a tervből valóság lesz.",
                        en: "Development and deployment — turning plans into reality.",
                    },
                },
            ],
        },
        pathB: {
            title: {
                hu: "Tudod, hogy mit szeretnél, de profi kivitelezőre van szükséged",
                en: "You know what you want, but you need a professional team to build it",
            },
            steps: [
                {
                    num: "01",
                    title: {
                        hu: "Technikai Specifikációs Meeting",
                        en: "Technical Specification Meeting",
                    },
                    desc: {
                        hu: "Egyenesen a lényegre térünk: feltérképezzük a technikai követelményeket és lefektetjük a megvalósítás alapjait.",
                        en: "We get straight to the point: mapping out technical requirements and laying the foundation for implementation.",
                    },
                },
                {
                    num: "02",
                    title: { hu: "Árajánlat", en: "Quotation" },
                    desc: {
                        hu: "Átlátható, testre szabott ajánlat – felesleges körök nélkül.",
                        en: "A transparent, tailored proposal — no unnecessary back and forth.",
                    },
                },
                {
                    num: "03",
                    title: { hu: "Megvalósítás", en: "Implementation" },
                    desc: {
                        hu: "Fejlesztés és bevezetés a megbeszéltek szerint. Pontosan úgy, ahogy elterveztük.",
                        en: "Development and deployment as agreed. Exactly as we planned.",
                    },
                },
            ],
        },
        guarantee: {
            title: { hu: "100% Pénzvisszafizetési Garancia", en: "100% Money-Back Guarantee" },
            desc: {
                hu: "Ha nem tetszik az audit eredménye, kérdés nélkül visszafizetjük az árát.",
                en: "If you're not satisfied with the audit results, we'll refund you — no questions asked.",
            },
        },
        quote: {
            hu: "\u201EA technológiai fejlesztés ma már nem lehetőség \u2013 hanem túlélési kérdés. Mi nem prezentációkat gyártunk az AI lehetőségeiről: működő megoldásokat szállítunk, amelyek azonnal értéket teremtenek. Mert a jövő azokat jutalmazza, akik most lépnek.\u201D",
            en: "\u201CTechnology development is no longer an option \u2014 it\u2019s a matter of survival. We don\u2019t create presentations about AI possibilities: we deliver working solutions that create value immediately. Because the future rewards those who act now.\u201D",
        },
        methodLink: { hu: "Részletes módszertanunk \u2192", en: "Our Detailed Methodology \u2192" },
    },

    /* ─── Partner Logos ─── */
    partners: {
        title: { hu: "AKIKKEL MÁR EGYÜTT DOLGOZTUNK", en: "COMPANIES WE'VE WORKED WITH" },
    },

    /* ─── Industries ─── */
    industries: {
        title: { hu: "Kiknek segítünk?", en: "Who Do We Help?" },
        subtitle: {
            hu: "Több mint 20 sikeres projekttel a hátunk mögött — ezekben az iparágakban hozunk azonnali, mérhető eredményt.",
            en: "With more than 20 successful projects behind us — we deliver immediate, measurable results in these industries.",
        },
        cards: [
            {
                title: { hu: "Pénzügy & Számvitel", en: "Finance & Accounting" },
                desc: {
                    hu: "Számlafeldolgozás, pénzügyi riportok automatizálása, döntéstámogatás és kockázatkezelés AI-val — akár 70%-kal gyorsabban.",
                    en: "Invoice processing, financial report automation, decision support and risk management with AI — up to 70% faster.",
                },
                img: "/images/industry-finance.webp",
                imgAlt: { hu: "Pénzügy", en: "Finance" },
            },
            {
                title: { hu: "E-kereskedelem", en: "E-commerce" },
                desc: {
                    hu: "Terméklistázás, rendeléskezelés, ügyfélszolgálat és marketing automatizálás — több bevétel, kevesebb manuális munka.",
                    en: "Product listing, order management, customer service and marketing automation — more revenue, less manual work.",
                },
                img: "/images/industry-ecommerce.webp",
                imgAlt: { hu: "E-kereskedelem", en: "E-commerce" },
            },
            {
                title: { hu: "Marketing & Sales", en: "Marketing & Sales" },
                desc: {
                    hu: "Tartalomdisztribúció, ajánlatkészítés, CRM-integráció és értékesítési pipeline optimalizálás mesterséges intelligenciával.",
                    en: "Content distribution, proposal generation, CRM integration and sales pipeline optimization with artificial intelligence.",
                },
                img: "/images/industry-marketing.webp",
                imgAlt: { hu: "Marketing & Sales", en: "Marketing & Sales" },
            },
        ],
    },

    /* ─── Pillars ─── */
    pillars: {
        title: { hu: "Pilléreink", en: "Our Pillars" },
        intro: {
            hu: "Három fő területen támogatjuk vállalkozásod fejlődését.",
            en: "We support your business growth across three core areas.",
        },
        cards: [
            {
                title: { hu: "Egyedi Fejlesztés", en: "Custom Development" },
                desc: {
                    hu: "Specifikus üzleti problémákra szabott AI megoldások tervezése és kivitelezése. Nincs dobozos kompromisszum, csak a te igényeid.",
                    en: "AI solutions designed and built for your specific business problems. No off-the-shelf compromises — only your needs.",
                },
                cta: { hu: "Ajánlatkérés →", en: "Get a Quote →" },
                img: "/images/pillar-custom-dev.webp",
                imgAlt: { hu: "Egyedi Fejlesztés", en: "Custom Development" },
            },
            {
                title: { hu: "Intelligens ügyfélkommunikációs rendszer", en: "AI Customer Service" },
                desc: {
                    hu: "Intelligens, 0-24 elérhető virtuális asszisztensek, amelyek emberi minőségben kezelik az ügyfelek hívásait, kérdéseit és panaszait.",
                    en: "Intelligent, 24/7 virtual assistants that handle customer calls, questions and complaints at human quality.",
                },
                cta: { hu: "Bővebben →", en: "Learn More →" },
                img: "/images/pillar-customer-service.webp",
                imgAlt: { hu: "Intelligens ügyfélkommunikációs rendszer", en: "AI Customer Service" },
            },
            {
                title: { hu: "EAISY-termékcsalád", en: "EAISY Product Suite" },
                desc: {
                    hu: "Saját fejlesztésű, moduláris ERP és AI eszközök, amelyek azonnal integrálhatók a mindennapi működésbe.",
                    en: "Our proprietary, modular ERP and AI tools that integrate seamlessly into your daily operations.",
                },
                comingSoon: { hu: "Hamarosan", en: "Coming Soon" },
                img: "/images/pillar-eaisy.webp",
                imgAlt: { hu: "EAISY-termékcsalád", en: "EAISY Product Suite" },
            },
        ],
    },

    /* ─── Featured Case Studies ─── */
    featured: {
        title: { hu: "Kiemelt Projektjeink", en: "Featured Projects" },
        subtitle: {
            hu: "Íme néhány a legsikeresebb megvalósításainkból.",
            en: "Here are some of our most successful implementations.",
        },
        viewAll: { hu: "Összes sikertörténet →", en: "View All Case Studies →" },
    },

    /* ─── Contact ─── */
    contact: {
        title: { hu: "Lépj velünk kapcsolatba", en: "Get in Touch" },
        subtitle: {
            hu: "Készen állsz arra, hogy vállalkozásod szintet lépjen? Töltsd ki az űrlapot, és szakértőink hamarosan felveszik veled a kapcsolatot.",
            en: "Ready to take your business to the next level? Fill out the form and our experts will get back to you shortly.",
        },
        name: { hu: "Név", en: "Name" },
        namePlaceholder: { hu: "A neved", en: "Your name" },
        company: { hu: "Cégnév", en: "Company Name" },
        companyPlaceholder: { hu: "A céged neve", en: "Your company name" },
        email: { hu: "Email", en: "Email" },
        emailPlaceholder: { hu: "pelda@ceg.hu", en: "example@company.com" },
        phone: { hu: "Telefonszám", en: "Phone Number" },
        phonePlaceholder: { hu: "+36...", en: "+1..." },
        message: { hu: "Üzenet", en: "Message" },
        messagePlaceholder: {
            hu: "Miben segíthetjük?",
            en: "How can we help?",
        },
        privacy: {
            hu: 'Elfogadom az <a href="/adatvedelem">adatvédelmi tájékoztatót</a>.',
            en: 'I accept the <a href="/en/privacy">privacy policy</a>.',
        },
        marketingConsent: {
            hu: "Hozzájárulok, hogy a ThinkAI marketing célú megkereséseket küldjön számomra.",
            en: "I agree to receive marketing communications from ThinkAI.",
        },
        submit: { hu: "KÜLDÉS", en: "SUBMIT" },
    },

    /* ─── Footer ─── */
    footer: {
        copyright: {
            hu: "ThinkAI Kft. Minden jog fenntartva.",
            en: "ThinkAI Ltd. All rights reserved.",
        },
        siteMap: { hu: "Oldaltérkép", en: "Sitemap" },
        legal: { hu: "Jogi", en: "Legal" },
        privacy: { hu: "Adatvédelem", en: "Privacy Policy" },
        cookiePolicy: { hu: "Cookie szabályzat", en: "Cookie Policy" },
        sitemapPage: { hu: "Oldaltérkép", en: "Sitemap" },
    },

    /* ─── Cookie Consent ─── */
    cookie: {
        text: {
            hu: "Ez a weboldal sütiket használ a felhasználói élmény javítása érdekében. Az \"Elfogadom\" gombra kattintva hozzájárul a sütik használatához.",
            en: "This website uses cookies to improve your experience. By clicking \"Accept\" you consent to the use of cookies.",
        },
        privacyLink: {
            hu: "Adatvédelmi tájékoztató →",
            en: "Privacy Policy →",
        },
        accept: { hu: "Elfogadom", en: "Accept" },
        decline: { hu: "Elutasítom", en: "Decline" },
    },

    /* ─── Case Studies Listing ─── */
    caseStudiesPage: {
        title: { hu: "Sikertörténeteink", en: "Our Case Studies" },
        subtitle: {
            hu: "Valós projektek, mérhető eredmények.",
            en: "Real projects, measurable results.",
        },
        all: { hu: "Összes", en: "All" },
        readMore: { hu: "Részletek →", en: "Read More →" },
    },

    /* ─── Case Study Detail ─── */
    caseStudyDetail: {
        backLink: { hu: "← Vissza a sikertörténetekhez", en: "← Back to Case Studies" },
        challenge: { hu: "Feladat", en: "Challenge" },
        challengeHint: { hu: "Az eredeti kihívás", en: "The original challenge" },
        solution: { hu: "Megoldás", en: "Solution" },
        solutionHint: { hu: "Az AI-alapú rendszer képességei", en: "AI-powered system capabilities" },
        results: { hu: "Eredmények", en: "Results" },
        contactCta: { hu: "Hasonló megoldást szeretnél?", en: "Want a similar solution?" },
        contactBtn: { hu: "Kérj ajánlatot →", en: "Get a Quote →" },
    },
} as const;

/* ─── Helper: t(key, lang) ─── */
export function t(
    val: { hu: string; en: string } | string,
    lang: Lang,
): string {
    if (typeof val === "string") return val;
    return val[lang];
}

export default dict;
