import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { pdfjsLib } from '../lib/pdf';
import type { Proyecto } from '../data/proyectos';

interface Props {
  proyecto: Proyecto | null;
  onClose: () => void;
}

export default function PdfModal({ proyecto, onClose }: Props) {
  const [pages, setPages] = useState<HTMLCanvasElement[]>([]);
  const [loading, setLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!proyecto) return;
    let cancelled = false;
    setPages([]);
    setLoading(true);

    const loadPdf = async () => {
      try {
        const pdf = await pdfjsLib.getDocument(`/assets/${proyecto.pdf}`).promise;
        const canvases: HTMLCanvasElement[] = [];

        for (let i = 1; i <= pdf.numPages; i++) {
          if (cancelled) break;
          const page = await pdf.getPage(i);
          const viewport = page.getViewport({ scale: 1.5 });
          const canvas = document.createElement('canvas');
          canvas.width = viewport.width;
          canvas.height = viewport.height;
          await page.render({ canvasContext: canvas.getContext('2d')!, viewport }).promise;
          if (!cancelled) canvases.push(canvas);
        }

        if (!cancelled) setPages(canvases);
      } catch {
        // PDF not available — modal shows error state
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    loadPdf();
    return () => { cancelled = true; };
  }, [proyecto]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  useEffect(() => {
    if (proyecto) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [proyecto]);

  return (
    <AnimatePresence>
      {proyecto && (
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        >
          <motion.div
            className="relative w-[95vw] max-w-4xl max-h-[92vh] flex flex-col bg-surface border border-border"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Header */}
            <div className="flex items-start justify-between p-6 border-b border-border shrink-0">
              <div>
                <span className="font-mono text-[0.65rem] tracking-widest uppercase text-slash block mb-1">
                  {proyecto.categoria}
                </span>
                <h3 className="font-syne font-bold text-text text-xl">{proyecto.titulo}</h3>
                <p className="font-mono text-grey text-xs mt-1">{proyecto.subtitulo}</p>
              </div>
              <button
                onClick={onClose}
                className="font-mono text-grey hover:text-text transition-colors text-lg leading-none ml-6 mt-1"
                aria-label="Cerrar"
              >
                ×
              </button>
            </div>

            {/* Pages */}
            <div ref={containerRef} className="overflow-y-auto flex-1 p-6 space-y-4">
              {loading && (
                <div className="flex items-center justify-center py-20">
                  <div className="w-8 h-8 border border-border border-t-accent rounded-full animate-spin" />
                </div>
              )}
              {!loading && pages.length === 0 && (
                <div className="flex flex-col items-center justify-center py-20 gap-4">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-slash">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                  <p className="font-mono text-grey text-xs tracking-wider text-center">
                    PDF no disponible.<br />
                    <span className="text-slash">Agrega el archivo en /public/assets/{proyecto.pdf}</span>
                  </p>
                </div>
              )}
              {pages.map((canvas, i) => (
                <div key={i} className="border border-border overflow-hidden">
                  <img
                    src={canvas.toDataURL()}
                    alt={`Página ${i + 1}`}
                    className="w-full"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-border shrink-0">
              <p className="font-mono text-slash text-xs">{proyecto.descripcion}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
