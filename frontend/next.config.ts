import type { NextConfig } from "next";

const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/auth/:path*",
        destination: `${process.env.BACKEND_URL}/auth/:path*`,
      },
    ];
  },
};

export default nextConfig;

