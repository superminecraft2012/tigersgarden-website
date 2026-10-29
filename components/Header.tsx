"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { nav, navCta, site } from "@/lib/site";
import { Button } from "./Button";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the drawer whenever the route changes (covers back/forward too).
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[var(--ease-fierce)] ${
        open
          ? "bg-tg-black border-b border-tg-orange/20"
          : scrolled
            ? "bg-tg-black/85 backdrop-blur-md border-b border-tg-orange/20"
            : "bg-gradient-to-b from-tg-black/60 to-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 md:px-10 py-4">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label={`${site.name} home`}
        >
          <Image
            src={site.logoMark}
            alt=""
            width={44}
            height={44}
            className="h-11 w-11 object-contain"
            priority
          />
          <Image
            src={site.logoNav}
            alt={site.name}
            width={745}
            height={146}
            className="h-7 md:h-8 w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {nav.map((n) => {
            const isActive = pathname === n.href || pathname.startsWith(n.href + "/");
            return (
              <Link
                key={n.href}
                href={n.href}
                aria-current={isActive ? "page" : undefined}
                data-track={n.href === "/menu" ? "menu_click" : undefined}
                className={`tg-tap-area relative font-display uppercase tracking-[0.2em] text-sm transition-colors ${
                  isActive
                    ? "text-tg-orange"
                    : "text-tg-cream/85 hover:text-tg-cream"
                }`}
              >
                {n.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-tg-orange" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Button
            href={navCta.href} data-track="order_click"
            variant="primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            {navCta.label}
          </Button>
        </div>

        {/* Solid fill so the toggle reads over any hero photo */}
        <button
          ref={toggleRef}
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="md:hidden inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-tg-orange bg-tg-black text-tg-cream touch-manipulation focus:outline-none focus-visible:ring-2 focus-visible:ring-tg-cream focus-visible:ring-offset-2 focus-visible:ring-offset-tg-black"
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d={open ? "M6 6l12 12M18 6L6 18" : "M4 6.5h16M4 12h16M4 17.5h16"}
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        inert={!open}
        className={`md:hidden bg-tg-black border-t border-tg-orange/20 transition-[max-height] duration-500 ease-[var(--ease-fierce)] ${
          open
            ? "max-h-[calc(100dvh-4.75rem)] overflow-y-auto"
            : "max-h-0 overflow-hidden"
        }`}
      >
        <nav className="flex flex-col px-6 py-6 gap-5" aria-label="Mobile">
          {nav.map((n) => {
            const isActive = pathname === n.href || pathname.startsWith(n.href + "/");
            return (
              <Link
                key={n.href}
                href={n.href}
                aria-current={isActive ? "page" : undefined}
                data-track={n.href === "/menu" ? "menu_click" : undefined}
                onClick={() => setOpen(false)}
                className={`flex min-h-[44px] items-center font-display uppercase tracking-[0.2em] text-xl ${
                  isActive ? "text-tg-orange" : "text-tg-cream"
                }`}
              >
                {n.label}
              </Link>
            );
          })}
          <Button
            href={navCta.href} data-track="order_click"
            variant="primary"
            target="_blank"
            rel="noopener noreferrer"
            className="self-start mt-2"
          >
            {navCta.label}
          </Button>
        </nav>
      </div>
    </header>
  );
}
