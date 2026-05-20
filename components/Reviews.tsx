import { reviews, reviewsCta } from "@/lib/reviews";
import { Container } from "./Container";
import { SectionTitle } from "./SectionTitle";
import { Reveal } from "./Reveal";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 text-tg-orange" aria-label={`${rating} of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} aria-hidden className="text-lg">
          {i < rating ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section className="relative bg-tg-cream-soft py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionTitle eyebrow="Guest book" align="center" tone="black">
            What people are saying.
          </SectionTitle>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {reviews.map((r, i) => (
            <Reveal key={r.author} delay={0.08 * i}>
              <figure className="relative h-full flex flex-col gap-5 p-6 sm:p-8 md:p-10 rounded-2xl bg-white border border-tg-black/8 hover:border-tg-orange/30 shadow-sm hover:shadow-md transition-all duration-500">
                <span
                  aria-hidden
                  className="absolute -top-4 -left-2 font-display text-5xl sm:text-6xl md:text-7xl text-tg-orange/30 leading-none select-none"
                >
                  &ldquo;
                </span>
                <Stars rating={r.rating} />
                <blockquote className="text-tg-black/75 leading-relaxed text-base md:text-lg flex-1">
                  {r.text}
                </blockquote>
                <figcaption className="font-display uppercase tracking-[0.25em] text-sm text-tg-orange">
                  {r.author}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <a
            href={reviewsCta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="tg-link font-display uppercase tracking-[0.3em] text-xs text-tg-black/60"
          >
            {reviewsCta.label}
          </a>
        </div>
      </Container>
    </section>
  );
}
