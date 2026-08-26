import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { JsonLd } from "@/components/JsonLd";
import { site, primary } from "@/lib/site";
import { canonical, graph, breadcrumbs, faqNode, restaurantRef } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Order Thai Takeout & Delivery in Vancouver",
  description:
    "Order Thai and Laotian food for pickup or delivery from Tiger's Garden, 312 W 8th St in downtown Vancouver, WA. Carryout and delivery hours, and how to order.",
  alternates: { canonical: canonical("/order-online") },
};

/**
 * Built because ordering genuinely exists and is first-party
 * (order.tigersgardenthai.com), and because the carryout and delivery hours
 * published in lib/site.ts genuinely differ from the dining-room hours — which
 * is the single most useful thing this page can tell someone.
 *
 * Deliberately states NO fees, minimums or delivery radius: none are published
 * anywhere in the repo, and inventing them is exactly what Phase 4 forbids.
 */
const FAQ = [
  {
    q: "Does Tiger's Garden deliver in Vancouver, WA?",
    a: "Yes. Tiger's Garden publishes delivery hours alongside its carryout hours. Delivery is arranged through the restaurant's own ordering site. Call (360) 693-9585 if you want to check whether your address is covered.",
  },
  {
    q: "What are the last hours to place a takeout order?",
    a: "Carryout and delivery close before the dining room does. Monday to Thursday and Sunday the kitchen takes orders until 8:45 pm, and Friday and Saturday until 9:15 pm.",
  },
  {
    q: "Can I order Thai food online for pickup in downtown Vancouver?",
    a: "Yes. Orders are placed at order.tigersgardenthai.com and picked up at 312 W 8th St, facing Esther Short Park.",
  },
  {
    q: "Is there a minimum order for delivery?",
    a: "The restaurant has not published a delivery minimum. Call (360) 693-9585 to confirm before you order.",
  },
];

function HoursTable({
  title,
  rows,
  highlight = false,
}: {
  title: string;
  rows: { days: string; time: string }[];
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl p-8 ${
        highlight ? "bg-tg-orange/10 border border-tg-orange/30" : "bg-tg-cream-soft"
      }`}
    >
      <h3 className="font-display uppercase tracking-[0.2em] text-sm text-tg-rust mb-5">
        {title}
      </h3>
      <ul className="flex flex-col gap-3">
        {rows.map((r) => (
          <li key={r.days} className="flex justify-between gap-4 text-tg-black/75">
            <span className="font-display uppercase tracking-[0.1em] text-xs text-tg-black/60">
              {r.days}
            </span>
            <span className="tabular-nums text-sm">{r.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function OrderOnlinePage() {
  const data = graph(
    breadcrumbs([
      { name: "Home", path: "/" },
      { name: "Order Online", path: "/order-online" },
    ]),
    faqNode(FAQ),
    restaurantRef,
  );

  return (
    <>
      <JsonLd data={data} />

      <section className="bg-tg-black pt-32 pb-16 md:pt-40 md:pb-24">
        <Container>
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 font-display uppercase tracking-[0.25em] text-[10px] text-tg-cream/50">
              <li>
                <a href="/" className="hover:text-tg-orange">Home</a>
              </li>
              <li aria-hidden>/</li>
              <li className="text-tg-orange">Order Online</li>
            </ol>
          </nav>

          <div className="max-w-3xl flex flex-col gap-6">
            <span className="font-display uppercase tracking-[0.35em] text-xs text-tg-orange/80">
              Pickup &amp; delivery · Downtown Vancouver, WA
            </span>
            <h1 className="font-display uppercase leading-[0.9] tracking-[-0.02em] text-[clamp(2.5rem,8vw,5.5rem)] text-tg-cream">
              Order Online in Vancouver, WA
            </h1>
            <p className="text-lg text-tg-cream/75 leading-relaxed">
              Thai and Laotian food for pickup or delivery from 312 W 8th St,
              facing Esther Short Park. Orders go through our own ordering site,
              not a third-party app.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2">
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
          </div>
        </Container>
      </section>

      <div className="tg-stripe h-3" aria-hidden />

      <section className="bg-white text-tg-black py-20 md:py-28">
        <Container>
          <div className="max-w-3xl mb-14">
            <Reveal>
              <SectionTitle eyebrow="Ordering hours" tone="black">
                Ordering closes before the dining room
              </SectionTitle>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 text-tg-black/75 leading-relaxed text-lg">
                Carryout and delivery stop taking orders fifteen minutes before
                the restaurant closes, so check the middle and right columns
                rather than the dining-room hours if you are ordering late.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <HoursTable title="Dining room" rows={primary.hours.business} />
            <HoursTable title="Carryout" rows={primary.hours.carryout} highlight />
            <HoursTable title="Delivery" rows={primary.hours.delivery} highlight />
          </div>

          <p className="mt-8 text-sm text-tg-black/55 leading-relaxed max-w-3xl">
            Menu items and availability can change. Delivery fees, minimums and
            the delivery area are not published here — call{" "}
            {primary.phone} to confirm before ordering.
          </p>
        </Container>
      </section>

      <section className="bg-tg-cream-soft text-tg-black py-20 md:py-28">
        <Container>
          <div className="max-w-3xl flex flex-col gap-10">
            <Reveal>
              <SectionTitle eyebrow="Questions" tone="black">
                Ordering, answered
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
              <div className="flex flex-wrap gap-4">
                <Button
                  href="/menu"
                  data-track="menu_click"
                  variant="outline"
                  className="border-tg-black/30 text-tg-black hover:border-tg-rust hover:text-tg-rust hover:bg-tg-rust/5"
                >
                  See the full menu
                </Button>
                <Button
                  href={site.orderUrl}
                  data-track="order_click"
                  target="_blank"
                  variant="primary"
                >
                  Order Online
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
