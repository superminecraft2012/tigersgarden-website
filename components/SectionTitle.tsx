import { ReactNode } from "react";

export function SectionTitle({
  eyebrow,
  children,
  align = "left",
  tone = "cream",
  as: Tag = "h2",
}: {
  eyebrow?: string;
  children: ReactNode;
  align?: "left" | "center";
  tone?: "cream" | "black";
  /** Promote to h1 where this is the page's top-level heading. */
  as?: "h1" | "h2";
}) {
  const isCenter = align === "center";
  const isBlack = tone === "black";
  return (
    <div
      className={`flex flex-col gap-3 ${isCenter ? "items-center text-center" : "items-start"}`}
    >
      {eyebrow && (
        <span
          className={`inline-flex items-center gap-2 font-display uppercase tracking-[0.32em] text-sm ${isBlack ? "text-tg-rust" : "text-tg-orange"}`}
        >
          <span className="block h-[1px] w-8 bg-current opacity-70" />
          {eyebrow}
        </span>
      )}
      <Tag
        className={`font-display uppercase leading-[0.92] tracking-[-0.01em] text-5xl md:text-6xl lg:text-7xl ${isBlack ? "text-tg-black" : "text-tg-cream"}`}
      >
        {children}
      </Tag>
    </div>
  );
}
