import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Section from "../components/Section";
import Icon from "../components/Icon";
import "../styles/global.css";
import SEO from "../components/SEO";
import useSiteMetadata from "../hooks/useSiteMetadata";

const IndexPage = () => {
    const siteMeta = useSiteMetadata();
    const { title } = siteMeta;
    return (
        <>
            <Header />
            <main>
                <Hero />

                <Section id="about" eyebrow="about" title="Altairith">
                    <div className="two-col">
                        <p>
                            The name <strong>Altairith</strong> fuses Altair, the soaring
                            star and eagle, with algorithmic rigor. We operate as a
                            long‑horizon holding company that keeps a clear, elevated
                            perspective over complex systems while executing with
                            precision, structure, and resilience.
                        </p>
                        <div className="industries-grid" role="list">
                            {["Cybersecurity", "Intellectual Property", "Education"].map(
                                (item) => (
                                    <div
                                        key={item}
                                        className="industry-item"
                                        role="listitem"
                                    >
                                        {item}
                                    </div>
                                ),
                            )}
                        </div>
                    </div>
                </Section>

                <Section id="chairman" eyebrow="message from the" title="Chairman" dark>
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

                <Section id="mission" title="Mission" eyebrow="our">
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
                                d: "Build to endure and compound value methodically over the long term.",
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

                <Section id="contact" title="Get in touch" eyebrow="">
                    <div className="contact-cards">
                        <div className="value-card">
                            <div className="value-icon" aria-hidden="true">
                                <Icon name="pin" size={18} />
                            </div>
                            <h3>Address</h3>
                            <p>{siteMeta.contactAddress}</p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon" aria-hidden="true">
                                <Icon name="mail" size={18} />
                            </div>
                            <h3>Email</h3>
                            <p>
                                <a href={`mailto:${siteMeta.contactEmail}`}>
                                    {siteMeta.contactEmail}
                                </a>
                            </p>
                        </div>
                    </div>
                </Section>

                <footer className="footer">
                    <div className="container">
                        © {new Date().getFullYear()} {title} • All rights reserved
                    </div>
                </footer>
            </main>
        </>
    );
};

export default IndexPage;

export const Head = () => <SEO pathname="/" />;
