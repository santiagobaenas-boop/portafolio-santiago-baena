import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#video', label: 'Video' },
  { href: '#dynasty', label: 'Dynasty' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[900] transition-all duration-500 ${
          scrolled ? 'py-3 bg-bg/90 border-b border-border backdrop-blur-md' : 'py-5'
        }`}
      >
        <div className="container flex items-center justify-between">
          <a
            href="#hero"
            className="font-syne font-bold text-text tracking-widest text-sm uppercase"
            aria-label="Santiago Baena — inicio"
          >
            SB<span className="text-slash">.</span>
          </a>

          <nav className="hidden md:flex items-center gap-8" aria-label="Navegación principal">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                className="font-mono text-[0.7rem] tracking-widest uppercase text-grey hover:text-text transition-colors duration-300"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="/en"
              className="font-mono text-[0.62rem] tracking-widest uppercase text-slash hover:text-text transition-colors duration-300"
            >
              EN
            </a>
            <a
              href="#contacto"
              className="font-mono text-[0.68rem] tracking-widest uppercase text-grey border border-border px-4 py-2 hover:border-accent hover:text-text transition-all duration-300"
            >
              Hablemos
            </a>
          </div>

          <button
            onClick={() => setOpen(o => !o)}
            className="md:hidden flex flex-col gap-[5px] p-1"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
          >
            <span className={`block w-5 h-px bg-text transition-transform duration-300 ${open ? 'translate-y-[6px] rotate-45' : ''}`} />
            <span className={`block w-5 h-px bg-text transition-opacity duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-px bg-text transition-transform duration-300 ${open ? '-translate-y-[6px] -rotate-45' : ''}`} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[850] bg-bg/98 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                className="font-syne font-bold text-4xl text-text uppercase tracking-wide hover:text-grey transition-colors"
              >
                {l.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
