export const site = {
  name: "Tiger's Garden",
  shortName: "Tiger's Garden",
  cuisine: "Thai & Laotian Cuisine",
  tagline: "Cozy restaurant & cocktail lounge serving Thai & Laotian dishes",
  description:
    "Tiger's Garden is a family-owned Thai & Laotian restaurant and cocktail lounge in the heart of downtown Vancouver, WA, facing Esther Short Park.",
  url: "https://www.tigersgardenthai.com",
  orderUrl: "https://order.tigersgardenthai.com",
  reservationsUrl: "tel:+13606939585",
  cateringUrl: "/catering",
  galleryUrl: "/gallery",
  logoNav: "/images/branding/nav-logo.png",
  logoMark: "/images/branding/restaurant-logo.png",
};

export const nav = [
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
  { label: "Catering", href: "/catering" },
  { label: "Visit", href: "/contact" },
] as const;

export const navCta = {
  label: "Order Online",
  href: site.orderUrl,
  external: true,
} as const;

export type Location = {
  city: string;
  address: string;
  region: string;
  neighborhood: string;
  phone: string;
  phoneHref: string;
  email?: string;
  mapsUrl: string;
  hours: {
    business: { days: string; time: string }[];
    carryout: { days: string; time: string }[];
    delivery: { days: string; time: string }[];
  };
};

export const locations: Location[] = [
  {
    city: "Vancouver",
    address: "312 W 8th St",
    region: "Vancouver, WA 98660",
    neighborhood: "Facing Esther Short Park",
    phone: "(360) 693-9585",
    phoneHref: "tel:+13606939585",
    mapsUrl:
      "https://maps.google.com/?daddr=45.6273812310682,-122.674576899983",
    hours: {
      business: [
        { days: "Mon – Thu", time: "11:00 am – 9:00 pm" },
        { days: "Fri & Sat", time: "11:00 am – 9:30 pm" },
        { days: "Sun", time: "11:00 am – 9:00 pm" },
      ],
      carryout: [
        { days: "Mon – Thu", time: "11:00 am – 8:45 pm" },
        { days: "Fri & Sat", time: "11:00 am – 9:15 pm" },
        { days: "Sun", time: "11:00 am – 8:45 pm" },
      ],
      delivery: [
        { days: "Mon – Thu", time: "11:00 am – 8:45 pm" },
        { days: "Fri & Sat", time: "11:00 am – 9:15 pm" },
        { days: "Sun", time: "11:00 am – 8:45 pm" },
      ],
    },
  },
];

export const primary = locations[0];

export const cuisineTags = [
  "Thai",
  "Laotian",
  "Asian",
  "Noodles",
  "Lunch",
  "Dessert",
] as const;

export const social = [
  {
    label: "TripAdvisor",
    href: "https://www.tripadvisor.com/Restaurant_Review-g60820-d440375-Reviews-Tiger_s_Garden-Vancouver_Washington.html",
  },
  {
    label: "Yelp",
    href: "https://www.yelp.com/biz/tigers-garden-vancouver",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/pages/category/Thai-Restaurant/Tigers-Garden-Restaurant-111657228869982/",
  },
] as const;
