import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { JsonLd } from "@/components/JsonLd";
import { dishes, getDish, dishMenuItem } from "@/lib/dishes";
import { site, primary } from "@/lib/site";
import {
  canonical,
  graph,
  menuItemNode,
  breadcrumbs,
  faqNode,
  restaurantRef,
} from "@/lib/seo";

export function generateStaticParams() {
  return dishes.map((d) => ({ dish: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ dish: string }>;
}): Promise<Metadata> {
  const { dish } = await params;
  const d = getDish(dish);
  if (!d) return { title: "Not Found" };
  return {
    title: d.title,
    description: d.metaDescription,
    alternates: { canonical: canonical(`/dishes/${d.slug}`) },
    openGraph: {
      title: d.title,
      description: d.metaDescription,
      url: canonical(`/dishes/${d.slug}`),
      type: "article",
    },
  };
}

export default async function DishPage({
  params,
}: {
  params: Promise<{ dish: string }>;
}) {
  const { dish } = await params;
  const d = getDish(dish);
  if (!d) notFound();

  const item = dishMenuItem(d);
  if (!item) notFound();

  const path = `/dishes/${d.slug}`;
  const related = d.related
    .map((r) => dishes.find((x) => x.slug === r))
    .filter((x): x is NonNullable<typeof x> => Boolean(x));

  const data = graph(
    menuItemNode(item, path),
    breadcrumbs([
      { name: "Home", path: "/" },
      { name: "Dishes", path: "/dishes" },
      { name: item.name, path },
    ]),
    faqNode(d.faq),
    restaurantRef,
  );

  return (
    <>
      <JsonLd data={data} />

      {/* HERO */}
      <section className="bg-tg-black pt-28 pb-20 md:pt-36 md:pb-28">
        <Container>
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 font-display uppercase tracking-[0.25em] text-[10px] text-tg-cream/50">
              <li><Link href="/" className="hover:text-tg-orange">Home</Link></li>
              <li aria-hidden>/</li>
              <li><Link href="/dishes" className="hover:text-tg-orange">Dishes</Link></li>
              <li aria-hidden>/</li>
              <li className="text-tg-orange">{item.name}</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-6">
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
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col gap-6">
              <span className="font-display uppercase tracking-[0.35em] text-xs text-tg-orange/80">
                {item.category} · Downtown Vancouver, WA
              </span>

              <h1 className="font-display uppercase leading-[0.9] tracking-[-0.02em] text-[clamp(2.5rem,7vw,5rem)] text-tg-cream">
                {d.h1}
              </h1>

              <p className="text-lg text-tg-cream/80 leading-relaxed">
                {item.description}
              </p>

              <p className="text-sm text-tg-cream/50 leading-relaxed">
                Also written{" "}
                {d.alsoKnownAs.map((n, i) => (
                  <span key={n}>
                    {i > 0 && (i === d.alsoKnownAs.length - 1 ? " and " : ", ")}
                    <em className="not-italic text-tg-cream/70">{n}</em>
                  </span>
                ))}
                . These are the same dish — the menu lists it as {item.name}.
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

              <div className="mt-2 border-t border-tg-cream/15 pt-5 flex flex-col gap-2 text-sm text-tg-cream/60 leading-relaxed">
                <p>
                  <span className="text-tg-cream/80">{primary.address}</span>,{" "}
                  {primary.region} · {primary.neighborhood}
                </p>
                <ul className="flex flex-col gap-1">
                  {primary.hours.business.map((h) => (
                    <li key={h.days} className="flex gap-3">
                      <span className="w-24 shrink-0 font-display uppercase tracking-[0.12em] text-[11px] text-tg-cream/50">
                        {h.days}
                      </span>
                      <span className="tabular-nums">{h.time}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={primary.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tg-link inline-flex min-h-[44px] w-fit items-center text-tg-orange"
                >
                  Get directions
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* BACKGROUND */}
      <div className="tg-stripe h-3" aria-hidden />
      <section className="bg-tg-cream-soft text-tg-black py-20 md:py-28">
        <Container>
          <div className="max-w-3xl flex flex-col gap-8">
            <Reveal>
              <SectionTitle eyebrow="About the dish" tone="black">
                What {item.name} is
              </SectionTitle>
            </Reveal>
            {d.background.map((p, i) => (
              <Reveal key={i} delay={0.1 + i * 0.08}>
                <p className="text-tg-black/75 leading-relaxed text-lg">{p}</p>
              </Reveal>
            ))}
            <Reveal delay={0.35}>
              <p className="text-tg-black/60 leading-relaxed">
                On the Tiger&apos;s Garden menu: {item.short}{" "}
                <Link
                  href={`/menu/${item.slug}`}
                  data-track="menu_click"
                  className="tg-link text-tg-rust underline underline-offset-4"
                >
                  See {item.name} on the menu
                </Link>
                .
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-white text-tg-black py-20 md:py-28">
        <Container>
          <div className="max-w-3xl flex flex-col gap-10">
            <Reveal>
              <SectionTitle eyebrow="Questions" tone="black">
                {item.name}, answered
              </SectionTitle>
            </Reveal>
            <dl className="flex flex-col gap-8">
              {d.faq.map((f, i) => (
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
          </div>
        </Container>
      </section>

      {/* OTHER DISHES */}
      <div className="tg-stripe h-3" aria-hidden />
      <section className="bg-tg-black py-20 md:py-28">
        <Container>
          <div className="flex flex-col gap-10">
            <Reveal>
              <SectionTitle eyebrow="More to try" align="center">
                Other dishes worth ordering
              </SectionTitle>
            </Reveal>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {related.map((o) => (
                <Link
                  key={o.slug}
                  href={`/dishes/${o.slug}`}
                  className="inline-flex min-h-[44px] items-center rounded-full border border-tg-cream/25 px-5 py-3 font-display uppercase tracking-[0.15em] text-xs text-tg-cream/80 hover:border-tg-orange hover:text-tg-orange transition-colors"
                >
                  {o.label}
                </Link>
              ))}
            </div>
            <div className="flex justify-center">
              <Button href="/menu" data-track="menu_click" variant="outline">
                See the full menu
              </Button>
            </div>
          </div>
        </Container>
      </section>
      <div className="tg-stripe h-3" aria-hidden />
    </>
  );
}
