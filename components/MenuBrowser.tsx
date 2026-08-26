import { Container } from "./Container";
import { SectionTitle } from "./SectionTitle";
import { MenuCard } from "./MenuCard";
import type { MenuItem, MenuCategory } from "@/lib/menu";

type Props = {
  categories: readonly MenuCategory[];
  categoryTaglines: Record<MenuCategory, string>;
  items: MenuItem[];
};

export const categoryAnchor = (c: string) =>
  c.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

/**
 * Renders EVERY category section into the DOM.
 *
 * This was previously a client component that held the active category in
 * state and rendered only that one section, which put 12 of 69 dishes in the
 * HTML (17%) and left the other 57 dish pages reachable only by clicking a
 * tab — invisible to a crawler. The category bar is now anchor links into
 * server-rendered sections, so the whole menu and every dish link is present
 * on load with no JavaScript.
 */
export function MenuBrowser({ categories, categoryTaglines, items }: Props) {
  return (
    <>
      {/* Sticky category nav — anchor links, not tabs */}
      <nav
        aria-label="Menu categories"
        className="sticky top-16 sm:top-[76px] z-40 bg-white/95 backdrop-blur-md border-b border-tg-black/10 shadow-sm"
      >
        <Container>
          <ul className="flex items-center gap-1 overflow-x-auto tg-scrollbar-hide py-2 px-1 -mx-1">
            {categories.map((c) => (
              <li key={c} className="shrink-0">
                <a
                  href={`#${categoryAnchor(c)}`}
                  data-track="menu_click"
                  className="relative flex min-h-[44px] items-center px-4 py-3 font-display uppercase tracking-[0.18em] text-xs whitespace-nowrap transition-colors duration-200 rounded-full touch-manipulation text-tg-black/60 hover:text-tg-black hover:bg-tg-black/5"
                >
                  {c}
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </nav>

      {/* Spice legend */}
      <div className="border-b border-tg-black/10 bg-white/95 backdrop-blur-md">
        <Container>
          <div className="flex items-center gap-4 py-2 text-xs text-tg-black/50 font-display uppercase tracking-[0.18em]">
            <span>Spice:</span>
            <span className="flex items-center gap-1 text-tg-orange">▲<span className="text-tg-black/50 normal-case tracking-normal font-sans font-normal">Mild</span></span>
            <span className="flex items-center gap-1 text-tg-orange">▲▲<span className="text-tg-black/50 normal-case tracking-normal font-sans font-normal">Medium</span></span>
            <span className="flex items-center gap-1 text-tg-orange">▲▲▲<span className="text-tg-black/50 normal-case tracking-normal font-sans font-normal">Spicy</span></span>
          </div>
        </Container>
      </div>

      {categories.map((category) => {
        const filtered = items.filter((m) => m.category === category);
        if (filtered.length === 0) return null;

        const isCompact =
          category === "Beverages" || category === "Side Orders";
        const gridClass = isCompact
          ? "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10"
          : "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 md:gap-x-8 gap-y-12 md:gap-y-14";

        return (
          <section
            key={category}
            id={categoryAnchor(category)}
            className="bg-white py-16 md:py-24 scroll-mt-32"
          >
            <Container>
              <div className="mb-12 md:mb-16 max-w-3xl">
                <SectionTitle eyebrow={category} tone="black">
                  {categoryTaglines[category]}
                </SectionTitle>
              </div>

              <div className={gridClass}>
                {filtered.map((item) => (
                  <MenuCard key={item.slug} item={item} />
                ))}
              </div>
            </Container>
          </section>
        );
      })}
    </>
  );
}
