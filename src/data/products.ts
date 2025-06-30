import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "Classic White Pearl Bracelet",
    price: 89.99,
    originalPrice: 129.99,
    images: [
      "/images/white.jpeg" ,
      "/images/yellow.jpeg",
    ],
    description: "Elegant white pearl bracelet crafted with premium freshwater pearls. Perfect for any occasion.",
    isOnSale: true,
    isFeatured: true,
  },
  {
    id: 2,
    name: "Crystam Red Charm Bracelet",
    price: 149.99,
    images: [
      "/images/crystal bpink.jpeg",
      "/images/vintage pink.jpeg",
    ],
    description: "Luxurious crystal pink bracelet featuring cultured pearls with delicate charm accents.",
    isFeatured: true,
  },
  {
    id: 3,
    name: "Black Pearl Bracelet",
    price: 199.99,
    originalPrice: 249.99,
    images: [
      "/images/black.jpeg",
      "/images/charm black.jpeg",
    ],
    description: "Bold black pearl bracelet that makes a sophisticated statement. Tahitian pearl quality.",
    isOnSale: true,
  },
  {
    id: 4,
    name: "Multi-Color Pearl Strand",
    price: 119.99,
    images: [
      "/images/couple.jpeg",
      "/images/multicoor yellow.jpeg", 
    ],
    description: "Beautiful multi-colored pearl bracelet featuring pearls in various natural hues.",
  },
  {
    id: 5,
    name: "Vintage Bracelet",
    price: 299.99,
    images: [
      "/images/unicorn.jpeg",
      "/images/vintage blue.jpeg",
    ],
    description: "Timeless vintage style bracelet with perfectly matched pearls and secure clasp.",
    isFeatured: true,
  },
  {
    id: 6,
    name: "Pearl & Crystal Bracelet",
    price: 79.99,
    originalPrice: 99.99,
    images: [
      "/images/pearl blue.jpeg",
      "/images/white limited.jpeg",
    ],
    description: "Elegant combination of pearls and crystals creating a sparkling, sophisticated look.",
    isOnSale: true,
  },
];

export const todaysDeals = products.filter(p => p.isOnSale).slice(0, 3);
export const featuredProducts = products.filter(p => p.isFeatured);