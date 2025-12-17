import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bytegrad.com',
        pathname: '/course-assets/images/**',
      },
    ],
    // unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/events",
        destination: "/events/all",
        permanent: false, // use true if the redirect is permanent
      },
    ];
  },
};

export default nextConfig;
