import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { JsonLd } from "@/components/JsonLd";
import { dishes, dishMenuItem } from "@/lib/dishes";
import { site, primary } from "@/lib/site";
import {
  canonical,
  graph,
  breadcrumbs,
  itemListNode,
  restaurantRef,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: "Thai & Laotian Dishes in Vancouver, WA",
  description:
    "Guides to the dishes Tiger's Garden is known for in downtown Vancouver, WA — Pad Thai, Tom Yum, Massaman curry, larb, papaya salad and mango sticky rice.",
  alternates: { canonical: canonical("/dishes") },
};

export default function DishesPage() {
  const data = graph(
    itemListNode(
      dishes.map((d) => ({
        name: d.label,
        path: `/dishes/${d.slug}`,
        description: dishMenuItem(d)?.short,
      })),
    ),
    breadcrumbs([
      { name: "Home", path: "/" },
      { name: "Dishes", path: "/dishes" },
    ]),
    restaurantRef,
  );

  return (
    <>
      <JsonLd data={data} />

      <section className="bg-tg-black pt-32 pb-16 md:pt-40 md:pb-24">
        <Container>
          <div className="max-w-3xl flex flex-col gap-6">
            <span className="font-display uppercase tracking-[0.35em] text-xs text-tg-orange/80">
              Downtown Vancouver, WA
            </span>
            <h1 className="font-display uppercase leading-[0.9] tracking-[-0.02em] text-[clamp(2.2rem,6.5vw,4.5rem)] text-tg-cream">
              Signature Thai &amp; Laotian Dishes in Vancouver, WA
            </h1>
            <p className="text-lg text-tg-cream/75 leading-relaxed">
              {site.cuisine} at 312 W 8th St, facing Esther Short Park. These
              are the dishes people come looking for — what goes into each one,
              what else it gets called, and where it comes from.
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
              <Button href="/menu" data-track="menu_click" variant="outline">
                Full menu
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <div className="tg-stripe h-3" aria-hidden />

      <section className="bg-white text-tg-black py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {dishes.map((d, i) => {
              const item = dishMenuItem(d);
              if (!item) return null;
              return (
                <Reveal key={d.slug} delay={0.06 * i}>
                  <Link
                    href={`/dishes/${d.slug}`}
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
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="tg-card-zoom object-cover"
                      />
                    </div>
                    <h2 className="font-display uppercase tracking-[-0.01em] text-2xl text-tg-black transition-colors duration-300 group-hover:text-tg-orange">
                      {item.name}
                    </h2>
                    <p className="text-sm text-tg-black/65 leading-relaxed">
                      {item.short}
                    </p>
                    <span className="font-display uppercase tracking-[0.2em] text-[11px] text-tg-rust">
                      Read about {item.name} →
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

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
                {primary.address}, {primary.region}. {primary.neighborhood}.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button
                  href={site.orderUrl}
                  data-track="order_click"
                  target="_blank"
                  variant="primary"
                >
                  Start your order
                </Button>
                <Button
                  href={primary.phoneHref}
                  data-track="call_click"
                  variant="outline"
                >
                  Call {primary.phone}
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
