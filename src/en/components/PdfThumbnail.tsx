import { useEffect, useRef, useState } from 'react';
import { pdfjsLib } from '../lib/pdf';

interface Props {
  src: string;
}

export default function PdfThumbnail({ src }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [state, setState] = useState<'loading' | 'done' | 'error'>('loading');

  useEffect(() => {
    let cancelled = false;
    setState('loading');

    const render = async () => {
      try {
        const pdf = await pdfjsLib.getDocument(`/assets/${src}`).promise;
        const page = await pdf.getPage(1);
        if (cancelled) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const viewport = page.getViewport({ scale: 1 });
        const scale = Math.min(canvas.offsetWidth / viewport.width, canvas.offsetHeight / viewport.height) || 1;
        const scaled = page.getViewport({ scale });

        canvas.width = scaled.width;
        canvas.height = scaled.height;

        await page.render({
          canvasContext: canvas.getContext('2d')!,
          viewport: scaled,
        }).promise;

        if (!cancelled) setState('done');
      } catch {
        if (!cancelled) setState('error');
      }
    };

    render();
    return () => { cancelled = true; };
  }, [src]);

  return (
    <div className="w-full h-full bg-surface2 flex items-center justify-center overflow-hidden">
      {state === 'error' && (
        <div className="flex flex-col items-center gap-3 opacity-30">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
          </svg>
          <span className="font-mono text-[0.6rem] tracking-wider uppercase text-grey">PDF</span>
        </div>
      )}
      {state === 'loading' && (
        <div className="w-8 h-8 border border-border border-t-accent rounded-full animate-spin" />
      )}
      <canvas
        ref={canvasRef}
        className={`w-full h-full object-contain transition-opacity duration-500 ${state === 'done' ? 'opacity-100' : 'opacity-0 absolute'}`}
      />
    </div>
  );
}
