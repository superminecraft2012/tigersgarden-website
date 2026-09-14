import { useId } from "react";

type Props = {
  hue: [string, string];
  label: string;
  className?: string;
  ratio?: "square" | "portrait" | "landscape" | "tall";
  /** Fill a positioned parent instead of setting an aspect ratio, like `<Image fill>`. */
  fill?: boolean;
};

const ratios: Record<NonNullable<Props["ratio"]>, string> = {
  square: "aspect-square",
  portrait: "aspect-[4/5]",
  landscape: "aspect-[5/3]",
  tall: "aspect-[3/4]",
};

/**
 * Placeholder art for menu items that haven't been photographed yet. Each item
 * gets a deterministic two-hue radial gradient + grain + a faint blueprint of
 * its name. Once a dish has a studio photo, give it an `image` in lib/menu.ts
 * and DishImage stops rendering this.
 */
export function ItemImage({ hue, label, className = "", ratio = "portrait", fill = false }: Props) {
  const [a, b] = hue;
  const patternId = useId();
  // The outer box only positions; .tg-grain forces `position: relative` on
  // whatever it's on, so it lives one level down where relative is what we want.
  const box = fill ? "absolute inset-0" : `rounded-lg ${ratios[ratio]}`;
  return (
    <div className={`overflow-hidden ${box} ${className}`} aria-hidden>
      <div
        className="tg-grain h-full w-full overflow-hidden"
        style={{
          background: `radial-gradient(120% 90% at 30% 20%, ${a} 0%, ${b} 65%, #0e0d0c 100%)`,
        }}
      >
        <div
          className="tg-card-zoom absolute inset-0"
          style={{
            background: `radial-gradient(60% 50% at 70% 80%, ${a}55 0%, transparent 70%)`,
          }}
        />
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full opacity-25 mix-blend-overlay"
          aria-hidden
        >
          <defs>
            <pattern id={patternId} width="14" height="14" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
              <line x1="0" y1="0" x2="0" y2="14" stroke="#000" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill={`url(#${patternId})`} />
        </svg>
        <span className="pointer-events-none absolute bottom-3 left-4 font-display uppercase text-tg-cream/70 text-[10px] tracking-[0.3em]">
          {label}
        </span>
      </div>
    </div>
  );
}
