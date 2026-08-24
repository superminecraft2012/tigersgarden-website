import Link from "next/link";
import Image from "next/image";
import { MenuItem } from "@/lib/menu";

export function MenuCard({ item }: { item: MenuItem }) {
  return (
    <Link
      href={`/menu/${item.slug}`} data-track="menu_click"
      className="group relative flex flex-col gap-4 outline-none focus-visible:ring-2 focus-visible:ring-tg-orange rounded-lg"
    >
      <div
        className="relative aspect-[4/5] overflow-hidden rounded-lg bg-tg-charcoal"
        style={{
          background: `radial-gradient(120% 90% at 30% 20%, ${item.hue[0]}33 0%, ${item.hue[1]}66 65%, #0e0d0c 100%)`,
        }}
      >
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
          className="tg-card-zoom object-cover"
        />
        {item.signature && (
          <span className="absolute top-3 left-3 z-10 rounded-full bg-tg-orange/95 px-3 py-1 font-display uppercase tracking-[0.2em] text-[10px] text-tg-black">
            Signature
          </span>
        )}
      </div>
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-display uppercase tracking-[-0.01em] text-2xl text-tg-black transition-colors duration-300 group-hover:text-tg-orange">
          {item.name}
        </h3>
        {item.spice && item.spice > 0 ? (
          <span
            className="flex items-center gap-0.5 text-tg-orange shrink-0"
            aria-label={`Spice level ${item.spice} of 3`}
          >
            {Array.from({ length: item.spice }).map((_, i) => (
              <span key={i} aria-hidden>
                ▲
              </span>
            ))}
          </span>
        ) : null}
      </div>
      <p className="text-sm text-tg-black/65 leading-relaxed">{item.short}</p>
      <div className="flex items-center gap-3 text-[13px] sm:text-xs uppercase tracking-[0.2em] text-tg-black/40">
        <span>{item.category}</span>
        {item.vegetarianAvailable && (
          <span className="rounded-full border border-tg-cream/15 px-2 py-0.5 text-[11px] sm:text-[10px]">
            Veg opt.
          </span>
        )}
        {item.glutenFreeAvailable && (
          <span className="rounded-full border border-tg-cream/15 px-2 py-0.5 text-[11px] sm:text-[10px]">
            GF opt.
          </span>
        )}
      </div>
    </Link>
  );
}
