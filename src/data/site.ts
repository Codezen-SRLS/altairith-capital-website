export const site = {
    title: "Altairith Capital",
    tagline: "Lead from Above. Build to Endure.",
    description:
        "Private, long-horizon holding company. We build, invest in and hold companies, and reinvest their profits into financial assets and licensable intellectual property. Founded by security researcher and inventor Christian Vari.",
    url: "https://www.altairith.capital",
    legalName: "Altairith Capital Holding S.r.l.",
    foundingDate: "2025",
    author: "Christian Vari",
    email: "info@altairith.capital",
    address: {
        street: "Via Traiana 10",
        postalCode: "00037",
        locality: "Segni",
        region: "RM",
        country: "IT",
        full: "Via Traiana 10, 00037 Segni (RM), Italy",
    },
    authorTwitter: "@christianvari_",
    linkedin: "https://www.linkedin.com/company/altairith-capital",
    linkedinLabel: "Altairith Capital Holding",
    ogImage: "/altairith-og-image.jpg",
    logo: "/icon-512.png",
};

export const hero = {
    lines: ["Lead from Above.", "Build to Endure."],
    intro: "Altairith Capital is a private, long-horizon holding company. We build companies, invest in others, and reinvest the profits into financial assets and intellectual property we own and license.",
    meta: ["Aquila · The Eagle", "α Aql · Altair", "RA 19h 50m 47s · Dec +08° 52′"],
};

export const about = {
    lead: "Named for Altair, a beacon star, and the sharp precision of algorithms, Altairith Capital symbolizes elevated insight and disciplined execution.",
    body: "Altairith Capital builds companies, starting with Codezen, and invests in others. Their operating profits are allocated across two pillars: financial assets that compound, and intellectual property that can be built, owned and licensed. The mandate: long horizon, disciplined risk, clear execution.",
    /** Sectors the group is active in (not exhaustive). */
    sectors: ["Artificial Intelligence", "Cybersecurity", "Web3 & Blockchain", "Fintech"],
    areas: [
        "Finance",
        "Intellectual Property",
        "Operating Companies",
        "Licensing & Commercialization",
        "Research & Development",
        "Philanthropy",
    ],
};

export const chairman = {
    name: "Christian Vari",
    role: "Chairman & Founder",
    lead: "I'm Christian Vari, and I founded Altairith Capital with a clear vision: to bridge cutting-edge expertise with strategic capital stewardship.",
    body: [
        "Altairith Capital is how I compound the outcomes of the companies I build and invest in, channeling profits into assets and ideas that last.",
        "I’m a security researcher, inventor, and founder of Codezen, a smart contract security firm. Building taught me that innovation matters, but discipline wins.",
        "That’s the playbook here: invest in resilient financial assets and create intellectual property that can be licensed, scaled, and endure.",
    ],
};

export const mission = {
    before: "Turn operating profits into compounding assets, ",
    highlight: "finance we own and intellectual property we build,",
    after: " through disciplined, long-term allocation.",
    pillars: ["Ownership Mindset", "Operational Excellence", "Risk Management", "Sustainability"],
};

export const group = {
    title: "The Constellation",
    intro: "Altairith Capital sits at the center. Around it are the companies we build and invest in; their profits flow back into the holding.",
    companies: [
        {
            name: "Codezen",
            domain: "codezen.tech",
            url: "https://codezen.tech",
            desc: "Smart contract security audits and blockchain consulting for EVM, Solana and Cosmos.",
        },
        { name: "Stealth", domain: "Undisclosed", url: null, desc: "In stealth." },
        { name: "Stealth", domain: "Undisclosed", url: null, desc: "In stealth." },
    ],
};

export const values = [
    { title: "Excellence", body: "We uphold top-tier performance and resilience in every endeavor." },
    {
        title: "Accompaniment",
        body: "We pursue regional and global opportunity in harmony, fostering meaningful partnership and progress.",
    },
    {
        title: "Flexibility",
        body: "We design adaptive strategies that preserve discipline while allowing strategic pivoting.",
    },
    { title: "Persistence", body: "We build enduring value, methodically and sustainably." },
];

export const nav = [
    { href: "#about", label: "About" },
    { href: "#chairman", label: "Chairman" },
    { href: "#mission", label: "Mission" },
    { href: "#group", label: "Group" },
    { href: "#values", label: "Values" },
    { href: "#contact", label: "Contact" },
];

/** "01", "02", ... */
export const nn = (i: number) => String(i + 1).padStart(2, "0");
