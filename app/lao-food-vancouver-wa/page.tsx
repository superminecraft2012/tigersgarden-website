import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { JsonLd } from "@/components/JsonLd";
import { getMenuItem } from "@/lib/menu";
import { site, primary } from "@/lib/site";
import { canonical, graph, breadcrumbs, faqNode, restaurantRef } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Lao Food in Vancouver, WA",
  description:
    "Laotian dishes at Tiger's Garden in downtown Vancouver, WA — larb, green papaya salad and sticky rice, served alongside a full Thai menu facing Esther Short Park.",
  alternates: { canonical: canonical("/lao-food-vancouver-wa") },
};

/**
 * The one [cuisine]-[category]-[city] page.
 *
 * Justified because the Laotian half of the menu is a genuinely distinctive
 * section rather than a keyword permutation: the business already describes
 * itself as "Thai & Laotian Cuisine" (lib/site.ts), the dishes below are on
 * the live menu, and "lao food vancouver wa" / "lao restaurant vancouver wa"
 * both return Google autocomplete suggestions. No per-neighbourhood or
 * per-city variants of this page exist, by design.
 *
 * Every claim here is either a menu fact, a site fact, or general culinary
 * background about the dish. Nothing asserts how this kitchen prepares them.
 */
const LAO_DISHES = ["larb", "papaya-salad", "mango-sticky-rice"] as const;

const FAQ = [
  {
    q: "Where can I get Lao food in Vancouver, WA?",
    a: "Tiger's Garden serves Thai and Laotian cuisine at 312 W 8th St in downtown Vancouver, WA, facing Esther Short Park. Call (360) 693-9585 or order online.",
  },
  {
    q: "What is the difference between Lao and Thai food?",
    a: "The two cuisines overlap heavily, particularly with northeastern Thailand, which borders Laos and shares much of its cooking. Dishes such as larb and green papaya salad are eaten in both, under different names.",
  },
  {
    q: "What is the national dish of Laos?",
    a: "Larb, a minced meat salad dressed with lime juice and chili. Tiger's Garden lists Larb on the salads section of its menu.",
  },
];

export default function LaoFoodPage() {
  const items = LAO_DISHES.map((s) => getMenuItem(s)).filter(
    (x): x is NonNullable<typeof x> => Boolean(x),
  );

  const data = graph(
    breadcrumbs([
      { name: "Home", path: "/" },
      { name: "Lao Food in Vancouver, WA", path: "/lao-food-vancouver-wa" },
    ]),
    faqNode(FAQ),
    restaurantRef,
  );

  return (
    <>
      <JsonLd data={data} />

      <section className="bg-tg-black pt-32 pb-16 md:pt-40 md:pb-24">
        <Container>
          <div className="max-w-3xl flex flex-col gap-6">
            <span className="font-display uppercase tracking-[0.35em] text-xs text-tg-orange/80">
              312 W 8th St · Downtown Vancouver, WA
            </span>
            <h1 className="font-display uppercase leading-[0.9] tracking-[-0.02em] text-[clamp(2.5rem,8vw,5.5rem)] text-tg-cream">
              Lao Food in Vancouver, WA
            </h1>
            <p className="text-lg text-tg-cream/75 leading-relaxed">
              Tiger&apos;s Garden is a {site.cuisine.toLowerCase()} restaurant
              and cocktail lounge facing Esther Short Park. Alongside the Thai
              menu, the kitchen serves dishes that come out of Laos and the
              Lao-speaking northeast of Thailand.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2">
              <Button
                href={site.orderUrl}
                data-track="order_click"
                target="_blank"
                variant="primary"
              >
                Order Online
              </Button>
              <Button
                href={primary.phoneHref}
                data-track="call_click"
                variant="outline"
              >
                Call {primary.phone}
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <div className="tg-stripe h-3" aria-hidden />

      <section className="bg-tg-cream-soft text-tg-black py-20 md:py-28">
        <Container>
          <div className="max-w-3xl flex flex-col gap-8 mb-16">
            <Reveal>
              <SectionTitle eyebrow="The overlap" tone="black">
                Lao and Thai cooking share a border
              </SectionTitle>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-tg-black/75 leading-relaxed text-lg">
                Isan, the northeastern region of Thailand, borders Laos and
                shares much of its language and its cooking. That is why dishes
                like larb and green papaya salad turn up on Thai and Laotian
                menus alike, often under two different names for the same plate.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="text-tg-black/75 leading-relaxed text-lg">
                Sticky rice is the staple of that region — a short-grain
                glutinous rice that is steamed rather than boiled, so it holds
                together and is eaten by hand rather than with a fork.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-12">
            {items.map((item, i) => (
              <Reveal key={item.slug} delay={0.08 * i}>
                <Link
                  href={`/menu/${item.slug}`}
                  data-track="menu_click"
                  className="group flex flex-col gap-4 outline-none focus-visible:ring-2 focus-visible:ring-tg-orange rounded-lg"
                >
                  <div
                    className="relative aspect-[4/5] overflow-hidden rounded-lg"
                    style={{
                      background: `radial-gradient(120% 90% at 30% 20%, ${item.hue[0]}33 0%, ${item.hue[1]}66 65%, #0e0d0c 100%)`,
                    }}
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="tg-card-zoom object-cover"
                    />
                  </div>
                  <h2 className="font-display uppercase tracking-[-0.01em] text-2xl text-tg-black group-hover:text-tg-orange transition-colors">
                    {item.name}
                  </h2>
                  <p className="text-sm text-tg-black/65 leading-relaxed">
                    {item.short}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white text-tg-black py-20 md:py-28">
        <Container>
          <div className="max-w-3xl flex flex-col gap-10">
            <Reveal>
              <SectionTitle eyebrow="Questions" tone="black">
                Lao food, answered
              </SectionTitle>
            </Reveal>
            <dl className="flex flex-col gap-8">
              {FAQ.map((f, i) => (
                <Reveal key={f.q} delay={0.08 * i}>
                  <div className="border-t border-tg-black/10 pt-6">
                    <dt className="font-display uppercase tracking-[0.12em] text-lg text-tg-black">
                      {f.q}
                    </dt>
                    <dd className="mt-3 text-tg-black/70 leading-relaxed">
                      {f.a}
                    </dd>
                  </div>
                </Reveal>
              ))}
            </dl>
            <Reveal delay={0.3}>
              <Button href="/menu" data-track="menu_click" variant="outline"
                className="border-tg-black/30 text-tg-black hover:border-tg-rust hover:text-tg-rust hover:bg-tg-rust/5">
                See the full menu
              </Button>
            </Reveal>
          </div>
        </Container>
      </section>
      <div className="tg-stripe h-3" aria-hidden />
    </>
  );
}
