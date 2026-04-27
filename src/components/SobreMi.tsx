import { motion } from 'framer-motion';

const stats = [
  { num: '14', label: 'Proyectos' },
  { num: '13', label: 'Videos' },
  { num: '3D', label: 'Animación' },
  { num: 'EAFIT', label: 'Universidad' },
];

const pillars = [
  { titulo: 'Diseño de Producto', desc: 'Proceso completo desde investigación hasta entregables finales con visión industrial.' },
  { titulo: 'Branding & Gráfico', desc: 'Identidades visuales con criterio estético y estrategia de comunicación.' },
  { titulo: 'Dirección Creativa', desc: 'Liderazgo de proyectos audiovisuales 3D y campañas de marca para grandes clientes.' },
];

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

export default function SobreMi() {
  return (
    <section id="sobre-mi" className="py-32 border-t border-border">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — text */}
          <div>
            <motion.span {...reveal} className="section-label">// Sobre mí</motion.span>
            <motion.h2
              {...reveal}
              transition={{ ...reveal.transition, delay: 0.1 }}
              className="font-syne font-bold text-text leading-tight mb-8"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Diseño que conecta<br />
              <span className="text-grey">forma y función.</span>
            </motion.h2>

            <motion.p
              {...reveal}
              transition={{ ...reveal.transition, delay: 0.15 }}
              className="font-mono text-grey text-sm leading-relaxed mb-6"
            >
              Soy Ingeniero en Diseño de Producto de la Universidad EAFIT (2024) y co-fundador de Dynasty Studio, estudio de animación 3D con sede en Medellín. Dirijo el área comercial, creativa y administrativa del estudio.
            </motion.p>
            <motion.p
              {...reveal}
              transition={{ ...reveal.transition, delay: 0.2 }}
              className="font-mono text-grey text-sm leading-relaxed mb-12"
            >
              Mi práctica combina el rigor del diseño industrial con la sensibilidad visual del branding. Trabajé como freelance 2020–2022 para emprendedores y PYMES, y hoy produzco contenido para marcas como Postobón, Yamaha y Bajaj desde Dynasty Studio.
            </motion.p>

            <div className="space-y-6">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.titulo}
                  {...reveal}
                  transition={{ ...reveal.transition, delay: 0.25 + i * 0.08 }}
                  className="accent-line"
                >
                  <h3 className="font-syne font-semibold text-text text-sm mb-1">{p.titulo}</h3>
                  <p className="font-mono text-slash text-xs leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — stats */}
          <motion.div
            {...reveal}
            transition={{ ...reveal.transition, delay: 0.2 }}
            className="grid grid-cols-2 gap-3"
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-surface border border-border p-8 flex flex-col justify-between hover:border-accent transition-colors duration-300"
              >
                <span
                  className="font-syne font-extrabold text-text leading-none"
                  style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
                >
                  {s.num}
                </span>
                <span className="font-mono text-slash text-xs tracking-widest uppercase mt-4 block">
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
