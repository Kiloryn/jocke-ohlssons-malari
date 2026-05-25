export const site = {
  name: "Jocke Ohlssons Måleri",
  tagline: "Måleriföretag · Töreboda · Skaraborg",
  phone: "073–593 67 98",
  phoneHref: "tel:+46735936798",
  location: "Töreboda",
  region: "Skaraborg",
  serviceArea: "Hela Sverige",
  instagram: "https://www.instagram.com/jockeohlssonsmaleri/",
  instagramHandle: "@jockeohlssonsmaleri",
} as const;

export const navLinks = [
  { href: "#tjanster", label: "Tjänster" },
  { href: "#om", label: "Om oss" },
  { href: "#projekt", label: "Projekt" },
  { href: "#kontakt", label: "Kontakt" },
] as const;

export const hero = {
  label: site.tagline,
  title: "Målerier som",
  titleEmphasis: "håller",
  titleSuffix: ", länge.",
  subtitle:
    "Vi utför alla typer av målningsuppdrag — med bas i Skaraborg och uppdrag i hela Sverige. Stor omsorg om hantverk, resultat och miljö.",
  stats: ["Skaraborg", "Hela Sverige", "F-skatt", "Elbilar"],
} as const;

export const services = {
  label: "Vad vi gör",
  title: "Alla typer av",
  titleLine2: "målningsuppdrag",
  lead: "Oavsett om det gäller ett rum eller en hel fastighet hjälper vi dig från start till mål.",
  items: [
    {
      title: "Inomhusmålning",
      description:
        "Väggar, tak och snickerier — vi ger dina rum ett nytt och friskt uttryck.",
      icon: "home" as const,
    },
    {
      title: "Utomhusmålning",
      description:
        "Panel, fönster och fasader som skyddas mot väder och bevarar husets karaktär.",
      icon: "building" as const,
    },
    {
      title: "Fasadrenovering",
      description:
        "Puts, ytbehandling och ommålning för fasader som håller i generationer.",
      icon: "layers" as const,
    },
    {
      title: "Tapetsering",
      description:
        "Klassisk tapet eller modernt mönster — vi hjälper dig välja och monterar med precision.",
      icon: "heart" as const,
    },
  ],
} as const;

export const about = {
  label: "Om oss",
  title: "Lokalt förankrade",
  titleLine2: "i Skaraborg",
  paragraphs: [
    "Jocke Ohlssons Måleri är ett hantverksföretag från Töreboda med rötterna djupt i Västergötland. Vi tar uppdrag hos privatpersoner och företag — främst i Skaraborg, men även i hela Sverige när projektet kräver det.",
    "Kvalitet och noggrannhet genomsyrar varje projekt — från förberedelse till sista penseldrag. Vi värnar dessutom om klimatet och framför våra fordon som elbilar.",
  ],
  badges: ["F-skatt", "Försäkrade", "Elbilar", "Töreboda", "Hela Sverige"],
  photoPlaceholder: "Foto på Jocke — ersätts med riktigt foto",
} as const;

export const projects = {
  label: "Utfört arbete",
  title: "Våra projekt",
  lead: "Bilderna nedan ersätts med Jockes egna projektfoton.",
  placeholders: [
    { label: "Inomhus", gridSpan: { md: "md:col-span-7 md:row-span-6", sm: "sm:col-span-2" } },
    { label: "Utomhus", gridSpan: { md: "md:col-span-5 md:row-span-4", sm: "" } },
    { label: "Fasad", gridSpan: { md: "md:col-span-2 md:row-span-4", sm: "" } },
    { label: "Tapet", gridSpan: { md: "md:col-span-2 md:row-span-4", sm: "" } },
    { label: "Inomhus", gridSpan: { md: "md:col-span-2 md:row-span-4", sm: "" } },
    { label: "Utomhus", gridSpan: { md: "md:col-span-8 md:row-span-4", sm: "sm:col-span-2" } },
  ],
} as const;

export const process = {
  label: "Så jobbar vi",
  title: "Från första samtal",
  titleLine2: "till färdigt resultat",
  steps: [
    {
      step: "01",
      title: "Kostnadsfri offert",
      description:
        "Du berättar vad du vill ha gjort — vi återkommer med ett tydligt förslag och pris.",
    },
    {
      step: "02",
      title: "Förberedelse",
      description:
        "Skydd, slipning och grundning. Rätt underlag ger ett resultat som håller länge.",
    },
    {
      step: "03",
      title: "Målning",
      description:
        "Vi arbetar strukturerat och rent, med kvalitetsfärger anpassade för ditt projekt.",
    },
    {
      step: "04",
      title: "Avslut & genomgång",
      description:
        "Vi lämnar arbetsplatsen städad och går igenom resultatet tillsammans med dig.",
    },
  ],
} as const;

export const trust = {
  label: "Tryggt val",
  title: "Det du kan lita på",
  items: [
    {
      title: "F-skatt & försäkring",
      description: "Registrerat företag med ansvarsförsäkring — tryggt för dig som beställare.",
    },
    {
      title: "Hela Sverige",
      description:
        "Bas i Töreboda och Skaraborg. Större uppdrag tar vi i hela landet.",
    },
    {
      title: "Miljö & elbilar",
      description:
        "Vattenbaserade färger där det går, och elbilar för att minska utsläpp på väg till dig.",
    },
  ],
} as const;

export const faq = {
  label: "Vanliga frågor",
  title: "Frågor & svar",
  items: [
    {
      question: "Tar ni uppdrag utanför Skaraborg?",
      answer:
        "Ja. Vi har vår bas i Töreboda och tar de flesta uppdrag i Skaraborg, men utför även projekt i hela Sverige.",
    },
    {
      question: "Hur får jag en offert?",
      answer:
        "Ring oss eller fyll i formuläret nedan. Beskriv kort typ av jobb, var och ungefär när — vi återkommer inom ett arbetsdygn.",
    },
    {
      question: "Vad kostar det att måla om?",
      answer:
        "Det beror på yta, skick och material. Vi ger alltid en kostnadsfri offert innan arbetet startar.",
    },
    {
      question: "Hur lång tid tar ett projekt?",
      answer:
        "Ett rum kan ta några dagar, större fasader flera veckor. Vi planerar tillsammans så du vet vad som gäller.",
    },
  ],
} as const;

export const contact = {
  label: "Kontakt",
  title: "Redo att",
  titleLine2: "komma igång?",
  lead: "Hör av dig för en kostnadsfri offert. Vi återkommer inom ett arbetsdygn.",
  rows: [
    { key: "Telefon", value: site.phone, href: site.phoneHref },
    { key: "Verksamhetsort", value: `${site.location}, ${site.region}` },
    { key: "Uppdragsområde", value: site.serviceArea },
    { key: "Instagram", value: site.instagramHandle, href: site.instagram },
  ],
  formNotice:
    "Formuläret kopplas upp snart — ring oss så länge, så hjälper vi dig direkt.",
} as const;
