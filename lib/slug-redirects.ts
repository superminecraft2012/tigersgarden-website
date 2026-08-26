/**
 * Menu slug renames: old slug -> new slug.
 *
 * The printed menu spelling is not always the spelling people search. Each
 * entry below was verified against live Google autocomplete before changing:
 * where Google auto-corrects the old spelling, or where the old slug collides
 * with a competitor brand or a bare ingredient word, the slug moves to the
 * searched form and the page states that they are the same dish.
 *
 * Every old slug keeps working via a permanent redirect in next.config.ts, so
 * nothing already linked, bookmarked, printed on a QR code or indexed breaks.
 * These are genuine renames — unknown/bogus slugs still 404 rather than
 * redirecting, which is a different case entirely.
 */
export const MENU_SLUG_REDIRECTS: Record<string, string> = {
  // Google auto-corrects "pad see ewi" -> "pad see ew". Nobody searches the
  // printed spelling; it reads as a typo.
  "pad-see-ewi": "pad-see-ew",

  // Google auto-corrects "pad khee mao" -> "pad kee mao".
  "pad-khee-mao": "pad-kee-mao",

  // The menu describes crab meat and cream cheese in wonton skins — that is
  // crab rangoon exactly, and it is the far stronger search term.
  "fried-crab-wontons": "crab-rangoon",

  // "hot basil" autocomplete is dominated by a competing restaurant brand
  // ("Hot Basil Thai Cuisine") and by "hot basil plant". Unwinnable as a slug.
  "hot-basil": "thai-basil",
  "hot-basil-fried-rice": "thai-basil-fried-rice",

  // Bare ingredient words. "/menu/ginger" and "/menu/eggplant" compete with
  // the spice and the vegetable rather than with a Thai stir-fry.
  ginger: "ginger-stir-fry",
  eggplant: "eggplant-stir-fry",

  // Unnatural truncation of the phrase people actually type.
  "sweet-sour": "sweet-and-sour",

  // These three contradicted their own menu name in the repo.
  "coconut-shrimps": "coconut-shrimp",
  "thai-ice-coffee": "thai-iced-coffee",
  "thai-ice-green-tea": "thai-iced-green-tea",
};
