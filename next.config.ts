import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const isProd = process.env.NODE_ENV === "production";
const repoBase = "/luxon-crypto-lab";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? repoBase : "",
  assetPrefix: isProd ? `${repoBase}/` : "",
  images: { unoptimized: true },
  trailingSlash: true,
  pageExtensions: ["ts", "tsx", "md", "mdx"],
};

const withMDX = createMDX({
  options: {
    remarkPlugins: ["remark-gfm"],
    rehypePlugins: [
      "rehype-slug",
      ["rehype-autolink-headings", { behavior: "wrap" }],
    ],
  },
});

export default withMDX(nextConfig);
