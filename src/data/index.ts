export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  count: number;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: "new" | "sale" | "bestseller";
  category: string;
  inStock: boolean;
  rating: number;
  reviews: number;
  tags: string[];
}

export const CATEGORIES: Category[] = [
  {
    id: "cuadernos",
    name: "Cuadernos",
    description: "Para escribir tus mejores ideas",
    image:
      "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=480&h=600&fit=crop&auto=format",
    count: 24,
  },
  {
    id: "agendas",
    name: "Agendas",
    description: "Organizá tu año con estilo",
    image:
      "https://images.unsplash.com/photo-1579008840658-715d866b72af?w=480&h=600&fit=crop&auto=format",
    count: 12,
  },
  {
    id: "planners",
    name: "Planners",
    description: "Planificá cada semana",
    image:
      "https://images.unsplash.com/photo-1526280524276-51b1c8a46321?w=480&h=600&fit=crop&auto=format",
    count: 18,
  },
  {
    id: "cuadernillos",
    name: "Cuadernillos",
    description: "Pequeños y esenciales",
    image:
      "https://images.unsplash.com/photo-1603188389888-7b80bd0a7e3e?w=480&h=600&fit=crop&auto=format",
    count: 9,
  },
  {
    id: "stickers",
    name: "Stickers",
    description: "Decorá con personalidad",
    image:
      "https://images.unsplash.com/photo-1592271019141-b5c71a9cfd71?w=480&h=600&fit=crop&auto=format",
    count: 36,
  },
  {
    id: "papeleria",
    name: "Papelería",
    description: "Todo lo que amás",
    image:
      "https://images.unsplash.com/photo-1508344210624-009dde43a167?w=480&h=600&fit=crop&auto=format",
    count: 21,
  },
];

// ─── PRECIOS ──────────────────────────────────────────────────────────────────
// Todos los precios están en 0 como placeholder.
// Reemplazá cada price: 0 con el precio real en pesos argentinos.
// ─────────────────────────────────────────────────────────────────────────────

