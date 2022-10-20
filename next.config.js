/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    // Enabled by default in development, disabled in production to reduce file size,
    // setting this will override the default for all environments.
    styledComponents: true,
  },
};

module.exports = nextConfig;
