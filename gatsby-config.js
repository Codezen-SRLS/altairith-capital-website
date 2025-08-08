/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
        title: `Altairith Capital - Strategic Investment & Cybersecurity Excellence`,
        description: `Long-horizon holding company specializing in cybersecurity, web3, and fintech investments. Founded by Christian Vari, security researcher and inventor.`,
        siteUrl: `https://www.altairith.capital`,
        author: `Christian Vari`,
        keywords: `Altairith Capital, Christian Vari, cybersecurity investment, web3 security, fintech capital, blockchain security, Codezen, venture capital, strategic holding company, patent inventor, security research`,
        image: `https://www.altairith.capital/static/altairith-og-image.jpg`,
        twitterUsername: `@christianvari_`,
        companyTwitter: `@altairithcapital`,
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
    ],
};
