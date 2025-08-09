import React from "react";
import { Link } from "gatsby";
import Header from "../components/Header";
import SEO from "../components/SEO";
import useSiteMetadata from "../hooks/useSiteMetadata";

const NotFoundPage = () => {
    const { title, contactEmail } = useSiteMetadata();
    return (
        <>
            <Header isHome={false} />
            <main>
                <section className="hero" role="banner" aria-labelledby="not-found-title">
                    <div className="hero-illustration" aria-hidden="true" />
                    <div className="container hero-inner">
                        <div className="hero-brand">
                            <span>{title}</span>
                        </div>
                        <h1 id="not-found-title" className="hero-title">
                            Page not found
                        </h1>
                        <p className="hero-subtitle">
                            The page you’re looking for doesn’t exist, was moved, or is
                            temporarily unavailable.
                        </p>
                        <div className="cta-row">
                            <Link to="/" className="btn btn-primary">
                                Go home
                            </Link>
                            <a
                                href={`mailto:${
                                    contactEmail || "info@altairith.capital"
                                }`}
                                className="btn"
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default NotFoundPage;

export const Head = () => (
    <>
        <SEO
            title="404 — Altairith Capital"
            robots="noindex, nofollow"
            pathname="/404/"
        />
    </>
);
