import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { canonical, graph, breadcrumbs, restaurantRef } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { aboutHero, aboutValues, aboutCuisine, aboutExtras } from "@/lib/about";
import { GoogleMap } from "@/components/GoogleMap";
import { site, primary } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Tiger's Garden",
  alternates: { canonical: canonical("/about") },
  description:
    "Tiger's Garden is a family-owned Thai and Laotian restaurant and cocktail lounge in downtown Vancouver, WA, facing Esther Short Park.",
};

const thaiDishes: { name: string; slug: string }[] = [
  { name: "Tom Yum Soup", slug: "tom-yum-soup" },
  { name: "Pad Thai", slug: "pad-thai" },
  { name: "Red Curry", slug: "red-curry" },
  { name: "Massaman Curry", slug: "massaman-curry" },
];

const laotianDishes: { name: string; slug: string }[] = [
  { name: "Larb", slug: "larb" },
  { name: "Papaya Salad", slug: "papaya-salad" },
  { name: "Tom Kha Soup", slug: "tom-kha-soup" },
  { name: "Pineapple Cashew Fried Rice", slug: "pineapple-cashew-fried-rice" },
];

export default function AboutPage() {
  const data = graph(
    breadcrumbs([
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
    ]),
    restaurantRef,
  );

  return (
    <>
      <JsonLd data={data} />

      {/* ---------- 1. HERO ---------- */}
      <section className="relative min-h-[75vh] overflow-hidden bg-tg-black tg-grain">
        <Image
          src="/images/heroimage3.webp"
          alt="Tiger's Garden restaurant interior"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-tg-lotus/45 via-tg-lotus/15 to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-tg-lotus/30"
        />

        <Container className="relative z-10 flex min-h-[75vh] flex-col justify-center py-16 sm:py-24 md:py-36">
          <div className="grid items-center gap-14 md:grid-cols-12">
            <div className="md:col-span-7 [animation:var(--animate-fade-up)]">
              <SectionTitle eyebrow={aboutHero.eyebrow} tone="cream" as="h1">
                {aboutHero.title}
              </SectionTitle>
              <p className="mt-10 max-w-xl text-lg leading-relaxed text-tg-cream/80">
                {aboutHero.body}
              </p>
              <p className="mt-6 font-serif italic text-base text-tg-cream/60">
                Reservations recommended for parties larger than five.
              </p>
            </div>

            <div className="md:col-span-5 [animation:var(--animate-fade-up)]">
              <div
                className="relative mx-auto w-full max-w-[450px]"
                style={{ transform: "rotate(1deg)" }}
              >
                <div
                  className="absolute -inset-6 -z-10 rounded-2xl opacity-50 blur-3xl"
                  style={{
                    background:
                      "radial-gradient(closest-side, rgba(230,126,34,0.45), transparent 70%)",
                  }}
                  aria-hidden
                />
                <div className="overflow-hidden rounded-lg shadow-[var(--shadow-card)] ring-1 ring-tg-cream/10">
                  <Image
                    src={aboutHero.image}
                    alt="Tiger's Garden storefront in downtown Vancouver, WA"
                    width={450}
                    height={450}
                    priority
                    className="h-auto w-full"
                  />
                </div>
                <p className="mt-5 text-center font-display uppercase tracking-[0.28em] text-xs text-tg-cream/60">
                  {aboutHero.imageCaption}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ---------- 2. VALUES ---------- */}
      <section className="relative bg-tg-orange-deep py-24 md:py-32">
        <Container>
          <Reveal>
            <SectionTitle
              eyebrow="What we care about"
              align="center"
              tone="cream"
            >
              Four things we don&apos;t shortcut.
            </SectionTitle>
          </Reveal>

          <ul className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {aboutValues.map((value, i) => {
              const number = `.${String(i + 1).padStart(2, "0")}`;
              return (
                <Reveal
                  as="li"
                  key={value.title}
                  delay={0.08 * i}
                  className="group relative flex flex-col gap-5 border-t-2 border-tg-orange bg-tg-black/40 p-7 md:p-8 transition-colors duration-500 hover:bg-tg-black/70"
                >
                  <span className="font-display text-5xl md:text-6xl leading-none text-tg-orange/90 transition-colors duration-500 group-hover:text-tg-ember">
                    {number}
                  </span>
                  <h3 className="font-display uppercase tracking-tight text-2xl md:text-3xl text-tg-cream">
                    {value.title}
                  </h3>
                  <p className="text-tg-cream/70 leading-relaxed">
                    {value.body}
                  </p>
                </Reveal>
              );
            })}
          </ul>
        </Container>
      </section>

      {/* ---------- 3. CUISINE SPLIT ---------- */}
      <section className="relative bg-tg-cream-soft text-tg-black py-24 md:py-32">
        <Container>
          <Reveal>
            <SectionTitle
              eyebrow="Two cuisines, one table"
              align="center"
              tone="black"
            >
              Thai &amp; Laotian, side by side.
            </SectionTitle>
          </Reveal>

          <div className="mt-20 grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-0">
            {aboutCuisine.map((cuisine, i) => {
              const dishes = cuisine.name === "Thai" ? thaiDishes : laotianDishes;
              const isFirst = i === 0;
              return (
                <Reveal
                  key={cuisine.name}
                  delay={0.1 * i}
                  className={`flex flex-col gap-7 ${
                    isFirst ? "md:pr-12 lg:pr-16" : "md:pl-12 lg:pl-16 md:border-l md:border-tg-black/15"
                  }`}
                >
                  <h3 className="font-display uppercase leading-[0.9] tracking-tight text-6xl md:text-7xl text-tg-rust">
                    {cuisine.name}
                  </h3>
                  <p className="max-w-md text-lg leading-relaxed text-tg-black/75">
                    {cuisine.body}
                  </p>
                  <div className="flex flex-col gap-3">
                    <span className="font-display uppercase tracking-[0.28em] text-[11px] text-tg-rust">
                      Try
                    </span>
                    <ul className="flex flex-col gap-2">
                      {dishes.map((dish) => (
                        <li key={dish.slug}>
                          <Link
                            href={`/menu/${dish.slug}`} data-track="menu_click"
                            className="tg-link font-display uppercase tracking-[0.08em] text-lg md:text-xl text-tg-black hover:text-tg-orange-deep"
                          >
                            {dish.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ---------- 4. QUOTE BREAK ---------- */}
      <section className="relative bg-tg-black tg-grain">
        <div className="tg-stripe h-2 w-full" aria-hidden />
        <Container>
          <div className="py-24 md:py-32">
            <Reveal>
              <figure className="mx-auto max-w-4xl text-center">
                <span
                  className="block font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none text-tg-orange/80"
                  aria-hidden
                >
                  &ldquo;
                </span>
                <blockquote className="mt-4 font-serif italic text-2xl md:text-3xl leading-snug text-tg-cream">
                  Consistently high quality meals. From the soup to rice dishes,
                  curry to stir fry, everything is very fresh and flavorful.
                </blockquote>
                <figcaption className="mt-10 inline-flex items-center gap-3 font-display uppercase tracking-[0.32em] text-xs text-tg-orange">
                  <span className="block h-[1px] w-8 bg-current opacity-70" />
                  Brent E.
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </Container>
        <div className="tg-stripe h-2 w-full" aria-hidden />
      </section>

      {/* ---------- 5. EXTRAS ---------- */}
      <section className="relative bg-tg-orange-deep py-24 md:py-32">
        <Container>
          <Reveal>
            <SectionTitle eyebrow="Beyond the dining room" tone="cream">
              What else we do.
            </SectionTitle>
          </Reveal>

          <ul className="mt-16 grid gap-6 md:grid-cols-3">
            {aboutExtras.map((extra, i) => {
              const isGift = extra.title === "Gift certificates";
              return (
                <Reveal
                  as="li"
                  key={extra.title}
                  delay={0.08 * i}
                  className="group flex flex-col gap-5 border-t-2 border-tg-orange bg-tg-black/40 p-7 md:p-8 transition-colors duration-500 hover:bg-tg-black/70"
                >
                  <h3 className="font-display uppercase tracking-tight text-2xl md:text-3xl text-tg-cream">
                    {extra.title}
                  </h3>
                  <p className="text-tg-cream/70 leading-relaxed">
                    {extra.body}
                  </p>
                  {isGift && (
                    <a
                      href={primary.phoneHref} data-track="call_click"
                      className="tg-link mt-1 tg-tap inline-flex w-fit font-display uppercase tracking-[0.18em] text-sm text-tg-orange"
                    >
                      {primary.phone}
                    </a>
                  )}
                </Reveal>
              );
            })}
          </ul>
        </Container>
      </section>

      {/* ---------- 6. VISIT STRIP ---------- */}
      <section className="relative bg-tg-black py-24 md:py-32">
        <Container>
          <Reveal>
            <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
              <SectionTitle
                eyebrow="Come find us"
                align="center"
                tone="cream"
              >
                312 W 8th St, Vancouver.
              </SectionTitle>
              <div className="flex flex-col items-center gap-2 text-tg-cream/75">
                <p className="font-serif italic text-xl text-tg-cream/80">
                  {primary.neighborhood}.
                </p>
                <p className="text-base">
                  {primary.address}, {primary.region}
                </p>
                <a
                  href={primary.phoneHref} data-track="call_click"
                  className="tg-link font-display uppercase tracking-[0.18em] text-sm text-tg-orange"
                >
                  {primary.phone}
                </a>
              </div>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
                <Button
                  href={site.orderUrl} data-track="order_click"
                  variant="primary"
                  target="_blank"
                >
                  Start your order
                </Button>
                <Button href="/contact" variant="outline">
                  Visit page
                </Button>
                <Button
                  href={primary.mapsUrl}
                  variant="outline"
                  target="_blank"
                >
                  Get directions
                </Button>
              </div>
            </div>
          </Reveal>

          {/* Map embed */}
          <div className="mt-14 overflow-hidden rounded-2xl h-72 md:h-96">
            <GoogleMap />
          </div>
        </Container>
      </section>

      {/* ---------- 7. CLOSING CTA ---------- */}
      <section className="relative overflow-hidden bg-tg-black">
        <div className="tg-stripe h-2 w-full" aria-hidden />
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(60% 80% at 50% 100%, rgba(230,126,34,0.35), transparent 70%)",
          }}
          aria-hidden
        />
        <Container>
          <div className="relative z-10 flex flex-col items-center gap-10 py-16 sm:py-24 md:py-40 text-center">
            <Reveal>
              <h2 className="font-display uppercase leading-[0.9] tracking-[-0.01em] text-6xl md:text-8xl lg:text-9xl text-tg-cream">
                See you <span className="text-tg-orange">soon.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
                <Button
                  href={site.orderUrl} data-track="order_click"
                  variant="primary"
                  target="_blank"
                >
                  Start your order
                </Button>
                <Button href={primary.phoneHref} data-track="call_click" variant="outline">
                  Call {primary.phone}
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
