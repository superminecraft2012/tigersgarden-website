import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";

export const metadata: Metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="bg-tg-black text-tg-cream">
      <Container className="flex min-h-[70vh] flex-col items-start justify-center pt-32 pb-20">
        <p className="font-display text-sm uppercase tracking-[0.3em] text-tg-orange">404</p>
        <h1 className="mt-4 font-display text-5xl uppercase leading-none text-tg-cream md:text-7xl">
          Page not found
        </h1>
        <p className="mt-6 max-w-md text-tg-cream/80">
          That page does not exist or has moved.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="/menu">See the menu</Button>
          <Button href="/" variant="outline">Back to home</Button>
        </div>
      </Container>
    </section>
  );
}
