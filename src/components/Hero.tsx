import { motion } from 'framer-motion';

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];
const dur = 0.7;

// CSS mask: fade izquierdo + fade inferior usando intersección de gradientes
const maskStyle: React.CSSProperties = {
  WebkitMaskImage: [
    'linear-gradient(to right,  transparent 0%, black 22%)',
    'linear-gradient(to top,    transparent 0%, black 28%)',
  ].join(', '),
  WebkitMaskComposite: 'source-in',
  maskImage: [
    'linear-gradient(to right,  transparent 0%, black 22%)',
    'linear-gradient(to top,    transparent 0%, black 28%)',
  ].join(', '),
  maskComposite: 'intersect',
  objectPosition: 'center 15%',
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen md:h-screen flex flex-col md:flex-row overflow-hidden bg-bg"
    >
      {/* ── Columna izquierda: texto (55%) ──────────────────────── */}
      <div className="order-2 md:order-1 md:w-[55%] flex flex-col justify-center
                      px-6 sm:px-10 md:px-16 lg:px-24
                      pt-6 pb-20 md:py-0 relative z-10">

        {/* // PORTAFOLIO — fadeIn + slideDown */}
        <motion.span
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: dur, delay: 0, ease }}
          className="section-label"
        >
          // Portafolio
        </motion.span>

        {/* SANTIAGO — slideRight */}
        <motion.h1
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: dur, delay: 0.2, ease }}
          className="font-syne font-extrabold text-text leading-none uppercase"
          style={{ fontSize: 'clamp(3rem, 6vw, 6rem)' }}
        >
          SANTIAGO
        </motion.h1>

        {/* BAENA — slideRight más lento */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: dur + 0.1, delay: 0.4, ease }}
          className="font-syne font-extrabold leading-none uppercase text-grey mb-8"
          style={{ fontSize: 'clamp(3rem, 6vw, 6rem)' }}
        >
          BAENA
        </motion.div>

        {/* Ingeniero… — fadeUp */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: dur, delay: 0.6, ease }}
          className="font-mono text-grey text-sm tracking-wider mb-2 leading-relaxed"
        >
          Ingeniero en Diseño de Producto
        </motion.p>

        {/* Co-Director… — fadeUp */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: dur, delay: 0.7, ease }}
          className="font-mono text-slash text-xs tracking-widest mb-10"
        >
          Co-Director Dynasty Studio &nbsp;·&nbsp; Bash Design &nbsp;·&nbsp; Medellín
        </motion.p>

        {/* Botones — fadeUp */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: dur, delay: 0.8, ease }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#proyectos"
            className="font-mono text-[0.7rem] tracking-widest uppercase px-6 py-3 bg-text text-bg hover:bg-accent transition-all duration-300"
          >
            Ver proyectos
          </a>
          <a
            href="#contacto"
            className="font-mono text-[0.7rem] tracking-widest uppercase px-6 py-3 border border-border text-grey hover:border-accent hover:text-text transition-all duration-300"
          >
            Contacto
          </a>
        </motion.div>
      </div>

      {/* ── Columna derecha: foto (45%, altura completa) ─────────── */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: dur, delay: 0.3, ease }}
        className="order-1 md:order-2 md:w-[45%] h-[350px] md:h-full relative overflow-hidden shrink-0"
      >
        {/* Foto con mask-image para integración suave */}
        <img
          src="/assets/foto santiago/WhatsApp Image 2026-04-24 at 3.57.02 PM.jpeg"
          alt="Santiago Baena"
          className="w-full h-full object-cover"
          style={maskStyle}
        />

        {/* Gradiente lateral izquierdo — cubre zona donde el texto puede superponerse */}
        <div
          className="absolute inset-0 hidden md:block pointer-events-none"
          style={{
            background: 'linear-gradient(to right, #0d0d0d 0%, #0d0d0d 15%, transparent 60%)',
            zIndex: 1,
          }}
        />

        {/* Refuerzo: gradiente inferior */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to top, #0d0d0d 0%, rgba(13,13,13,0.4) 18%, transparent 38%)',
          }}
        />
      </motion.div>

      {/* ── Scroll indicator (solo desktop) ─────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="hidden md:flex absolute bottom-8 left-[27.5%] -translate-x-1/2 z-10 flex-col items-center gap-2"
      >
        <span className="font-mono text-slash text-[0.6rem] tracking-widest uppercase">scroll</span>
        <div className="w-px h-12 overflow-hidden">
          <motion.div
            className="w-full bg-gradient-to-b from-accent to-transparent"
            animate={{ y: ['-100%', '200%'] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
            style={{ height: '100%' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
