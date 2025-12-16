/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: true,
  // Temporarily disable turbopack to fix font loading issue
  turbo: false,
};

export default nextConfig;
