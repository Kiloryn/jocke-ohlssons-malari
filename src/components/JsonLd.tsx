import { SITE_URL } from "@/lib/siteUrl";
import { site } from "@/lib/content";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "HousePainter",
    name: site.name,
    url: SITE_URL,
    image: `${SITE_URL}${site.teamPhoto.src}`,
    logo: `${SITE_URL}/logo/jocke-ohlssons-maleri-logotyp.png`,
    telephone: site.phoneHref.replace("tel:", ""),
    email: site.email,
    foundingDate: site.founded,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.location,
      addressRegion: "Västra Götaland",
      addressCountry: "SE",
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: site.region },
      { "@type": "Country", name: "Sweden" },
    ],
    sameAs: [site.instagram],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
