export type MenuCategory =
  | "Appetizers"
  | "Soups"
  | "Salads"
  | "Stir-Fries"
  | "Curry"
  | "Noodle"
  | "Fried Rice"
  | "Desserts"
  | "Beverages"
  | "Side Orders";

export type MenuItem = {
  slug: string;
  name: string;
  category: MenuCategory;
  short: string;
  description: string;
  image: string;
  spice?: 0 | 1 | 2 | 3;
  vegetarianAvailable?: boolean;
  glutenFreeAvailable?: boolean;
  signature?: boolean;
  pairings?: string[];
  // Placeholder hue used as fallback art if an image fails to load.
  hue: [string, string];
};

export const categories: MenuCategory[] = [
  "Appetizers",
  "Soups",
  "Salads",
  "Stir-Fries",
  "Curry",
  "Noodle",
  "Fried Rice",
  "Desserts",
  "Beverages",
  "Side Orders",
];

export const categoryTaglines: Record<MenuCategory, string> = {
  Appetizers: "Start the table with something to share.",
  Soups: "Bright, herbal, made for slow spoons.",
  Salads: "Crisp, citrusy, built for heat.",
  "Stir-Fries": "Wok-fired, served sizzling.",
  Curry: "Coconut-rich, herb-led, slow-simmered.",
  Noodle: "Hand-stirred to order.",
  "Fried Rice": "Smoky, fragrant, wok-fired right.",
  Desserts: "Cool finishes for a hot table.",
  Beverages: "House Thai favorites and the usual suspects.",
  "Side Orders": "Add a little extra.",
};

