export type ProjectCategory = 'Manuales de Marca' | 'Diseño Gráfico' | 'Diseño de Producto';

export interface Proyecto {
  id: string;
  titulo: string;
  subtitulo: string;
  categoria: ProjectCategory;
  descripcion: string;
  pdf: string;
  año: number;
  destacado?: boolean;
}

// Rutas relativas a /assets/
export const proyectos: Proyecto[] = [

  // ── Diseño de Producto ───────────────────────────────────
  {
    id: 'vash-automotive',
    titulo: 'Vash Automotive',
    subtitulo: 'Diseño de Producto — Concepto Vehicular',
    categoria: 'Diseño de Producto',
    descripcion:
      'Propuesta de diseño para Vash Automotive. Desarrollo conceptual de producto vehicular, exploración formal y presentación de renders.',
    pdf: 'Diseño de producto/VASH AUTOMOTIVE/Vash automotive (3).pdf',
    año: 2023,
    destacado: true,
  },
  {
    id: 'ideacion-goya',
    titulo: 'Ideación Goya',
    subtitulo: 'Diseño de Producto — Proceso Creativo',
    categoria: 'Diseño de Producto',
    descripcion:
      'Proceso de ideación y diseño de producto para Goya. Exploración formal, bocetación avanzada y desarrollo conceptual desde el brief hasta la propuesta final.',
    pdf: 'Diseño de producto/IDEACIÓN GOYA.pdf',
    año: 2023,
  },
  {
    id: 'tnm',
    titulo: 'TNM',
    subtitulo: 'Diseño de Producto — Empaque & Identidad',
    categoria: 'Diseño de Producto',
    descripcion:
      'Diseño de producto, sistema de identidad y packaging para TNM. Desarrollo conceptual, propuestas cromáticas y aplicaciones de marca.',
    pdf: 'Diseño de producto/TNM/TNM (2).pdf',
    año: 2022,
  },

  // ── Manuales de Marca ────────────────────────────────────
  {
    id: 'global-car-rental',
    titulo: 'Global Car Rental',
    subtitulo: 'Manual de Marca — Identidad Completa',
    categoria: 'Manuales de Marca',
    descripcion:
      'Manual de marca completo para Global Car Rental, empresa de alquiler de vehículos. Logotipo, tipografía, paleta cromática, fotografía y guías de aplicación digital e impresa.',
    pdf: 'Manuales de marca/Manual de marca Global Car Rental (1).pdf',
    año: 2022,
    destacado: true,
  },
  {
    id: 'guapo-furever',
    titulo: 'Guapo Furever',
    subtitulo: 'Manual de Marca — Cuidado Canino',
    categoria: 'Manuales de Marca',
    descripcion:
      'Manual de marca para Guapo Furever, marca de cuidado y bienestar canino. Sistema visual completo: logotipo, tipografía, paleta, iconografía y aplicaciones digitales.',
    pdf: 'Manuales de marca/Manual de marca Guapofurever (1).pdf',
    año: 2022,
    destacado: true,
  },
  {
    id: 'cabrones',
    titulo: 'Cabrones',
    subtitulo: 'Manual de Marca — Branding',
    categoria: 'Manuales de Marca',
    descripcion:
      'Manual de marca para Cabrones. Concepto de marca, logotipo, sistema visual, paleta cromática y aplicaciones en soportes digitales e impresos.',
    pdf: 'Manuales de marca/Manual de Marca cabrones.pdf',
    año: 2021,
  },
  {
    id: 'casa-s',
    titulo: 'Casa S',
    subtitulo: 'Manual de Marca — Identidad Visual',
    categoria: 'Manuales de Marca',
    descripcion:
      'Manual de marca para Casa S. Identidad visual, guías tipográficas, paleta de color y aplicaciones de la marca en diferentes contextos.',
    pdf: 'Manuales de marca/MANUAL DE MARCA casa s.pdf',
    año: 2021,
  },

  // ── Diseño Gráfico ───────────────────────────────────────
  {
    id: 'tacorazonada',
    titulo: 'Tacorazonada',
    subtitulo: 'Diseño Gráfico — Kick Off de Marca',
    categoria: 'Diseño Gráfico',
    descripcion:
      'Kick off de marca para Tacorazonada. Conceptualización, naming visual, identidad inicial y sistema gráfico para lanzamiento de la marca.',
    pdf: 'GRAFICO/Kick Off - Tacorazonada.pdf',
    año: 2022,
    destacado: true,
  },
  {
    id: 'storyboard-bretana',
    titulo: 'Storyboard Bretaña',
    subtitulo: 'Diseño Gráfico — Postobón / Dynasty Studio',
    categoria: 'Diseño Gráfico',
    descripcion:
      'Storyboard para animación 3D del lanzamiento de Bretaña (Postobón) en el Estéreo Picnic. Planificación visual y narrativa del spot producido desde Dynasty Studio.',
    pdf: 'GRAFICO/Story board animacciones 3D Bretaña.pdf',
    año: 2024,
    destacado: true,
  },
  {
    id: 'branding-logos',
    titulo: 'Branding & Logos',
    subtitulo: 'Diseño Gráfico — Freelance',
    categoria: 'Diseño Gráfico',
    descripcion:
      'Colección de propuestas de branding y logotipos desarrolladas para clientes freelance. Exploración tipográfica, iconográfica y de sistemas de identidad visual.',
    pdf: 'GRAFICO/Branding y logos.pdf',
    año: 2021,
  },
  {
    id: 'publicaciones-ia',
    titulo: 'Publicaciones IA',
    subtitulo: 'Diseño Gráfico — IA Generativa',
    categoria: 'Diseño Gráfico',
    descripcion:
      'Serie de publicaciones creadas con herramientas de IA generativa. Dirección creativa, prompt engineering y edición para contenido de redes sociales.',
    pdf: 'GRAFICO/PUBLICACIONES IA.pdf',
    año: 2023,
  },
  {
    id: 'macrollantas',
    titulo: 'Macrollantas',
    subtitulo: 'Diseño Gráfico — Propuesta de Logo',
    categoria: 'Diseño Gráfico',
    descripcion:
      'Propuesta de logomark para Macrollantas. Exploración tipográfica, gráfica y conceptual de la identidad visual para empresa del sector automotriz.',
    pdf: 'GRAFICO/Copia de Propuesta logos-macrollantas.pdf',
    año: 2021,
  },
  {
    id: 'postres',
    titulo: 'Postres',
    subtitulo: 'Diseño Gráfico — Identidad de Marca',
    categoria: 'Diseño Gráfico',
    descripcion:
      'Diseño gráfico para marca de postres artesanales. Identidad visual, paleta cromática cálida y piezas de comunicación para punto de venta y redes sociales.',
    pdf: 'GRAFICO/Postres.pdf',
    año: 2021,
  },
  {
    id: 'halloween',
    titulo: 'Halloween Prompt',
    subtitulo: 'Diseño Gráfico — Campaña Digital',
    categoria: 'Diseño Gráfico',
    descripcion:
      'Campaña gráfica temática de Halloween. Concepto visual, composición tipográfica y piezas ilustradas para redes sociales.',
    pdf: 'GRAFICO/Copia de HALLOWEEN PROMPT.pdf',
    año: 2022,
  },
];
