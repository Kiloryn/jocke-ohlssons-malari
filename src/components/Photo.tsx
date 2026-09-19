import Image, { type ImageProps } from "next/image";

// Responsive srcset is handled by the global custom loader
// (src/lib/imageLoader.ts, wired in next.config.ts).
export function Photo(props: ImageProps) {
  return <Image {...props} />;
}
