import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/HSK_PR",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