export const menu: MenuItem[] = [
  // ===== Appetizers =====
  {
    slug: "egg-rolls",
    name: "Egg Rolls",
    category: "Appetizers",
    short: "Crispy rolls stuffed with vegetables and glass noodles.",
    description:
      "Golden, hand-rolled crispy egg rolls filled with shredded vegetables and glass noodles. Served with house sweet-chili dipping sauce.",
    image: "/images/menu/appetizers/a1-egg-rolls.png",
    spice: 0,
    vegetarianAvailable: true,
    hue: ["#f4b042", "#5a2d08"],
  },
  {
    slug: "fresh-salad-rolls",
    name: "Fresh Salad Rolls",
    category: "Appetizers",
    short: "Rice-paper rolls with shrimp, herbs, peanut sauce.",
    description:
      "Cool, fresh rice-paper rolls packed with shrimp, lettuce, vermicelli, and fresh herbs. Served with our house peanut dipping sauce.",
    image: "/images/menu/appetizers/a2-fresh-salad-rolls.png",
    spice: 0,
    signature: true,
    hue: ["#f4e9d6", "#5a3a10"],
  },
  {
    slug: "fried-crab-wontons",
    name: "Fried Crab Wontons",
    category: "Appetizers",
    short: "Crab and cream cheese in a crisp wonton shell.",
    description:
      "Crab meat and cream cheese folded into wonton skins, fried until golden. Served with sweet-and-sour sauce.",
    image: "/images/menu/appetizers/a3-fried-crab-wontons.png",
    spice: 0,
    hue: ["#f4b042", "#5a2d08"],
  },
  {
    slug: "pot-stickers",
    name: "Pot Stickers",
    category: "Appetizers",
    short: "Pan-seared pork dumplings with soy-ginger dip.",
    description:
      "Hand-folded pork dumplings, pan-seared until crisp on the bottom. Served with a tangy soy-ginger dipping sauce.",
    image: "/images/menu/appetizers/a4-pot-stickers.png",
    spice: 0,
    hue: ["#e8b14a", "#3a2208"],
  },
  {
    slug: "coconut-shrimps",
    name: "Coconut Shrimp",
    category: "Appetizers",
    short: "Battered shrimp with toasted coconut crust.",
    description:
      "Plump shrimp coated in a toasted-coconut batter and fried golden. Served with a sweet plum sauce for dipping.",
    image: "/images/menu/appetizers/a5-coconut-shrimps.png",
    spice: 0,
    hue: ["#f4e9d6", "#8a5a10"],
  },
  {
    slug: "avocado-rolls",
    name: "Avocado Rolls",
    category: "Appetizers",
    short: "Avocado, asparagus, carrot, sweet chili.",
    description:
      "Crispy rolls filled with creamy avocado, asparagus, and carrot. Served with sweet-chili dipping sauce.",
    image: "/images/menu/appetizers/a6-avocado-rolls.png",
    spice: 0,
    vegetarianAvailable: true,
    hue: ["#7ea35a", "#1f3a10"],
  },
  {
    slug: "tiger-hot-wings",
    name: "Tiger Hot Wings",
    category: "Appetizers",
    short: "House-spiced fried wings, with a kick.",
    description:
      "Our take on hot wings, fried crispy and tossed in a Thai-leaning chili glaze. Served with cucumber slaw to cool things down.",
    image: "/images/menu/appetizers/a7-tiger-hot-wings.png",
    spice: 2,
    signature: true,
    hue: ["#f25a1c", "#5a1208"],
  },
  {
    slug: "chicken-satay",
    name: "Chicken Satay",
    category: "Appetizers",
    short: "Skewered chicken in turmeric marinade, peanut sauce.",
    description:
      "Tender chicken skewers marinated in turmeric, coconut, and lemongrass, then grilled. Served with peanut sauce and cucumber relish.",
    image: "/images/menu/appetizers/a8-chicken-satay.png",
    spice: 1,
    hue: ["#e8b14a", "#5a3208"],
  },
  {
    slug: "tiger-curry-pops",
    name: "Tiger Curry Pops",
    category: "Appetizers",
    short: "Curry-spiced fritters on a stick.",
    description:
      "Bite-sized curry fritters skewered and fried golden, packed with house curry paste, herbs, and chicken. Served with sweet plum dip.",
    image: "/images/menu/appetizers/a9-tiger-curry-pops.png",
    spice: 1,
    hue: ["#f4b042", "#5a2208"],
  },
  {
    slug: "fried-tofu",
    name: "Fried Tofu",
    category: "Appetizers",
    short: "Crispy tofu cubes with sweet-and-savory peanut.",
    description:
      "Cubed tofu fried until golden and crisp on the edges. Served with our house peanut-and-tamarind dipping sauce.",
    image: "/images/menu/appetizers/a10-fried-tofu.png",
    spice: 0,
    vegetarianAvailable: true,
    hue: ["#e8b14a", "#3a2208"],
  },
  {
    slug: "fried-calamari",
    name: "Fried Calamari",
    category: "Appetizers",
    short: "Lightly battered rings, sweet chili.",
    description:
      "Squid rings in a light, crisp batter, fried fresh to order. Served with sweet-chili sauce and a lime wedge.",
    image: "/images/menu/appetizers/a11-fried-calamari.png",
    spice: 0,
    hue: ["#f4e9d6", "#5a3208"],
  },
  {
    slug: "tempura-shrimp",
    name: "Tempura Shrimp",
    category: "Appetizers",
    short: "Hand-battered shrimp, tempura-light.",
    description:
      "Whole shrimp dipped in a light tempura batter and fried to order. Served with house tempura dipping sauce.",
    image: "/images/menu/appetizers/a12-tempura-shrimp.png",
    spice: 0,
    hue: ["#f4b042", "#5a3208"],
  },

  // ===== Soups =====
  {
    slug: "tom-yum-soup",
    name: "Tom Yum Soup",
    category: "Soups",
    short: "Lemongrass, lime, chili, mushroom, shrimp.",
    description:
      "Hot-and-sour Thai broth with lemongrass, galangal, kaffir lime leaves, mushrooms, and shrimp. Bright, herbal, and aromatic.",
    image: "/images/menu/soups/d20-tom-yum-soup.png",
    spice: 2,
    glutenFreeAvailable: true,
    hue: ["#f25a1c", "#3a1208"],
    pairings: ["pad-thai", "red-curry"],
  },
  {
    slug: "tom-kha-soup",
    name: "Tom Kha Soup",
    category: "Soups",
    short: "Coconut milk, galangal, lemongrass, chicken.",
    description:
      "Creamy coconut-milk soup with galangal, lemongrass, lime, and chicken. The mild, milky cousin of tom yum.",
    image: "/images/menu/soups/d21-tom-kha-soup.png",
    spice: 1,
    glutenFreeAvailable: true,
    signature: true,
    hue: ["#f4e9d6", "#8a5a10"],
    pairings: ["pad-thai"],
  },
  {
    slug: "wonton-soup",
    name: "Wonton Soup",
    category: "Soups",
    short: "Pork wontons, clear broth, scallions.",
    description:
      "Tender pork-and-shrimp wontons floating in a clear, ginger-scented broth, finished with scallions.",
    image: "/images/menu/soups/d22-wonton-soup.png",
    spice: 0,
    hue: ["#f4e9d6", "#5a3208"],
  },

  // ===== Salads =====
  {
    slug: "larb",
    name: "Larb",
    category: "Salads",
    short: "Laotian minced-meat salad, mint, lime, toasted rice.",
    description:
      "Our family-recipe Laotian larb, minced chicken (or beef) tossed with toasted-rice powder, lime, fish sauce, scallions, and a small mountain of fresh mint and cilantro.",
    image: "/images/menu/salads/d30-larb.png",
    spice: 2,
    signature: true,
    glutenFreeAvailable: true,
    hue: ["#7ea35a", "#1f3a10"],
  },
  {
    slug: "papaya-salad",
    name: "Papaya Salad",
    category: "Salads",
    short: "Green papaya, chili, lime, fish sauce, peanut.",
    description:
      "Shredded green papaya pounded in a mortar with chili, garlic, lime, fish sauce, and crushed peanuts. Sharp, spicy, addictive.",
    image: "/images/menu/salads/d31-papaya-salad.png",
    spice: 3,
    glutenFreeAvailable: true,
    hue: ["#f4b042", "#3a2208"],
  },
  {
    slug: "tiger-house-salad",
    name: "Tiger House Salad",
    category: "Salads",
    short: "Mixed greens, peanut dressing.",
    description:
      "Crisp mixed greens, carrot, cucumber, and tomato with our house peanut dressing.",
    image: "/images/menu/salads/d32-tiger-house-salad.png",
    spice: 0,
    vegetarianAvailable: true,
    hue: ["#7ea35a", "#2a3a10"],
  },
  {
    slug: "beef-salad",
    name: "Beef Salad",
    category: "Salads",
    short: "Grilled beef, lime, chili, herbs.",
    description:
      "Sliced grilled beef tossed warm with lime, chili, fish sauce, red onion, cucumber, and fresh herbs.",
    image: "/images/menu/salads/d33-beef-salad.png",
    spice: 2,
    glutenFreeAvailable: true,
    hue: ["#c43e0a", "#2a0a02"],
  },

  // ===== Stir-Fries =====
  {
    slug: "mixed-vegetables",
    name: "Mixed Vegetables",
    category: "Stir-Fries",
    short: "Wok-tossed garden vegetables, light garlic sauce.",
    description:
      "Broccoli, carrot, snow pea, mushroom, baby corn, and napa cabbage tossed in a light garlic-oyster sauce.",
    image: "/images/menu/stir-fries/d40-mixed-vegetables.png",
    spice: 0,
    vegetarianAvailable: true,
    hue: ["#7ea35a", "#1f3a10"],
  },
  {
    slug: "sweet-sour",
    name: "Sweet & Sour",
    category: "Stir-Fries",
    short: "Pineapple, bell pepper, tomato, tangy sauce.",
    description:
      "Stir-fried with pineapple, bell pepper, onion, tomato, and cucumber in a balanced sweet-and-sour sauce.",
    image: "/images/menu/stir-fries/d41-sweet-sour.png",
    spice: 0,
    hue: ["#f4b042", "#5a3208"],
  },
  {
    slug: "cashew-nut",
    name: "Cashew Nut",
    category: "Stir-Fries",
    short: "Roasted cashew, onion, bell pepper, dried chili.",
    description:
      "Wok-tossed with roasted cashew, onion, scallion, bell pepper, and a few dried chilis for warmth. A guest favorite for a reason.",
    image: "/images/menu/stir-fries/d42-cashew-nut.png",
    spice: 1,
    signature: true,
    hue: ["#e8b14a", "#5a3208"],
  },
  {
    slug: "ginger",
    name: "Ginger",
    category: "Stir-Fries",
    short: "Fresh ginger, mushroom, scallion.",
    description:
      "Sliced fresh ginger, black mushroom, scallion, onion, and bell pepper, stir-fried in a light brown sauce.",
    image: "/images/menu/stir-fries/d43-ginger.png",
    spice: 0,
    hue: ["#f4e9d6", "#5a3208"],
  },
  {
    slug: "eggplant",
    name: "Eggplant",
    category: "Stir-Fries",
    short: "Thai eggplant, basil, garlic.",
    description:
      "Sliced Thai eggplant stir-fried with garlic, fresh basil, and bell pepper in a savory soy-based sauce.",
    image: "/images/menu/stir-fries/d44-eggplant.png",
    spice: 1,
    vegetarianAvailable: true,
    hue: ["#6a3a8a", "#1f1030"],
  },
  {
    slug: "showering-rama",
    name: "Showering Rama",
    category: "Stir-Fries",
    short: "Steamed spinach, peanut sauce.",
    description:
      "Steamed spinach laid under your choice of protein, draped with our house peanut sauce, sweet, savory, and rich.",
    image: "/images/menu/stir-fries/d45-showering-rama.png",
    spice: 0,
    hue: ["#7ea35a", "#1f3a10"],
  },
  {
    slug: "hot-basil",
    name: "Hot Basil",
    category: "Stir-Fries",
    short: "Holy basil, chili, garlic, bell pepper.",
    description:
      "Holy basil, fresh chili, garlic, bell pepper, and onion stir-fried fast and hot. A Thai street-food classic.",
    image: "/images/menu/stir-fries/d46-hot-basil.png",
    spice: 3,
    signature: true,
    hue: ["#c43e0a", "#1f3010"],
  },

  // ===== Curry =====
  {
    slug: "yellow-curry",
    name: "Yellow Curry",
    category: "Curry",
    short: "Mild yellow curry, potato, carrot, coconut milk.",
    description:
      "A mild, golden curry made with house yellow curry paste, coconut milk, potato, carrot, and onion. The gentlest of the curries.",
    image: "/images/menu/curry/d50-yellow-curry.png",
    spice: 1,
    glutenFreeAvailable: true,
    hue: ["#e8b14a", "#5a3208"],
  },
  {
    slug: "massaman-curry",
    name: "Massaman Curry",
    category: "Curry",
    short: "Slow-simmered curry, potato, peanut, tamarind.",
    description:
      "Rich, slow-simmered massaman curry with potato, onion, roasted peanut, and a tamarind-led sweet-savory finish. Deep, warming, complex.",
    image: "/images/menu/curry/d51-massaman-curry.png",
    spice: 1,
    glutenFreeAvailable: true,
    hue: ["#8a3210", "#2a0a02"],
  },
  {
    slug: "panang-curry",
    name: "Panang Curry",
    category: "Curry",
    short: "Thick coconut curry, kaffir lime, peanut.",
    description:
      "Thick, fragrant panang curry with coconut cream, kaffir lime leaf, basil, and a hint of peanut. Less liquid, more lacquer.",
    image: "/images/menu/curry/d52-panang-curry.png",
    spice: 2,
    glutenFreeAvailable: true,
    hue: ["#c43e0a", "#2a0a02"],
  },
  {
    slug: "red-curry",
    name: "Red Curry",
    category: "Curry",
    short: "Red curry paste, coconut milk, bamboo, basil.",
    description:
      "Our house red curry, red curry paste simmered with coconut milk, bamboo shoot, bell pepper, and Thai basil. Spicy, lush, and one of the table favorites.",
    image: "/images/menu/curry/d53-red-curry.png",
    spice: 2,
    signature: true,
    glutenFreeAvailable: true,
    hue: ["#f25a1c", "#3a1208"],
    pairings: ["pad-thai", "tom-yum-soup"],
  },
  {
    slug: "green-curry",
    name: "Green Curry",
    category: "Curry",
    short: "Green curry paste, coconut milk, eggplant, basil.",
    description:
      "Green curry paste built on fresh green chili, basil, and lime leaf. Simmered with coconut milk, Thai eggplant, bamboo shoot, and bell pepper.",
    image: "/images/menu/curry/d54-green-curry.png",
    spice: 2,
    signature: true,
    glutenFreeAvailable: true,
    hue: ["#7ea35a", "#1f3a10"],
    pairings: ["pad-thai"],
  },
  {
    slug: "pumpkin-curry",
    name: "Pumpkin Curry",
    category: "Curry",
    short: "Roasted pumpkin in red curry, basil.",
    description:
      "Sweet kabocha pumpkin simmered in red curry with coconut milk, basil, and bell pepper. Round, sweet, and warming.",
    image: "/images/menu/curry/d55-pumpkin-curry.png",
    spice: 2,
    glutenFreeAvailable: true,
    hue: ["#f4b042", "#5a2d08"],
  },
  {
    slug: "pineapple-curry",
    name: "Pineapple Curry",
    category: "Curry",
    short: "Red curry, fresh pineapple, basil, bell pepper.",
    description:
      "Red curry brightened with fresh pineapple, bell pepper, and basil, a sunny, fruity counter to the heat.",
    image: "/images/menu/curry/d56-pineapple-curry.png",
    spice: 2,
    glutenFreeAvailable: true,
    hue: ["#f4b042", "#5a2208"],
  },

  // ===== Noodle =====
  {
    slug: "pad-thai",
    name: "Pad Thai",
    category: "Noodle",
    short: "Rice noodles, tamarind, peanut, bean sprout, egg.",
    description:
      "Our most-ordered dish. Stir-fried rice noodles with tamarind, fish sauce, palm sugar, egg, bean sprout, scallion, and crushed peanut. Bright, balanced, and the way we make it.",
    image: "/images/menu/noodle/d80-pad-thai.png",
    spice: 1,
    signature: true,
    hue: ["#f4b042", "#5a3208"],
    pairings: ["red-curry", "green-curry", "tom-kha-soup"],
  },
  {
    slug: "pad-see-ewi",
    name: "Pad See Ewi",
    category: "Noodle",
    short: "Wide rice noodles, dark soy, Chinese broccoli, egg.",
    description:
      "Wide rice noodles wok-tossed with sweet dark soy, egg, Chinese broccoli, and your choice of protein. Smoky, savory, deeply satisfying.",
    image: "/images/menu/noodle/d81-pad-see-ewi.png",
    spice: 0,
    hue: ["#5a3a10", "#1f1208"],
  },
  {
    slug: "pad-khee-mao",
    name: "Pad Khee Mao",
    category: "Noodle",
    short: '"Drunken noodles", wide noodles, basil, chili.',
    description:
      "Wide rice noodles stir-fried with garlic, fresh chili, holy basil, bell pepper, and tomato. The famously fiery 'drunken noodles.'",
    image: "/images/menu/noodle/d82-pad-khee-mao.png",
    spice: 3,
    hue: ["#c43e0a", "#1f3010"],
  },
  {
    slug: "pra-ram-noodle",
    name: "Pra Ram Noodle",
    category: "Noodle",
    short: "Egg noodles, peanut sauce, steamed spinach.",
    description:
      "Egg noodles topped with your choice of protein and steamed spinach, blanketed in our house peanut sauce.",
    image: "/images/menu/noodle/d83-pra-ram-noodle.png",
    spice: 0,
    hue: ["#e8b14a", "#3a2208"],
  },
  {
    slug: "yakisoba",
    name: "Yakisoba",
    category: "Noodle",
    short: "Egg noodles, mixed vegetables, savory sauce.",
    description:
      "Stir-fried egg noodles with cabbage, carrot, onion, bell pepper, and our savory yakisoba sauce.",
    image: "/images/menu/noodle/d84-yakisoba.png",
    spice: 0,
    hue: ["#e8b14a", "#5a3208"],
  },

  // ===== Fried Rice =====
  {
    slug: "tigers-fried-rice",
    name: "Tiger's Fried Rice",
    category: "Fried Rice",
    short: "House fried rice, egg, scallion, your choice of protein.",
    description:
      "Our house fried rice, jasmine rice stir-fried with egg, onion, scallion, tomato, and your choice of protein. Smoky, simple, classic.",
    image: "/images/menu/fried-rice/d90-tigers-fried-rice.png",
    spice: 0,
    hue: ["#f4b042", "#5a3208"],
  },
  {
    slug: "pineapple-cashew-fried-rice",
    name: "Pineapple Cashew Fried Rice",
    category: "Fried Rice",
    short: "Fried rice, pineapple, cashew, raisin, curry powder.",
    description:
      "Fried rice with fresh pineapple, roasted cashew, raisin, and a whisper of curry powder. Sweet, savory, and a guest favorite.",
    image: "/images/menu/fried-rice/d91-pineapple-cashew-fried-rice.png",
    spice: 0,
    signature: true,
    hue: ["#f4b042", "#5a2208"],
  },
  {
    slug: "hot-basil-fried-rice",
    name: "Hot Basil Fried Rice",
    category: "Fried Rice",
    short: "Fried rice with holy basil, chili, garlic.",
    description:
      "Fried rice stir-fried hot and fast with holy basil, fresh chili, garlic, bell pepper, and onion.",
    image: "/images/menu/fried-rice/d92-hot-basil-fried-rice.png",
    spice: 3,
    hue: ["#c43e0a", "#1f3010"],
  },
  {
    slug: "orange-chicken",
    name: "Orange Chicken",
    category: "Fried Rice",
    short: "Crispy chicken, citrus-glazed, over rice.",
    description:
      "Battered crispy chicken tossed in a tangy orange glaze, served over jasmine rice.",
    image: "/images/menu/fried-rice/d93-orange-chicken.png",
    spice: 0,
    hue: ["#f25a1c", "#5a2208"],
  },

  // ===== Desserts =====
  {
    slug: "coconut-ice-cream",
    name: "Coconut Ice Cream",
    category: "Desserts",
    short: "Coconut ice cream, toasted peanut.",
    description:
      "Two scoops of coconut ice cream topped with toasted peanut. A cool finish for a hot table.",
    image: "/images/menu/desserts/coconut-ice-cream.png",
    spice: 0,
    vegetarianAvailable: true,
    hue: ["#f4e9d6", "#5a3a10"],
  },
  {
    slug: "mango-ice-cream",
    name: "Mango Ice Cream",
    category: "Desserts",
    short: "Mango ice cream, simple and sweet.",
    description:
      "Two scoops of mango ice cream. Sweet, cold, exactly the thing.",
    image: "/images/menu/desserts/mango-ice-cream.png",
    spice: 0,
    vegetarianAvailable: true,
    hue: ["#f4b042", "#5a2d08"],
  },
  {
    slug: "mango-sticky-rice",
    name: "Mango Sticky Rice",
    category: "Desserts",
    short: "Sweet sticky rice, fresh mango, coconut cream.",
    description:
      "Sweet coconut-soaked sticky rice paired with fresh mango and a drizzle of coconut cream. The classic Thai finish.",
    image: "/images/menu/desserts/mango-sticky-rice.png",
    spice: 0,
    signature: true,
    vegetarianAvailable: true,
    hue: ["#f4b042", "#5a3208"],
  },

  // ===== Beverages =====
  {
    slug: "thai-ice-coffee",
    name: "Thai Iced Coffee",
    category: "Beverages",
    short: "Strong Thai coffee, condensed milk, over ice.",
    description:
      "Strong Thai-style coffee sweetened with condensed milk and poured over ice.",
    image: "/images/menu/beverages/thai-ice-coffee.png",
    hue: ["#8a5a10", "#2a1208"],
  },
  {
    slug: "thai-ice-green-tea",
    name: "Thai Iced Green Tea",
    category: "Beverages",
    short: "Sweet jasmine-green tea, condensed milk, ice.",
    description:
      "Fragrant Thai jasmine-green tea sweetened with condensed milk and served over ice.",
    image: "/images/menu/beverages/thai-ice-green-tea.png",
    hue: ["#7ea35a", "#2a3a10"],
  },
  {
    slug: "coconut-juice",
    name: "Coconut Juice",
    category: "Beverages",
    short: "Cold, lightly sweet coconut juice.",
    description: "Cold coconut juice, lightly sweet, refreshing.",
    image: "/images/menu/beverages/coconut-juice.png",
    hue: ["#f4e9d6", "#5a3a10"],
  },
  {
    slug: "lemonade",
    name: "Lemonade",
    category: "Beverages",
    short: "House lemonade, on ice.",
    description: "Fresh-squeezed lemonade.",
    image: "/images/menu/beverages/lemonade.png",
    hue: ["#f4e9d6", "#8a5a10"],
  },
  {
    slug: "lime-soda",
    name: "Lime Soda",
    category: "Beverages",
    short: "Sparkling lime soda.",
    description: "Sparkling soda with fresh lime.",
    image: "/images/menu/beverages/lime-soda.png",
    hue: ["#7ea35a", "#2a3a10"],
  },
  {
    slug: "coke",
    name: "Coke",
    category: "Beverages",
    short: "Classic Coca-Cola.",
    description: "Classic Coca-Cola.",
    image: "/images/menu/beverages/coke.png",
    hue: ["#c43e0a", "#1a0a02"],
  },
  {
    slug: "diet-coke",
    name: "Diet Coke",
    category: "Beverages",
    short: "Diet Coca-Cola.",
    description: "Diet Coca-Cola.",
    image: "/images/menu/beverages/diet-coke.png",
    hue: ["#c43e0a", "#1a0a02"],
  },
  {
    slug: "sprite",
    name: "Sprite",
    category: "Beverages",
    short: "Classic Sprite.",
    description: "Classic Sprite.",
    image: "/images/menu/beverages/sprite.png",
    hue: ["#7ea35a", "#2a3a10"],
  },

  // ===== Side Orders =====
  {
    slug: "peanut-sauce-large",
    name: "Peanut Sauce (Large)",
    category: "Side Orders",
    short: "House peanut sauce, large side.",
    description: "A large side of our house peanut sauce.",
    image: "/images/menu/side-orders/side-peanut-sauce-l.png",
    hue: ["#e8b14a", "#5a3208"],
  },
  {
    slug: "peanut-sauce-small",
    name: "Peanut Sauce (Small)",
    category: "Side Orders",
    short: "House peanut sauce, small side.",
    description: "A small side of our house peanut sauce.",
    image: "/images/menu/side-orders/side-peanut-sauce-s.png",
    hue: ["#e8b14a", "#5a3208"],
  },
];

export function getMenuItem(slug: string): MenuItem | undefined {
  return menu.find((m) => m.slug === slug);
}

export function getRelated(item: MenuItem, count = 3): MenuItem[] {
  const explicit = (item.pairings ?? [])
    .map((s) => getMenuItem(s))
    .filter((m): m is MenuItem => Boolean(m));
  const fillers = menu.filter(
    (m) =>
      m.slug !== item.slug &&
      m.category !== "Beverages" &&
      m.category !== "Side Orders" &&
      !explicit.some((e) => e.slug === m.slug),
  );
  return [...explicit, ...fillers].slice(0, count);
}

export function getSignatures(): MenuItem[] {
  return menu.filter((m) => m.signature);
}

export function getCustomerFavorites(): MenuItem[] {
  // The three dishes featured on the live site as "Try one of our Favorites!"
  return ["red-curry", "pad-thai", "green-curry"]
    .map((s) => getMenuItem(s))
    .filter((m): m is MenuItem => Boolean(m));
}
