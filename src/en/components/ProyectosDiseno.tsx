import { useState } from 'react';
import { motion } from 'framer-motion';
import { proyectos, type Proyecto, type ProjectCategory } from '../data/proyectos';
import PdfThumbnail from './PdfThumbnail';
import PdfModal from './PdfModal';

const categories: Array<'All' | ProjectCategory> = [
  'All',
  'Brand Manuals',
  'Graphic Design',
  'Product Design',
];

export default function ProyectosDiseno() {
  const [active, setActive] = useState<'All' | ProjectCategory>('All');
  const [selected, setSelected] = useState<Proyecto | null>(null);

  const filtered =
    active === 'All' ? proyectos : proyectos.filter(p => p.categoria === active);

  return (
    <section id="projects" className="py-32 border-t border-border">
      <div className="container">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="section-label"
        >
          // Design projects
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="font-syne font-bold text-text mb-10"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
        >
          Design &<br />
          <span className="text-grey">Branding</span>
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
          {filtered.map((p, i) => (
            <motion.button
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setSelected(p)}
              className={`text-left group relative overflow-hidden bg-surface border transition-all duration-300 hover:border-accent hover:scale-[1.02] ${
                p.destacado ? 'border-l-[1.5px] border-l-accent border-border' : 'border-border'
              }`}
              aria-label={`View project ${p.titulo}`}
            >
              {/* Thumbnail */}
              <div className="aspect-[4/3] overflow-hidden">
                <PdfThumbnail src={p.pdf} />
              </div>

              {/* Info */}
              <div className="p-5">
                <span className="font-mono text-[0.6rem] tracking-widest uppercase text-slash block mb-2">
                  {p.categoria} &nbsp;·&nbsp; {p.año}
                </span>
                <h3 className="font-syne font-semibold text-text text-base mb-1 group-hover:text-accent transition-colors duration-300">
                  {p.titulo}
                </h3>
                <p className="font-mono text-grey text-xs">{p.subtitulo}</p>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <span className="font-mono text-[0.65rem] tracking-widest uppercase text-text bg-bg/80 px-4 py-2">
                  View PDF
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <PdfModal proyecto={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
