import Link from "next/link";
import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "ghost" | "outline";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-display uppercase tracking-[0.15em] text-sm min-h-[44px] touch-manipulation transition-all duration-300 ease-[var(--ease-fierce)] focus:outline-none focus-visible:ring-2 focus-visible:ring-tg-orange focus-visible:ring-offset-2 focus-visible:ring-offset-tg-black";

const variants: Record<Variant, string> = {
  primary:
    "bg-tg-orange text-tg-black px-7 py-3.5 hover:bg-tg-ember hover:shadow-[var(--shadow-glow)] active:scale-[0.98]",
  ghost: "text-tg-cream px-5 py-3 hover:text-tg-orange",
  outline:
    "border border-tg-cream/30 text-tg-cream px-7 py-3.5 hover:border-tg-orange hover:text-tg-orange hover:bg-tg-orange/5",
};

type ButtonAsButton = {
  href?: undefined;
  children: ReactNode;
  variant?: Variant;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonAsLink = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  target?: "_self" | "_blank";
  rel?: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const { variant = "primary", className = "" } = props;
  const cls = `${base} ${variants[variant]} ${className}`;

  if ("href" in props && props.href) {
    const { href, target, rel, children } = props;
    const isExternal =
      target === "_blank" || /^(https?:|tel:|mailto:)/.test(href);
    if (isExternal) {
      return (
        <a
          href={href}
          target={target}
          rel={rel ?? (target === "_blank" ? "noopener noreferrer" : undefined)}
          className={cls}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  const { children, ...rest } = props as ButtonAsButton;
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
