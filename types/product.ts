export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  inventory: number;
  variantsAvailable: ProductVariant[];
}

export interface ProductVariant {
  id: string;
  name: string;
  price?: number;
  attributes: Record<string, string>;
}
