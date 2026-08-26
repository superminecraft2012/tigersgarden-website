import { menu, type MenuItem } from "./menu";

/**
 * Dish landing pages.
 *
 * Selected from three demand signals gathered in the SEO research pass
 * (see SEO.md): 12 months of English Wikipedia pageviews, live Google
 * autocomplete for the dish / "<dish> near me" / "<dish> vancouver wa", and
 * the intent those autocompletes express. Dishes whose autocomplete is
 * dominated by "recipe", "paste", "calories" and "vs" are recipe intent and
 * were deliberately left off — they belong in a blog, not on a landing page.
 *
 * CONTENT RULE. Every factual statement below traces to one of:
 *   1. lib/menu.ts (the live menu file)
 *   2. what the site already publishes (lib/site.ts)
 *   3. general culinary background about the dish itself
 * No prices, no dietary or allergen claims, no spice ratings, no sourcing,
 * no awards, no customer opinions. "Best <dish> in Vancouver" is opinion and
 * is used deliberately; it is never dressed up as a verified fact.
 */

export type Dish = {
  /** URL slug — the phrasing people actually search for. */
  slug: string;
  /** Matching entry in lib/menu.ts. */
  menuSlug: string;
  /** <h1> — the bare "[Dish] in [City]" form. "Best" lives in the title so
   *  the page covers both the bare and the "best ..." query. */
  h1: string;
  /** <title> — carries the "Best ..." phrasing. */
  title: string;
  /** Short label for cross-links. */
  label: string;
  metaDescription: string;
  /** Other names for the same dish, stated on the page so they connect. */
  alsoKnownAs: string[];
  /** General culinary background about the dish. Not about this kitchen. */
  background: string[];
  faq: { q: string; a: string }[];
  /** 2-3 related dish slugs. */
  related: string[];
};

