import type { ImageProps } from "next/image";

// Renders project photos as plain <img> with a hand-built srcset pointing at
// pre-resized variants in /public. This bypasses the image optimizer entirely
// (vinext has no custom-loader support, and the Cloudflare Images re-encode
// made photos look softer). Every current usage is `fill`-based.
const PHOTOS: Record<string, { intrinsic: number; variants: number[] }> = {
  "/projekt/trapanel-fasad-utomhus.webp": { intrinsic: 2200, variants: [800, 1600] },
  "/projekt/tapetsering-fototapet-landskapsmotiv.webp": { intrinsic: 1649, variants: [800, 1600] },
  "/projekt/snickerier-paneler-inomhus.webp": { intrinsic: 1500, variants: [800] },
  "/projekt/malning-vaggar-tak.webp": { intrinsic: 1155, variants: [800] },
  "/projekt/spackling-underarbete.webp": { intrinsic: 1179, variants: [800] },
  "/projekt/tapetsering-monster-inomhus.webp": { intrinsic: 1179, variants: [800] },
  "/projekt/tegel-puts-fasad.webp": { intrinsic: 1179, variants: [800] },
  "/om-oss/jocke-ohlssons-maleri-teamet.webp": { intrinsic: 1179, variants: [800] },
};

function srcSetFor(src: string): string | undefined {
  const photo = PHOTOS[src];
  if (!photo) return undefined;
  const dot = src.lastIndexOf(".");
  const base = src.slice(0, dot);
  const ext = src.slice(dot);
  const parts = photo.variants.map((v) => `${base}-${v}${ext} ${v}w`);
  parts.push(`${src} ${photo.intrinsic}w`);
  return parts.join(", ");
}

export function Photo(props: ImageProps) {
  const { src, alt, sizes, className, style, priority, fill } = props;
  if (!fill) {
    throw new Error("Photo currently only supports the fill mode");
  }
  const resolvedSrc = typeof src === "string" ? src : src.src;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={resolvedSrc}
      srcSet={srcSetFor(resolvedSrc)}
      sizes={sizes}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      className={`absolute inset-0 h-full w-full ${className ?? ""}`}
      style={style}
    />
  );
}
