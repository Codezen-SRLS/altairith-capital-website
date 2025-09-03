import React from "react";
import useSiteMetadata from "../hooks/useSiteMetadata";

const SEO = ({
    title: titleProp,
    description: descriptionProp,
    image: imageProp,
    pathname = "/",
    robots = "index, follow",
}) => {
    const metadata = useSiteMetadata();
    const title = titleProp || metadata.title;
    const description = descriptionProp || metadata.description;
    const image = imageProp || metadata.image;
    const url = `${metadata.siteUrl.replace(/\/$/, "")}${
        pathname.startsWith("/") ? pathname : `/${pathname}`
    }`;
    const twitterCreator = metadata.twitterUsername;
    const twitterSite = metadata.companyTwitter;

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: metadata.title,
        legalName: metadata.legalName,
        url: metadata.siteUrl,
        logo: `${metadata.siteUrl.replace(/\/$/, "")}/static/logo.svg`,
        description: metadata.description,
        founder: {
            "@type": "Person",
            name: metadata.author,
            jobTitle: "Chairman & Founder",
        },
        sameAs: [
            "https://www.linkedin.com/company/altairith-capital",
            twitterSite
                ? `https://twitter.com/${twitterSite.replace(/^@/, "")}`
                : undefined,
        ].filter(Boolean),
        contactPoint: {
            "@type": "ContactPoint",
            contactType: "general inquiry",
            url: `${metadata.siteUrl.replace(/\/$/, "")}/#contact`,
        },
        address: {
            "@type": "PostalAddress",
            addressCountry: "IT",
            streetAddress: undefined,
            addressLocality: undefined,
            postalCode: undefined,
            addressRegion: undefined,
        },
        industry: "Investment Management",
        specialty: [
            "Financial Assets",
            "Intellectual Property",
            "IP Licensing",
            "Capital Allocation",
            "Long-Horizon Investing",
        ],
    };

    return (
        <>
            <html lang="en" />
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={metadata.keywords} />
            <meta name="author" content={metadata.author} />
            <meta name="robots" content={robots} />
            <meta name="language" content="English" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, viewport-fit=cover"
            />
            <meta name="theme-color" content="#001560" />
            <link rel="canonical" href={url} />

            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />
            <meta property="og:site_name" content={metadata.title} />
            <meta property="og:image" content={image} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta
                property="og:image:alt"
                content={`${metadata.title} - Lead from Above, Build to Endure`}
            />
            <meta property="og:locale" content="en_US" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
            {twitterCreator ? (
                <meta name="twitter:creator" content={twitterCreator} />
            ) : null}
            {twitterSite ? <meta name="twitter:site" content={twitterSite} /> : null}

            {/* Misc */}
            <meta name="geo.region" content="IT" />
            <meta name="geo.placename" content="Italy" />
            <meta name="distribution" content="global" />
            <meta name="rating" content="general" />
            <meta name="revisit-after" content="7 days" />

            {/* Structured Data */}
            <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        </>
    );
};

export default SEO;
