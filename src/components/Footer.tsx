import { Globe, MapPin, Phone } from "lucide-react";
import { InstagramIcon } from "@/components/InstagramIcon";
import { navLinks, site } from "@/lib/content";

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-accent-dark text-white/50">
      <div className="container-page py-12 md:py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <p className="font-serif text-xl text-white/90">{site.name}</p>
            <p className="mt-2 max-w-[260px] text-[0.85rem] leading-relaxed text-white/45">
              {site.tagline}. Uppdrag i {site.serviceArea.toLowerCase()}.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["F-skatt", "Försäkrade", "Elbilar"].map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[0.72rem] font-medium text-white/55"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2 lg:col-start-6">
            <p className="mb-4 text-[0.72rem] font-medium uppercase tracking-[0.14em] text-white/35">
              Sidor
            </p>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[0.88rem] text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <p className="mb-4 text-[0.72rem] font-medium uppercase tracking-[0.14em] text-white/35">
              Kontakt
            </p>
            <ul className="flex flex-col gap-3.5">
              <li>
                <a
                  href={site.phoneHref}
                  className="group flex items-center gap-3 text-[0.88rem] transition-colors hover:text-white"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/8 transition-colors group-hover:bg-accent-muted/25">
                    <Phone className="h-4 w-4 stroke-accent-muted" strokeWidth={1.5} />
                  </span>
                  {site.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-[0.88rem]">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/8">
                  <MapPin className="h-4 w-4 stroke-accent-muted" strokeWidth={1.5} />
                </span>
                {site.location}, {site.region}
              </li>
              <li className="flex items-center gap-3 text-[0.88rem]">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/8">
                  <Globe className="h-4 w-4 stroke-accent-muted" strokeWidth={1.5} />
                </span>
                {site.serviceArea}
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="lg:col-span-3">
            <p className="mb-4 text-[0.72rem] font-medium uppercase tracking-[0.14em] text-white/35">
              Följ oss
            </p>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded border border-white/12 bg-white/5 px-4 py-3 text-[0.88rem] transition-colors hover:border-white/25 hover:bg-white/10 hover:text-white"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#f09433]/30 via-[#e6683c]/20 to-[#bc1888]/30">
                <InstagramIcon className="h-4 w-4 text-white/90" />
              </span>
              <span>
                <span className="block font-medium text-white/80 group-hover:text-white">
                  Instagram
                </span>
                <span className="text-[0.8rem] text-white/45">
                  {site.instagramHandle}
                </span>
              </span>
            </a>
            <a
              href="#kontakt"
              className="btn-primary mt-5 inline-block text-[0.8rem]"
            >
              Begär offert
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-8 text-[0.78rem] text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. Alla rättigheter förbehållna.
          </p>
          <p>
            {site.location} · {site.region} · {site.serviceArea}
          </p>
        </div>
      </div>
    </footer>
  );
}
