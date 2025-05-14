import type { NextConfig } from "next";
import { serverIp } from "./hooks/url";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: serverIp,
        port: "8000",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
