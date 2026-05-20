type Props = {
  items: string[];
  className?: string;
  separator?: string;
};

export function Marquee({ items, className = "", separator = "✦" }: Props) {
  const seq = [...items, ...items];
  return (
    <div
      className={`flex overflow-hidden border-y border-tg-orange/20 bg-tg-black ${className}`}
    >
      <div className="flex shrink-0 whitespace-nowrap py-5 [animation:var(--animate-marquee)]">
        {seq.map((text, i) => (
          <span
            key={i}
            className="mx-4 sm:mx-8 inline-flex items-center gap-4 sm:gap-8 font-display uppercase tracking-[0.4em] text-tg-cream/80 text-sm"
          >
            {text}
            <span className="text-tg-orange" aria-hidden>
              {separator}
            </span>
          </span>
        ))}
      </div>
      <div
        aria-hidden
        className="flex shrink-0 whitespace-nowrap py-5 [animation:var(--animate-marquee)]"
      >
        {seq.map((text, i) => (
          <span
            key={i}
            className="mx-4 sm:mx-8 inline-flex items-center gap-4 sm:gap-8 font-display uppercase tracking-[0.4em] text-tg-cream/80 text-sm"
          >
            {text}
            <span className="text-tg-orange">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
