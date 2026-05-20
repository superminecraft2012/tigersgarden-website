import { ReactNode } from "react";

export function SectionTitle({
  eyebrow,
  children,
  align = "left",
  tone = "cream",
}: {
  eyebrow?: string;
  children: ReactNode;
  align?: "left" | "center";
  tone?: "cream" | "black";
}) {
  const isCenter = align === "center";
  const isBlack = tone === "black";
  return (
    <div
      className={`flex flex-col gap-3 ${isCenter ? "items-center text-center" : "items-start"}`}
    >
      {eyebrow && (
        <span
          className={`inline-flex items-center gap-2 font-display uppercase tracking-[0.32em] text-xs ${isBlack ? "text-tg-rust" : "text-tg-orange"}`}
        >
          <span className="block h-[1px] w-8 bg-current opacity-70" />
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display uppercase leading-[0.92] tracking-[-0.01em] text-5xl md:text-6xl lg:text-7xl ${isBlack ? "text-tg-black" : "text-tg-cream"}`}
      >
        {children}
      </h2>
    </div>
  );
}
