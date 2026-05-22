import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.selflondon.co",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
