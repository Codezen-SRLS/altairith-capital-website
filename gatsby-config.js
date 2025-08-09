/**
 * @type {import('gatsby').GatsbyConfig}
 */

require(`dotenv`).config({ path: `.env` });

module.exports = {
    siteMetadata: {
        title: `Altairith Capital`,
        description: `Long-horizon holding company specializing in cybersecurity, web3, and fintech investments. Founded by Christian Vari, security researcher and inventor.`,
        siteUrl: `https://www.altairith.capital`,
        author: `Christian Vari`,
        keywords: `Altairith Capital, Christian Vari, Codezen, holding company, web3 security, fintech capital, blockchain security, strategic holding company, patent inventor, security research`,
        image: `https://www.altairith.capital/static/altairith-og-image.jpg`,
        twitterUsername: `@christianvari_`,
        companyTwitter: `@altairithcapital`,
        contactEmail: `info@altairith.capital`,
        contactAddress: `Via Traiana 10, 00037 Segni (RM), Italy`,
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
