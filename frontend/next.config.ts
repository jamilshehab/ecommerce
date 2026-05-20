import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost", // Or '127.0.0.1'
        port: "1337", // Ensure this matches your Strapi port
        pathname: "/uploads/**",
      },
    ],
    // Required if Next.js blocks private IP requests (Next.js 14+)
    dangerouslyAllowLocalIP: true,
  },
};

export default nextConfig;
