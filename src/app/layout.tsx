import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/content";

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
  title: `${site.name} – Måleri i Skaraborg & hela Sverige`,
  description: `${site.name} i Töreboda. Inomhus- och utomhusmålning, fasadrenovering och tapetsering. Bas i Skaraborg — uppdrag i hela Sverige.`,
  openGraph: {
    title: site.name,
    description: `Måleri med bas i ${site.region}. Uppdrag i hela Sverige.`,
    locale: "sv_SE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className={`${dmSans.variable} ${playfair.variable}`}>
      <body className="antialiased">
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
