/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.sanity.io"],
    unoptimized: true,
  },
  output: "export",
};

module.exports = nextConfig;
