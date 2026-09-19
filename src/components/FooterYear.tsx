"use client";

import { useEffect, useState } from "react";

/**
 * The year must be computed in the browser. During the Cloudflare/vinext
 * build, prerendered pages are generated with the clock frozen at the Unix
 * epoch, so a build-time `new Date().getFullYear()` gets baked in as 1970.
 */
export function FooterYear() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return <span suppressHydrationWarning>{year ?? ""}</span>;
}
