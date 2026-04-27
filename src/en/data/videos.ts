export type VideoCategory = 'Reels' | 'Automotive' | 'Brand' | 'Commercial' | 'Content';

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
    thumb: `${CDN}/so_2/${FOLDER}/${name}.jpg`,
  };
}

export const videos: Video[] = [
  {
    id: 'reel-2025',
    titulo: 'Reel Dynasty 2025',
    cliente: 'Dynasty Studio',
    categoria: 'Reels',
    descripcion:
      'Compilation of the best 3D animation, VFX, and editing projects from Dynasty Studio during 2025. Creative direction and editing.',
    ...cdn('Reel 2025 dynasty.MOV'),
    año: 2025,
    destacado: true,
  },
  {
    id: 'reel-bmw',
    titulo: 'Reel BMW',
    cliente: 'BMW',
    categoria: 'Automotive',
    descripcion:
      '3D animation and automotive reel for BMW. Modeling, cinematic lighting, and editing for product campaign.',
    ...cdn('reelbmw.MP4'),
    año: 2024,
    destacado: true,
  },
  {
    id: 'reel-porsche-poblautos',
    titulo: 'Porsche — Poblautos',
    cliente: 'Poblautos',
    categoria: 'Automotive',
    descripcion:
      '3D animation reel for Porsche at Poblautos dealership. Vehicle visualization and editing for point of sale.',
    ...cdn('ReelPorschepoblautos.mp4'),
    año: 2024,
    destacado: true,
  },
  {
    id: 'crypton',
    titulo: 'Yamaha Crypton FINN',
    cliente: 'Yamaha',
    categoria: 'Automotive',
    descripcion:
      'Commercial video with 3D animation for the Yamaha Crypton FINN. Creative direction, motion, and final editing from Dynasty Studio.',
    ...cdn('crypton.MP4'),
    año: 2023,
    destacado: true,
  },
  {
    id: 'yamaha-r15',
    titulo: 'Yamaha R15',
    cliente: 'Yamaha',
    categoria: 'Automotive',
    descripcion:
      'Photorealistic 3D animation for the Yamaha R15. High-fidelity modeling, studio lighting, and product editing.',
    ...cdn('yamaha r15.MP4'),
    año: 2023,
  },
  {
    id: 'nmax',
    titulo: 'Yamaha NMAX',
    cliente: 'Yamaha',
    categoria: 'Automotive',
    descripcion:
      '3D animation for the Yamaha NMAX scooter. Modeling, rendering with PBR materials, and editing for digital campaign.',
    ...cdn('Nmax.MP4'),
    año: 2023,
  },
  {
    id: 'guapo-furever-main',
    titulo: 'Guapo Furever',
    cliente: 'Guapo Furever',
    categoria: 'Brand',
    descripcion:
      'Main brand identity video for Guapo Furever, a canine care brand. Creative direction, editing, and motion design.',
    ...cdn('guapo furever.MOV'),
    año: 2022,
    destacado: true,
  },
  {
    id: 'guapo-furever-1',
    titulo: 'Guapo Furever — Vol. 1',
    cliente: 'Guapo Furever',
    categoria: 'Brand',
    descripcion:
      'Brand content piece for Guapo Furever. Vol. 1 — editing and production for social media.',
    ...cdn('guapo furever 1.MOV'),
    año: 2022,
  },
  {
    id: 'guapo-furever-3',
    titulo: 'Guapo Furever — Vol. 3',
    cliente: 'Guapo Furever',
    categoria: 'Brand',
    descripcion:
      'Brand content piece for Guapo Furever. Vol. 3 — editing and production for social media.',
    ...cdn('guapo furever 3.MOV'),
    año: 2022,
  },
  {
    id: 'guapo-furever-4',
    titulo: 'Guapo Furever — Vol. 4',
    cliente: 'Guapo Furever',
    categoria: 'Brand',
    descripcion:
      'Brand content piece for Guapo Furever. Vol. 4 — editing and production for social media.',
    ...cdn('guapo furever 4.MOV'),
    año: 2022,
  },
  {
    id: 'frisby',
    titulo: 'Frisby',
    cliente: 'Frisby',
    categoria: 'Commercial',
    descripcion:
      'Audiovisual content for Frisby, a Colombian fried chicken chain. Editing, motion, and production for digital campaign.',
    ...cdn('frisby.MP4'),
    año: 2023,
  },
  {
    id: 'williams-cancer',
    titulo: 'Williams Cancer Institute',
    cliente: 'Williams Cancer Institute',
    categoria: 'Commercial',
    descripcion:
      'Institutional video for Williams Cancer Institute. Audiovisual production and editing for health and corporate communication campaign.',
    ...cdn('williams cancer.MOV'),
    año: 2023,
  },
  {
    id: 'coin',
    titulo: 'Coin',
    categoria: 'Content',
    descripcion:
      '3D motion design animation for a digital content piece. Product modeling and animation with photorealistic render.',
    ...cdn('coin.MP4'),
    año: 2023,
  },
];
