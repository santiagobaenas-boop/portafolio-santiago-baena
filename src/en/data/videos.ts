export type VideoCategory = 'Reels' | 'Automotive' | 'Brand' | 'Commercial' | 'Content';

export interface Video {
  id: string;
  titulo: string;
  cliente?: string;
  categoria: VideoCategory;
  descripcion: string;
  src: string;
  año: number;
  destacado?: boolean;
}

export const videos: Video[] = [
  {
    id: 'reel-2025',
    titulo: 'Reel Dynasty 2025',
    cliente: 'Dynasty Studio',
    categoria: 'Reels',
    descripcion:
      'Compilation of the best 3D animation, VFX, and editing projects from Dynasty Studio during 2025. Creative direction and editing.',
    src: 'Reel 2025 dynasty.MOV',
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
    src: 'reelbmw.MP4',
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
    src: 'ReelPorschepoblautos.mp4',
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
    src: 'crypton.MP4',
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
    src: 'yamaha r15.MP4',
    año: 2023,
  },
  {
    id: 'nmax',
    titulo: 'Yamaha NMAX',
    cliente: 'Yamaha',
    categoria: 'Automotive',
    descripcion:
      '3D animation for the Yamaha NMAX scooter. Modeling, rendering with PBR materials, and editing for digital campaign.',
    src: 'Nmax.MP4',
    año: 2023,
  },
  {
    id: 'guapo-furever-main',
    titulo: 'Guapo Furever',
    cliente: 'Guapo Furever',
    categoria: 'Brand',
    descripcion:
      'Main brand identity video for Guapo Furever, a canine care brand. Creative direction, editing, and motion design.',
    src: 'guapo furever.MOV',
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
    src: 'guapo furever 1.MOV',
    año: 2022,
  },
  {
    id: 'guapo-furever-3',
    titulo: 'Guapo Furever — Vol. 3',
    cliente: 'Guapo Furever',
    categoria: 'Brand',
    descripcion:
      'Brand content piece for Guapo Furever. Vol. 3 — editing and production for social media.',
    src: 'guapo furever 3.MOV',
    año: 2022,
  },
  {
    id: 'guapo-furever-4',
    titulo: 'Guapo Furever — Vol. 4',
    cliente: 'Guapo Furever',
    categoria: 'Brand',
    descripcion:
      'Brand content piece for Guapo Furever. Vol. 4 — editing and production for social media.',
    src: 'guapo furever 4.MOV',
    año: 2022,
  },
  {
    id: 'frisby',
    titulo: 'Frisby',
    cliente: 'Frisby',
    categoria: 'Commercial',
    descripcion:
      'Audiovisual content for Frisby, a Colombian fried chicken chain. Editing, motion, and production for digital campaign.',
    src: 'frisby.MP4',
    año: 2023,
  },
  {
    id: 'williams-cancer',
    titulo: 'Williams Cancer Institute',
    cliente: 'Williams Cancer Institute',
    categoria: 'Commercial',
    descripcion:
      'Institutional video for Williams Cancer Institute. Audiovisual production and editing for health and corporate communication campaign.',
    src: 'williams cancer.MOV',
    año: 2023,
  },
  {
    id: 'coin',
    titulo: 'Coin',
    categoria: 'Content',
    descripcion:
      '3D motion design animation for a digital content piece. Product modeling and animation with photorealistic render.',
    src: 'coin.MP4',
    año: 2023,
  },
];
