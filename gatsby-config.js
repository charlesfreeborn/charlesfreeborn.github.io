module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
    {
        resolve: `gatsby-plugin-canonical-urls`,
        options: {
          siteUrl: `https://www.freeborncharles.com`,
        },
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Freeborn Charles Blog`,
    author: `Charles freeborn`,
    description: `My cogitations on the modern web development - JavaScript, React, Gatsby and the JAMstack`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/charliecodes`,
      },
      {
        name: `github`,
        url: `https://github.com/charlesfreeborn`,
      },
    ],
  },
}

// module.exports = {
//   plugins: [`gatsby-plugin-sharp`, 
//   `gatsby-transformer-sharp`,
//   {
//     resolve: `gatsby-source-filesystem`,
//     options: {
//       path: `${__dirname}/assets/`,
//       // path: `/Users/charlesfreeborn/Documents/GitHub/charlesfreeborn.github.io/content/assets`,
//     },
//   },
// ],
  
// }