import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { site, primary } from "@/lib/site";

export const metadata: Metadata = {
  title: "Catering",
  description:
    "Tiger's Garden caters office lunches, family gatherings, rehearsal dinners, and private events in Vancouver, WA. Call us to plan your menu.",
};

const eventTypes = [
  {
    title: "Office Lunches",
    body: "Feed your team something better than a sandwich tray. We put together generous spreads of Thai and Laotian classics, portioned and packaged for easy service.",
  },
  {
    title: "Family Gatherings",
    body: "Birthdays, reunions, holidays — we handle the cooking so you can actually enjoy the party. Mix and match dishes from across the menu.",
  },
  {
    title: "Rehearsal Dinners",
    body: "A relaxed, flavorful alternative to the traditional rehearsal dinner. We'll help you plan a menu that works for the whole group.",
  },
  {
    title: "Private Events",
    body: "Corporate events, celebrations, and anything else worth feeding a room. Call with your headcount and date and we'll build from there.",
  },
];

const steps = [
  {
    number: "01",
    title: "Call us",
    body: "Give us a call with your event date, headcount, and any dietary needs. We'll talk through the options.",
  },
  {
    number: "02",
    title: "Plan the menu",
    body: "We'll suggest dishes that travel well and feed a crowd. Mix appetizers, mains, and sides to match your event.",
  },
  {
    number: "03",
    title: "We handle the rest",
    body: "Show up to your event. We'll have everything ready, packaged, and labeled so service is simple.",
  },
];

export default function CateringPage() {
  return (
    <>
      {/* 1. HERO */}
      <section className="relative isolate flex min-h-[70vh] items-center justify-center overflow-hidden bg-tg-black">
        <Image
          src="/images/heroimage1.webp"
          alt="Tiger's Garden catering spread"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-tg-lotus/20 via-tg-lotus/10 to-tg-lotus/45"
        />

        <Container className="relative z-10">
          <div className="flex flex-col items-center gap-8 text-center">
            <span
              className="inline-flex items-center gap-3 font-display uppercase tracking-[0.4em] text-xs text-tg-orange/80 opacity-0 [animation:var(--animate-fade-up)]"
              style={{ animationDelay: "0.05s" }}
            >
              <span className="block h-[1px] w-10 bg-current opacity-70" />
              Tiger&rsquo;s Garden
              <span className="block h-[1px] w-10 bg-current opacity-70" />
            </span>

            <h1
              className="font-display uppercase leading-[0.86] tracking-[-0.02em] text-[clamp(3rem,10vw,8.5rem)] text-tg-cream opacity-0 [animation:var(--animate-fade-up)]"
              style={{ animationDelay: "0.12s" }}
            >
              Catering
            </h1>

            <p
              className="max-w-xl text-tg-cream/80 leading-relaxed text-lg opacity-0 [animation:var(--animate-fade-up)]"
              style={{ animationDelay: "0.22s" }}
            >
              Thai &amp; Laotian food for your office, family, or event.
              We cook, you celebrate.
            </p>

            <div
              className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4 opacity-0 [animation:var(--animate-fade-up)]"
              style={{ animationDelay: "0.35s" }}
            >
              <Button href={primary.phoneHref} variant="primary">
                Call to Book
              </Button>
              <Button href="/menu" variant="outline">
                Browse the Menu
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

      {/* 2. INTRO */}
      <section className="bg-white py-24 md:py-32">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal className="flex flex-col gap-6">
              <SectionTitle eyebrow="Feed a crowd" tone="black">
                Great food for{" "}
                <span className="font-serif italic normal-case tracking-normal text-tg-orange">
                  any occasion.
                </span>
              </SectionTitle>
              <p className="text-base md:text-lg leading-relaxed text-tg-black/70 max-w-lg">
                Tiger&rsquo;s Garden has been feeding Vancouver for years,
                and the menu has never been stronger. Whether it&rsquo;s twelve people or a
                hundred, Thai and Laotian food travels well and makes an
                impression.
              </p>
              <p className="text-base leading-relaxed text-tg-black/60 max-w-lg">
                All catering is arranged by phone. Call us with your date,
                headcount, and any dietary restrictions and we&rsquo;ll take it
                from there.
              </p>
              <div className="pt-2">
                <Button href={primary.phoneHref} variant="primary">
                  Call {primary.phone}
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.15} className="flex flex-col gap-6">
              <div className="overflow-hidden rounded-2xl bg-tg-cream-soft p-8 md:p-10">
                <h3 className="font-display uppercase tracking-[0.2em] text-sm text-tg-orange mb-6">
                  What to expect
                </h3>
                <ul className="flex flex-col gap-4">
                  {[
                    "Full menu available for catering orders",
                    "Pickup or delivery to your venue",
                    "Minimum order for catering inquiries",
                    "Portioned and packaged for easy service",
                    "Dietary accommodations available",
                    "Advance booking required",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-tg-black/75 leading-snug"
                    >
                      <span
                        aria-hidden
                        className="mt-1 block h-[6px] w-[6px] shrink-0 rounded-full bg-tg-orange"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 3. EVENT TYPES */}
      <section className="bg-tg-cream-soft py-24 md:py-32">
        <Container>
          <Reveal>
            <SectionTitle eyebrow="Occasions" align="center" tone="black">
              Perfect for every table.
            </SectionTitle>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {eventTypes.map((event, i) => (
              <Reveal key={event.title} delay={0.08 * i}>
                <div className="flex flex-col gap-4 rounded-2xl bg-white border border-tg-black/8 p-8 md:p-10 h-full">
                  <span className="font-display uppercase tracking-[0.3em] text-xs text-tg-orange/80">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display uppercase tracking-tight text-2xl md:text-3xl text-tg-black">
                    {event.title}
                  </h3>
                  <p className="text-tg-black/65 leading-relaxed">{event.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. HOW IT WORKS */}
      <section className="bg-tg-orange-deep py-24 md:py-32">
        <Container>
          <Reveal>
            <div className="flex flex-col items-center text-center gap-3 mb-16">
              <span className="inline-flex items-center gap-2 font-display uppercase tracking-[0.32em] text-xs text-white/70">
                <span className="block h-[1px] w-8 bg-current opacity-70" />
                Simple process
              </span>
              <h2 className="font-display uppercase leading-[0.92] tracking-[-0.01em] text-5xl md:text-6xl text-white">
                How it works
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, i) => (
              <Reveal key={step.number} delay={0.1 * i}>
                <div className="flex flex-col gap-4 rounded-2xl bg-white/15 border border-white/20 p-8 md:p-10 backdrop-blur-sm h-full">
                  <span className="font-display text-5xl md:text-6xl leading-none text-white/30">
                    {step.number}
                  </span>
                  <h3 className="font-display uppercase tracking-tight text-2xl text-white">
                    {step.title}
                  </h3>
                  <p className="text-white/75 leading-relaxed">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. CTA */}
      <div className="tg-stripe h-3" aria-hidden />
      <section className="bg-tg-black py-24 md:py-32">
        <Container>
          <div className="flex flex-col items-center text-center gap-8">
            <Reveal>
              <SectionTitle eyebrow="Ready to plan?" align="center">
                Let&rsquo;s build your menu.
              </SectionTitle>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="max-w-xl text-tg-cream/70 leading-relaxed">
                Call us to get started. We&rsquo;ll talk through the date,
                headcount, and any dietary needs, then put together something
                a menu worth showing up for.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button href={primary.phoneHref} variant="primary">
                  Call {primary.phone}
                </Button>
                <Button href="/menu" variant="outline">
                  Browse the Menu
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
