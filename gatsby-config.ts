import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: ``,
    siteUrl: `https://nukeopp.effus.repl.co`
  },
  plugins: [
    "gatsby-plugin-sass", 
    "gatsby-plugin-react-helmet", 
    "gatsby-plugin-sitemap", 
    "gatsby-transformer-remark", 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      }
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, 
  ]
};

export default config;
