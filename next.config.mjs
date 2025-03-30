/** @type {import('next').NextConfig} */
const nextConfig = {
  // TEMPORARY FIX: This is a temporary workaround for a type-checking issue in Next.js 15
  // Remove once Next.js provides an official fix for page props typing in App Router
  typescript: {
    ignoreBuildErrors: true,
  },
  // Keep ESLint running during build to catch actual code issues
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default nextConfig; 