export type SiteInfo = {
  name: string;
  tagline: string;
  phone: string;
  phoneHref: string;
  email: string;
  emailHref: string;
  location: string;
  region: string;
  serviceArea: string;
  instagram: string;
  instagramHandle: string;
  founded: string;
  logo: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  teamPhoto: {
    src: string;
    alt: string;
    position: string;
  };
};

export const site: SiteInfo = {
  name: "Jocke Ohlssons Måleri",
  tagline: "Måleriföretag · Töreboda · Skaraborg",
  phone: "073–593 67 98",
  phoneHref: "tel:+46735936798",
  email: "joakim@ohlssonsmaleri.se",
  emailHref: "mailto:joakim@ohlssonsmaleri.se",
  location: "Töreboda",
  region: "Skaraborg",
  serviceArea: "Hela Sverige",
  instagram: "https://www.instagram.com/jockeohlssonsmaleri/",
  instagramHandle: "@jockeohlssonsmaleri",
  founded: "1974",
  logo: {
    src: "/logo/jocke-ohlssons-maleri-logotyp.webp",
    alt: "Jocke Ohlssons Måleri logotyp",
    width: 521,
    height: 521,
  },
  teamPhoto: {
    src: "/om-oss/jocke-ohlssons-maleri-teamet.webp",
    alt: "Teamet på Jocke Ohlssons Måleri vid elbilarna i Töreboda",
    position: "50% 42%",
  },
};

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
  stats: ["Sedan 1974", "Skaraborg", "Hela Sverige", "Elbilar"],
  image: {
    src: "/projekt/trapanel-fasad-utomhus.webp",
    alt: "Röd trähusfasad målad utomhus i Skaraborg",
  },
} as const;

export type ServiceImage = {
  src: string;
  alt: string;
  position?: string;
};

export type ServiceItem = {
  title: string;
  description: string;
  images: ServiceImage[];
};

export type ServiceGroup = {
  id: string;
  title: string;
  items: ServiceItem[];
};

export const services = {
  label: "Vad vi gör",
  title: "Inomhus och",
  titleLine2: "utomhus",
  lead: "Oavsett om det gäller ett rum eller en hel fasad hjälper vi dig från underarbete till färdigt resultat.",
  groups: [
    {
      id: "inomhus",
      title: "Inomhusmålning",
      items: [
        {
          title: "Tapetsering",
          description:
            "Vi hjälper dig skapa rätt känsla i rummet med professionell tapetsering. Mönstrat, enfärgat eller fototapet — vi har kunskapen som krävs för ett resultat på bästa möjliga nivå.",
          images: [
            {
              src: "/projekt/tapetsering-monster-inomhus.webp",
              alt: "Tapetsering med mönstrad tapet i rum med gungstol",
              position: "50% 48%",
            },
            {
              src: "/projekt/tapetsering-fototapet-landskapsmotiv.webp",
              alt: "Fototapet med landskapsmotiv i offentlig miljö",
              position: "50% 50%",
            },
          ],
        },
        {
          title: "Snickerier och paneler",
          description:
            "Vi målar alla typer av snickerier och paneler inomhus. Kanske en spegelpanel eller en platsbyggd bokhylla? Handmålat, sprutmålat, modern färg av högsta kvalitet eller linoljefärg — vi har kunskapen att förverkliga dina drömmar.",
          images: [
            {
              src: "/projekt/snickerier-paneler-inomhus.webp",
              alt: "Grönmålade snickerier och paneler i hall",
              position: "50% 50%",
            },
          ],
        },
        {
          title: "Målning väggar och tak",
          description:
            "Vi hjälper dig att sätta färg på ditt rum med fokus på ett jämt, snyggt och hållbart resultat. Oavsett om du bara vill fräscha upp eller ge ditt hem ett helt nytt uttryck ser vi till att arbetet utförs noggrant från första penseldrag till färdigt resultat.",
          images: [
            {
              src: "/projekt/malning-vaggar-tak.webp",
              alt: "Nymålade vita väggar och tak i rum med högt i tak",
              position: "50% 44%",
            },
          ],
        },
        {
          title: "Spackling",
          description:
            "Ett noggrant underarbete är grunden till ett proffsigt slutresultat. Oavsett om det är spackling av gips eller bredspackling är det här vi lägger grunden för ett utförande av absolut kvalitet.",
          images: [
            {
              src: "/projekt/spackling-underarbete.webp",
              alt: "Spackling av väggar och tak som underarbete",
              position: "50% 48%",
            },
          ],
        },
      ],
    },
    {
      id: "utomhus",
      title: "Utomhus",
      items: [
        {
          title: "Träpanel",
          description:
            "Vi målar och behandlar träfasader utomhus med noggrant förarbete och rätt produkter för ett hållbart och snyggt resultat. Vi hjälper dig att ge fasaden ett fräscht utseende samtidigt som fasaden skyddas mot väder och vind.",
          images: [
            {
              src: "/projekt/trapanel-fasad-utomhus.webp",
              alt: "Målning av träfasad på rött hus utomhus",
              position: "58% 50%",
            },
          ],
        },
        {
          title: "Tegel, puts och andra material",
          description:
            "Vi utför även målning på tegelfasad, puts, socklar, plåtfasader och andra utvändiga ytor. Med rätt förarbete och anpassade produkter skapar vi ett hållbart och enhetligt uttryck.",
          images: [
            {
              src: "/projekt/tegel-puts-fasad.webp",
              alt: "Målning av tegelfasad utomhus",
              position: "50% 50%",
            },
          ],
        },
      ],
    },
  ] satisfies ServiceGroup[],
} as const;

