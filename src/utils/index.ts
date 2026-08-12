export function cn(
  ...classes: (string | undefined | false | null)[]
): string {
  return classes.filter(Boolean).join(" ");
}

export function fmt(price: number): string {
  return `$${price.toLocaleString("es-AR")}`;
}

export const serif = "font-family: 'DM Serif Display', Georgia, serif;";
