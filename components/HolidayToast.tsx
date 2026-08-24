"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";

const PROMO = {
  id: "july-4-2026",
  start: Date.parse("2026-06-20T07:00:00Z"),
  end: Date.parse("2026-07-05T07:00:00Z"),
};

export function HolidayToast() {
  const reduced = useReducedMotion();
  const [open, setOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const now = Date.now();
    if (now < PROMO.start || now >= PROMO.end) return;
    if (localStorage.getItem(`tg-toast-dismissed:${PROMO.id}`)) return;
    const timer = setTimeout(() => setOpen(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    setOpen(false);
    try {
      localStorage.setItem(`tg-toast-dismissed:${PROMO.id}`, "1");
    } catch {}
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={dismiss}
          aria-modal="true"
          role="dialog"
          aria-label="Holiday announcement"
        >
          {/* Scrim */}
          <div className="absolute inset-0 bg-black/80" aria-hidden="true" />

          {/* Card */}
          <motion.div
            ref={cardRef}
            onClick={(e) => e.stopPropagation()}
            initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.97, y: 12 }}
            animate={reduced ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.97, y: 12 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-sm overflow-hidden rounded-2xl bg-tg-charcoal ring-1 ring-tg-orange/20 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.95)]"
          >
            {/* Top stripe */}
            <div className="tg-stripe h-[3px] w-full" aria-hidden="true" />

            {/* Ambient glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-16 left-1/2 h-40 w-64 -translate-x-1/2 rounded-full bg-tg-orange opacity-[0.08] blur-3xl"
            />

            <div className="relative z-10 px-8 pb-8 pt-7">

              {/* Close button */}
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={dismiss}
                  aria-label="Close announcement"
                  className="grid h-7 w-7 place-items-center rounded-full text-tg-cream/25 transition-colors duration-300 ease-[var(--ease-fierce)] hover:bg-tg-ash hover:text-tg-cream/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-tg-orange"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M2 2l8 8M10 2l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              {/* Logo — centered, prominent */}
              <div className="mt-1 flex flex-col items-center gap-4">
                <Image
                  src={site.logoMark}
                  alt={site.name}
                  width={80}
                  height={80}
                  className="h-20 w-20 object-contain drop-shadow-[0_0_18px_rgba(230,126,34,0.35)]"
                />

                {/* Eyebrow */}
                <span className="font-display text-[0.6rem] uppercase tracking-[0.32em] text-tg-orange">
                  Holiday Hours
                </span>
              </div>

              {/* Divider */}
              <div className="my-5 h-px bg-tg-orange/15" />

              {/* Headline */}
              <div className="text-center">
                <p className="font-serif italic text-base text-tg-cream/50">
                  We&rsquo;re open on the
                </p>
                <p className="mt-1 font-display text-[3.25rem] uppercase leading-none tracking-tight text-tg-cream-soft">
                  4th of July
                </p>
                <div className="mx-auto mt-4 h-[2px] w-10 rounded-full bg-tg-orange" />
              </div>

              {/* Body */}
              <p className="mt-5 text-center text-[0.8rem] leading-relaxed text-tg-cream/45">
                Thai and Laotian cuisine with a full cocktail lounge, right in downtown Vancouver facing Esther Short Park.
              </p>

              {/* CTAs */}
              <div className="mt-6 flex flex-col gap-2.5">
                <a
                  href={site.orderUrl} data-track="order_click"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 w-full items-center justify-center rounded-full bg-tg-orange font-display text-[0.68rem] uppercase tracking-[0.2em] text-tg-black transition-all duration-300 ease-[var(--ease-fierce)] hover:bg-tg-ember hover:shadow-[var(--shadow-glow)] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-tg-orange focus-visible:ring-offset-2 focus-visible:ring-offset-tg-charcoal"
                >
                  Order Online
                </a>
                <button
                  type="button"
                  onClick={dismiss}
                  className="inline-flex h-11 w-full items-center justify-center rounded-full border border-tg-cream/12 font-display text-[0.68rem] uppercase tracking-[0.2em] text-tg-cream/35 transition-colors duration-300 ease-[var(--ease-fierce)] hover:border-tg-cream/25 hover:text-tg-cream/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-tg-orange focus-visible:ring-offset-2 focus-visible:ring-offset-tg-charcoal"
                >
                  Dismiss
                </button>
              </div>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
