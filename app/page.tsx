import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { SectionTitle } from "@/components/SectionTitle";
import { MenuCard } from "@/components/MenuCard";
import { Marquee } from "@/components/Marquee";
import { Reveal } from "@/components/Reveal";
import { Reviews } from "@/components/Reviews";
import { GoogleMap } from "@/components/GoogleMap";
import { getCustomerFavorites, getSignatures } from "@/lib/menu";
import { SignatureCarousel } from "@/components/SignatureCarousel";
import { site, primary } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import { canonical, graph, restaurantNode } from "@/lib/seo";
import { aboutHero, aboutCuisine } from "@/lib/about";

export const metadata: Metadata = {
  alternates: { canonical: canonical("/") },
};

const features = [
  {
    label: "Family Recipes",
    desc: "The dishes this place was built on, cooked the same way they've always been — and getting better every year.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" />
      </svg>
    ),
  },
  {
    label: "Made Fresh",
    desc: "Prepped in-house every morning. Better ingredients, better flavors, no shortcuts.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 3c-1.2 5.4-5.3 8.1-8 9 2 5.7 6.4 8 8 9 1.6-1 6-3.3 8-9-2.7-.9-6.8-3.6-8-9z" />
      </svg>
    ),
  },
  {
    label: "Cocktail Lounge",
    desc: "Full bar inside the dining room. Craft cocktails, wine, and beer.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M8 3h8l-2.5 7.5A3.5 3.5 0 0 1 10.5 15a3.5 3.5 0 0 1-2-6.5L8 3zm4 12v5m-3 2h6" />
      </svg>
    ),
  },
  {
    label: "Catering",
    desc: "We bring the feast to you. Events, parties, corporate, all welcome.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 11a9 9 0 0 1 18 0H3zm0 0v1h18v-1" />
        <path d="M12 2v3M5 20h14M5 20v-8M19 20v-8" />
      </svg>
    ),
  },
];

const cuisineDishes: Record<string, string[]> = {
  Thai: ["Tom Yum", "Pad Thai", "Red Curry", "Massaman"],
  Laotian: ["Larb", "Papaya Salad", "Sticky Rice", "Tom Kha"],
};

