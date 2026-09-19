// Global custom image loader (configured via images.loaderFile in next.config).
// Serves pre-resized variants from /public so each device downloads only the
// pixels it displays — without Cloudflare Images re-encoding, which softened
// the photos. Width candidates are pinned by images.deviceSizes.
// Only the photos listed below have variants; everything else passes through.
const VARIANT_WIDTHS: Record<string, number[]> = {
  "/projekt/trapanel-fasad-utomhus.webp": [800, 1600],
  "/projekt/tapetsering-fototapet-landskapsmotiv.webp": [800, 1600],
  "/projekt/snickerier-paneler-inomhus.webp": [800],
  "/projekt/malning-vaggar-tak.webp": [800],
  "/projekt/spackling-underarbete.webp": [800],
  "/projekt/tapetsering-monster-inomhus.webp": [800],
  "/projekt/tegel-puts-fasad.webp": [800],
  "/om-oss/jocke-ohlssons-maleri-teamet.webp": [800],
};

export default function photoLoader({
  src,
  width,
}: {
  src: string;
  width: number;
}): string {
  const variants = VARIANT_WIDTHS[src];
  if (!variants) return src;
  const dot = src.lastIndexOf(".");
  const base = src.slice(0, dot);
  const ext = src.slice(dot);
  const picked = variants.find((v) => width <= v);
  return picked ? `${base}-${picked}${ext}` : src;
}
