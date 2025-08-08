import React from "react";
import { Link } from "gatsby";
import Header from "../components/Header";

const NotFoundPage = () => {
    return (
        <>
            <Header isHome={false} />
            <main>
                <section className="hero" role="banner" aria-labelledby="not-found-title">
                    <div className="hero-illustration" aria-hidden="true" />
                    <div className="container hero-inner">
                        <div className="hero-brand">
                            <span>Altairith Capital</span>
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
                            <a href="mailto:info@altairith.capital" className="btn">
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
        <html lang="en" />
        <title>404 — Altairith Capital</title>
        <meta
            name="description"
            content="404 Page not found — Altairith Capital. The page you’re looking for doesn’t exist or was moved."
        />
        <meta name="robots" content="noindex, nofollow" />
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
    </>
);
