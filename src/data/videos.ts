export type VideoCategory = 'Reels' | 'Automotriz' | 'Marca' | 'Comercial' | 'Contenido';

export interface Video {
  id: string;
  titulo: string;
  cliente?: string;
  categoria: VideoCategory;
  descripcion: string;
  src: string;   // Cloudinary video URL
  thumb: string; // Cloudinary thumbnail URL
  año: number;
  destacado?: boolean;
}

const CDN = 'https://res.cloudinary.com/dav1lmcsh/video/upload';

function cdn(publicId: string) {
  return {
    src: `${CDN}/q_auto/${publicId}.mp4`,
    thumb: `${CDN}/so_2,f_jpg,q_auto/${publicId}.jpg`,
  };
}

export const videos: Video[] = [
  {
    id: 'reel-2025',
    titulo: 'Reel Dynasty 2025',
    cliente: 'Dynasty Studio',
    categoria: 'Reels',
    descripcion:
      'Compilado de los mejores proyectos de animación 3D, VFX y edición de Dynasty Studio durante 2025. Dirección creativa y edición.',
    ...cdn('Reel_2025_dynasty_xgtrje'),
    año: 2025,
    destacado: true,
  },
  {
    id: 'reel-bmw',
    titulo: 'Reel BMW',
    cliente: 'BMW',
    categoria: 'Automotriz',
    descripcion:
      'Animación 3D y reel automotriz para BMW. Modelado, iluminación cinematográfica y edición para campaña de producto.',
    ...cdn('reelbmw_ipyvr8'),
    año: 2024,
    destacado: true,
  },
  {
    id: 'reel-porsche-poblautos',
    titulo: 'Porsche — Poblautos',
    cliente: 'Poblautos',
    categoria: 'Automotriz',
    descripcion:
      'Reel de animación 3D para Porsche en concesionario Poblautos. Visualización de vehículo y edición para punto de venta.',
    ...cdn('ReelPorschepoblautos_bimaas'),
    año: 2024,
    destacado: true,
  },
  {
    id: 'crypton',
    titulo: 'Yamaha Crypton FINN',
    cliente: 'Yamaha',
    categoria: 'Automotriz',
    descripcion:
      'Video comercial con animación 3D para la Yamaha Crypton FINN. Dirección creativa, motion y edición final desde Dynasty Studio.',
    ...cdn('crypton_ibehzh'),
    año: 2023,
    destacado: true,
  },
  {
    id: 'yamaha-r15',
    titulo: 'Yamaha R15',
    cliente: 'Yamaha',
    categoria: 'Automotriz',
    descripcion:
      'Animación 3D fotorrealista para la Yamaha R15. Modelado de alta fidelidad, iluminación de estudio y edición de producto.',
    ...cdn('yamaha_r15_vjpedn'),
    año: 2023,
  },
  {
    id: 'nmax',
    titulo: 'Yamaha NMAX',
    cliente: 'Yamaha',
    categoria: 'Automotriz',
    descripcion:
      'Animación 3D para la scooter NMAX de Yamaha. Modelado, renderizado con materiales PBR y edición para campaña digital.',
    ...cdn('Nmax_lm9vuk'),
    año: 2023,
  },
  {
    id: 'guapo-furever-main',
    titulo: 'Guapo Furever',
    cliente: 'Guapo Furever',
    categoria: 'Marca',
    descripcion:
      'Video principal de identidad de marca para Guapo Furever, marca de cuidado canino. Dirección creativa, edición y motion design.',
    ...cdn('guapo_furever_vtwn7k'),
    año: 2022,
    destacado: true,
  },
  {
    id: 'guapo-furever-1',
    titulo: 'Guapo Furever — Vol. 1',
    cliente: 'Guapo Furever',
    categoria: 'Marca',
    descripcion:
      'Pieza de contenido de marca para Guapo Furever. Vol. 1 — edición y producción para redes sociales.',
    ...cdn('guapo_furever_1_qhriep'),
    año: 2022,
  },
  {
    id: 'guapo-furever-3',
    titulo: 'Guapo Furever — Vol. 3',
    cliente: 'Guapo Furever',
    categoria: 'Marca',
    descripcion:
      'Pieza de contenido de marca para Guapo Furever. Vol. 3 — edición y producción para redes sociales.',
    ...cdn('guapo_furever_3_qp2eqj'),
    año: 2022,
  },
  {
    id: 'guapo-furever-4',
    titulo: 'Guapo Furever — Vol. 4',
    cliente: 'Guapo Furever',
    categoria: 'Marca',
    descripcion:
      'Pieza de contenido de marca para Guapo Furever. Vol. 4 — edición y producción para redes sociales.',
    ...cdn('guapo_furever_4_ndo3od'),
    año: 2022,
  },
  {
    id: 'frisby',
    titulo: 'Frisby',
    cliente: 'Frisby',
    categoria: 'Comercial',
    descripcion:
      'Contenido audiovisual para Frisby, cadena colombiana de pollo frito. Edición, motion y producción para campaña digital.',
    ...cdn('frisby_yqkveh'),
    año: 2023,
  },
  {
    id: 'williams-cancer',
    titulo: 'Williams Cancer Institute',
    cliente: 'Williams Cancer Institute',
    categoria: 'Comercial',
    descripcion:
      'Video institucional para Williams Cancer Institute. Producción audiovisual y edición para campaña de salud y comunicación corporativa.',
    ...cdn('williams_cancer_zepw9b'),
    año: 2023,
  },
  {
    id: 'coin',
    titulo: 'Coin',
    categoria: 'Contenido',
    descripcion:
      'Animación 3D de motion design para pieza de contenido digital. Modelado y animación de producto con render fotorrealista.',
    ...cdn('coin_jqcwyv'),
    año: 2023,
  },
];
