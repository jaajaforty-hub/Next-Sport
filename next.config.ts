import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "15mb", // Set to your desired max size (e.g., '5mb', '20mb')
    },
  },
};

export default nextConfig;
