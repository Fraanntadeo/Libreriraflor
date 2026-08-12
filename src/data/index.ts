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

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Cuaderno Kraft Natural",
    description:
      "Tapa dura de papel kraft, 200 páginas rayadas, encuadernación cosida.",
    longDescription:
      "Nuestro cuaderno más querido. Fabricado con tapa de papel kraft reciclado 450g, encuadernado a mano con hilo encerado. Las 200 páginas interiores son de papel offset 90g con rayado suave que no sangra. Perfecto para escritura diaria, journaling o bocetos ligeros.",
    price: 1850,
    image:
      "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=600&h=750&fit=crop&auto=format",
    badge: "new",
    category: "cuadernos",
    inStock: true,
    rating: 4.8,
    reviews: 124,
    tags: ["kraft", "rayado", "tapa dura"],
  },
  {
    id: "2",
    name: "Agenda 2025 Nube",
    description:
      "Agenda anual con vistas mensual y semanal, papel 80g, marcador de página.",
    longDescription:
      "Agenda completa para 2025 con calendario anual, páginas mensuales y bloques semanales con espacio para prioridades, notas y tracker de hábitos. Papel satinado 80g, marcador de cinta bordó y bolsillo interior.",
    price: 2400,
    image:
      "https://images.unsplash.com/photo-1579008840658-715d866b72af?w=600&h=750&fit=crop&auto=format",
    badge: "bestseller",
    category: "agendas",
    inStock: true,
    rating: 5.0,
    reviews: 89,
    tags: ["agenda 2025", "semanal", "tapa dura"],
  },
  {
    id: "3",
    name: "Planner Semanal Botánico",
    description:
      "Diseño ilustrado con motivos botánicos, bloques semanales y espacio de notas.",
    longDescription:
      "Un planner undated con delicadas ilustraciones botánicas en cada apertura. Vista semanal extendida, espacio para metas mensuales, tracker de hábitos y páginas de notas libres. Tapa en cartón plastificado mate.",
    price: 1650,
    originalPrice: 2100,
    image:
      "https://images.unsplash.com/photo-1526280524276-51b1c8a46321?w=600&h=750&fit=crop&auto=format",
    badge: "sale",
    category: "planners",
    inStock: true,
    rating: 4.6,
    reviews: 67,
    tags: ["botánico", "semanal", "undated"],
  },
  {
    id: "4",
    name: "Cuadernillo Acuarela A5",
    description:
      "Cuadernillo A5 de papel especial para acuarela, 30 hojas, tapa kraft.",
    longDescription:
      "Papel cold press 200g especialmente seleccionado para técnicas de acuarela y aguada. 30 hojas doble cara en formato A5, ideal para bocetos y pinturas compactas. La tapa de papel kraft protege tu trabajo.",
    price: 980,
    image:
      "https://images.unsplash.com/photo-1603188389888-7b80bd0a7e3e?w=600&h=750&fit=crop&auto=format",
    badge: "new",
    category: "cuadernillos",
    inStock: true,
    rating: 4.9,
    reviews: 43,
    tags: ["acuarela", "A5", "cold press"],
  },
  {
    id: "5",
    name: "Kit Stickers Primavera",
    description: "Set de 60 stickers ilustrados a mano. Temática floral y botánica.",
    longDescription:
      "60 stickers diseñados e ilustrados a mano en nuestro estudio. Papel adhesivo satinado de alta calidad, resistente al agua y a los marcadores. Incluye flores, hojas, ramas y elementos botánicos de temporada.",
    price: 650,
    image:
      "https://images.unsplash.com/photo-1592271019141-b5c71a9cfd71?w=600&h=750&fit=crop&auto=format",
    category: "stickers",
    inStock: true,
    rating: 4.7,
    reviews: 156,
    tags: ["floral", "botánico", "60 unidades"],
  },
  {
    id: "6",
    name: "Cuaderno Lino Salvia",
    description: "Tapa de lino natural color verde salvia, 160 páginas punteadas.",
    longDescription:
      "Tapa de lino natural cosido a mano en tono verde salvia. 160 páginas punteadas de papel Clairefontaine 100g. Elástico de cierre, bolsillo trasero y marcador de tela. Un objeto que se atesora.",
    price: 2100,
    image:
      "https://images.unsplash.com/photo-1620811449164-f12a0f2ac40f?w=600&h=750&fit=crop&auto=format",
    badge: "bestseller",
    category: "cuadernos",
    inStock: true,
    rating: 4.9,
    reviews: 201,
    tags: ["lino", "punteado", "tapa tela"],
  },
  {
    id: "7",
    name: "Agenda Pocket Rosa",
    description:
      "Agenda de bolsillo 10×15 cm, tapa suave, 52 semanas con espacio diario.",
    longDescription:
      "Agenda compacta que entra en cualquier bolsillo. Tapa de PU suave en rosa pálido, costura decorativa y marcador de tela. 52 semanas con espacio para citas, tareas y notas diarias.",
    price: 1200,
    image:
      "https://images.unsplash.com/photo-1620287920810-3f5b9746380c?w=600&h=750&fit=crop&auto=format",
    category: "agendas",
    inStock: false,
    rating: 4.5,
    reviews: 38,
    tags: ["pocket", "suave", "semanal"],
  },
  {
    id: "8",
    name: "Planner Mensual Arcilla",
    description:
      "Planner undated con vistas mensuales, tracker de hábitos y notas libres.",
    longDescription:
      "Planner sin fechas para comenzarlo cuando quieras. Color arcilla cálido con detalles en terracota. Incluye 12 vistas mensuales, tracker de hábitos, páginas de reflexión mensual y 20 páginas de notas libres.",
    price: 1900,
    image:
      "https://images.unsplash.com/photo-1775129667571-7fa3f51c05e3?w=600&h=750&fit=crop&auto=format",
    badge: "new",
    category: "planners",
    inStock: true,
    rating: 4.8,
    reviews: 52,
    tags: ["arcilla", "mensual", "tracker"],
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
