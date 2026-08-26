# SEO — Tiger's Garden

Technical SEO and local search build for **Tiger's Garden**, 312 W 8th St,
Vancouver, WA 98660. Canonical host **https://www.tigersgardenthai.com**.

> **Status: shipped.** Committed and pushed to `main`. Production URLs go live
> on the host's next deploy from this branch.

---

## Phase 0 — Ground truth

**Live menu file.** `lib/menu.ts` is the only menu file in the repo — 69 items
across 10 categories. Proved live by grepping the built bundle for strings
unique to it (`Tiger Curry Pops`, `Showering Rama`, `Pra Ram Noodle`,
`Coconut-rich, herb-led, slow-simmered`); all present. **No stale or competing
menu files exist**, so there are no dish/price/description disagreements to
reconcile.

**Prices — none exist.** There are no prices anywhere in the repo. The
`MenuItem` type has no price field and no file contains price data. Every price
is therefore UNVERIFIED, and **no `Offer`, `price` or `priceRange` appears in
any schema on the site**. Confirmed with the client before building.

**Hours.** Single source of truth in `lib/site.ts`. Home, contact and footer all
read `primary.hours.*`, so the visible hours cannot disagree with each other.
Schema hours are *derived from that same constant* by
`openingHoursSpecification()` in `lib/seo.ts`, so schema cannot drift from what
a visitor reads.

**Routes vs sitemap.** Before: 76 prerendered routes, no sitemap and no
robots.txt at all. After: 82 URLs, generated.

---

## Phase 1 — Demand research

Three signals per dish: 12 months of English Wikipedia pageviews
(Aug 2025 – Jul 2026, redirects resolved via the MediaWiki API), live Google
autocomplete for `<dish>`, `<dish> near me` and `<dish> vancouver wa`, and the
intent those autocompletes express.

### Selected — 5 dish pages

| Dish | 12mo views | Intent evidence |
|---|---:|---|
| Pad Thai | 332,810 | `best pad thai vancouver wa` autocompletes — the only dish where the city-qualified query fires |
| Tom Yum Soup | 208,000 | `tom yum soup near me` is the #2 base suggestion, above `recipe` |
| Massaman Curry | 188,250 | `massaman curry near me` and `best massaman curry near me` both fire |
| Mango Sticky Rice | 92,772 | `mango sticky rice vancouver wa` autocompletes; least recipe-contaminated dessert |
| Larb | 62,964 | `larb near me` fires; autocomplete surfaces competing restaurant brands |

### Rejected, and why

- **Red / Green / Yellow Curry** — zero restaurant-intent suggestions. Base
  autocomplete is entirely `paste`, `recipe`, `substitute`. Recipe intent →
  blog subjects, not landing pages.
- **Pad See Ew** — `near me` returned nothing; base is `recipe` / `vs` /
  `calories`. `pad see ew vs pad kee mao` is a strong blog title.
- **Pad Kee Mao** — near-me fires but base is recipe-led and
  `drunken noodles movie` contaminates the term.
- **Tom Kha** — `tom kha soup stardew` (the video game) pollutes it, and it
  cannibalises Tom Yum.
- **Chicken Satay** — dominated by `marinade` and `peanut sauce recipe`.
- **Hot Basil** — autocomplete is dominated by *competitor restaurant brands*
  (`hot basil thai kitchen mukilteo`, `hot basil overland park`) and
  `hot basil plant`. Unusable as a slug.
