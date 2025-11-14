import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bytegrad.com',
        // pathname: '/course-assets/projects/evento/**',
      },
    ],
    // domains: ['bytegrad.com'], // Alternative way to allow images from specific domains
  },
};

export default nextConfig;
