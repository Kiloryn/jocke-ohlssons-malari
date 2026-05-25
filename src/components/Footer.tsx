import { Globe, MapPin, Phone } from "lucide-react";
import { InstagramIcon } from "@/components/InstagramIcon";
import { navLinks, site } from "@/lib/content";

const year = new Date().getFullYear();

const badges = ["F-skatt", "Försäkrade", "Elbilar"] as const;

function FooterColumnHeading({
  children,
  serif,
}: {
  children: React.ReactNode;
  serif?: boolean;
}) {
  return (
    <div className="flex min-h-[2.75rem] items-end">
      <p
        className={
          serif
            ? "font-serif text-[1.15rem] leading-tight text-white/95"
            : "text-[0.72rem] font-medium uppercase tracking-[0.14em] text-white/65"
        }
      >
        {children}
      </p>
    </div>
  );
}

function ContactRow({
  icon: Icon,
  children,
  href,
}: {
  icon: typeof Phone;
  children: React.ReactNode;
  href?: string;
}) {
  const content = (
    <>
      <Icon
        className="h-4 w-4 shrink-0 stroke-accent-muted"
        strokeWidth={1.5}
        aria-hidden
      />
      <span>{children}</span>
    </>
  );

  const className =
    "flex items-center gap-2.5 text-[0.88rem] text-white/75 transition-colors hover:text-white";

  if (href) {
    return (
      <li>
        <a href={href} className={className}>
          {content}
        </a>
      </li>
    );
  }

  return (
    <li className={className}>
      {content}
    </li>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/12 bg-accent-dark">
      <div className="container-page py-12 md:py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-10 lg:gap-y-0">
          {/* Kolumn 1 — varumärke */}
          <div className="flex flex-col">
            <FooterColumnHeading serif>{site.name}</FooterColumnHeading>
            <p className="mt-4 text-[0.85rem] leading-relaxed text-white/65">
              {site.tagline}. Uppdrag i {site.serviceArea.toLowerCase()}.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-white/20 bg-white/8 px-3 py-1 text-[0.72rem] font-medium text-white/75"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Kolumn 2 — sidor */}
          <div className="flex flex-col">
            <FooterColumnHeading>Sidor</FooterColumnHeading>
            <ul className="mt-4 flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[0.88rem] text-white/75 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolumn 3 — kontakt */}
          <div className="flex flex-col">
            <FooterColumnHeading>Kontakt</FooterColumnHeading>
            <ul className="mt-4 flex flex-col gap-3">
              <ContactRow icon={Phone} href={site.phoneHref}>
                {site.phone}
              </ContactRow>
              <ContactRow icon={MapPin}>
                {site.location}, {site.region}
              </ContactRow>
              <ContactRow icon={Globe}>{site.serviceArea}</ContactRow>
            </ul>
          </div>

          {/* Kolumn 4 — CTA & Instagram */}
          <div className="flex flex-col">
            <FooterColumnHeading>Kom igång</FooterColumnHeading>
            <div className="mt-4 flex flex-col gap-4">
              <a
                href="#kontakt"
                className="inline-flex w-full items-center justify-center rounded-[2px] bg-cream px-6 py-3.5 text-[0.875rem] font-semibold tracking-[0.02em] text-ink shadow-[0_2px_12px_rgba(0,0,0,0.2)] transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream lg:w-full"
              >
                Begär offert
              </a>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[0.85rem] text-white/70 transition-colors hover:text-white"
              >
                <InstagramIcon className="h-4 w-4 shrink-0" />
                <span>{site.instagramHandle}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/12 pt-8 text-[0.78rem] text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. Alla rättigheter förbehållna.
          </p>
          <p className="text-white/55">
            {site.location} · {site.region} · {site.serviceArea}
          </p>
        </div>
      </div>
    </footer>
  );
}
