import Image, { type ImageProps } from "next/image";

/** Serve the already-optimized WebP as-is. On Workers, `/_next/image` re-encodes through Cloudflare Images and looks softer than local. */
export function Photo(props: ImageProps) {
  return <Image unoptimized {...props} />;
}
