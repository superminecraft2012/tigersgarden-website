import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";
import { nav, primary, social, site, navCta } from "@/lib/site";
import { dishes } from "@/lib/dishes";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-tg-orange/20 bg-tg-black mt-32">
      <div className="tg-stripe h-2 opacity-80" aria-hidden />
      <Container as="div" className="py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-3" aria-label={`${site.name} home`}>
              <Image
                src={site.logoMark}
                alt=""
                width={48}
                height={48}
                className="h-12 w-12 object-contain"
              />
              <Image
                src={site.logoNav}
                alt={site.name}
                width={745}
                height={146}
                className="h-9 w-auto object-contain"
              />
            </Link>
            <p className="mt-6 text-tg-cream/70 max-w-md leading-relaxed">
              {site.description}
            </p>
            <div className="mt-8 flex gap-5">
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tg-tap tg-link font-display uppercase tracking-[0.2em] text-sm text-tg-cream/80"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-display uppercase tracking-[0.3em] text-sm text-tg-orange mb-5">
              Find Us
            </h4>
            <p className="font-display uppercase tracking-[0.15em] text-tg-cream text-sm">
              {primary.city}
            </p>
            <p className="text-tg-cream/60 text-sm mt-1">{primary.address}</p>
            <p className="text-tg-cream/60 text-sm">{primary.region}</p>
            <p className="text-tg-cream/60 text-sm italic mt-1">
              {primary.neighborhood}
            </p>
            <a
              href={primary.phoneHref} data-track="call_click"
              className="tg-tap tg-link block mt-4 text-tg-cream/80 text-sm"
            >
              {primary.phone}
            </a>
            <a
              href={primary.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="tg-tap tg-link block mt-1 text-tg-cream/80 text-sm"
            >
              Get directions
            </a>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-display uppercase tracking-[0.3em] text-sm text-tg-orange mb-5">
              Hours
            </h4>
            <ul className="space-y-2 text-sm">
              {primary.hours.business.map((h) => (
                <li key={h.days} className="text-tg-cream/70">
                  <span className="block font-display uppercase tracking-[0.1em] text-tg-cream text-xs">
                    {h.days}
                  </span>
                  <span className="tabular-nums">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-display uppercase tracking-[0.3em] text-sm text-tg-orange mb-5">
              Browse
            </h4>
            <ul className="space-y-3">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    data-track={n.href === "/menu" ? "menu_click" : undefined}
                    className="tg-tap tg-link text-tg-cream/80 hover:text-tg-cream text-sm"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={navCta.href} data-track="order_click"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tg-tap tg-link text-tg-orange hover:text-tg-ember text-sm font-display uppercase tracking-[0.15em]"
                >
                  {navCta.label}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Dish landing pages.
            These are deliberately kept out of the navbar, so this block and
            the links from /menu are the two contextual paths that stop them
            becoming orphans. Anchors are descriptive, not "click here". */}
        <div className="mt-16 pt-8 border-t border-tg-cream/10">
          <h4 className="font-display uppercase tracking-[0.3em] text-sm text-tg-orange mb-5">
            Popular Dishes
          </h4>
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {dishes.map((d) => (
              <li key={d.slug}>
                <Link
                  href={`/dishes/${d.slug}`}
                  className="tg-tap tg-link text-tg-cream/70 hover:text-tg-cream text-sm"
                >
                  {d.title}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/lao-food-vancouver-wa"
                className="tg-tap tg-link text-tg-cream/70 hover:text-tg-cream text-sm"
              >
                Lao Food in Vancouver, WA
              </Link>
            </li>
            <li>
              <Link
                href="/order-online"
                className="tg-tap tg-link text-tg-cream/70 hover:text-tg-cream text-sm"
              >
                Order Thai Takeout &amp; Delivery in Vancouver, WA
              </Link>
            </li>
            <li>
              <Link
                href="/dishes"
                className="tg-tap tg-link text-tg-orange hover:text-tg-ember text-sm"
              >
                All dish guides
              </Link>
            </li>
          </ul>
        </div>

        <div className="mt-16 pt-8 border-t border-tg-cream/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-tg-cream/40">
          <p>© {year} {site.name}. All rights reserved.</p>
          <p className="font-display uppercase tracking-[0.3em] text-tg-cream/40">
            {site.cuisine} · Vancouver, WA
          </p>
        </div>
      </Container>
    </footer>
  );
}