- **Papaya Salad** (36,983) — made the shortlist on intent (`papaya salad near
  me` is its #3 suggestion) but had the weakest demand of the six, well under
  the 62,964 of the next lowest. Dropped to keep the set tight.
  `/dishes/papaya-salad` permanently redirects to `/menu/papaya-salad`; the
  dish keeps its menu page and its billing on `/lao-food-vancouver-wa`.
- **Fried Tofu, Pot Stickers, Tempura, Wonton Soup, Yakisoba, Egg Rolls,
  Orange Chicken, Crab Rangoon, Fried Calamari** — pan-cuisine inflation. Tofu
  shows 459,023 views because the article is the generic *Tofu* page; jiaozi,
  tempura and wonton traffic is Chinese/Japanese and will not convert here.

**Local market.** `lao food vancouver wa` and `lao restaurant vancouver wa`
both autocomplete, and Google rewrites "laotian" → "lao". Named Thai
competitors in market: Thai Orchid, Kindee Thai, Arawan Thai. The Laotian half
of the menu is the genuine differentiator.

---

## Phase 2 — Technical audit

| Check | Before | After |
|---|---|---|
| Canonical tags | **Absent site-wide** | 82/82 pages, all `https://www.tigersgardenthai.com`, zero cross-domain |
| Duplicate business entities | n/a — no structured data existed | Exactly 1 `Restaurant`, `@id` `…/#restaurant`, referenced by every other page |
| Schema vs visible content | n/a | Hours derived from the rendering constant; menu schema = 69/69 items, 10/10 sections |
| Sitemap | **Absent** | Generated, 82 URLs, 0 missing routes, 0 dead URLs |
| Catch-all route | Pass | Pass — `/dishes/not-a-dish` returns HTTP 404 with a rendered page |
| Soft 404s | Pass | Pass — `notFound()`, never a redirect to a real page |
| **Tabbed content mounting** | **12/69 dishes in DOM (17%)** | **69/69 (100%)** |
| **Orphan pages** | **48 unreachable** | **0** |
| Orphan crawlable files | Clean | Clean |
| Client-side rendering | `MenuBrowser` withheld 83% of the menu | Server-rendered; no JS needed for menu or links |
| Cache headers | Clean (`next.config.ts` empty, Next defaults) | Unchanged |

---

## Services actually offered (Phase 0.6)

Evidence taken from the repo, not assumed:

| Service | Evidence | Page? |
|---|---|---|
| Ordering (pickup + delivery) | `site.orderUrl` = `order.tigersgardenthai.com`, a **first-party subdomain**; carryout and delivery hours published in `lib/site.ts` | **`/order-online` built** |
| Catering | 20 mentions, existing `/catering` page | Left as-is — no minimums/lead time/coverage published |
| Delivery aggregators | **None named anywhere in the repo** | First-party only; no aggregator links to tag |
| Reservations | No booking platform; `reservationsUrl` is a `tel:` link | **Not built** — per client |
| Private events | 2 passing mentions, no capacity or packages | **Not built** — gate fails |
| Gift cards / happy hour / lunch specials | **0 mentions** | Not built |

## Additional demand research (Phase 1, expanded)

- **Head terms** — `thai food vancouver wa downtown` autocompletes, confirming
  "downtown" as a real qualifier. Home page targets it.
- **Category terms** — `thai curry vancouver wa` returns **no suggestions**, and
  `thai curry near me` degrades immediately to generic `thai food near me`.
  Meanwhile Pad Thai, Tom Yum and Massaman each individually out-demand their
  categories. Per the gate ("use category pages INSTEAD of dish pages when the
  category has demand but no single dish does"), **no `/menu/[category]` pages
  were built** — the dishes carry the demand and building both would duplicate.
- **Dietary terms** — `vegetarian thai food near me` and `vegan thai food near
  me` both fire strongly. **Demand is real, but the page is not buildable**:
  the `vegetarianAvailable` / `glutenFreeAvailable` flags in `lib/menu.ts` have
  unconfirmed provenance, and Phase 4 forbids labelling on inference. Escalated
  rather than built.
- **Catering terms** — `thai food catering near me` is strong (`with prices`,
  `delivery`, `menu`). Blocked on minimums/lead time/coverage.
- **Takeout/delivery** — `thai takeout vancouver wa` autocompletes to
  *competitor names* (Thai Orchid, Kindee, Planet Thai), confirming the query
  maps to restaurant listings. Justifies `/order-online`.
- **Landmark** — `thai restaurant near esther short park` returns **no
  suggestions**, and the repo publishes no parking/transit/travel-time facts.
  `/near-esther-short-park` **rejected on both demand and facts**.

## Additional technical findings (Phase 2, expanded)

- **Images.** 3 hero JPGs totalling **17.3 MB are entirely unreferenced** — all
  code paths use the `.webp` versions. Dead repo weight; safe to delete, but
  left in place pending client sign-off. 55 menu PNGs have no `.webp` sibling,
  though `next/image` converts on delivery, so this is repo weight rather than
  a delivery defect. All 19 `<Image>` components have alt text; the two empty
  ones are correctly decorative.
- **Redirect chains.** Worst case `http://tigersgardenthai.com` → 2 hops →
  `https://www.tigersgardenthai.com/`. HTTPS enforced on all four host
  permutations. Acceptable, no chain to flatten.
- **PDF menus.** None — no PDF competing with the HTML menu.
- **Missing H1s.** `/about` and `/contact` rendered **no `<h1>` at all**, because
  both used `SectionTitle`, which emits `<h2>`. `SectionTitle` gained an `as`
  prop and both pages now render a proper h1. The home h1 was brand-only
  ("Tiger's Garden") and now carries the primary local term.

## SEO-targeted slugs

The `/dishes/*` landing pages were built on searched spellings from the start.
The 69 `/menu/[slug]` pages were not — they used printed-menu spellings. Eleven
diverged from what people actually type. Each was checked against live Google
autocomplete before being changed:

| Old slug | New slug | Evidence |
|---|---|---|
| `pad-see-ewi` | `pad-see-ew` | Google **auto-corrects** "pad see ewi" → "pad see ew". Every suggestion returns the corrected form; the printed spelling reads as a typo |
| `pad-khee-mao` | `pad-kee-mao` | Google **auto-corrects** "pad khee mao" → "pad kee mao" |
| `fried-crab-wontons` | `crab-rangoon` | The menu describes crab meat and cream cheese in wonton skins — crab rangoon exactly. 121,810 12mo views and `crab rangoon near me` fires |
| `hot-basil` | `thai-basil` | `hot basil` autocomplete is dominated by a **competing restaurant brand** ("Hot Basil Thai Cuisine") and by `hot basil plant`. Unwinnable |
| `hot-basil-fried-rice` | `thai-basil-fried-rice` | Same brand collision |
| `ginger` | `ginger-stir-fry` | A bare ingredient word competing with the spice, not a Thai dish |
| `eggplant` | `eggplant-stir-fry` | Same — competing with the vegetable |
| `sweet-sour` | `sweet-and-sour` | Unnatural truncation of the searched phrase |
| `coconut-shrimps` | `coconut-shrimp` | Slug contradicted its own menu name ("Coconut Shrimp") |
| `thai-ice-coffee` | `thai-iced-coffee` | Slug contradicted its own menu name |
| `thai-ice-green-tea` | `thai-iced-green-tea` | Slug contradicted its own menu name |

**Slugs deliberately left alone.** `showering-rama` returns genuine
autocomplete suggestions of its own (`showering rama recipe`, `... chicken`),
so it is a real search term rather than a house-only name — `swimming rama` is
noted as a variant instead. `cashew-nut` autocompletes as `cashew nut thai`;
"cashew chicken" is a different Chinese-American dish and would misdescribe it.
`pra-ram-noodle`, `tigers-fried-rice`, `tiger-curry-pops` and the other house
names stay as-is.

**Nothing breaks.** Every old slug keeps working through a permanent redirect
generated from `lib/slug-redirects.ts` in `next.config.ts`, so links,
bookmarks, printed QR codes and anything already indexed consolidate onto the
new URL. Next emits **308** rather than 301 for `permanent: true`; Google
treats both as permanent for signal consolidation. Renamed dishes state the old
name on the page ("Also called Pad Khee Mao and drunken noodles. It is the same
dish…"), and bogus slugs still return a hard 404 rather than redirecting —
these are genuine renames, not aliases for made-up URLs.

## What was built

- `lib/seo.ts` — canonical origin, the single `Restaurant` node and its stable
  `@id`, hours derived from `lib/site.ts`, and builders for `Menu`,
  `MenuItem`, `BreadcrumbList` and `FAQPage`.
- `lib/dishes.ts` — the 6 selected dish pages and their content.
- `components/JsonLd.tsx` — server-rendered JSON-LD.
- `app/sitemap.ts`, `app/robots.ts` — generated, never hand-maintained.
- `components/MenuBrowser.tsx` — **rewritten** from a client-side tab component
  to a server component that renders every section. Category tabs became
  anchor links into those sections.
- `app/dishes/` — hub plus five `[dish]` pages.
- `app/lao-food-vancouver-wa/` — the single cuisine-category-city page.
- `components/Footer.tsx` — "Popular Dishes" block with descriptive anchors.
- `app/order-online/` — pickup/delivery page built on the genuinely verified
  fact that carryout and delivery close 15 minutes before the dining room.
- Canonicals and JSON-LD added to home, `/menu`, `/menu/[slug]`, `/about`,
  `/catering`, `/contact`.
- Dish pages restructured to the expanded spec: h1 is the bare
  `[Dish] in [City]` (the "Best" phrasing lives in the `<title>` so one page
  covers both queries), 4-5 FAQs each including the real `vs` autocompletes,
  address + full hours + directions in the hero, and 2-3 curated related dishes
  instead of a link to every sibling.
- Home `Restaurant` node gained an image array, `hasMenu`, and an `OrderAction`
  — honest here only because ordering is a first-party subdomain.
- `/dishes` hub gained `ItemList`; `/about`, `/catering`, `/contact` and
  `/order-online` gained `BreadcrumbList`.

## What was deliberately NOT built

- **No city or neighbourhood grid.** One location, so no
  `/thai-food-<nearby-city>` permutations. Exactly one cuisine-category-city
  page, justified by the menu having a genuinely distinctive Laotian section.
- **No `Offer` or price markup anywhere** — no verified price source exists.
- **No `AggregateRating` or `Review` markup.** The quotes in `lib/reviews.ts`
  are self-hosted and self-selected; marking them up is the self-serving
  review markup Google prohibits. They still render as visible content.
- **No `/reservations` or `/order-online` page.** Reservations are a `tel:`
  link and ordering is an external URL; per the client, stick to what exists.
- **No catering facts added.** Minimums, lead times and delivery radius are
  unknown, and the client asked that none be disclosed. `/catering` was left
  as-is.
- **No dietary or allergen page**, and no new dietary, spice or sourcing claims
  in any new copy.
- **No navbar changes** — dish pages are reachable via the footer block and
  from `/menu`, per the client's instruction.
- **No blog links.** Phase 6 calls for linking existing blog posts to dish
  pages; this repo has no blog.

## Content provenance

Every fact on the new pages traces to one of: `lib/menu.ts`, what the site
already publishes (`lib/site.ts`), or general culinary background about the
dish itself. `"Best <dish> in Vancouver, WA"` is used as opinion in headings
and titles, never dressed up as a verified fact. No awards, ratings, founding
dates, sourcing claims, spice levels, dietary certifications, chef biography or
customer opinions were invented.

## Verification performed

Measured against the built output, not the source:

- `/menu` DOM coverage 17% → **100%** (69/69 dish links present).
- Crawl of prerendered HTML from `/` with no JS: 48 orphans → **0**.
- Sitemap: 82 URLs, **0** routes missing, **0** URLs without a route, **0**
  wrong-host entries.
- Canonicals: **82/82** pages, **0** cross-domain.
- Exactly **1** full `Restaurant` definition across the whole site.
- Menu JSON-LD vs source: 69 items and 10 sections, bidirectional match, **0**
  price/Offer keys.
- Schema hours vs visible hours: exact match (Mon–Thu 11:00–21:00, Fri–Sat
  11:00–21:30, Sun 11:00–21:00).
- Every marked-up FAQ question *and answer* verified present in the rendered
  DOM.
- Served the production build and confirmed live: `robots.txt` 200,
  `sitemap.xml` 200 with 82 URLs, `/dishes/not-a-dish` **404** (not blank, not
  a redirect).
- `tsc --noEmit` clean; production build clean, 87 pages.
- Dineably `data-track` attributes preserved through the `MenuBrowser` rewrite.

---

## Open questions for the client

1. **`tigersgardencuisine.com` is still live.** It returns HTTP 200, is titled
   "Home - Tiger's Garden", serves menu content including Pad Thai, and
   declares **no canonical tag**. It is competing with this site for the
   brand's own terms. This cannot be fixed from this repo — it needs a 301 to
   `https://www.tigersgardenthai.com` at the old host.
2. **Prices.** If a verified price source appears, `menuItemNode()` in
   `lib/seo.ts` is where `Offer` would be added.
3. **Dietary flags.** `lib/menu.ts` already asserts `vegetarianAvailable` on 9
   dishes, `glutenFreeAvailable` on 13 and spice levels on 48. Provenance is
   unconfirmed. No new page relies on them, but they are rendered on
   `/menu/[slug]` and should be verified by the kitchen.
4. **Catering** still says "Minimum order for catering inquiries" and "Advance
   booking required" with no figures. Left untouched pending real numbers.
5. **`lib/site.ts` defines `galleryUrl: "/gallery"`** but no such route exists.
   Currently unreferenced, so it 404s only if something links to it.
6. **The honest ceiling.** For a restaurant, the Google Business Profile
   usually drives more covers than organic links do. Photos, review volume and
   review recency on that listing will outrank anything in this repo. Verify
   Search Console, submit `/sitemap.xml`, watch impressions before positions,
   and judge results at 8-12 weeks — not sooner.
7. **17.3 MB of unreferenced hero JPGs** can be deleted, but they are left in
   place: per the escalation rule, files that may be handed out directly are
   not deleted without sign-off.
8. **A blog would pay off.** The rejected dishes — red/green/yellow curry, pad
   see ew, tom kha, chicken satay — have real volume but recipe intent. They
   are blog subjects, and each post would be the strongest internal link
   available to the matching dish page.
