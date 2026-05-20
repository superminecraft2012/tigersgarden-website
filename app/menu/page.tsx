import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { MenuBrowser } from "@/components/MenuBrowser";
import { menu, categories, categoryTaglines } from "@/lib/menu";
import { site, primary } from "@/lib/site";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Tiger's Garden's full Thai & Laotian menu, appetizers, soups, salads, stir-fries, curries, noodles, fried rice, desserts, and drinks.",
};

export default function MenuPage() {
  return (
    <>
      {/* 1. HERO */}
      <section className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-tg-black">
        <Image
          src="/images/heroimage2.webp"
          alt="Tiger's Garden menu dishes"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-tg-black/50 via-tg-black/40 to-tg-black/75"
        />

        <Container className="relative z-10">
          <div className="flex flex-col items-center gap-8 text-center">
            <span
              className="inline-flex items-center gap-3 font-display uppercase tracking-[0.4em] text-xs text-tg-orange/80 opacity-0 [animation:var(--animate-fade-up)]"
              style={{ animationDelay: "0.05s" }}
            >
              <span className="block h-[1px] w-10 bg-current opacity-70" />
              Thai &amp; Laotian Cuisine
              <span className="block h-[1px] w-10 bg-current opacity-70" />
            </span>

            <h1
              className="font-display uppercase leading-[0.86] tracking-[-0.02em] text-[clamp(3rem,10vw,8.5rem)] text-tg-cream opacity-0 [animation:var(--animate-fade-up)]"
              style={{ animationDelay: "0.12s" }}
            >
              The Menu
            </h1>

            <div
              className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4 opacity-0 [animation:var(--animate-fade-up)]"
              style={{ animationDelay: "0.3s" }}
            >
              <Button href={site.orderUrl} target="_blank" variant="primary">
                Order Online
              </Button>
              <Button href={primary.phoneHref} variant="outline">
                Call {primary.phone}
              </Button>
            </div>
          </div>
        </Container>

        <div className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2">
          <span
            aria-hidden
            className="block h-12 w-px bg-gradient-to-b from-transparent via-tg-orange/60 to-transparent [animation:var(--animate-flicker)]"
          />
        </div>
      </section>

      {/* 2. INTERACTIVE MENU BROWSER */}
      <MenuBrowser
        categories={categories}
        categoryTaglines={categoryTaglines}
        items={menu}
      />

      {/* 4. CATERING TEASE */}
      <section className="bg-tg-cream-soft text-tg-black py-20 md:py-28">
        <Container>
          <div className="flex flex-col items-center text-center gap-8">
            <Reveal>
              <SectionTitle
                eyebrow="For bigger tables"
                align="center"
                tone="black"
              >
                Catering for your office or family.
              </SectionTitle>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="max-w-2xl text-tg-black/75 leading-relaxed text-lg">
                Tiger's Garden caters office lunches, family gatherings,
                rehearsal dinners, and anything else worth feeding a room. Give
                us a call to plan the menu, we'll handle the rest.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button
                  href={site.cateringUrl}
                  variant="outline"
                  className="border-tg-black/30 text-tg-black hover:border-tg-rust hover:text-tg-rust hover:bg-tg-rust/5"
                >
                  Catering
                </Button>
                <Button href={primary.phoneHref} variant="primary">
                  Call {primary.phone}
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 5. CLOSING CTA */}
      <div className="tg-stripe h-3" aria-hidden />
      <section className="bg-tg-black py-20 md:py-28">
        <Container>
          <div className="flex flex-col items-center text-center gap-8">
            <Reveal>
              <SectionTitle eyebrow="Hungry?" align="center">
                Ready to eat?
              </SectionTitle>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="max-w-xl text-tg-cream/70 leading-relaxed">
                Order online for pickup or delivery, or call ahead to reserve a
                table. We're open daily from 11am.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button href={site.orderUrl} target="_blank" variant="primary">
                  Start your order
                </Button>
                <Button href={primary.phoneHref} variant="outline">
                  Reserve by phone
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
      <div className="tg-stripe h-3" aria-hidden />
    </>
  );
}
