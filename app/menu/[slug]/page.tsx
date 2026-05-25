import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { MenuCard } from "@/components/MenuCard";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { menu, getMenuItem, getRelated } from "@/lib/menu";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return menu.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getMenuItem(slug);
  if (!item) {
    return {
      title: "Not Found",
      description: "This dish isn't on the menu right now.",
    };
  }
  return {
    title: item.name,
    description: item.short,
  };
}

const spiceLabel: Record<1 | 2 | 3, string> = {
  1: "Mild",
  2: "Medium spicy",
  3: "Spicy",
};

export default async function MenuItemPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getMenuItem(slug);
  if (!item) notFound();

  const related = getRelated(item, 3);
  const spice = item.spice && item.spice > 0 ? item.spice : null;

  return (
    <>
      {/* 1. HERO */}
      <section className="bg-tg-black pt-28 pb-20 md:pt-36 md:pb-28">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            {/* LEFT, image */}
            <div className="lg:col-span-6">
              <div
                className="relative aspect-[4/5] overflow-hidden rounded-lg"
                style={{
                  background: `radial-gradient(120% 90% at 30% 20%, ${item.hue[0]}33 0%, ${item.hue[1]}66 65%, #0e0d0c 100%)`,
                }}
              >
                <Link
                  href="/menu"
                  className="absolute top-4 left-4 z-10 inline-flex items-center gap-2 rounded-full bg-tg-black/70 backdrop-blur-md px-4 py-2 font-display uppercase tracking-[0.25em] text-[10px] text-tg-cream hover:text-tg-orange transition-colors"
                >
                  <span aria-hidden>&larr;</span> Back to menu
                </Link>
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* RIGHT, details */}
            <div className="lg:col-span-6 lg:pt-4">
              <Reveal>
                <nav
                  aria-label="Breadcrumb"
                  className="font-display uppercase tracking-[0.3em] text-xs text-tg-cream/60"
                >
                  <Link href="/menu" className="tg-link hover:text-tg-cream">
                    Menu
                  </Link>
                  <span aria-hidden className="mx-2">
                    /
                  </span>
                  <span className="text-tg-orange">{item.category}</span>
                </nav>
              </Reveal>

              <Reveal delay={0.1}>
                <h1 className="mt-6 font-display uppercase leading-[0.9] tracking-[-0.02em] text-tg-cream text-5xl md:text-7xl">
                  {item.name}
                </h1>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="mt-6 flex flex-wrap items-center gap-2">
                  {item.signature && (
                    <span className="inline-flex items-center rounded-full bg-tg-orange/95 px-3 py-1.5 font-display uppercase tracking-[0.25em] text-[10px] text-tg-black">
                      Signature
                    </span>
                  )}
                  {spice && (
                    <span className="inline-flex items-center gap-2 rounded-full border border-tg-orange/40 bg-tg-orange/10 px-3 py-1.5 font-display uppercase tracking-[0.2em] text-[10px] text-tg-orange">
                      <span aria-hidden className="flex items-center gap-0.5">
                        {Array.from({ length: spice }).map((_, i) => (
                          <span key={i}>▲</span>
                        ))}
                      </span>
                      {spiceLabel[spice]}
                    </span>
                  )}
                  {item.vegetarianAvailable && (
                    <span className="inline-flex items-center rounded-full border border-tg-cream/25 bg-tg-cream/5 px-3 py-1.5 font-display uppercase tracking-[0.2em] text-[10px] text-tg-cream/85">
                      Vegetarian option
                    </span>
                  )}
                  {item.glutenFreeAvailable && (
                    <span className="inline-flex items-center rounded-full border border-tg-cream/25 bg-tg-cream/5 px-3 py-1.5 font-display uppercase tracking-[0.2em] text-[10px] text-tg-cream/85">
                      Gluten-free option
                    </span>
                  )}
                </div>
              </Reveal>

              <Reveal delay={0.35}>
                <p className="mt-8 font-serif italic text-2xl md:text-3xl text-tg-cream/85 leading-snug max-w-xl">
                  &ldquo;{item.short}&rdquo;
                </p>
              </Reveal>

              <Reveal delay={0.5}>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <Button href={site.orderUrl} target="_blank" variant="primary">
                    Add to order
                  </Button>
                  <Button href="/menu" variant="outline">
                    See full menu
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. DESCRIPTION */}
      <section className="bg-tg-black py-20 md:py-28 border-t border-tg-cream/10">
        <Container>
          <div className="max-w-3xl mx-auto">
            <Reveal>
              <SectionTitle eyebrow="About the dish">
                What&rsquo;s in it.
              </SectionTitle>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-10 text-tg-cream/85 text-lg md:text-xl leading-relaxed">
                {item.description}
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 3. PAIRS WITH */}
      {related.length > 0 && (
        <section className="bg-tg-orange-deep py-20 md:py-28">
          <Container>
            <div className="mb-12 md:mb-16 max-w-3xl">
              <Reveal>
                <SectionTitle eyebrow="Pairs With">
                  Goes well with&hellip;
                </SectionTitle>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {related.map((r, idx) => (
                <Reveal key={r.slug} delay={idx * 0.08} y={28}>
                  <MenuCard item={r} />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* 4. BOTTOM CTA */}
      <div className="tg-stripe h-3" aria-hidden />
      <section className="bg-tg-black py-20 md:py-28">
        <Container>
          <div className="flex flex-col items-center text-center gap-8">
            <Reveal>
              <SectionTitle eyebrow="One more thing" align="center">
                Add it to your order.
              </SectionTitle>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="max-w-xl text-tg-cream/70 leading-relaxed">
                Order online for pickup or delivery, or browse the rest of the
                menu and build a table.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button href={site.orderUrl} target="_blank" variant="primary">
                  Order online
                </Button>
                <Button href="/menu" variant="outline">
                  Back to menu
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
