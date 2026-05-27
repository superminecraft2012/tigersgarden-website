import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { Reviews } from "@/components/Reviews";
import { GoogleMap } from "@/components/GoogleMap";
import { primary, site, cuisineTags } from "@/lib/site";

export const metadata: Metadata = {
  title: "Visit Us",
  description:
    "Tiger's Garden, Thai & Laotian cuisine at 312 W 8th St, Vancouver, WA. Walk-ins welcome, reservations recommended for parties larger than five.",
};

const faqs = [
  {
    q: "Do you take reservations?",
    a: "We do, especially for parties larger than five. Call (360) 693-9585 to book.",
  },
  {
    q: "Walk-ins?",
    a: "Always welcome. Walk-in tables open up fast for parties of two to four.",
  },
  {
    q: "Catering?",
    a: "Yes, office lunches, family gatherings, rehearsal dinners. Ask about our catering service. Call us with your headcount and we'll build a menu.",
  },
  {
    q: "Gift certificates?",
    a: "Available at the host stand or by phone. Stop by or call (360) 693-9585.",
  },
];

function HoursList({
  title,
  items,
}: {
  title: string;
  items: { days: string; time: string }[];
}) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="font-display uppercase tracking-[0.3em] text-xs text-tg-orange">
        {title}
      </h3>
      <dl className="flex flex-col gap-2">
        {items.map((h) => (
          <div
            key={h.days}
            className="flex items-baseline justify-between gap-4"
          >
            <dt className="font-display uppercase tracking-[0.1em] text-tg-cream text-xs">
              {h.days}
            </dt>
            <dd className="tabular-nums text-tg-cream/70 text-sm">{h.time}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      {/* ============ 1. HERO ============ */}
      <section className="tg-grain relative isolate overflow-hidden bg-tg-black min-h-[60vh] flex items-center py-20 md:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/3 top-1/2 -z-10 h-[55vh] w-[55vh] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(230,126,34,0.28) 0%, rgba(230,126,34,0) 65%)",
          }}
        />
        <Container className="relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="flex flex-col gap-8">
              <Reveal>
                <SectionTitle eyebrow="Visit" align="left">
                  Come find us in <br />
                  <span className="font-serif italic normal-case tracking-normal text-tg-orange">
                    downtown Vancouver.
                  </span>
                </SectionTitle>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="text-lg md:text-xl leading-relaxed text-tg-cream/80 max-w-xl">
                  Walk-ins welcome. Reservations recommended for parties of
                  larger than five. The cocktail lounge is open the same hours as
                  the dining room.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.2} className="flex justify-center lg:justify-end">
              <div className="flex flex-col items-center gap-4">
                <div className="relative w-[280px] sm:w-[360px] md:w-[420px] lg:w-[450px] aspect-square rotate-2 overflow-hidden rounded-lg border border-tg-cream/10 shadow-[var(--shadow-glow)]">
                  <Image
                    src="/images/sections/about-us.webp"
                    alt="The Tiger's Garden storefront on W 8th Street in downtown Vancouver, WA"
                    fill
                    sizes="(max-width: 768px) 280px, (max-width: 1024px) 420px, 450px"
                    className="object-cover"
                    priority
                  />
                </div>
                <p className="font-serif italic text-tg-cream/65 text-sm md:text-base">
                  312 W 8th St, facing Esther Short Park.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ============ 2. VISIT CARD ============ */}
      <section className="bg-tg-orange-deep py-20 md:py-28">
        <Container>
          <Reveal>
            <article className="mx-auto w-full max-w-5xl rounded-lg border border-tg-cream/10 bg-tg-black/40 p-8 md:p-12 shadow-[var(--shadow-card)]">
              {/* Top row */}
              <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                <div className="flex flex-col gap-2">
                  <h2 className="font-display uppercase leading-[0.9] tracking-[-0.01em] text-5xl md:text-6xl lg:text-7xl text-tg-cream">
                    Vancouver, WA
                  </h2>
                  <p className="font-serif italic text-xl md:text-2xl text-tg-orange">
                    {primary.neighborhood}
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                  <Button
                    href={primary.mapsUrl}
                    variant="outline"
                    target="_blank"
                  >
                    Get directions
                  </Button>
                  <Button
                    href={site.orderUrl}
                    variant="primary"
                    target="_blank"
                  >
                    Order online
                  </Button>
                </div>
              </div>

              {/* Address + phone + tags */}
              <div className="mt-10 grid gap-8 border-t border-tg-cream/10 pt-8 md:grid-cols-3">
                <address className="flex flex-col gap-1 not-italic text-tg-cream/85">
                  <span className="font-display uppercase tracking-[0.3em] text-xs text-tg-orange mb-1">
                    Address
                  </span>
                  <span className="text-lg">{primary.address}</span>
                  <span className="text-tg-cream/65">{primary.region}</span>
                </address>

                <div className="flex flex-col gap-1">
                  <span className="font-display uppercase tracking-[0.3em] text-xs text-tg-orange mb-1">
                    Phone
                  </span>
                  <a
                    href={primary.phoneHref}
                    className="tg-link inline-flex w-fit text-2xl md:text-3xl font-display uppercase tracking-[-0.01em] text-tg-cream"
                  >
                    {primary.phone}
                  </a>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="font-display uppercase tracking-[0.3em] text-xs text-tg-orange mb-1">
                    Cuisine
                  </span>
                  <ul className="flex flex-wrap gap-2">
                    {cuisineTags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-tg-cream/15 bg-tg-charcoal/60 px-3 py-1 text-xs font-display uppercase tracking-[0.18em] text-tg-cream/80"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Hours grid */}
              <div className="mt-10 grid gap-10 border-t border-tg-cream/10 pt-8 md:grid-cols-3">
                <HoursList title="Business Hours" items={primary.hours.business} />
                <HoursList title="Carryout Hours" items={primary.hours.carryout} />
                <HoursList title="Delivery Hours" items={primary.hours.delivery} />
              </div>
            </article>
          </Reveal>
        </Container>
      </section>

      {/* ============ 3. MAP ============ */}
      <section className="bg-tg-black">
        <div className="h-[480px] md:h-[560px] w-full overflow-hidden">
          <GoogleMap className="grayscale-[20%]" />
        </div>
      </section>

      {/* ============ 4. REVIEWS ============ */}
      <Reviews />

      {/* ============ 5. FAQ STRIP ============ */}
      <section className="bg-tg-cream-soft text-tg-black py-20 md:py-28">
        <Container>
          <Reveal>
            <SectionTitle
              eyebrow="Common questions"
              align="left"
              tone="black"
            >
              Before you <br />
              <span className="font-serif italic normal-case tracking-normal text-tg-rust">
                come in.
              </span>
            </SectionTitle>
          </Reveal>
          <div className="mt-14 mx-auto w-full max-w-4xl flex flex-col">
            {faqs.map((f, i) => (
              <Reveal
                key={f.q}
                delay={0.08 * i}
                className="flex flex-col gap-3 py-7 border-t border-tg-black/15 first:border-t-0 first:pt-0"
              >
                <h3 className="font-display uppercase text-xl text-tg-black">
                  {f.q}
                </h3>
                <p className="text-tg-black/75 leading-relaxed max-w-2xl">
                  {f.a}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ============ 6. CLOSING CTA ============ */}
      <section className="relative isolate overflow-hidden bg-tg-black">
        <div aria-hidden className="tg-stripe h-3 w-full opacity-90" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-50"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 100%, rgba(230,126,34,0.22) 0%, rgba(14,13,12,0) 70%)",
          }}
        />
        <Container className="py-20 md:py-28">
          <div className="flex flex-col items-center gap-8 text-center">
            <Reveal>
              <span className="inline-flex items-center gap-3 font-display uppercase tracking-[0.4em] text-xs text-tg-orange">
                <span className="block h-[1px] w-10 bg-current opacity-70" />
                Doors are open
                <span className="block h-[1px] w-10 bg-current opacity-70" />
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display uppercase leading-[0.9] tracking-[-0.02em] text-6xl md:text-7xl lg:text-8xl text-tg-cream">
                See you <br />
                <span className="font-serif italic normal-case tracking-normal text-tg-orange">
                  soon.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
                <Button href={site.orderUrl} variant="primary" target="_blank">
                  Start your order
                </Button>
                <Button href={primary.phoneHref} variant="outline">
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
