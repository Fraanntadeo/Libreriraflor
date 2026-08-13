import type { Product } from "../data";

export interface CartItem {
  product: Product;
  quantity: number;
}

export type Cart = CartItem[];