/**
 * @type {import('gatsby').GatsbyConfig}
 */

require(`dotenv`).config({ path: `.env` });

module.exports = {
    siteMetadata: {
        title: `Altairith Capital`,
        description: `Private long-horizon holding company. We turn operating profits into durable value by allocating into financial assets and building licensable intellectual property. Founded by security researcher and inventor Christian Vari.`,
        siteUrl: `https://www.altairith.capital`,
        author: `Christian Vari`,
        keywords: `Altairith Capital, Altairith Capital Holding S.r.l., Christian Vari, private holding company, long-horizon investing, financial assets, intellectual property, IP licensing, capital allocation, disciplined investing, Codezen`,
        image: `https://www.altairith.capital/static/altairith-og-image.jpg`,
        twitterUsername: `@christianvari_`,
        companyTwitter: `@altairithcapital`,
        contactEmail: `info@altairith.capital`,
        contactAddress: `Via Traiana 10, 00037 Segni (RM), Italy`,
        legalName: `Altairith Capital Holding S.r.l.`,
    },
    plugins: [
        // "gatsby-plugin-google-gtag",
        "gatsby-plugin-image",
        "gatsby-plugin-sitemap",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: "src/images/logo.svg",
                name: "Altairith Capital",
                short_name: "Altairith",
                start_url: "/",
                background_color: "#001560",
                theme_color: "#c19d6c",
                display: "standalone",
            },
        },
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
            __key: "images",
        },
        {
            resolve: `gatsby-plugin-robots-txt`,
            options: {
                host: `https://www.altairith.capital`,
                sitemap: `https://www.altairith.capital/sitemap-index.xml`,
                policy: [{ userAgent: `*`, allow: `/` }],
            },
        },
        {
            resolve: `gatsby-plugin-clarity`,
            options: {
                clarity_project_id: process.env.CLARITY_ID,
            },
        },
    ],
};
