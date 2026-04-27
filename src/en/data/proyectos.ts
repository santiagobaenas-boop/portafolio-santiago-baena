export type ProjectCategory = 'Brand Manuals' | 'Graphic Design' | 'Product Design';

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

export const proyectos: Proyecto[] = [

  // ── Product Design ───────────────────────────────────────
  {
    id: 'vash-automotive',
    titulo: 'Vash Automotive',
    subtitulo: 'Product Design — Vehicle Concept',
    categoria: 'Product Design',
    descripcion:
      'Design proposal for Vash Automotive. Conceptual vehicle product development, formal exploration, and render presentation.',
    pdf: 'Diseño de producto/VASH AUTOMOTIVE/Vash automotive (3).pdf',
    año: 2023,
    destacado: true,
  },
  {
    id: 'ideacion-goya',
    titulo: 'Ideación Goya',
    subtitulo: 'Product Design — Creative Process',
    categoria: 'Product Design',
    descripcion:
      'Ideation and product design process for Goya. Formal exploration, advanced sketching, and conceptual development from brief to final proposal.',
    pdf: 'Diseño de producto/IDEACIÓN GOYA.pdf',
    año: 2023,
  },
  {
    id: 'tnm',
    titulo: 'TNM',
    subtitulo: 'Product Design — Packaging & Identity',
    categoria: 'Product Design',
    descripcion:
      'Product design, identity system, and packaging for TNM. Conceptual development, color proposals, and brand applications.',
    pdf: 'Diseño de producto/TNM/TNM (2).pdf',
    año: 2022,
  },

  // ── Brand Manuals ────────────────────────────────────────
  {
    id: 'global-car-rental',
    titulo: 'Global Car Rental',
    subtitulo: 'Brand Manual — Full Identity',
    categoria: 'Brand Manuals',
    descripcion:
      'Complete brand manual for Global Car Rental, a vehicle rental company. Logo, typography, color palette, photography, and digital and print application guides.',
    pdf: 'Manuales de marca/Manual de marca Global Car Rental (1).pdf',
    año: 2022,
    destacado: true,
  },
  {
    id: 'guapo-furever',
    titulo: 'Guapo Furever',
    subtitulo: 'Brand Manual — Pet Care',
    categoria: 'Brand Manuals',
    descripcion:
      'Brand manual for Guapo Furever, a canine care and wellness brand. Full visual system: logo, typography, palette, iconography, and digital applications.',
    pdf: 'Manuales de marca/Manual de marca Guapofurever (1).pdf',
    año: 2022,
    destacado: true,
  },
  {
    id: 'cabrones',
    titulo: 'Cabrones',
    subtitulo: 'Brand Manual — Branding',
    categoria: 'Brand Manuals',
    descripcion:
      'Brand manual for Cabrones. Brand concept, logo, visual system, color palette, and digital and print applications.',
    pdf: 'Manuales de marca/Manual de Marca cabrones.pdf',
    año: 2021,
  },
  {
    id: 'casa-s',
    titulo: 'Casa S',
    subtitulo: 'Brand Manual — Visual Identity',
    categoria: 'Brand Manuals',
    descripcion:
      'Brand manual for Casa S. Visual identity, typographic guidelines, color palette, and brand applications across different contexts.',
    pdf: 'Manuales de marca/MANUAL DE MARCA casa s.pdf',
    año: 2021,
  },

  // ── Graphic Design ───────────────────────────────────────
  {
    id: 'tacorazonada',
    titulo: 'Tacorazonada',
    subtitulo: 'Graphic Design — Brand Kick Off',
    categoria: 'Graphic Design',
    descripcion:
      'Brand kick-off for Tacorazonada. Conceptualization, visual naming, initial identity, and graphic system for brand launch.',
    pdf: 'GRAFICO/Kick Off - Tacorazonada.pdf',
    año: 2022,
    destacado: true,
  },
  {
    id: 'storyboard-bretana',
    titulo: 'Storyboard Bretaña',
    subtitulo: 'Graphic Design — Postobón / Dynasty Studio',
    categoria: 'Graphic Design',
    descripcion:
      'Storyboard for 3D animation of the Bretaña (Postobón) launch at Estéreo Picnic. Visual and narrative planning for the spot produced at Dynasty Studio.',
    pdf: 'GRAFICO/Story board animacciones 3D Bretaña.pdf',
    año: 2024,
    destacado: true,
  },
  {
    id: 'branding-logos',
    titulo: 'Branding & Logos',
    subtitulo: 'Graphic Design — Freelance',
    categoria: 'Graphic Design',
    descripcion:
      'Collection of branding and logo proposals developed for freelance clients. Typographic, iconographic, and visual identity system exploration.',
    pdf: 'GRAFICO/Branding y logos.pdf',
    año: 2021,
  },
  {
    id: 'publicaciones-ia',
    titulo: 'AI Publications',
    subtitulo: 'Graphic Design — Generative AI',
    categoria: 'Graphic Design',
    descripcion:
      'Series of publications created with generative AI tools. Creative direction, prompt engineering, and editing for social media content.',
    pdf: 'GRAFICO/PUBLICACIONES IA.pdf',
    año: 2023,
  },
  {
    id: 'macrollantas',
    titulo: 'Macrollantas',
    subtitulo: 'Graphic Design — Logo Proposal',
    categoria: 'Graphic Design',
    descripcion:
      'Logomark proposal for Macrollantas. Typographic, graphic, and conceptual exploration of the visual identity for an automotive sector company.',
    pdf: 'GRAFICO/Copia de Propuesta logos-macrollantas.pdf',
    año: 2021,
  },
  {
    id: 'postres',
    titulo: 'Postres',
    subtitulo: 'Graphic Design — Brand Identity',
    categoria: 'Graphic Design',
    descripcion:
      'Graphic design for an artisan dessert brand. Visual identity, warm color palette, and communication pieces for point of sale and social media.',
    pdf: 'GRAFICO/Postres.pdf',
    año: 2021,
  },
  {
    id: 'halloween',
    titulo: 'Halloween Prompt',
    subtitulo: 'Graphic Design — Digital Campaign',
    categoria: 'Graphic Design',
    descripcion:
      'Halloween-themed graphic campaign. Visual concept, typographic composition, and illustrated pieces for social media.',
    pdf: 'GRAFICO/Copia de HALLOWEEN PROMPT.pdf',
    año: 2022,
  },
];
