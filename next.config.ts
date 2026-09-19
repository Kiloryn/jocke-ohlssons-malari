import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    loader: "custom",
    loaderFile: "./src/lib/imageLoader.ts",
    qualities: [75, 90],
    // The loader maps these srcset widths to pre-resized files in /public
    // (800/1600 variants + original).
    deviceSizes: [800, 1600, 2200],
  },
  // Allow HMR/dev resources when the dev server is opened via the LAN IP
  // (e.g. http://192.168.1.231:3000 from another device on the network).
  allowedDevOrigins: ["192.168.1.231"],
};

export default nextConfig;
