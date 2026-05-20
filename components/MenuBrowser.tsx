"use client";

import { useState } from "react";
import { Container } from "./Container";
import { SectionTitle } from "./SectionTitle";
import { MenuCard } from "./MenuCard";
import type { MenuItem, MenuCategory } from "@/lib/menu";

type Props = {
  categories: readonly MenuCategory[];
  categoryTaglines: Record<MenuCategory, string>;
  items: MenuItem[];
};

export function MenuBrowser({ categories, categoryTaglines, items }: Props) {
  const [active, setActive] = useState<MenuCategory>(categories[0]);

  const filtered = items.filter((m) => m.category === active);
  const isCompact = active === "Beverages" || active === "Side Orders";
  const gridClass = isCompact
    ? "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10"
    : "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 md:gap-x-8 gap-y-12 md:gap-y-14";

  return (
    <>
      {/* Sticky category tabs */}
      <nav
        aria-label="Menu categories"
        className="sticky top-[76px] z-40 bg-white/95 backdrop-blur-md border-b border-tg-black/10 shadow-sm"
      >
        <Container>
          <ul className="flex items-center gap-1 overflow-x-auto tg-scrollbar-hide py-2">
            {categories.map((c) => (
              <li key={c} className="shrink-0">
                <button
                  onClick={() => setActive(c)}
                  className={`relative px-4 py-2.5 font-display uppercase tracking-[0.18em] text-xs whitespace-nowrap transition-colors duration-200 rounded-full ${
                    active === c
                      ? "bg-tg-orange text-white"
                      : "text-tg-black/60 hover:text-tg-black hover:bg-tg-black/5"
                  }`}
                >
                  {c}
                </button>
              </li>
            ))}
          </ul>
        </Container>
      </nav>

      {/* Spice legend */}
      <div className="border-b border-tg-black/10 bg-white/95 backdrop-blur-md">
        <Container>
          <div className="flex items-center gap-4 py-2 text-[11px] text-tg-black/50 font-display uppercase tracking-[0.18em]">
            <span>Spice:</span>
            <span className="flex items-center gap-1 text-tg-orange">▲<span className="text-tg-black/50 normal-case tracking-normal font-sans font-normal">Mild</span></span>
            <span className="flex items-center gap-1 text-tg-orange">▲▲<span className="text-tg-black/50 normal-case tracking-normal font-sans font-normal">Medium</span></span>
            <span className="flex items-center gap-1 text-tg-orange">▲▲▲<span className="text-tg-black/50 normal-case tracking-normal font-sans font-normal">Spicy</span></span>
          </div>
        </Container>
      </div>

      {/* Category content, key forces re-mount + fade-in on tab switch */}
      <section
        key={active}
        className="bg-white py-20 md:py-28 min-h-[60vh] opacity-0 [animation:var(--animate-fade-up)]"
        style={{ animationDuration: "0.5s" }}
      >
        <Container>
          <div className="mb-12 md:mb-16 max-w-3xl">
            <SectionTitle eyebrow={active} tone="black">
              {categoryTaglines[active]}
            </SectionTitle>
          </div>

          <div className={gridClass}>
            {filtered.map((item) => (
              <MenuCard key={item.slug} item={item} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
