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
                    {title} is a private long-horizon holding company. We turn operating
                    profits into durable value-owning financial assets and creating
                    licensable intellectual property with disciplined, long-term
                    allocation.
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
