/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Only add basePath for GitHub Pages, not for custom domain
  ...(process.env.GITHUB_PAGES === 'true' && {
    assetPrefix: '/gaurav--portfolio',
    basePath: '/gaurav--portfolio',
  }),
}

export default nextConfig
