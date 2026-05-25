import { InstagramIcon } from "@/components/InstagramIcon";
import { site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-4 bg-accent-dark px-6 py-8 text-[0.8rem] text-white/45 md:px-10">
      <span className="font-serif text-base text-white/85">{site.name}</span>
      <span>
        {site.location} · {site.region}
      </span>
      <a
        href={site.phoneHref}
        className="transition-colors hover:text-white/85"
      >
        {site.phone}
      </a>
      <a
        href={site.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 transition-colors hover:text-white/85"
      >
        <InstagramIcon className="h-4 w-4" />
        {site.instagramHandle}
      </a>
    </footer>
  );
}
