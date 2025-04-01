export interface CartItem {
  productId: string;
  quantity: number;
  name: string;
  price: number;
  image: string;
  variantId?: string;
}

export interface Cart {
  items: CartItem[];
  subtotal: number;
  tax: number;
  total: number;
}
