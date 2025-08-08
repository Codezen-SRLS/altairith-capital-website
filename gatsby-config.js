/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
        title: `Altairith Capital`,
        siteUrl: `https://www.altairith.com`,
    },
    plugins: [
        // "gatsby-plugin-google-gtag",
        "gatsby-plugin-image",
        "gatsby-plugin-sitemap",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: "src/images/icon.png",
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
