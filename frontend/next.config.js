/** @type {import('next').NextConfig} */

const isProd = (process.env.NODE_ENV || "production") === "production";
const assetPrefix = isProd ? "https://cbtzzang.shop" : "";

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: assetPrefix,
  images: {
    loader: "akamai",
    path: "",
  },
};

module.exports = nextConfig;
