export type VideoCategory = 'Reels' | 'Automotriz' | 'Marca' | 'Comercial' | 'Contenido';

export interface Video {
  id: string;
  titulo: string;
  cliente?: string;
  categoria: VideoCategory;
  descripcion: string;
  src: string;   // Cloudinary video URL
  thumb: string; // Cloudinary thumbnail URL (so_2 = frame at 2s)
  año: number;
  destacado?: boolean;
}

const CDN = 'https://res.cloudinary.com/dav1lmcsh/video/upload';
const FOLDER = 'videos_portafolio';

function cdn(filename: string) {
  const name = filename.replace(/ /g, '_');
  return {
    src: `${CDN}/${FOLDER}/${name}`,
    thumb: `${CDN}/so_2,f_jpg,q_auto/${FOLDER}/${name}.jpg`,
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
    ...cdn('Reel 2025 dynasty.MOV'),
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
    ...cdn('reelbmw.MP4'),
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
    ...cdn('ReelPorschepoblautos.mp4'),
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
    ...cdn('crypton.MP4'),
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
    ...cdn('yamaha r15.MP4'),
    año: 2023,
  },
  {
    id: 'nmax',
    titulo: 'Yamaha NMAX',
    cliente: 'Yamaha',
    categoria: 'Automotriz',
    descripcion:
      'Animación 3D para la scooter NMAX de Yamaha. Modelado, renderizado con materiales PBR y edición para campaña digital.',
    ...cdn('Nmax.MP4'),
    año: 2023,
  },
  {
    id: 'guapo-furever-main',
    titulo: 'Guapo Furever',
    cliente: 'Guapo Furever',
    categoria: 'Marca',
    descripcion:
      'Video principal de identidad de marca para Guapo Furever, marca de cuidado canino. Dirección creativa, edición y motion design.',
    ...cdn('guapo furever.MOV'),
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
    ...cdn('guapo furever 1.MOV'),
    año: 2022,
  },
  {
    id: 'guapo-furever-3',
    titulo: 'Guapo Furever — Vol. 3',
    cliente: 'Guapo Furever',
    categoria: 'Marca',
    descripcion:
      'Pieza de contenido de marca para Guapo Furever. Vol. 3 — edición y producción para redes sociales.',
    ...cdn('guapo furever 3.MOV'),
    año: 2022,
  },
  {
    id: 'guapo-furever-4',
    titulo: 'Guapo Furever — Vol. 4',
    cliente: 'Guapo Furever',
    categoria: 'Marca',
    descripcion:
      'Pieza de contenido de marca para Guapo Furever. Vol. 4 — edición y producción para redes sociales.',
    ...cdn('guapo furever 4.MOV'),
    año: 2022,
  },
  {
    id: 'frisby',
    titulo: 'Frisby',
    cliente: 'Frisby',
    categoria: 'Comercial',
    descripcion:
      'Contenido audiovisual para Frisby, cadena colombiana de pollo frito. Edición, motion y producción para campaña digital.',
    ...cdn('frisby.MP4'),
    año: 2023,
  },
  {
    id: 'williams-cancer',
    titulo: 'Williams Cancer Institute',
    cliente: 'Williams Cancer Institute',
    categoria: 'Comercial',
    descripcion:
      'Video institucional para Williams Cancer Institute. Producción audiovisual y edición para campaña de salud y comunicación corporativa.',
    ...cdn('williams cancer.MOV'),
    año: 2023,
  },
  {
    id: 'coin',
    titulo: 'Coin',
    categoria: 'Contenido',
    descripcion:
      'Animación 3D de motion design para pieza de contenido digital. Modelado y animación de producto con render fotorrealista.',
    ...cdn('coin.MP4'),
    año: 2023,
  },
];