export default function HomePage() {
  const favorites = getCustomerFavorites();
  const signatures = getSignatures();
  const thai = aboutCuisine.find((c) => c.name === "Thai");
  const laotian = aboutCuisine.find((c) => c.name === "Laotian");

  return (
    <>
      <JsonLd data={graph(restaurantNode())} />

      {/* ============ 1. HERO ============ */}
      <section className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-tg-black">
        <Image
          src="/images/heroimage1.webp"
          alt="Tiger's Garden spring rolls with peanut sauce"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-tg-lotus/35 via-tg-lotus/10 to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-tg-lotus/25"
        />

        <Container className="relative z-10">
          <div className="flex flex-col items-center gap-8 text-center">
            <span
              className="inline-flex items-center gap-3 font-display uppercase tracking-[0.4em] text-xs text-tg-orange/80 opacity-0 [animation:var(--animate-fade-up)]"
              style={{ animationDelay: "0.05s" }}
            >
              <span className="block h-[1px] w-10 bg-current opacity-70" />
              Been here a while · Downtown Vancouver, WA
              <span className="block h-[1px] w-10 bg-current opacity-70" />
            </span>

            <h1 className="flex flex-col items-center gap-3">
              <span
                className="font-display uppercase break-words leading-[0.86] tracking-[-0.02em] text-[clamp(3.5rem,11vw,9.5rem)] text-tg-cream opacity-0 [animation:var(--animate-fade-up)]"
                style={{ animationDelay: "0.1s" }}
              >
                Tiger&rsquo;s Garden
              </span>{" "}
              <span
                className="font-serif italic text-[clamp(1.5rem,4vw,3rem)] text-tg-orange leading-tight opacity-0 [animation:var(--animate-fade-up)]"
                style={{ animationDelay: "0.25s" }}
              >
                Thai &amp; Laotian Restaurant in Vancouver, WA
              </span>
            </h1>

            <div
              className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4 opacity-0 [animation:var(--animate-fade-up)]"
              style={{ animationDelay: "0.4s" }}
            >
              <Button href={site.orderUrl} data-track="order_click" variant="primary" target="_blank">
                Order Online
              </Button>
              <Button href="/menu" data-track="menu_click" variant="outline">
                See the Menu
              </Button>
            </div>
          </div>
        </Container>

        <div className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-2 text-tg-cream/40">
          <span
            aria-hidden
            className="block h-12 w-px bg-gradient-to-b from-transparent via-tg-orange/60 to-transparent [animation:var(--animate-flicker)]"
          />
        </div>
      </section>

      {/* ============ 2. MARQUEE ============ */}
      <Marquee
        items={[
          "Thai",
          "Laotian",
          "Cocktail Lounge",
          "Catering",
          "Downtown Vancouver",
          "New Flavors, Same Roots",
          "Walk-ins Welcome",
        ]}
      />

      {/* ============ 3. WELCOME + FEATURES ============ */}
      <section className="bg-white py-24 md:py-32">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            {/* Left: heading + features */}
            <Reveal className="flex flex-col gap-8">
              <div>
                <SectionTitle eyebrow="Welcome" tone="black">
                  Welcome to{" "}
                  <span className="font-serif italic normal-case tracking-normal text-tg-orange">
                    Tiger&rsquo;s Garden.
                  </span>
                </SectionTitle>
                <p className="mt-6 max-w-lg text-base md:text-lg leading-relaxed text-tg-black/70">
                  Tiger&rsquo;s Garden has been part of downtown Vancouver
                  for years — and the food has never been better than it is
                  right now. Same family recipes, new flavors on the menu,
                  and a kitchen that keeps getting sharper.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-x-6 gap-y-8">
                {features.map((f) => (
                  <div key={f.label} className="flex flex-col gap-3">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-tg-lime text-tg-cream">
                      {f.icon}
                    </div>
                    <div>
                      <h4 className="font-display uppercase tracking-[0.18em] text-sm text-tg-black">
                        {f.label}
                      </h4>
                      <p className="mt-1 text-sm text-tg-black/60 leading-relaxed">
                        {f.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Right: storefront photo */}
            <Reveal
              delay={0.15}
              className="relative mx-auto w-full max-w-lg lg:mx-0"
            >
              <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-card)] rotate-1">
                <Image
                  src="/images/sections/about-us.webp"
                  alt="Tiger's Garden storefront facing Esther Short Park"
                  width={450}
                  height={450}
                  className="h-auto w-full object-cover"
                />
              </div>
              <p className="mt-5 text-center font-display uppercase tracking-[0.3em] text-xs text-tg-black/50">
                312 W 8th St, facing Esther Short Park
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ============ 4. SIGNATURE CAROUSEL ============ */}
      <section className="bg-tg-orange-deep py-20 md:py-28 overflow-hidden">
        <Container>
          <Reveal>
            <div className="flex flex-col items-center text-center gap-3 mb-12">
              <span className="inline-flex items-center gap-2 font-display uppercase tracking-[0.32em] text-xs text-white/70">
                <span className="block h-[1px] w-8 bg-current opacity-70" />
                Chef&rsquo;s picks
              </span>
              <h2 className="font-display uppercase leading-[0.92] tracking-[-0.01em] text-5xl md:text-6xl lg:text-7xl text-white">
                Signature Dishes
              </h2>
            </div>
          </Reveal>
        </Container>

        <SignatureCarousel items={signatures} />

        <div className="mt-12 flex justify-center">
          <Button
            href="/menu" data-track="menu_click"
            variant="outline"
            className="!border-white/60 !text-white hover:!border-white hover:!bg-white/10"
          >
            See full menu
          </Button>
        </div>
      </section>

      {/* ============ 5. CUSTOMER FAVORITES ============ */}
      <section className="bg-white py-24 md:py-32">
        <Container>
          <Reveal>
            <SectionTitle eyebrow="Try one of our favorites" align="center" tone="black">
              Three plates <br />
              <span className="font-serif italic normal-case tracking-normal text-tg-orange">
                you need to try.
              </span>
            </SectionTitle>
          </Reveal>

          <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {favorites.map((item, i) => (
              <Reveal key={item.slug} delay={0.1 + i * 0.12}>
                <MenuCard item={item} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-14 flex justify-center">
            <Button
              href="/menu" data-track="menu_click"
              variant="outline"
              className="!border-tg-black/30 !text-tg-black hover:!border-tg-orange hover:!text-tg-orange"
            >
              See the full menu →
            </Button>
          </Reveal>
        </Container>
      </section>

      {/* ============ 6. STORY TEASE ============ */}
      <section className="bg-tg-cream-soft py-24 md:py-32 text-tg-black">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal className="flex flex-col gap-6">
              <SectionTitle eyebrow="Our story" tone="black">
                {aboutHero.title}
              </SectionTitle>
              <p className="text-lg leading-relaxed text-tg-black/75 max-w-xl">
                {aboutHero.body}
              </p>
              <p className="font-serif italic text-tg-rust text-xl md:text-2xl">
                Same roots. New flavors. Better than ever.
              </p>
              <div className="pt-2">
                <Button
                  href="/about"
                  variant="outline"
                  className="!border-tg-black/30 !text-tg-black hover:!border-tg-orange hover:!text-tg-orange"
                >
                  More about us
                </Button>
              </div>
            </Reveal>

            <Reveal
              delay={0.15}
              className="relative mx-auto w-full max-w-md lg:mx-0"
            >
              <div className="overflow-hidden rounded-lg shadow-[var(--shadow-card)] -rotate-1">
                <Image
                  src="/images/sections/about-us.webp"
                  alt="Tiger's Garden storefront facing Esther Short Park"
                  width={450}
                  height={450}
                  className="h-auto w-full object-cover"
                />
              </div>
              <p className="mt-5 font-display uppercase tracking-[0.3em] text-xs text-tg-black/60 text-center">
                {aboutHero.imageCaption}
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ============ 7. CUISINE STRIP ============ */}
      <section className="bg-white py-24 md:py-32">
        <Container>
          <Reveal>
            <SectionTitle eyebrow="Two cuisines, one table" align="center" tone="black">
              Thai &amp; Laotian, <br />
              <span className="font-serif italic normal-case tracking-normal text-tg-orange">
                side by side.
              </span>
            </SectionTitle>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mx-auto mt-8 max-w-2xl text-center text-base md:text-lg text-tg-black/65 leading-relaxed">
              We grew up cooking both, and we&rsquo;ve been perfecting
              them ever since. Thai built on fresh chili, kaffir lime, and
              basil. Laotian the way it should be: sharp, citrusy, herb-led.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {[thai, laotian].map((c, i) =>
              c ? (
                <Reveal
                  key={c.name}
                  delay={0.15 + i * 0.12}
                  className="group flex flex-col gap-6 rounded-2xl border border-tg-black/10 bg-tg-cream-soft p-8 md:p-10 transition-colors duration-500 hover:border-tg-orange/40"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display uppercase leading-none tracking-[-0.01em] text-6xl md:text-7xl text-tg-black transition-colors duration-500 group-hover:text-tg-orange">
                      {c.name}
                    </h3>
                    <span className="font-display uppercase tracking-[0.3em] text-[10px] text-tg-orange/80">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="text-tg-black/70 leading-relaxed">{c.body}</p>
                  <ul className="flex flex-col gap-2 border-t border-tg-black/10 pt-5">
                    {cuisineDishes[c.name].map((dish) => (
                      <li
                        key={dish}
                        className="flex items-center gap-3 font-display uppercase tracking-[0.18em] text-sm text-tg-black/85"
                      >
                        <span
                          aria-hidden
                          className="block h-[1px] w-6 bg-tg-orange/70"
                        />
                        {dish}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ) : null,
            )}
          </div>
        </Container>
      </section>

      {/* ============ 8. REVIEWS ============ */}
      <Reviews />

      {/* ============ 9. VISIT ============ */}
      <section className="bg-tg-orange-deep py-24 md:py-32">
        <Container>
          <Reveal>
            <div className="flex flex-col items-center text-center gap-3 mb-16">
              <span className="inline-flex items-center gap-2 font-display uppercase tracking-[0.32em] text-xs text-white/70">
                <span className="block h-[1px] w-8 bg-current opacity-70" />
                Find us
              </span>
              <h2 className="font-display uppercase leading-[0.92] tracking-[-0.01em] text-5xl md:text-6xl text-white">
                Downtown <br />
                <span className="font-serif italic normal-case tracking-normal text-white/80">
                  Vancouver, WA.
                </span>
              </h2>
            </div>
          </Reveal>

          <Reveal
            delay={0.1}
            className="mx-auto max-w-4xl rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20 p-8 md:p-12"
          >
            <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
              <div className="flex flex-col gap-3">
                <h3 className="font-display uppercase leading-none tracking-[-0.01em] text-5xl md:text-6xl text-white">
                  {primary.city}
                </h3>
                <div className="flex flex-col gap-1 text-white/85">
                  <span>{primary.address}</span>
                  <span className="text-white/65">{primary.region}</span>
                  <span className="font-display uppercase tracking-[0.25em] text-xs mt-1 text-white/65">
                    {primary.neighborhood}
                  </span>
                </div>
                <a
                  href={primary.phoneHref} data-track="call_click"
                  className="tg-link mt-2 tg-tap inline-flex w-fit font-display uppercase tracking-[0.25em] text-sm text-white"
                >
                  {primary.phone}
                </a>
              </div>
              <div className="md:pt-2">
                <Button
                  href={primary.mapsUrl}
                  variant="outline"
                  target="_blank"
                  className="!border-white/60 !text-white hover:!border-white hover:!bg-white/10"
                >
                  Get directions
                </Button>
              </div>
            </div>

            <div className="mt-10 grid gap-8 border-t border-white/20 pt-8 sm:grid-cols-3">
              {(
                [
                  { label: "Business", rows: primary.hours.business },
                  { label: "Carryout", rows: primary.hours.carryout },
                  { label: "Delivery", rows: primary.hours.delivery },
                ] as const
              ).map((col) => (
                <div key={col.label} className="flex flex-col gap-3">
                  <h4 className="font-display uppercase tracking-[0.3em] text-xs text-white/60">
                    {col.label}
                  </h4>
                  <ul className="flex flex-col gap-1.5 text-sm">
                    {col.rows.map((h) => (
                      <li key={h.days} className="flex flex-col text-white/80">
                        <span className="font-display uppercase tracking-[0.18em] text-[11px] text-white/55">
                          {h.days}
                        </span>
                        <span className="tabular-nums">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Map embed */}
          <Reveal delay={0.2} className="mt-10 overflow-hidden rounded-2xl border border-white/20 h-56 sm:h-72 md:h-80">
            <GoogleMap />
          </Reveal>
        </Container>
      </section>

      {/* ============ 10. CLOSING CTA ============ */}
      <section className="relative isolate overflow-hidden bg-tg-black">
        <div aria-hidden className="tg-stripe h-3 w-full opacity-90" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-50"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 100%, rgba(230,126,34,0.25) 0%, rgba(14,13,12,0) 70%)",
          }}
        />
        <Container className="py-24 md:py-32">
          <div className="flex flex-col items-center gap-8 text-center">
            <Reveal>
              <span className="inline-flex items-center gap-3 font-display uppercase tracking-[0.4em] text-xs text-tg-orange">
                <span className="block h-[1px] w-10 bg-current opacity-70" />
                Tonight
                <span className="block h-[1px] w-10 bg-current opacity-70" />
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display uppercase leading-[0.9] tracking-[-0.02em] text-6xl md:text-7xl lg:text-8xl text-tg-cream">
                Pull up <br />
                <span className="font-serif italic normal-case tracking-normal text-tg-orange">
                  a chair.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="max-w-xl text-tg-cream/75 leading-relaxed">
                Order online for pickup or delivery, or call ahead — we
                keep tables open for walk-ins too.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
                <Button href={site.orderUrl} data-track="order_click" variant="primary" target="_blank">
                  Start your order
                </Button>
                <Button href={primary.phoneHref} data-track="call_click" variant="outline">
                  Call {primary.phone}
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
        <div aria-hidden className="tg-stripe h-3 w-full opacity-90" />
      </section>
    </>
  );
}
