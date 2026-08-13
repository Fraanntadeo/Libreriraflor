import type { CartItem } from "./cart";

// ─── Configuración ────────────────────────────────────────────────────────────
// ↓ Reemplazar con el número real del negocio (formato internacional, sin + ni espacios)
export const WHATSAPP_NUMBER = "5491100000000";

// ─── Helpers ──────────────────────────────────────────────────────────────────

function fmt(price: number): string {
  return `$${price.toLocaleString("es-AR")}`;
}

function shippingLabel(subtotal: number): string {
  return subtotal >= 3000 ? "Gratis" : fmt(subtotal >= 3000 ? 0 : 500);
}

// ─── Generación del mensaje ───────────────────────────────────────────────────

export function buildWhatsAppMessage(cart: CartItem[]): string {
  if (cart.length === 0) return "";

  const subtotal = cart.reduce(
    (s, i) => s + i.product.price * i.quantity,
    0
  );
  const shipping = subtotal >= 3000 ? 0 : 500;
  const total = subtotal + shipping;

  const lines: string[] = ["Hola! 👋 Quiero realizar el siguiente pedido:\n"];

  for (const { product, quantity } of cart) {
    lines.push(`📚 ${product.name}`);
    lines.push(`Cantidad: ${quantity}`);
    lines.push(`Precio unitario: ${fmt(product.price)}`);
    lines.push(`Subtotal: ${fmt(product.price * quantity)}\n`);
  }

  lines.push("────────────────");
  lines.push(`Subtotal: ${fmt(subtotal)}`);
  lines.push(`Envío: ${shippingLabel(subtotal)}`);
  lines.push(`TOTAL: ${fmt(total)}`);
  lines.push("\nQuisiera coordinar la compra. ¡Gracias!");

  return lines.join("\n");
}

export function getWhatsAppUrl(cart: CartItem[]): string {
  const message = buildWhatsAppMessage(cart);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
