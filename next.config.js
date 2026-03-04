/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',       // Static HTML export for GitHub Pages
  trailingSlash: true,    // Matches Gatsby's URL style (e.g. /hello-world/)
  images: {
    unoptimized: true,    // Required for static export
  },
};

module.exports = nextConfig;