export const PRODUCTS: Product[] = [
  // ── AGENDAS ────────────────────────────────────────────────────────────────
  {
    id: "1",
    name: "Agenda A5 2027 Perpetua — 2 días por hoja",
    description:
      "Sin fecha, 2 días por hoja. Disponible en sistema de discos (tapa blanda) o doble alambre (tapa dura).",
    longDescription:
      "200 hojas de 80 gramos. Incluye portada, hoja de datos, calendario, hoja de contactos, hoja de claves, hoja de gastos, hoja de fechas importantes. Interior: planner mensual y hojas de 2 días por página.",
    price: 0, // ← COMPLETAR
    image:
      "https://images.unsplash.com/photo-1579008840658-715d866b72af?w=600&h=750&fit=crop&auto=format",
    badge: "new",
    category: "agendas",
    inStock: true,
    rating: 5.0,
    reviews: 0,
    tags: ["A5", "2027", "perpetua", "2 días", "discos", "doble alambre"],
  },
  {
    id: "2",
    name: "Agenda A5 2027 Semana a la Vista — fechada",
    description:
      "Fechada, semana a la vista. Disponible en sistema de discos (tapa blanda) o doble alambre (tapa dura).",
    longDescription:
      "160 hojas de 80 gramos. Incluye portada, hoja de datos, calendario, hoja de contactos, hoja de claves, hoja de gastos, hoja de fechas importantes. Interior: planner mensual y semana a la vista.",
    price: 0, // ← COMPLETAR
    image:
      "https://images.unsplash.com/photo-1620287920810-3f5b9746380c?w=600&h=750&fit=crop&auto=format",
    badge: "new",
    category: "agendas",
    inStock: true,
    rating: 5.0,
    reviews: 0,
    tags: ["A5", "2027", "fechada", "semana a la vista", "discos", "doble alambre"],
  },
  {
    id: "3",
    name: "Agenda A5 Diaria — 1 día por hoja",
    description:
      "1 día por hoja. Disponible en sistema de discos (tapa blanda) o doble alambre (tapa dura).",
    longDescription:
      "410 hojas de 80 gramos. Incluye portada, hoja de datos, calendario, hoja de contactos, hoja de claves, hoja de gastos, hoja de fechas importantes. Interior: planner mensual y hojas de 1 día por página.",
    price: 0, // ← COMPLETAR
    image:
      "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=600&h=750&fit=crop&auto=format",
    badge: "new",
    category: "agendas",
    inStock: true,
    rating: 5.0,
    reviews: 0,
    tags: ["A5", "diaria", "1 día", "discos", "doble alambre"],
  },

  // ── CUADERNOS ──────────────────────────────────────────────────────────────
  {
    id: "4",
    name: 'Cuaderno A5 "Flores Postales" x 100 hojas',
    description:
      "Con frases. Hojas a elección: rayadas, cuadriculadas, de puntos o lisas. Sistema de discos o doble alambre.",
    longDescription:
      "Cuaderno A5 con diseño Flores Postales y frases en el interior. 100 hojas. Podés elegir el tipo de hojas: rayadas, cuadriculadas, punteadas o lisas. Disponible en sistema de discos o doble alambre.",
    price: 0, // ← COMPLETAR
    image:
      "https://images.unsplash.com/photo-1526280524276-51b1c8a46321?w=600&h=750&fit=crop&auto=format",
    badge: "new",
    category: "cuadernos",
    inStock: true,
    rating: 5.0,
    reviews: 0,
    tags: ["A5", "flores postales", "100 hojas", "discos", "doble alambre"],
  },
  {
    id: "5",
    name: "Cuaderno Universitario A4 — Sistema de disco x 100 hojas",
    description:
      "Con portada, hoja de datos, calendario, hoja de fechas importantes, hoja de temarios y separadores.",
    longDescription:
      "Cuaderno universitario A4 en sistema de disco. 100 hojas. Incluye portada, hoja de datos, hoja con calendario, hoja de fechas importantes, hoja con temarios. Tipo de hojas a elección: rayadas, cuadriculadas o punteadas. Viene con 2 separadores de materias.",
    price: 0, // ← COMPLETAR
    image:
      "https://images.unsplash.com/photo-1603188389888-7b80bd0a7e3e?w=600&h=750&fit=crop&auto=format",
    badge: "new",
    category: "cuadernos",
    inStock: true,
    rating: 5.0,
    reviews: 0,
    tags: ["A4", "universitario", "disco", "100 hojas"],
  },
  {
    id: "6",
    name: "Cuaderno Sara Kay A5 x 100 hojas + llaverito y stickers",
    description:
      "Con llaverito y stickers incluidos. Sistema de doble alambre.",
    longDescription:
      "Cuaderno A5 diseño Sara Kay con 100 hojas. Incluye hoja de datos, calendario y hoja de fechas importantes. Viene con llaverito y stickers de regalo. Sistema de doble alambre.",
    price: 0, // ← COMPLETAR
    image:
      "https://images.unsplash.com/photo-1592271019141-b5c71a9cfd71?w=600&h=750&fit=crop&auto=format",
    badge: "new",
    category: "cuadernos",
    inStock: true,
    rating: 5.0,
    reviews: 0,
    tags: ["A5", "Sara Kay", "llaverito", "stickers", "doble alambre"],
  },
  {
    id: "7",
    name: "Cuaderno Abrochado Tapa Blanda x 40 hojas — Personajes",
    description:
      "Tapa blanda con personajes. Hojas a elección: rayadas, cuadriculadas, punteadas o blancas.",
    longDescription:
      "Cuaderno abrochado con tapa blanda ilustrada con personajes. 40 hojas. Podés elegir el tipo de hojas: rayadas, cuadriculadas, punteadas o blancas.",
    price: 0, // ← COMPLETAR
    image:
      "https://images.unsplash.com/photo-1620811449164-f12a0f2ac40f?w=600&h=750&fit=crop&auto=format",
    badge: "new",
    category: "cuadernos",
    inStock: true,
    rating: 5.0,
    reviews: 0,
    tags: ["abrochado", "tapa blanda", "40 hojas", "personajes"],
  },
  {
    id: "8",
    name: "Cuaderno Control Salud + Planner Semanal Perpetuo A5",
    description:
      "Con control de diabetes y presión arterial. Sistema de disco o doble alambre.",
    longDescription:
      "Cuaderno A5 especial para el control de la salud. Incluye portada, hoja de datos, calendario, hoja de contactos, planner semanal de planificación, semana a la vista, hoja de control de diabetes y control de presión arterial. Disponible en sistema de disco o doble alambre.",
    price: 0, // ← COMPLETAR
    image:
      "https://images.unsplash.com/photo-1775129667571-7fa3f51c05e3?w=600&h=750&fit=crop&auto=format",
    badge: "new",
    category: "cuadernos",
    inStock: true,
    rating: 5.0,
    reviews: 0,
    tags: ["salud", "planner", "perpetuo", "A5", "disco", "doble alambre"],
  },
  {
    id: "9",
    name: "Cuaderno Pediátrico A5 — Tapa Dura Doble Alambre",
    description:
      "Cuaderno pediátrico A5 con tapa dura y sistema de doble alambre.",
    longDescription:
      "Cuaderno pediátrico A5 con tapa dura y sistema de doble alambre, pensado para el seguimiento del crecimiento y salud del bebé.",
    price: 0, // ← COMPLETAR
    image:
      "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=600&h=750&fit=crop&auto=format",
    badge: "new",
    category: "cuadernos",
    inStock: true,
    rating: 5.0,
    reviews: 0,
    tags: ["pediátrico", "A5", "tapa dura", "doble alambre"],
  },
  {
    id: "10",
    name: "Cuaderno de Anotaciones Deportes — Tapa Dura + tabla borrable",
    description:
      "Con tabla de jugada borrable. Sistema de doble alambre. Ideal para entrenadores y deportistas.",
    longDescription:
      "Cuaderno de anotaciones deportivas con tapa dura y sistema de doble alambre. Incluye tabla de jugada borrable, hoja de datos, calendario, hoja de fechas importantes, hoja de ficha de datos personales, planificador semanal, hoja de planificación de partidos y hojas de notas rayadas.",
    price: 0, // ← COMPLETAR
    image:
      "https://images.unsplash.com/photo-1579008840658-715d866b72af?w=600&h=750&fit=crop&auto=format",
    badge: "new",
    category: "cuadernos",
    inStock: true,
    rating: 5.0,
    reviews: 0,
    tags: ["deportes", "tapa dura", "doble alambre", "tabla borrable"],
  },
  {
    id: "11",
    name: "Cuaderno de Recetas A5 o A4 — Tapa Dura Doble Alambre",
    description:
      "Con tabla de equivalencias, hojas para recetas y hojas de notas.",
    longDescription:
      "Cuaderno de recetas disponible en tamaño A5 o A4. Tapa dura con sistema de doble alambre. Incluye portada, hoja con tabla de equivalencias, hojas para recetas y hojas de notas.",
    price: 0, // ← COMPLETAR
    image:
      "https://images.unsplash.com/photo-1603188389888-7b80bd0a7e3e?w=600&h=750&fit=crop&auto=format",
    badge: "new",
    category: "cuadernos",
    inStock: true,
    rating: 5.0,
    reviews: 0,
    tags: ["recetas", "A5", "A4", "tapa dura", "doble alambre"],
  },
  {
    id: "12",
    name: "Midori — 3 cuadernos tapa blanda con elástico",
    description:
      "Contenedor con sistema de elásticos para 3 cuadernos. Hojas a elección.",
    longDescription:
      "Midori con contenedor de sistema de elásticos para 3 cuadernos de tapa blanda. Hojas disponibles en rayadas, cuadriculadas, lisas o punteadas. Los 3 cuadernos se pueden combinar entre sí.",
    price: 0, // ← COMPLETAR
    image:
      "https://images.unsplash.com/photo-1620287920810-3f5b9746380c?w=600&h=750&fit=crop&auto=format",
    badge: "new",
    category: "cuadernos",
    inStock: true,
    rating: 5.0,
    reviews: 0,
    tags: ["midori", "tapa blanda", "elástico", "3 cuadernos"],
  },

  // ── CUADERNILLOS ───────────────────────────────────────────────────────────
  {
    id: "13",
    name: "Cuadernillo Universitario A4 con espiral — Tapa semi blanda",
    description:
      "80 hojas a elección: rayadas, cuadriculadas, punteadas o lisas.",
    longDescription:
      "Cuadernillo universitario A4 con tapa semi blanda y espiral. 80 hojas a elección: rayadas, cuadriculadas, punteadas o lisas.",
    price: 0, // ← COMPLETAR
    image:
      "https://images.unsplash.com/photo-1526280524276-51b1c8a46321?w=600&h=750&fit=crop&auto=format",
    badge: "new",
    category: "cuadernillos",
    inStock: true,
    rating: 5.0,
    reviews: 0,
    tags: ["universitario", "A4", "espiral", "80 hojas"],
  },
  {
    id: "14",
    name: "Librito para Colorear A5 — Tapa Dura BOBY GOODS",
    description: "60 hojas para colorear. Tapa dura.",
    longDescription:
      "Librito para colorear A5 con tapa dura de la línea BOBY GOODS. 60 hojas para colorear.",
    price: 0, // ← COMPLETAR
    image:
      "https://images.unsplash.com/photo-1592271019141-b5c71a9cfd71?w=600&h=750&fit=crop&auto=format",
    badge: "new",
    category: "cuadernillos",
    inStock: true,
    rating: 5.0,
    reviews: 0,
    tags: ["colorear", "A5", "tapa dura", "BOBY GOODS", "60 hojas"],
  },

  // ── PAPELERÍA / FICHEROS ───────────────────────────────────────────────────
  {
    id: "15",
    name: "Fichero N3 — 100 hojas 80g con 2 separadores",
    description:
      "Hojas a elección: rayadas, cuadriculadas, punteadas o lisas. Incluye 2 separadores.",
    longDescription:
      "Fichero número 3 con 100 hojas de 80 gramos. Podés elegir el tipo de hojas: rayadas, cuadriculadas, punteadas o lisas. Incluye 2 separadores.",
    price: 0, // ← COMPLETAR
    image:
      "https://images.unsplash.com/photo-1508344210624-009dde43a167?w=600&h=750&fit=crop&auto=format",
    badge: "new",
    category: "papeleria",
    inStock: true,
    rating: 5.0,
    reviews: 0,
    tags: ["fichero", "N3", "100 hojas", "separadores"],
  },
  {
    id: "16",
    name: "Repuesto hojas para fichero x 100 hojas",
    description:
      "Tipo de hojas a elección: rayadas, cuadriculadas, punteadas o lisas.",
    longDescription:
      "Repuesto de 100 hojas para fichero. Elegí el tipo de hojas que necesitás: rayadas, cuadriculadas, punteadas o lisas.",
    price: 0, // ← COMPLETAR
    image:
      "https://images.unsplash.com/photo-1508344210624-009dde43a167?w=600&h=750&fit=crop&auto=format",
    badge: "new",
    category: "papeleria",
    inStock: true,
    rating: 5.0,
    reviews: 0,
    tags: ["repuesto", "fichero", "100 hojas"],
  },
  {
    id: "17",
    name: "Repuesto hojas para fichero x 50 hojas",
    description:
      "Tipo de hojas a elección: rayadas, cuadriculadas, punteadas o lisas.",
    longDescription:
      "Repuesto de 50 hojas para fichero. Elegí el tipo de hojas que necesitás: rayadas, cuadriculadas, punteadas o lisas.",
    price: 0, // ← COMPLETAR
    image:
      "https://images.unsplash.com/photo-1508344210624-009dde43a167?w=600&h=750&fit=crop&auto=format",
    badge: "new",
    category: "papeleria",
    inStock: true,
    rating: 5.0,
    reviews: 0,
    tags: ["repuesto", "fichero", "50 hojas"],
  },
];

