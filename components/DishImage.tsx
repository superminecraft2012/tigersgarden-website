import Image from "next/image";
import type { MenuItem } from "@/lib/menu";
import { ItemImage } from "./ItemImage";

type Props = {
  item: Pick<MenuItem, "name" | "image" | "hue">;
  /** Passed straight to next/image; ignored for placeholder art. */
  sizes: string;
  className?: string;
  /** Above-the-fold hero usage — the dish detail pages. */
  preload?: boolean;
};

/**
 * The photo for a dish, or its placeholder art while it's still waiting on a
 * studio shot. Fills a positioned parent, exactly like `<Image fill>`, so the
 * call sites keep their own aspect-ratio container and tinted backdrop.
 */
export function DishImage({ item, sizes, className = "", preload }: Props) {
  if (!item.image) {
    return <ItemImage hue={item.hue} label={item.name} fill />;
  }
  return (
    <Image
      src={item.image}
      alt={item.name}
      fill
      sizes={sizes}
      className={`object-cover ${className}`}
      preload={preload}
    />
  );
}
