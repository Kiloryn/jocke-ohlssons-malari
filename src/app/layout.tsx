import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/content";
import { SITE_URL } from "@/lib/siteUrl";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${site.name} – Måleri i Skaraborg & hela Sverige`,
  description: `${site.name} i Töreboda, sedan ${site.founded}. Inomhus- och utomhusmålning, tapetsering och fasad. Bas i Skaraborg — uppdrag i hela Sverige.`,
  icons: {
    icon: [
      {
        url: "/logo/jocke-ohlssons-maleri-logotyp.png",
        type: "image/png",
      },
    ],
    apple: "/logo/jocke-ohlssons-maleri-logotyp.png",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: site.name,
    description: `Måleri med bas i ${site.region}. Uppdrag i hela Sverige. Sedan ${site.founded}.`,
    locale: "sv_SE",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: site.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: `Måleri med bas i ${site.region}. Uppdrag i hela Sverige.`,
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className={`${dmSans.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <JsonLd />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[200] focus:rounded focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
        >
          Hoppa till innehåll
        </a>
        {children}
      </body>
    </html>
  );
}
