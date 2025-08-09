import { graphql, useStaticQuery } from "gatsby";

const useSiteMetadata = () => {
    const { site } = useStaticQuery(graphql`
        query SiteMetaQuery {
            site {
                siteMetadata {
                    title
                    description
                    siteUrl
                    author
                    keywords
                    image
                    twitterUsername
                    companyTwitter
                    contactEmail
                    contactAddress
                }
            }
        }
    `);
    return site.siteMetadata;
};

export default useSiteMetadata;
