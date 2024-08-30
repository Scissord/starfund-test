/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_BASE_URL: 'http://localhost:3000',
  },
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'cdn.dummyjson.com',
    }],
  },
};

export default nextConfig;
