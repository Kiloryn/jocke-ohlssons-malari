import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90],
  },
  // Allow HMR/dev resources when the dev server is opened via the LAN IP
  // (e.g. http://192.168.1.231:3000 from another device on the network).
  allowedDevOrigins: ["192.168.1.231"],
};

export default nextConfig;
