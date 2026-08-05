import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  outputFileTracingRoot: process.cwd(),
  poweredByHeader: false,
  reactStrictMode: true,
  allowedDevOrigins: ["192.168.100.26"],
  images: {
    formats: ["image/avif", "image/webp"]
  }
};

export default nextConfig;
