import { motion } from 'framer-motion';

const clientes = ['Postobón', 'Yamaha', 'Bajaj', 'Adidas', 'Coca-Cola', 'Williams Cancer Institute'];

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

export default function DynastyStudio() {
  return (
    <section id="dynasty" className="py-32 border-t border-border">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <motion.span {...reveal} className="section-label mb-0">
                // Dynasty Studio
              </motion.span>
              <motion.span
                {...reveal}
                transition={{ ...reveal.transition, delay: 0.1 }}
                className="font-mono text-[0.6rem] tracking-widest uppercase text-text bg-accent/10 border border-accent/30 px-2 py-1"
              >
                Empresa Activa
              </motion.span>
            </div>

            <motion.h2
              {...reveal}
              transition={{ ...reveal.transition, delay: 0.1 }}
              className="font-syne font-bold text-text leading-tight mb-8"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Creamos Experiencias.<br />
              <span className="text-grey">Creamos Futuro.</span>
            </motion.h2>

            <motion.p
              {...reveal}
              transition={{ ...reveal.transition, delay: 0.15 }}
              className="font-mono text-grey text-sm leading-relaxed mb-5"
            >
              Dynasty Studio es un estudio de animación 3D y VFX con sede en Medellín, Colombia. Co-fundado en 2022, hoy somos referentes en producción de contenido visual de alta calidad para marcas nacionales e internacionales.
            </motion.p>
            <motion.p
              {...reveal}
              transition={{ ...reveal.transition, delay: 0.2 }}
              className="font-mono text-grey text-sm leading-relaxed mb-10"
            >
              Como co-director, lidero el área comercial, creativa y administrativa, coordinando proyectos de animación 3D, renders, VFX y diseño de stands para marcas de consumo masivo, automotriz y salud.
            </motion.p>

            <motion.div
              {...reveal}
              transition={{ ...reveal.transition, delay: 0.25 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="https://dynastystudio.com.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[0.68rem] tracking-widest uppercase px-5 py-2.5 border border-border text-grey hover:border-accent hover:text-text transition-all duration-300"
              >
                Ver sitio web →
              </a>
              <a
                href="https://www.instagram.com/dynasty_studio_/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[0.68rem] tracking-widest uppercase px-5 py-2.5 border border-border text-grey hover:border-accent hover:text-text transition-all duration-300"
              >
                Instagram →
              </a>
            </motion.div>
          </div>

          {/* Right — clients + services */}
          <div className="space-y-8">
            <motion.div
              {...reveal}
              transition={{ ...reveal.transition, delay: 0.2 }}
            >
              <h3 className="font-mono text-[0.65rem] tracking-widest uppercase text-slash mb-4">
                // Clientes destacados
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {clientes.map((c) => (
                  <div key={c} className="bg-surface border border-border px-4 py-3">
                    <span className="font-syne font-semibold text-grey text-sm">{c}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              {...reveal}
              transition={{ ...reveal.transition, delay: 0.28 }}
            >
              <h3 className="font-mono text-[0.65rem] tracking-widest uppercase text-slash mb-4">
                // Servicios
              </h3>
              <div className="space-y-2">
                {['Animación 3D', 'VFX & Compositing', 'Modelado & Renders', 'Stands & Experiencias'].map(s => (
                  <div key={s} className="flex items-center gap-3">
                    <span className="w-1 h-px bg-accent block shrink-0" />
                    <span className="font-mono text-grey text-xs tracking-wider">{s}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
