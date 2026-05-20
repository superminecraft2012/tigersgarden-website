export type Review = {
  author: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  source?: string;
};

// Real guest reviews quoted from the previous tigersgardencuisine.com homepage.
export const reviews: Review[] = [
  {
    author: "Gina K.",
    rating: 5,
    text: "We were in Vancouver, WA and wanted to try out some Asian food. It's a cute place that's across from Esther Short Park. Beautiful view while having lunch or dinner. Staff was nice and attentive, the food was also amazing! Will come visit again!",
  },
  {
    author: "Justin S.",
    rating: 5,
    text: "I like this place a lot. I have dined here a couple times and got takeouts another couple times. The food is delicious and the portions are big. I actually really like the old couple that own and run this place. They are so nice and down to earth.",
  },
  {
    author: "Angelyka C.",
    rating: 5,
    text: "I've heard great things about this restaurant and I am not disappointed by my experience. It's a fast walking distance from where I currently work, and I am sure that I will come back. The pad thai is the best that I've had in Vancouver, a good serving size with spice in it. The service is also pretty nice and fast.",
  },
  {
    author: "Brent E.",
    rating: 5,
    text: "Consistently high quality meals. From the soup to rice dishes, curry to stir fry, everything is very fresh and flavorful. First time in the lounge and it was so nice to be in such a relaxing atmosphere. I'd highly recommend the cashew stir fry, pineapple cashew fried rice, Tom kha soup or red curry. You will not be disappointed.",
  },
];

export const reviewsCta = {
  label: "Leave a review",
  href: "https://www.google.com/search?q=Tigers+Garden+Vancouver+WA",
};
