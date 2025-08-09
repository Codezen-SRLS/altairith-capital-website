import React from "react";
import useSiteMetadata from "../hooks/useSiteMetadata";

const Hero = () => {
    const { title } = useSiteMetadata();
    return (
        <section className="hero" role="banner">
            <div className="hero-illustration" aria-hidden="true" />
            <div className="container hero-inner">
                <div className="hero-brand">
                    <span>{title}</span>
                </div>
                <h1 className="hero-title">
                    Lead from <span className="accent-gold">Above</span>.<br />
                    Build to <span className="accent-gold">Endure</span>.
                </h1>
                <p className="hero-subtitle">
                    {title} is a long-horizon holding company merging cybersecurity,
                    blockchain, and fintech expertise. Founded by Christian Vari, we bring
                    algorithmic discipline and strategic vision to manage and grow both
                    financial and intellectual capital with resilience and precision.
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
