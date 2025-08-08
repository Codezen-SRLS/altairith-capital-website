import React from "react";

const Section = ({ id, eyebrow, title, children, dark = false }) => {
    return (
        <section id={id} className={`section ${dark ? "dark" : ""}`}>
            <div className="section-decor" aria-hidden="true" />
            <div className="container">
                <div className="section-inner">
                    {(eyebrow || title) && (
                        <div className="section-header">
                            {eyebrow ? (
                                <div className="section-eyebrow">{eyebrow}</div>
                            ) : null}
                            {title ? <h2 className="section-title">{title}</h2> : null}
                        </div>
                    )}
                    <div className="section-content">{children}</div>
                </div>
            </div>
        </section>
    );
};

export default Section;
