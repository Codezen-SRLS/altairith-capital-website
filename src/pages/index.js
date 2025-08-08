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
                        <p>
                            We built Altairith to preserve and compound capital—financial
                            and intellectual. Our philosophy is simple: lead from above,
                            act with precision, and build what lasts. That means pairing
                            strategic oversight with disciplined execution across the
                            sectors we serve.
                        </p>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <img
                                alt="Chairman portrait"
                                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop"
                                style={{
                                    width: "min(380px, 100%)",
                                    maxHeight: 420,
                                    objectFit: "cover",
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

export const Head = () => <title>Altairith Capital</title>;
