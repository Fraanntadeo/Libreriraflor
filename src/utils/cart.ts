// ─── Tipos ────────────────────────────────────────────────────────────────────

export interface CartProduct {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

export interface CartItem {
  product: CartProduct;
  quantity: number;
}

// ─── Constante de clave ───────────────────────────────────────────────────────

const CART_KEY = "cart";

// ─── Funciones de persistencia ────────────────────────────────────────────────

/** Valida que un ítem tenga la estructura correcta { product: { id, name, price, image, category }, quantity } */
function isValidItem(item: unknown): item is CartItem {
  if (!item || typeof item !== "object") return false;
  const i = item as Record<string, unknown>;
  if (typeof i.quantity !== "number") return false;
  if (!i.product || typeof i.product !== "object") return false;
  const p = i.product as Record<string, unknown>;
  return (
    typeof p.id === "string" &&
    typeof p.name === "string" &&
    typeof p.price === "number" &&
    typeof p.image === "string" &&
    typeof p.category === "string"
  );
}

export function getCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw: unknown = JSON.parse(localStorage.getItem(CART_KEY) ?? "[]");
    if (!Array.isArray(raw)) {
      // Formato inválido — limpiar y empezar de cero
      localStorage.removeItem(CART_KEY);
      return [];
    }
    const valid = raw.filter(isValidItem);
    // Si había ítems corruptos, reescribir solo los válidos
    if (valid.length !== raw.length) {
      localStorage.setItem(CART_KEY, JSON.stringify(valid));
    }
    return valid;
  } catch {
    localStorage.removeItem(CART_KEY);
    return [];
  }
}

export function saveCart(cart: CartItem[]): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

// ─── Operaciones del carrito ──────────────────────────────────────────────────

export function addToCart(product: CartProduct, quantity = 1): void {
  const cart = getCart();
  const existing = cart.find((item) => item.product.id === product.id);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ product, quantity });
  }
  saveCart(cart);
  window.dispatchEvent(new CustomEvent("cart-updated"));
}

export function removeFromCart(productId: string): void {
  const cart = getCart().filter((item) => item.product.id !== productId);
  saveCart(cart);
  window.dispatchEvent(new CustomEvent("cart-updated"));
}

export function updateCartQuantity(productId: string, quantity: number): void {
  if (quantity <= 0) {
    removeFromCart(productId);
    return;
  }
  const cart = getCart();
  const item = cart.find((i) => i.product.id === productId);
  if (item) {
    item.quantity = quantity;
    saveCart(cart);
    window.dispatchEvent(new CustomEvent("cart-updated"));
  }
}

export function clearCart(): void {
  saveCart([]);
  window.dispatchEvent(new CustomEvent("cart-updated"));
}

// ─── Cálculos ─────────────────────────────────────────────────────────────────

export function getCartQuantity(): number {
  return getCart().reduce((sum, item) => sum + item.quantity, 0);
}

export function getCartSubtotal(): number {
  return getCart().reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
}

export function getShippingCost(): number {
  return getCartSubtotal() >= 3000 ? 0 : 500;
}

export function getCartTotal(): number {
  return getCartSubtotal() + getShippingCost();
}
