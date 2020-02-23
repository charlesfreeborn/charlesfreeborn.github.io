module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
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
