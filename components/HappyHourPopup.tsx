"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";

// One calendar-month campaign in the restaurant's Pacific time zone.
// The announcement ends automatically on October 22, 2026, at 8:45 PM PDT.
const CAMPAIGN_START = Date.parse("2026-09-22T20:45:00-07:00");
const CAMPAIGN_END = Date.parse("2026-10-22T20:45:00-07:00");

export function HappyHourPopup() {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const now = Date.now();
    if (now < CAMPAIGN_START || now >= CAMPAIGN_END) return;
    setOpen(true);
    const timer = window.setInterval(() => {
      if (Date.now() >= CAMPAIGN_END) setOpen(false);
    }, 60_000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
      if (event.key === "Tab") {
        const controls = document.querySelectorAll<HTMLElement>("[data-happy-hour-dialog] button, [data-happy-hour-dialog] a");
        if (!controls.length) return;
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4" role="presentation" onMouseDown={(event) => {
      if (event.target === event.currentTarget) setOpen(false);
    }}>
      <div
        data-happy-hour-dialog
        role="dialog"
        aria-modal="true"
        aria-labelledby="happy-hour-title"
        aria-describedby="happy-hour-schedule"
        className="relative w-full max-w-sm overflow-hidden rounded-2xl bg-tg-charcoal text-tg-cream shadow-[0_40px_80px_-20px_rgba(0,0,0,0.95)] ring-1 ring-tg-orange/30"
      >
        <div className="tg-stripe h-[3px] w-full" aria-hidden="true" />
        <div className="px-7 pb-8 pt-5 text-center sm:px-8">
          <div className="flex justify-end">
            <button
              ref={closeRef}
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close happy hour announcement"
              className="grid h-11 w-11 place-items-center rounded-full text-tg-cream/70 hover:bg-tg-ash hover:text-tg-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tg-orange"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 3l10 10M13 3 3 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
            </button>
          </div>
          <Image src={site.logoMark} alt={site.name} width={76} height={76} className="mx-auto mt-1 h-[76px] w-[76px] object-contain" />
          <p className="mt-5 font-display text-xs uppercase tracking-[0.25em] text-tg-orange">Every day</p>
          <h2 id="happy-hour-title" className="mt-2 font-display text-5xl uppercase leading-none text-tg-cream-soft">Happy Hour</h2>
          <div className="mx-auto my-5 h-[2px] w-12 bg-tg-orange" aria-hidden="true" />
          <p id="happy-hour-schedule" className="font-serif text-3xl italic text-tg-cream-soft">4:30–6:30 PM</p>
          <p className="mt-3 text-sm text-tg-cream/65">Join us at Tiger&rsquo;s Garden.</p>
          <a href="/menu" className="mt-7 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-tg-orange px-5 font-display text-sm uppercase tracking-[0.16em] text-tg-black hover:bg-tg-ember focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tg-orange">View Menu</a>
          <button type="button" onClick={() => setOpen(false)} className="mt-3 inline-flex min-h-11 w-full items-center justify-center rounded-full border border-tg-cream/20 font-display text-sm uppercase tracking-[0.16em] text-tg-cream hover:border-tg-cream/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tg-orange">Continue to Site</button>
        </div>
      </div>
    </div>
  );
}
