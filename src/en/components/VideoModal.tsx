import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Video } from '../data/videos';

interface Props {
  video: Video | null;
  onClose: () => void;
}

export default function VideoModal({ video, onClose }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  useEffect(() => {
    if (video) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      videoRef.current?.pause();
    }
    return () => { document.body.style.overflow = ''; };
  }, [video]);

  return (
    <AnimatePresence>
      {video && (
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        >
          <motion.div
            className="relative w-[95vw] max-w-5xl bg-surface border border-border"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Video */}
            <div className="relative aspect-video bg-black">
              <video
                ref={videoRef}
                className="w-full h-full object-contain"
                controls
                playsInline
                preload="metadata"
                src={video.src}
              >
                Your browser does not support HTML5 video.
              </video>
            </div>

            {/* Info */}
            <div className="flex items-start justify-between p-5">
              <div>
                <span className="font-mono text-[0.62rem] tracking-widest uppercase text-slash block mb-1">
                  {video.categoria}
                  {video.cliente && ` · ${video.cliente}`}
                  {` · ${video.año}`}
                </span>
                <h3 className="font-syne font-bold text-text text-lg">{video.titulo}</h3>
                <p className="font-mono text-grey text-xs mt-1 max-w-xl leading-relaxed">
                  {video.descripcion}
                </p>
              </div>
              <button
                onClick={onClose}
                className="font-mono text-grey hover:text-text transition-colors text-xl leading-none ml-6 shrink-0"
                aria-label="Close"
              >
                ×
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
