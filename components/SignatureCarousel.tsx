"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { MenuItem } from "@/lib/menu";
import { site } from "@/lib/site";

// Card dimensions expressed as CSS values so centering math stays in CSS —
// no JS DOM measurement needed, works on first server-rendered paint.
const CARD_W = "min(740px, 88vw)";
const CARD_HALF = "min(370px, 44vw)";
const GAP = 28; // px between cards

export function SignatureCarousel({ items }: { items: MenuItem[] }) {
  const [active, setActive] = useState(0);

  const goTo = (i: number) =>
    setActive(((i % items.length) + items.length) % items.length);

  return (
    <div className="relative select-none">
      {/* ── Track wrapper, clips overflow on both sides ── */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            gap: `${GAP}px`,
            // Push the track right so card 0 is centered, then shift left by
            // active * (cardWidth + gap) to bring any card into center.
            marginLeft: `calc(max(16px, 50vw - ${CARD_HALF}))`,
            transform: `translateX(calc(-1 * ${active} * (${CARD_W} + ${GAP}px)))`,
          }}
        >
          {items.map((item, i) => {
            const isActive = i === active;
            return (
              <button
                key={item.slug}
                onClick={() => goTo(i)}
                aria-label={isActive ? item.name : `Go to ${item.name}`}
                className={[
                  "shrink-0 rounded-2xl overflow-hidden text-left",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white",
                  "transition-all duration-500",
                  isActive
                    ? "bg-white shadow-[0_8px_48px_-8px_rgba(0,0,0,0.28)] cursor-default"
                    : "bg-[#f5e4b8] opacity-75 hover:opacity-90 cursor-pointer",
                ].join(" ")}
                style={{ width: CARD_W }}
              >
                <div className="flex h-[300px] md:h-[320px]">
                  {/* Food image, left 42% */}
                  <div className="relative w-[42%] shrink-0 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 37vw, 310px"
                      className={`object-cover object-center transition-transform duration-700 ${
                        isActive ? "scale-100" : "scale-[1.06]"
                      }`}
                    />
                    {item.signature && (
                      <span className="absolute top-3 left-3 rounded-full bg-tg-amber/95 px-2.5 py-0.5 font-display uppercase tracking-[0.2em] text-[9px] text-white">
                        Signature
                      </span>
                    )}
                  </div>

                  {/* Content, right 58% */}
                  <div className="flex flex-col justify-between p-6 md:p-8 min-w-0 overflow-hidden">
                    <div>
                      <h3 className="font-display uppercase leading-tight text-2xl md:text-[1.75rem] text-tg-black">
                        {item.name}
                      </h3>
                      {item.spice && item.spice > 0 ? (
                        <span className="mt-1.5 inline-flex items-center gap-0.5 text-tg-orange text-xs">
                          {Array.from({ length: item.spice }).map((_, si) => (
                            <span key={si} aria-hidden>▲</span>
                          ))}
                        </span>
                      ) : null}
                      <p className="mt-3 text-sm text-tg-black/60 leading-relaxed line-clamp-3">
                        {item.short}
                      </p>
                    </div>

                    <Link
                      href={site.orderUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className={`self-start mt-4 inline-flex items-center rounded-full px-6 py-2.5 font-display uppercase tracking-[0.15em] text-xs text-white transition-colors duration-200 ${
                        isActive
                          ? "bg-tg-amber hover:bg-tg-orange"
                          : "bg-tg-amber/50 pointer-events-none"
                      }`}
                    >
                      Order Now
                    </Link>
                  </div>
                </div>
              </button>
            );
          })}

          {/* Trailing spacer so the last card can be fully centered */}
          <div
            aria-hidden
            style={{ width: `calc(max(16px, 50vw - ${CARD_HALF}) - ${GAP}px)` }}
            className="shrink-0"
          />
        </div>
      </div>

      {/* ── Prev / Next arrows ── */}
      <button
        onClick={() => goTo(active - 1)}
        aria-label="Previous dish"
        className="absolute left-3 md:left-6 top-[calc(50%-52px)] z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/25 text-white text-xl hover:bg-white/45 transition-colors duration-200"
      >
        ‹
      </button>
      <button
        onClick={() => goTo(active + 1)}
        aria-label="Next dish"
        className="absolute right-3 md:right-6 top-[calc(50%-52px)] z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/25 text-white text-xl hover:bg-white/45 transition-colors duration-200"
      >
        ›
      </button>

      {/* ── Radio dot navigation ── */}
      <div
        role="tablist"
        aria-label="Signature dishes"
        className="mt-10 flex justify-center items-center gap-2.5"
      >
        {items.map((item, i) => (
          <button
            key={item.slug}
            role="tab"
            aria-selected={i === active}
            aria-label={item.name}
            onClick={() => goTo(i)}
            className={`rounded-full border-2 border-white transition-all duration-300 h-3.5 w-3.5 ${
              i === active
                ? "bg-white scale-110"
                : "bg-transparent hover:bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