export const dishes: Dish[] = [
  {
    slug: "pad-thai",
    menuSlug: "pad-thai",
    h1: "Pad Thai in Vancouver, WA",
    label: "Pad Thai",
    title: "Best Pad Thai in Vancouver, WA",
    metaDescription:
      "Pad Thai at Tiger's Garden in downtown Vancouver, WA — stir-fried rice noodles with tamarind, egg, bean sprout and crushed peanut. Dine in, carry out or order online.",
    alsoKnownAs: ["phat thai", "pad thai noodles"],
    background: [
      "Pad Thai is a stir-fried rice noodle dish and one of the most widely recognised dishes in Thai cooking. It rose to national prominence in Thailand in the mid-20th century and has since become the dish most people outside the country meet first.",
      "The character of the dish comes from its sauce rather than its heat: tamarind for sourness, palm sugar for sweetness and fish sauce for salt, balanced against each other. Rice noodles are stir-fried quickly over high heat so they stay separate rather than turning soft.",
    ],
    faq: [
      {
        q: "What is in Pad Thai at Tiger's Garden?",
        a: "Stir-fried rice noodles with tamarind, fish sauce, palm sugar, egg, bean sprout, scallion and crushed peanut.",
      },
      {
        q: "Is Pad Thai the same as phat thai?",
        a: "Yes. Phat thai is a closer transliteration of the Thai name; the menu spells it Pad Thai. They are the same dish.",
      },
      {
        q: "Can I order Pad Thai for carry out in Vancouver, WA?",
        a: "Yes. Tiger's Garden is at 312 W 8th St in downtown Vancouver, facing Esther Short Park. You can order online, or call (360) 693-9585.",
      },
      {
        q: "What does \"pad\" mean in Pad Thai?",
        a: "Pad means stir-fried in Thai, so the name describes the cooking method — a Thai stir-fry of rice noodles.",
      },
      {
        q: "What is the difference between Pad Thai and drunken noodles?",
        a: "Pad Thai is built on a tamarind, palm sugar and fish sauce balance with thin rice noodles. Drunken noodles are a separate dish, listed on the Tiger's Garden menu as Pad Khee Mao.",
      },
    ],
    related: ["tom-yum-soup", "massaman-curry", "mango-sticky-rice"],
  },
  {
    slug: "tom-yum-soup",
    menuSlug: "tom-yum-soup",
    h1: "Tom Yum Soup in Vancouver, WA",
    label: "Tom Yum Soup",
    title: "Best Tom Yum Soup in Vancouver, WA",
    metaDescription:
      "Tom Yum soup at Tiger's Garden in downtown Vancouver, WA — a hot-and-sour Thai broth with lemongrass, galangal, kaffir lime leaves, mushrooms and shrimp.",
    alsoKnownAs: ["tom yum goong", "tom yum gung", "hot and sour Thai soup"],
    background: [
      "Tom yum is a hot-and-sour soup from Thailand built on aromatics rather than stock alone. Lemongrass, galangal and kaffir lime leaves are simmered to release their oils, then lime juice and chili are added toward the end so the sourness and heat stay bright.",
      "The aromatics are traditionally left in the bowl. They are there to flavour the broth rather than to be eaten, which is why a bowl of tom yum often arrives with whole stalks and leaves still in it.",
    ],
    faq: [
      {
        q: "What is in Tom Yum soup at Tiger's Garden?",
        a: "A hot-and-sour Thai broth with lemongrass, galangal, kaffir lime leaves, mushrooms and shrimp.",
      },
      {
        q: "What is the difference between tom yum and tom kha?",
        a: "Both are Thai soups built on the same aromatics. Tiger's Garden lists Tom Yum as a hot-and-sour broth, and lists Tom Kha separately on the same menu section.",
      },
      {
        q: "Where can I get Tom Yum soup near Esther Short Park?",
        a: "Tiger's Garden is at 312 W 8th St, facing Esther Short Park in downtown Vancouver, WA. Call (360) 693-9585 or order online.",
      },
      {
        q: "Is Tom Yum soup made with coconut milk?",
        a: "No. Tom Yum is a clear hot-and-sour broth. Coconut milk is the defining ingredient of Tom Kha, which Tiger's Garden lists as a separate soup.",
      },
    ],
    related: ["massaman-curry", "pad-thai", "larb"],
  },
  {
    slug: "massaman-curry",
    menuSlug: "massaman-curry",
    h1: "Massaman Curry in Vancouver, WA",
    label: "Massaman Curry",
    title: "Best Massaman Curry in Vancouver, WA",
    metaDescription:
      "Massaman curry at Tiger's Garden in downtown Vancouver, WA — slow-simmered with potato, onion, roasted peanut and a tamarind-led finish.",
    alsoKnownAs: ["matsaman curry", "mussaman curry"],
    background: [
      "Massaman is the mildest and most warmly spiced of the Thai curries, and the one that most clearly shows outside influence. Where other Thai curry pastes lean on fresh herbs, massaman brings in dry spices associated with Persian and Indian cooking — cinnamon, cardamom, clove and cumin among them.",
      "It is also the slowest. Massaman is simmered rather than flashed, which is what lets potato and onion soften into the sauce and gives the curry its thicker, rounder body.",
    ],
    faq: [
      {
        q: "What is in Massaman curry at Tiger's Garden?",
        a: "A rich, slow-simmered massaman curry with potato, onion, roasted peanut and a tamarind-led sweet-savory finish.",
      },
      {
        q: "How is massaman different from red or green curry?",
        a: "Massaman is built on dry warming spices and is slow-simmered, which gives it a deeper and rounder body. Tiger's Garden lists Red Curry and Green Curry separately in the same curry section.",
      },
      {
        q: "Can I order Massaman curry for delivery in Vancouver, WA?",
        a: "Tiger's Garden publishes delivery hours alongside its carry out hours. You can order online, or call (360) 693-9585.",
      },
      {
        q: "What is the difference between Massaman and Panang curry?",
        a: "Massaman leans on dry warming spices and is slow-simmered until potato and onion soften into the sauce. Panang is a thicker, peanut-forward curry. Tiger's Garden lists both separately in its curry section.",
      },
      {
        q: "What is the difference between Massaman and yellow curry?",
        a: "Both are mild and warmly spiced, but Massaman is simmered longer and finishes with tamarind and roasted peanut. Yellow Curry is listed separately on the Tiger's Garden menu.",
      },
    ],
    related: ["tom-yum-soup", "pad-thai", "mango-sticky-rice"],
  },
  {
    slug: "larb",
    menuSlug: "larb",
    h1: "Larb in Vancouver, WA",
    label: "Larb",
    title: "Best Larb in Vancouver, WA",
    metaDescription:
      "Larb at Tiger's Garden in downtown Vancouver, WA — ground chicken tossed with spicy lime juice over spring mix. Laotian and Thai cooking, facing Esther Short Park.",
    alsoKnownAs: ["laab", "larp", "lahb"],
    background: [
      "Larb is a minced meat salad and is widely regarded as the national dish of Laos. It is also eaten across Isan, the northeastern region of Thailand that shares a border and much of its cooking with Laos, which is why it appears on both Thai and Laotian menus.",
      "Rather than a leafy salad with meat added, larb is the reverse: the meat is the salad. It is dressed with lime juice and chili and served at room temperature, so the sourness stays sharp instead of cooking off.",
    ],
    faq: [
      {
        q: "What is larb?",
        a: "Larb is a minced meat salad widely regarded as the national dish of Laos, dressed with lime juice and chili. At Tiger's Garden it is ground chicken tossed with spicy lime juice, served over spring mix.",
      },
      {
        q: "Is larb the same as laab or larp?",
        a: "Yes. Laab, larp and lahb are alternative spellings of the same dish. The menu spells it Larb.",
      },
      {
        q: "Where can I get Laotian food in Vancouver, WA?",
        a: "Tiger's Garden serves Thai and Laotian cuisine at 312 W 8th St in downtown Vancouver, WA, facing Esther Short Park.",
      },
      {
        q: "What is larb gai?",
        a: "Gai means chicken, so larb gai is larb made with chicken. The larb at Tiger's Garden is made with ground chicken.",
      },
    ],
    related: ["tom-yum-soup", "pad-thai", "massaman-curry"],
  },
  {
    slug: "mango-sticky-rice",
    menuSlug: "mango-sticky-rice",
    h1: "Mango Sticky Rice in Vancouver, WA",
    label: "Mango Sticky Rice",
    title: "Best Mango Sticky Rice in Vancouver, WA",
    metaDescription:
      "Mango sticky rice at Tiger's Garden in downtown Vancouver, WA — sweet coconut-soaked sticky rice with fresh mango and a drizzle of coconut cream.",
    alsoKnownAs: ["khao niaow ma muang", "mango with sticky rice", "sweet sticky rice with mango"],
    background: [
      "Mango sticky rice is a Thai dessert built on glutinous rice, a short-grain rice that turns dense and chewy when steamed rather than boiled. The cooked rice is soaked in sweetened coconut milk while still warm so it absorbs the coconut rather than being coated in it.",
      "It is a seasonal dish in Thailand, traditionally eaten in the hot months when mangoes are at their best, and it is usually served at room temperature rather than chilled.",
    ],
    faq: [
      {
        q: "What is mango sticky rice?",
        a: "A Thai dessert of sweet coconut-soaked sticky rice served with fresh mango. At Tiger's Garden it is finished with a drizzle of coconut cream.",
      },
      {
        q: "What kind of rice is used in mango sticky rice?",
        a: "Glutinous rice, a short-grain rice that becomes dense and chewy when steamed. It is a different rice from the long-grain rice served with curries.",
      },
      {
        q: "Where can I get mango sticky rice in downtown Vancouver, WA?",
        a: "Tiger's Garden is at 312 W 8th St, facing Esther Short Park. Call (360) 693-9585 or order online.",
      },
      {
        q: "What does mango sticky rice taste like?",
        a: "Sweet and creamy rather than spiced. The menu describes sweet coconut-soaked sticky rice with fresh mango and a drizzle of coconut cream — the rice is chewy and the mango soft.",
      },
    ],
    related: ["pad-thai", "massaman-curry", "larb"],
  },
];

export const getDish = (slug: string) => dishes.find((d) => d.slug === slug);

export const dishMenuItem = (d: Dish): MenuItem | undefined =>
  menu.find((m) => m.slug === d.menuSlug);
