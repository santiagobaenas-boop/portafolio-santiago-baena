import { useState } from 'react';
import { motion } from 'framer-motion';
import { videos, type Video, type VideoCategory } from '../data/videos';
import VideoModal from './VideoModal';

const categories: Array<'Todos' | VideoCategory> = [
  'Todos',
  'Reels',
  'Automotriz',
  'Marca',
  'Comercial',
  'Contenido',
];

function VideoCard({
  video,
  onClick,
}: {
  video: Video;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`group relative text-left overflow-hidden bg-surface border transition-all duration-300 hover:border-accent hover:scale-[1.02] ${
        video.destacado ? 'border-l-[1.5px] border-l-accent border-border' : 'border-border'
      }`}
      aria-label={`Ver video ${video.titulo}`}
    >
      {/* 16:9 thumbnail area */}
      <div className="relative aspect-video bg-surface2 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={video.thumb}
          alt={video.titulo}
          loading="lazy"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent" />

        {/* Play icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full border border-text/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:border-accent">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="text-text ml-1"
            >
              <path d="M3 2l10 6-10 6V2z" />
            </svg>
          </div>
        </div>

        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className="font-mono text-[0.58rem] tracking-widest uppercase text-grey bg-bg/70 px-2 py-1">
            {video.categoria}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <span className="font-mono text-[0.6rem] tracking-widest uppercase text-slash block mb-1">
          {video.cliente ? `${video.cliente} · ` : ''}{video.año}
        </span>
        <h3 className="font-syne font-semibold text-text text-sm group-hover:text-accent transition-colors duration-300">
          {video.titulo}
        </h3>
      </div>
    </button>
  );
}

export default function EdicionVideo() {
  const [active, setActive] = useState<'Todos' | VideoCategory>('Todos');
  const [selected, setSelected] = useState<Video | null>(null);

  const filtered =
    active === 'Todos' ? videos : videos.filter(v => v.categoria === active);

  return (
    <section id="video" className="py-32 border-t border-border">
      <div className="container">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="section-label"
        >
          // Edición de video
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="font-syne font-bold text-text mb-10"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
        >
          Animación &<br />
          <span className="text-grey">Video</span>
        </motion.h2>

        {/* Filter bar */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`filter-btn ${active === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {filtered.map((v, i) => (
            <motion.div
              key={v.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
            >
              <VideoCard video={v} onClick={() => setSelected(v)} />
            </motion.div>
          ))}
        </div>
      </div>

      <VideoModal video={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
