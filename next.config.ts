import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoBase = "/josh-20260602-aruza-rebuild";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "docs",
  trailingSlash: true,
  basePath: isProd ? repoBase : "",
  assetPrefix: isProd ? repoBase + "/" : "",
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? repoBase : "",
  },
};

export default nextConfig;
