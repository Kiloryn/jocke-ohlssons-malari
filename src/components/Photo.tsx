import type { ImageProps } from "next/image";

// Plain <img> — no next/image optimizer, no srcset downscales.
// The 800/1600 files in /public were being selected into larger frames
// (hero object-cover in a tall box, tjänster at ~55vw), which made the
// photos look soft. Serve the master file so the browser never upscales
// from a thumbnail.
export function Photo(props: ImageProps) {
  const { src, alt, className, style, priority, fill } = props;
  if (!fill) {
    throw new Error("Photo currently only supports the fill mode");
  }
  const resolvedSrc = typeof src === "string" ? src : src.src;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={resolvedSrc}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      className={`absolute inset-0 h-full w-full ${className ?? ""}`}
      style={style}
    />
  );
}
