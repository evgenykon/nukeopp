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
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "docs",
        "path": "./src/docs/"
      }
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, 
    "gatsby-plugin-mdx",
    `gatsby-transformer-geojson`,
  ]
};

export default config;
