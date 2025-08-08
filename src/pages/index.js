import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Section from "../components/Section";
import Icon from "../components/Icon";
import "../styles/global.css";

const IndexPage = () => {
    return (
        <>
            <Header />
            <main>
                <Hero />

                <Section id="about" eyebrow="about" title="Altairith">
                    <div className="two-col">
                        <p>
                            The name <strong>Altairith</strong> fuses Altair—the soaring
                            star and eagle—with algorithmic rigor. We operate as a
                            long‑horizon holding company that keeps a clear, elevated
                            perspective over complex systems while executing with
                            precision, structure, and resilience.
                        </p>
                        <div>
                            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                {[
                                    "Healthcare & Education",
                                    "Food & Beverage",
                                    "Energy & Industrial",
                                    "Agriculture & Manufacturing",
                                    "Hospitality & Entertainment",
                                    "Information Technology",
                                ].map((item) => (
                                    <li
                                        key={item}
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 12,
                                            marginBottom: 10,
                                        }}
                                    >
                                        <span
                                            style={{
                                                width: 10,
                                                height: 10,
                                                background: "var(--color-gold)",
                                                borderRadius: 999,
                                                display: "inline-block",
                                            }}
                                        />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Section>

                <Section id="chairman" eyebrow="message from the" title="chairman" dark>
                    <div className="two-col">
                        <div>
                            <p>
                                I'm Christian Vari, and I founded Altairith Capital with a
                                clear vision: to bridge cutting-edge cybersecurity
                                expertise with strategic capital stewardship. As a
                                security researcher specializing in web3 and fintech
                                technologies, I've dedicated my career to understanding
                                the intersection of innovation and security.
                            </p>
                            <p>
                                Through founding Codezen, our cybersecurity firm, and my
                                work as an inventor holding various patents, I've seen
                                firsthand how technological innovation and disciplined
                                execution create lasting value.
                            </p>
                            <p>
                                At Altairith, we combine this deep technical understanding
                                with strategic oversight to build resilient systems that
                                protect and compound both financial and intellectual
                                capital across the sectors we serve.
                            </p>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <img
                                alt="Christian Vari, Chairman"
                                src={require("../images/christian_vari.jpeg").default}
                                style={{
                                    width: "min(380px, 100%)",
                                    maxHeight: 420,
                                    objectFit: "cover",
                                    objectPosition: "top",
                                    borderRadius: 14,
                                    border: "1px solid var(--color-border)",
                                    boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
                                }}
                            />
                        </div>
                    </div>
                </Section>

                {/* CEO section removed per request */}

                <Section id="mission" title="mission" eyebrow="our">
                    <div className="two-col">
                        <p>
                            Steward growth with an ownership mindset. We unite capital,
                            cybersecurity insight, and operating discipline to compound
                            durable value across the region and beyond.
                        </p>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                            {[
                                "Ownership Mindset",
                                "Operational Excellence",
                                "Shared Success",
                                "Sustainability",
                            ].map((p) => (
                                <li key={p} style={{ marginBottom: 10 }}>
                                    <span
                                        style={{
                                            color: "var(--color-gold)",
                                            marginRight: 8,
                                        }}
                                    >
                                        —
                                    </span>
                                    {p}
                                </li>
                            ))}
                        </ul>
                    </div>
                </Section>

                <Section id="vision" title="Vision" eyebrow="our">
                    <p>
                        To be a steady, high‑altitude partner—combining the eagle’s
                        perspective with algorithmic precision—to safeguard and grow the
                        assets entrusted to us.
                    </p>
                </Section>

                <Section id="values" title="Values" eyebrow="our">
                    <div className="values-grid">
                        {[
                            {
                                t: "Excellence",
                                d: "Pursue high standards and resilient performance in every investment.",
                                i: "star",
                            },
                            {
                                t: "Accompaniment",
                                d: "Move in lockstep with regional and global progress to unlock opportunity.",
                                i: "arrow",
                            },
                            {
                                t: "Flexibility",
                                d: "Design options that fit diverse strategies while preserving discipline.",
                                i: "flex",
                            },
                            {
                                t: "Persistence",
                                d: "Build to endure—compound value methodically over the long term.",
                                i: "infinity",
                            },
                        ].map((v) => (
                            <div key={v.t} className="value-card">
                                <div className="value-icon" aria-hidden="true">
                                    <Icon name={v.i} size={18} />
                                </div>
                                <h3>{v.t}</h3>
                                <p>{v.d}</p>
                            </div>
                        ))}
                    </div>
                </Section>

                {/* Sectors section removed per request */}

                <Section id="contact" title="Get in Touch" eyebrow="">
                    <div className="contact-grid">
                        <div className="contact-card">
                            <h3>Office</h3>
                            <p>
                                placeholder
                                <br />
                                placeholder
                            </p>
                            <p>
                                <br />E info@altairith.capital
                            </p>
                        </div>
                        <div className="contact-card">
                            <h3>Send us a direct message</h3>
                            <form
                                className="contact-form"
                                name="contact"
                                method="POST"
                                data-netlify="true"
                            >
                                <input type="hidden" name="form-name" value="contact" />
                                <div className="row">
                                    <div>
                                        <label htmlFor="name">Name</label>
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email">Email</label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            required
                                        />
                                    </div>
                                </div>
                                <div style={{ marginTop: 12 }}>
                                    <label htmlFor="message">Message</label>
                                    <textarea id="message" name="message" required />
                                </div>
                                <div className="actions">
                                    <button className="btn btn-primary" type="submit">
                                        Send
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </Section>

                <footer className="footer">
                    <div className="container">
                        © {new Date().getFullYear()} Altairith Capital • All rights
                        reserved
                    </div>
                </footer>
            </main>
        </>
    );
};

export default IndexPage;

export const Head = () => (
    <>
        <html lang="en" />
        <title>Altairith Capital - Strategic Investment & Cybersecurity Excellence</title>

        {/* Basic Meta Tags */}
        <meta
            name="description"
            content="Altairith Capital is a long-horizon holding company specializing in cybersecurity, web3, and fintech investments. Founded by Christian Vari, inventor and security researcher, we combine strategic oversight with technical expertise to build resilient systems that protect and compound capital."
        />
        <meta
            name="keywords"
            content="Altairith Capital, Christian Vari, cybersecurity investment, web3 security, fintech capital, blockchain security, Codezen, venture capital, strategic holding company, patent inventor, security research"
        />
        <meta name="author" content="Christian Vari" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <meta name="theme-color" content="#001560" />
        <link rel="canonical" href="https://www.altairith.capital/" />

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta
            property="og:title"
            content="Altairith Capital - Strategic Investment & Cybersecurity Excellence"
        />
        <meta
            property="og:description"
            content="Long-horizon holding company specializing in cybersecurity, web3, and fintech investments. Founded by Christian Vari, security researcher and inventor."
        />
        <meta property="og:url" content="https://www.altairith.capital/" />
        <meta property="og:site_name" content="Altairith Capital" />
        <meta
            property="og:image"
            content="https://www.altairith.capital/static/altairith-og-image.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
            property="og:image:alt"
            content="Altairith Capital - Lead from Above, Build to Endure"
        />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
            name="twitter:title"
            content="Altairith Capital - Strategic Investment & Cybersecurity Excellence"
        />
        <meta
            name="twitter:description"
            content="Long-horizon holding company specializing in cybersecurity, web3, and fintech investments. Founded by Christian Vari, security researcher and inventor."
        />
        <meta
            name="twitter:image"
            content="https://www.altairith.capital/static/altairith-og-image.jpg"
        />
        <meta
            name="twitter:image:alt"
            content="Altairith Capital - Lead from Above, Build to Endure"
        />
        <meta name="twitter:creator" content="@christianvari_" />
        <meta name="twitter:site" content="@altairithcapital" />

        {/* Additional SEO Meta Tags */}
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="7 days" />

        {/* Structured Data - JSON-LD */}
        <script type="application/ld+json">
            {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "Altairith Capital",
                url: "https://www.altairith.capital",
                logo: "https://www.altairith.capital/static/logo.svg",
                description:
                    "Strategic investment holding company specializing in cybersecurity, web3, and fintech sectors.",
                founder: {
                    "@type": "Person",
                    name: "Christian Vari",
                    jobTitle: "Chairman & Founder",
                    description:
                        "Security researcher specializing in web3 and fintech technologies, inventor with various patents, founder of Codezen cybersecurity firm.",
                },
                sameAs: [
                    "https://www.linkedin.com/company/altairith-capital",
                    "https://twitter.com/altairithcapital",
                ],
                contactPoint: {
                    "@type": "ContactPoint",
                    contactType: "general inquiry",
                    url: "https://www.altairith.capital/#contact",
                },
                address: {
                    "@type": "PostalAddress",
                    addressCountry: "US",
                },
                industry: "Investment Management",
                specialty: ["Cybersecurity", "Web3", "Fintech", "Blockchain Security"],
            })}
        </script>
    </>
);
