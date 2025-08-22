import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://placecats.com/**')],
  },
};

export default nextConfig;