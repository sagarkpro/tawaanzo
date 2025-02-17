import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true
  },
  basePath: "/tawaanzo",
  assetPrefix: "/tawaanzo"
};

export default nextConfig;
