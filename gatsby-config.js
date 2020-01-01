require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: "심재철의 기술 블로그",
    description: `1day && 1commit`,
    author: `Sim Jae Cheol`
  },
  plugins: [
    `gatsby-plugin-playground`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/posts`
      }
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1200
            }
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false
            }
          },
          {
            resolve: `gatsby-remark-emoji`,
            options: {
              emojiConversion: "shortnameToUnicode",
              ascii: true
            }
          }
        ]
      }
    },
    "gatsby-plugin-sass"
    // {
    //   resolve: 'gatsby-source-pixabay',
    //   options: {
    //     key: process.env.PIXABAY_API_KEY,
    //     q: 'candy',
    //     category: 'background',
    //     editors_choice: true,
    //     safesearch: true,
    //     orientation: 'horizontal',
    //     min_width: '1080',
    //     per_page: 200
    //   }
    // }
  ]
};
