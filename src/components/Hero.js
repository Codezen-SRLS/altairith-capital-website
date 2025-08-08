import React from "react";

const Hero = () => {
    return (
        <section className="hero" role="banner">
            <div className="hero-illustration" aria-hidden="true" />
            <div className="container hero-inner">
                <div className="hero-brand">
                    <span>Altairith Capital</span>
                </div>
                <h1 className="hero-title">
                    Lead from <span className="accent-gold">Above</span>.<br />
                    Build to <span className="accent-gold">Endure</span>.
                </h1>
                <p className="hero-subtitle">
                    Altairith blends the clarity of Altair—the soaring eagle—with the
                    discipline of algorithms. We steward financial and intellectual
                    capital with long-term stability, applying cybersecurity and
                    blockchain expertise to act with precision and design resilient
                    systems.
                </p>
                <div className="cta-row">
                    <a href="#about" className="btn btn-primary">
                        Explore
                    </a>
                    <a href="#contact" className="btn">
                        Contact Us
                    </a>
                </div>
            </div>
            <div className="scroll-indicator">scroll</div>
        </section>
    );
};

export default Hero;
