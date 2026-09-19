import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Project photos bypass the optimizer entirely (Photo.tsx renders plain
    // <img> with pre-resized srcset variants). Only the logos go through
    // next/image, marked unoptimized at their call sites.
    qualities: [75, 90],
  },
  // Allow HMR/dev resources when the dev server is opened via the LAN IP
  // (e.g. http://192.168.1.231:3000 from another device on the network).
  allowedDevOrigins: ["192.168.1.231"],
};

export default nextConfig;
