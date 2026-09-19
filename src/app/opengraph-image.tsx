import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/lib/content";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logo = await readFile(
    join(process.cwd(), "public/logo/jocke-ohlssons-maleri-logotyp.png"),
  );
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px",
          background: "#f8f6f1",
          color: "#1a1a18",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 85% 15%, rgba(60,90,52,0.14) 0%, rgba(60,90,52,0.0) 55%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 22,
            background: "#3c5a34",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            gap: 40,
          }}
        >
          {/* OG canvas cannot use next/image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} alt="" width={168} height={168} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
              maxWidth: 820,
            }}
          >
            <div
              style={{
                fontSize: 22,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#3c5a34",
              }}
            >
              {site.tagline}
            </div>
            <div
              style={{
                fontSize: 64,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                fontWeight: 600,
              }}
            >
              {site.name}
            </div>
            <div
              style={{
                fontSize: 28,
                lineHeight: 1.35,
                color: "#64645e",
              }}
            >
              {`Måleri med bas i ${site.region}. Sedan ${site.founded}.`}
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
