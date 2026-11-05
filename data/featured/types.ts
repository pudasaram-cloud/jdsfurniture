export interface FeaturedProduct {
  id: string;
  title: string;
  code: string;
  price: string;
  image: string;
  category: string;
  href?: string;
}

// Alias for Product interface
export type Product = FeaturedProduct;
