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
                            Named for Altair, a beacon star, and the sharp precision of
                            algorithms, <strong>Altairith Capital</strong> symbolizes
                            elevated insight and disciplined execution. <br /> <br />
                            <strong>Altairith Capital</strong> is a private holding
                            company focused on turning operating profits into durable
                            value. We allocate across two pillars: financial assets that
                            compound and intellectual property that can be built, owned,
                            and licensed. The mandate: long horizon, disciplined risk,
                            clear execution.
                        </p>
                        <div className="industries-grid" role="list">
                            {[
                                "Finance",
                                "Intellectual Property",
                                "Operating Companies",
                                "Licensing & Commercialization",
                                "Research & Development",
                                "Philanthropy",
                            ].map((item) => (
                                <div key={item} className="industry-item" role="listitem">
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>

                <Section id="chairman" eyebrow="message from the" title="Chairman" dark>
                    <div className="two-col">
                        <div>
                            <p>
                                I'm Christian Vari, and I founded Altairith Capital with a
                                clear vision: to bridge cutting-edge expertise with
                                strategic capital stewardship.
                            </p>
                            <p>
                                Altairith Capital is how I compound the outcomes of the
                                companies I build, channeling profits into assets and
                                ideas that last.
                            </p>
                            <p>
                                I’m a security researcher, inventor, and founder of
                                Codezen. Building taught me that innovation matters, but
                                discipline wins.
                            </p>
                            <p>
                                That’s the playbook here: invest in resilient financial
                                assets and create intellectual property that can be
                                licensed, scaled, and endure.
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
                            Turn operating profits into compounding assets, finance we own
                            and intellectual property we build, through disciplined,
                            long-term allocation.
                        </p>
                        <div className="industries-grid" role="list">
                            {[
                                "Ownership Mindset",
                                "Operational Excellence",
                                "Risk Management",
                                "Sustainability",
                            ].map((item) => (
                                <div key={item} className="industry-item" role="listitem">
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>

                <Section id="values" title="Values" eyebrow="our">
                    <div className="values-grid">
                        {[
                            {
                                t: "Excellence",
                                d: "We uphold top-tier performance and resilience in every endeavor.",
                                i: "star",
                            },
                            {
                                t: "Accompaniment",
                                d: "We pursue regional and global opportunity in harmony, fostering meaningful partnership and progress.",
                                i: "arrow",
                            },
                            {
                                t: "Flexibility",
                                d: "We design adaptive strategies that preserve discipline while allowing strategic pivoting",
                                i: "flex",
                            },
                            {
                                t: "Persistence",
                                d: "We build enduring value, methodically and sustainably",
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
                        © {new Date().getFullYear()} {title} • All rights reserved •
                        Altairith Capital Holding S.r.l.
                    </div>
                </footer>
            </main>
        </>
    );
};

export default IndexPage;

export const Head = () => <SEO pathname="/" />;
