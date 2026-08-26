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
  /** Other names for the same dish, shown on the page after a slug rename. */
  alsoKnownAs?: string[];
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
    short: "Tofu, rice noodles, and vegetables in rice paper, peanut sauce.",
    description:
      "Tofu, rice noodles, and an assortment of vegetables wrapped in rice paper. Served with peanut sauce.",
    image: "/images/menu/appetizers/a2-fresh-salad-rolls.png",
    spice: 0,
    signature: true,
    hue: ["#f4e9d6", "#5a3a10"],
  },
  {
    slug: "crab-rangoon",
    alsoKnownAs: ["Fried Crab Wontons", "crab puffs"],
    name: "Fried Crab Wontons",
    category: "Appetizers",
    short: "Crab and cream cheese in a crisp wonton shell.",
    description:
      "Crab meat and cream cheese folded into wonton skins, fried until golden. Served with sweet chili sauce.",
    image: "/images/menu/appetizers/a3-fried-crab-wontons.png",
    spice: 0,
    hue: ["#f4b042", "#5a2d08"],
  },
  {
    slug: "pot-stickers",
    name: "Pot Stickers",
    category: "Appetizers",
    short: "Chicken and vegetable pot stickers, sweet soybean sauce.",
    description:
      "Chicken and vegetable pot stickers, fried or steamed. Served with sweet soybean sauce.",
    image: "/images/menu/appetizers/a4-pot-stickers.png",
    spice: 0,
    hue: ["#e8b14a", "#3a2208"],
  },
  {
    slug: "coconut-shrimp",
    name: "Coconut Shrimp",
    category: "Appetizers",
    short: "Battered shrimp with toasted coconut crust.",
    description:
      "Plump shrimp coated in a toasted-coconut batter and fried golden. Served with sweet and sour sauce.",
    image: "/images/menu/appetizers/a5-coconut-shrimps.png",
    spice: 0,
    hue: ["#f4e9d6", "#8a5a10"],
  },
  {
    slug: "avocado-rolls",
    name: "Avocado Rolls",
    category: "Appetizers",
    short: "Fresh avocado, lettuce, bean sprouts, cilantro, carrot, rice noodles in rice paper, peanut sauce.",
    description:
      "Fresh slices of avocado, lettuce, bean sprouts, cilantro, carrot, and rice noodles wrapped in clear rice paper. Served with peanut sauce.",
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
    short: "Choice of filling in puff pastry, deep fried.",
    description:
      "Choice of filling wrapped in puff pastry dough, deep fried until golden.",
    image: "/images/menu/appetizers/a9-tiger-curry-pops.png",
    spice: 1,
    hue: ["#f4b042", "#5a2208"],
  },
  {
    slug: "fried-tofu",
    name: "Fried Tofu",
    category: "Appetizers",
    short: "Fried tofu with sweet and sour sauce, crushed peanuts.",
    description:
      "Fried tofu served with sweet and sour sauce, topped with crushed peanuts.",
    image: "/images/menu/appetizers/a10-fried-tofu.png",
    spice: 0,
    vegetarianAvailable: true,
    hue: ["#e8b14a", "#3a2208"],
  },
  {
    slug: "fried-calamari",
    name: "Fried Calamari",
    category: "Appetizers",
    short: "Breaded calamari, sweet and sour sauce.",
    description:
      "Breaded calamari, served with sweet and sour sauce.",
    image: "/images/menu/appetizers/a11-fried-calamari.png",
    spice: 0,
    hue: ["#f4e9d6", "#5a3208"],
  },
  {
    slug: "tempura-shrimp",
    name: "Tempura Shrimp",
    category: "Appetizers",
    short: "Breaded shrimp, sweet and sour sauce.",
    description:
      "Breaded shrimp, served with sweet and sour sauce and sweet soy sauce.",
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
    short: "Chicken wontons, carrots, cabbage, chicken broth.",
    description:
      "Chicken wontons with carrots, green and white onions, and cabbage in chicken broth.",
    image: "/images/menu/soups/d22-wonton-soup.png",
    spice: 0,
    hue: ["#f4e9d6", "#5a3208"],
  },

  // ===== Salads =====
  {
    slug: "larb",
    name: "Larb",
    category: "Salads",
    short: "Ground chicken with spicy lime juice over spring mix.",
    description:
      "Ground chicken tossed with spicy lime juice, served over spring mix.",
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
    short: "Mixed greens, tofu, crispy wontons, peanut sauce.",
    description:
      "Crisp mixed greens, onion, cucumber, tomato, and tofu topped with crispy wontons and peanut sauce.",
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
  {
    slug: "shrimp-salad",
    name: "Shrimp Salad",
    category: "Salads",
    short: "Grilled shrimp, spicy lime juice, spring mix.",
    description:
      "Grilled shrimp tossed with spicy lime juice served over spring mix.",
    image: "/images/menu/salads/d34-shrimp-salad.png",
    spice: 2,
    glutenFreeAvailable: true,
    hue: ["#f25a1c", "#2a0a02"],
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
    slug: "sweet-and-sour",
    alsoKnownAs: ["Sweet & Sour"],
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
    short: "Cashew, bell pepper, carrot, sweet chili jam, water chestnut.",
    description:
      "Wok-fried cashew, bell pepper, carrot, sweet chili jam, garlic, onion, water chestnut, and bamboo shoot.",
    image: "/images/menu/stir-fries/d42-cashew-nut.png",
    spice: 1,
    signature: true,
    hue: ["#e8b14a", "#5a3208"],
  },
  {
    slug: "ginger-stir-fry",
    alsoKnownAs: ["Ginger"],
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
    slug: "eggplant-stir-fry",
    alsoKnownAs: ["Eggplant"],
    name: "Eggplant",
    category: "Stir-Fries",
    short: "Thai eggplant, basil, garlic, sweet chili jam.",
    description:
      "Wok-fried eggplant, garlic, basil, onion, sweet chili jam, and bell pepper.",
    image: "/images/menu/stir-fries/d44-eggplant.png",
    spice: 1,
    vegetarianAvailable: true,
    hue: ["#6a3a8a", "#1f1030"],
  },
  {
    slug: "showering-rama",
    name: "Showering Rama",
    category: "Stir-Fries",
    short: "Steamed broccoli, carrot, cabbage, peanut sauce.",
    description:
      "Steamed broccoli, carrot, and cabbage topped with peanut sauce.",
    image: "/images/menu/stir-fries/d45-showering-rama.png",
    spice: 0,
    hue: ["#7ea35a", "#1f3a10"],
  },
  {
    slug: "thai-basil",
    alsoKnownAs: ["Hot Basil", "pad kra pao"],
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
    slug: "pad-see-ew",
    alsoKnownAs: ["Pad See Ewi", "pad see eiw"],
    name: "Pad See Ewi",
    category: "Noodle",
    short: "Wide rice noodles, egg, broccoli, cilantro.",
    description:
      "Wide rice noodles stir-fried with egg, broccoli, and cilantro.",
    image: "/images/menu/noodle/d81-pad-see-ewi.png",
    spice: 0,
    hue: ["#5a3a10", "#1f1208"],
  },
  {
    slug: "pad-kee-mao",
    alsoKnownAs: ["Pad Khee Mao", "drunken noodles"],
    name: "Pad Khee Mao",
    category: "Noodle",
    short: "Wide rice noodles, egg, broccoli, bell pepper, basil.",
    description:
      "Wide rice noodles stir-fried with egg, broccoli, bell pepper, and basil.",
    image: "/images/menu/noodle/d82-pad-khee-mao.png",
    spice: 3,
    hue: ["#c43e0a", "#1f3010"],
  },
  {
    slug: "pra-ram-noodle",
    name: "Pra Ram Noodle",
    category: "Noodle",
    short: "Wide rice noodles, broccoli, carrot, cabbage, peanut sauce.",
    description:
      "Wide rice noodles with broccoli, carrot, and cabbage topped with peanut sauce.",
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
    slug: "thai-basil-fried-rice",
    alsoKnownAs: ["Hot Basil Fried Rice"],
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
    short: "Chicken with broccoli, lettuce, homemade sauce.",
    description:
      "Chicken with broccoli, lettuce, and homemade sauce.",
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
  {
    slug: "fried-bananas",
    name: "Fried Bananas",
    category: "Desserts",
    short: "Fried bananas.",
    description: "Fried bananas.",
    image: "/images/menu/desserts/fried-bananas.png",
    spice: 0,
    hue: ["#f4b042", "#5a2d08"],
  },
  {
    slug: "sweet-sticky-rice-w-ice-cream",
    name: "Sweet Sticky Rice w/ Ice Cream",
    category: "Desserts",
    short: "Sweet sticky rice with ice cream.",
    description: "Sweet sticky rice with ice cream.",
    image: "/images/menu/desserts/sweet-sticky-rice-w-ice-cream.png",
    spice: 0,
    hue: ["#f4e9d6", "#5a3a10"],
  },

  // ===== Beverages =====
  {
    slug: "thai-iced-coffee",
    name: "Thai Iced Coffee",
    category: "Beverages",
    short: "Strong Thai coffee, condensed milk, over ice.",
    description:
      "Strong Thai-style coffee sweetened with condensed milk and poured over ice.",
    image: "/images/menu/beverages/thai-ice-coffee.png",
    hue: ["#8a5a10", "#2a1208"],
  },
  {
    slug: "thai-iced-green-tea",
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
  {
    slug: "hot-tea",
    name: "Hot Tea",
    category: "Beverages",
    short: "Hot tea.",
    description: "Hot tea.",
    image: "/images/menu/beverages/hot-tea.png",
    hue: ["#8a5a10", "#2a1208"],
  },
  {
    slug: "thai-iced-tea",
    name: "Thai Iced Tea",
    category: "Beverages",
    short: "Classic Thai iced tea with condensed milk.",
    description:
      "Classic Thai iced tea with condensed milk.",
    image: "/images/menu/beverages/thai-iced-tea.png",
    hue: ["#f4b042", "#5a2208"],
  },
  {
    slug: "unsweet-iced-jasmine-tea",
    name: "Unsweet Iced Jasmine Tea",
    category: "Beverages",
    short: "Unsweetened iced jasmine tea.",
    description: "Unsweetened iced jasmine tea.",
    image: "/images/menu/beverages/unsweet-iced-jasmine-tea.png",
    hue: ["#7ea35a", "#2a3a10"],
  },
  {
    slug: "unsweet-iced-green-tea",
    name: "Unsweet Iced Green Tea",
    category: "Beverages",
    short: "Unsweetened iced green tea.",
    description: "Unsweetened iced green tea.",
    image: "/images/menu/beverages/unsweet-iced-green-tea.png",
    hue: ["#7ea35a", "#2a3a10"],
  },
  {
    slug: "unsweet-iced-black-tea",
    name: "Unsweet Iced Black Tea",
    category: "Beverages",
    short: "Unsweetened iced black tea.",
    description: "Unsweetened iced black tea.",
    image: "/images/menu/beverages/unsweet-iced-black-tea.png",
    hue: ["#5a3a10", "#1f1208"],
  },
  {
    slug: "mango-juice",
    name: "Mango Juice",
    category: "Beverages",
    short: "Mango juice.",
    description: "Mango juice.",
    image: "/images/menu/beverages/mango-juice.png",
    hue: ["#f4b042", "#5a2d08"],
  },

  // ===== Side Orders =====
  {
    slug: "side-jasmine-rice-small",
    name: "Side Jasmine Rice (Small)",
    category: "Side Orders",
    short: "Small side of jasmine rice.",
    description: "A small side of jasmine rice.",
    image: "/images/menu/side-orders/side-jasmine-rice-s.png",
    hue: ["#f4e9d6", "#5a3a10"],
  },
  {
    slug: "side-jasmine-rice-large",
    name: "Side Jasmine Rice (Large)",
    category: "Side Orders",
    short: "Large side of jasmine rice.",
    description: "A large side of jasmine rice.",
    image: "/images/menu/side-orders/side-jasmine-rice-l.png",
    hue: ["#f4e9d6", "#5a3a10"],
  },
  {
    slug: "side-brown-rice-small",
    name: "Side Brown Rice (Small)",
    category: "Side Orders",
    short: "Small side of brown rice.",
    description: "A small side of brown rice.",
    image: "/images/menu/side-orders/side-brown-rice-s.png",
    hue: ["#8a5a10", "#3a2208"],
  },
  {
    slug: "side-brown-rice-large",
    name: "Side Brown Rice (Large)",
    category: "Side Orders",
    short: "Large side of brown rice.",
    description: "A large side of brown rice.",
    image: "/images/menu/side-orders/side-brown-rice-l.png",
    hue: ["#8a5a10", "#3a2208"],
  },
  {
    slug: "side-steamed-mixed-vegetables",
    name: "Side Steamed Mixed Vegetables",
    category: "Side Orders",
    short: "Side of steamed mixed vegetables.",
    description: "A side of steamed mixed vegetables.",
    image: "/images/menu/side-orders/side-steamed-mixed-vegetables.png",
    hue: ["#7ea35a", "#1f3a10"],
  },
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