export const TESTIMONIALS = [
  {
    id: "1",
    name: "Valentina M.",
    initials: "VM",
    rating: 5,
    text: "El cuaderno kraft es exactamente lo que imaginé. El papel es suave, la encuadernación perfecta y el packaging fue un regalo en sí mismo. Ya pedí el segundo.",
    product: "Cuaderno Kraft Natural",
  },
  {
    id: "2",
    name: "Lucía F.",
    initials: "LF",
    rating: 5,
    text: "La agenda 2025 superó todas mis expectativas. Las hojas son gruesas, no sangra ningún marcador y el diseño es sencillamente hermoso. Escribir se volvió mi momento favorito del día.",
    product: "Agenda 2025 Nube",
  },
  {
    id: "3",
    name: "Camila R.",
    initials: "CR",
    rating: 5,
    text: "Los stickers de primavera son un sueño. Los uso en mi bullet journal y recibo comentarios todo el tiempo. La calidad es increíble para el precio.",
    product: "Kit Stickers Primavera",
  },
  {
    id: "4",
    name: "Sofía H.",
    initials: "SH",
    rating: 4,
    text: "El planner botánico llegó perfecto y muy bien cuidado. Me encanta que cada semana tiene espacio para prioridades e inspiración. Lo recomiendo mucho.",
    product: "Planner Semanal Botánico",
  },
];

export const INSTAGRAM_IMAGES = [
  "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=400&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1526280524276-51b1c8a46321?w=400&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1579008840658-715d866b72af?w=400&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1775129667571-7fa3f51c05e3?w=400&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1592271019141-b5c71a9cfd71?w=400&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1603188389888-7b80bd0a7e3e?w=400&h=400&fit=crop&auto=format",
];