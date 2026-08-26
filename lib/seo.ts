import { site, primary, cuisineTags, social } from "./site";
import { menu, categories, type MenuCategory, type MenuItem } from "./menu";

/**
 * Canonical host. The bare domain 301s to www (verified against the live site),
 * so every canonical, sitemap entry and schema @id must use the www form.
 */
export const CANONICAL_ORIGIN = "https://www.tigersgardenthai.com";

/** Stable @id for the single Restaurant entity. Defined once, referenced everywhere. */
export const RESTAURANT_ID = `${CANONICAL_ORIGIN}/#restaurant`;

export const canonical = (path: string) =>
  path === "/" ? CANONICAL_ORIGIN : `${CANONICAL_ORIGIN}${path}`;

/* ------------------------------------------------------------------ *
 * Hours
 *
 * Derived from lib/site.ts — the same constant the visible hours tables
 * render from — so schema hours cannot drift from what a visitor reads.
 * ------------------------------------------------------------------ */

const DAY: Record<string, string> = {
  mon: "Monday",
  tue: "Tuesday",
  wed: "Wednesday",
  thu: "Thursday",
  fri: "Friday",
  sat: "Saturday",
  sun: "Sunday",
};
const ORDER = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

/** "Mon – Thu" -> [Monday..Thursday]; "Fri & Sat" -> [Friday, Saturday]; "Sun" -> [Sunday] */
function expandDays(label: string): string[] {
  const keys = (label.toLowerCase().match(/mon|tue|wed|thu|fri|sat|sun/g) ??
    []) as string[];
  if (keys.length === 0) return [];
  if (/[–—-]/.test(label) && keys.length === 2) {
    const a = ORDER.indexOf(keys[0]);
    const b = ORDER.indexOf(keys[1]);
    if (a !== -1 && b !== -1 && a <= b) {
      return ORDER.slice(a, b + 1).map((k) => DAY[k]);
    }
  }
  return keys.map((k) => DAY[k]);
}

/** "11:00 am" -> "11:00"; "9:30 pm" -> "21:30" */
function to24h(t: string): string | null {
  const m = t.trim().match(/^(\d{1,2})(?::(\d{2}))?\s*(am|pm)$/i);
  if (!m) return null;
  let h = parseInt(m[1], 10);
  const min = m[2] ?? "00";
  const mer = m[3].toLowerCase();
  if (mer === "pm" && h !== 12) h += 12;
  if (mer === "am" && h === 12) h = 0;
  return `${String(h).padStart(2, "0")}:${min}`;
}

export function openingHoursSpecification() {
  const out: {
    "@type": "OpeningHoursSpecification";
    dayOfWeek: string[];
    opens: string;
    closes: string;
  }[] = [];

  for (const row of primary.hours.business) {
    const days = expandDays(row.days);
    const [rawOpen, rawClose] = row.time.split(/\s*[–—-]\s*/);
    const opens = rawOpen ? to24h(rawOpen) : null;
    const closes = rawClose ? to24h(rawClose) : null;
    if (!days.length || !opens || !closes) continue;
    out.push({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: days,
      opens,
      closes,
    });
  }
  return out;
}

/* ------------------------------------------------------------------ *
 * The single canonical Restaurant entity
 * ------------------------------------------------------------------ */

/**
 * Deliberately omits priceRange, aggregateRating and review.
 *
 * - priceRange: the repo contains no price data of any kind, so any value
 *   would be invented.
 * - aggregateRating/review: the quotes in lib/reviews.ts are self-hosted and
 *   self-selected, which is exactly the self-serving markup Google prohibits.
 */
export function restaurantNode() {
  return {
    "@type": "Restaurant",
    "@id": RESTAURANT_ID,
    name: site.name,
    description: site.description,
    url: CANONICAL_ORIGIN,
    telephone: primary.phoneHref.replace("tel:", ""),
    servesCuisine: [...cuisineTags],
    address: {
      "@type": "PostalAddress",
      streetAddress: primary.address,
      addressLocality: "Vancouver",
      addressRegion: "WA",
      postalCode: "98660",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 45.6273812310682,
      longitude: -122.674576899983,
    },
    image: [
      `${CANONICAL_ORIGIN}/images/heroimage1.webp`,
      `${CANONICAL_ORIGIN}/images/heroimage2.webp`,
      `${CANONICAL_ORIGIN}/images/sections/about-us.webp`,
    ],
    hasMenu: `${CANONICAL_ORIGIN}/menu#menu`,
    // order.tigersgardenthai.com is a first-party subdomain, so an OrderAction
    // is honest here. It would not be if ordering were only via aggregators.
    potentialAction: {
      "@type": "OrderAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: site.orderUrl,
        inLanguage: "en-US",
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform",
        ],
      },
      deliveryMethod: [
        "http://purl.org/goodrelations/v1#DeliveryModePickUp",
        "http://purl.org/goodrelations/v1#DeliveryModeOwnFleet",
      ],
    },
    hasMap: primary.mapsUrl,
    openingHoursSpecification: openingHoursSpecification(),
    acceptsReservations: "True",
    sameAs: social.map((s) => s.href),
  };
}

/** Every other page references the entity by @id instead of redescribing it. */
export const restaurantRef = { "@id": RESTAURANT_ID };

/* ------------------------------------------------------------------ *
 * Menu
 *
 * Built from the same `menu`/`categories` constants the page renders from.
 * /menu renders every category, so the schema describes every category.
 * ------------------------------------------------------------------ */

export function menuNode(renderedCategories: readonly MenuCategory[] = categories) {
  return {
    "@type": "Menu",
    "@id": `${CANONICAL_ORIGIN}/menu#menu`,
    name: `${site.name} Menu`,
    inLanguage: "en-US",
    hasMenuSection: renderedCategories.map((c) => ({
      "@type": "MenuSection",
      name: c,
      hasMenuItem: menu
        .filter((m) => m.category === c)
        .map((m) => ({
          "@type": "MenuItem",
          name: m.name,
          description: m.description,
          url: canonical(`/menu/${m.slug}`),
        })),
    })),
  };
}

/** MenuItem for a dish page. No Offer — the repo holds no verified prices. */
export function menuItemNode(item: MenuItem, path: string) {
  return {
    "@type": "MenuItem",
    "@id": `${canonical(path)}#dish`,
    name: item.name,
    description: item.description,
    image: `${CANONICAL_ORIGIN}${item.image}`,
    menuAddOn: undefined,
    isPartOf: { "@id": `${CANONICAL_ORIGIN}/menu#menu` },
  };
}

export function itemListNode(
  entries: { name: string; path: string; description?: string }[],
) {
  return {
    "@type": "ItemList",
    itemListElement: entries.map((e, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: e.name,
      url: canonical(e.path),
      ...(e.description ? { description: e.description } : {}),
    })),
  };
}

export function breadcrumbs(trail: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: canonical(t.path),
    })),
  };
}

export function faqNode(qa: { q: string; a: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: qa.map((x) => ({
      "@type": "Question",
      name: x.q,
      acceptedAnswer: { "@type": "Answer", text: x.a },
    })),
  };
}

/** Wraps nodes in one @graph so a page emits a single JSON-LD block. */
export function graph(...nodes: unknown[]) {
  return { "@context": "https://schema.org", "@graph": nodes.filter(Boolean) };
}
