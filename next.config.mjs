/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    NEXT_PUBLIC_BASE_URL: 'http://localhost:4000',
  },
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'cdn.dummyjson.com',
    }],
  },
};

export default nextConfig;
