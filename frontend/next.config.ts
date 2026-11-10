import type { NextConfig } from "next";

const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/auth/:path*",
        destination: "http://localhost:8000/auth/:path*",
      },
    ];
  },
};

export default nextConfig;

