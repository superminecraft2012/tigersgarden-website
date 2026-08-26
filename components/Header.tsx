"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { nav, navCta, site } from "@/lib/site";
import { Button } from "./Button";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[var(--ease-fierce)] ${
        scrolled
          ? "bg-tg-black/85 backdrop-blur-md border-b border-tg-orange/20"
          : "bg-transparent"
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

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="md:hidden inline-flex items-center justify-center text-tg-cream min-h-[44px] min-w-[44px] p-2 -mr-2 touch-manipulation"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path
              d={open ? "M6 6L22 22M22 6L6 22" : "M4 8h20M4 14h20M4 20h20"}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden border-t border-tg-orange/20 transition-[max-height] duration-500 ease-[var(--ease-fierce)] ${
          open ? "max-h-[28rem]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-6 gap-5" aria-label="Mobile">
          {nav.map((n) => {
            const isActive = pathname === n.href || pathname.startsWith(n.href + "/");
            return (
              <Link
                key={n.href}
                href={n.href}
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