export const turnkey = {
  label: "Helhetslösningar",
  title: "Vi håller i hela projektet",
  lead: "Förutom måleri kan vi samordna övriga hantverkare — så du har en kontakt genom hela jobbet.",
  items: [
    { title: "Snickare", description: "Snickeri och kompletterande byggarbete." },
    { title: "Elektriker", description: "Elarbeten i samband med renovering." },
    { title: "Rörmokare", description: "VVS när badrum eller kök ingår." },
  ],
} as const;

export const about = {
  label: "Om oss",
  title: "Lokalt förankrade",
  titleLine2: "i Skaraborg",
  paragraphs: [
    `Jocke Ohlssons Måleri är ett hantverksföretag från Töreboda, verksamt sedan ${site.founded}. Vi tar uppdrag hos privatpersoner och företag — främst i Skaraborg, men även i hela Sverige när projektet kräver det.`,
    "Kvalitet och noggrannhet genomsyrar varje projekt — från förberedelse till sista penseldrag. Vi värnar dessutom om klimatet och framför våra fordon som elbilar.",
  ],
  badges: ["Sedan 1974", "F-skatt", "Försäkrade", "Elbilar", "Töreboda"],
} as const;

export const projects = {
  label: "Utfört arbete",
  title: "Våra projekt",
  lead: "Ett urval av jobb — inomhus och utomhus.",
  placeholders: [
    {
      label: "Träfasad",
      category: "Utomhusmålning",
      gridSpan: { md: "md:col-span-8 md:row-span-6", sm: "sm:col-span-2" },
      imageSrc: "/projekt/trapanel-fasad-utomhus.webp",
      alt: "Röd trähusfasad efter utomhusmålning",
    },
    {
      label: "Fototapet",
      gridSpan: { md: "md:col-span-4 md:row-span-6", sm: "" },
      imageSrc: "/projekt/tapetsering-fototapet-landskapsmotiv.webp",
      alt: "Uppsättning av fototapet med landskapsmotiv",
      category: "Tapetsering",
      position: "50% 50%",
    },
    {
      label: "Tapetsering",
      category: "Inomhus",
      gridSpan: { md: "md:col-span-4 md:row-span-5", sm: "" },
      imageSrc: "/projekt/tapetsering-monster-inomhus.webp",
      alt: "Mönstrad tapet i privatbostad",
    },
    {
      label: "Snickerier",
      category: "Inomhus",
      gridSpan: { md: "md:col-span-4 md:row-span-5", sm: "" },
      imageSrc: "/projekt/snickerier-paneler-inomhus.webp",
      alt: "Målade paneler och snickerier inomhus",
    },
    {
      label: "Väggar & tak",
      category: "Inomhusmålning",
      gridSpan: { md: "md:col-span-4 md:row-span-5", sm: "" },
      imageSrc: "/projekt/malning-vaggar-tak.webp",
      alt: "Inomhusmålning av väggar och tak",
    },
    {
      label: "Spackling",
      category: "Underarbete",
      gridSpan: { md: "md:col-span-6 md:row-span-5", sm: "" },
      imageSrc: "/projekt/spackling-underarbete.webp",
      alt: "Spackling som underarbete inför målning",
    },
    {
      label: "Tegel & puts",
      category: "Utomhusmålning",
      gridSpan: { md: "md:col-span-6 md:row-span-5", sm: "sm:col-span-2" },
      imageSrc: "/projekt/tegel-puts-fasad.webp",
      alt: "Utomhusmålning av tegelfasad",
    },
  ] satisfies ProjectItem[],
} as const;

export type ProjectItem = {
  label: string;
  category: string;
  gridSpan: { md: string; sm?: string };
  imageSrc?: string;
  alt?: string;
  position?: string;
  location?: string;
  year?: string;
};

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
      question: "Kan ni hålla i hela projektet?",
      answer:
        "Ja. Utöver måleri kan vi samordna snickare, elektriker och rörmokare så du har en kontakt genom hela jobbet.",
    },
    {
      question: "Hur får jag en offert?",
      answer:
        "Ring oss, mejla eller fyll i formuläret nedan. Beskriv kort typ av jobb, var och ungefär när — vi återkommer inom ett arbetsdygn.",
    },
    {
      question: "Vad kostar det att måla om?",
      answer:
        "Det beror på yta, skick och material. Vi ger alltid en kostnadsfri offert innan arbetet startar.",
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
    { key: "E-post", value: site.email, href: site.emailHref },
    { key: "Verksamhetsort", value: `${site.location}, ${site.region}` },
    { key: "Uppdragsområde", value: site.serviceArea },
    { key: "Instagram", value: site.instagramHandle, href: site.instagram },
  ],
  formNotice:
    "Formuläret kopplas upp snart — ring oss så länge, så hjälper vi dig direkt.",
} as const;
