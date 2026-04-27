import { motion } from 'framer-motion';

const stats = [
  { num: '14', label: 'Projects' },
  { num: '13', label: 'Videos' },
  { num: '3D', label: 'Animation' },
  { num: 'EAFIT', label: 'University' },
];

const pillars = [
  { titulo: 'Product Design', desc: 'Full process from research to final deliverables with industrial vision.' },
  { titulo: 'Branding & Graphic', desc: 'Visual identities with aesthetic judgment and communication strategy.' },
  { titulo: 'Creative Direction', desc: 'Leadership of 3D audiovisual projects and brand campaigns for major clients.' },
];

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

export default function SobreMi() {
  return (
    <section id="about" className="py-32 border-t border-border">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — text */}
          <div>
            <motion.span {...reveal} className="section-label">// About me</motion.span>
            <motion.h2
              {...reveal}
              transition={{ ...reveal.transition, delay: 0.1 }}
              className="font-syne font-bold text-text leading-tight mb-8"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Design that connects<br />
              <span className="text-grey">form and function.</span>
            </motion.h2>

            <motion.p
              {...reveal}
              transition={{ ...reveal.transition, delay: 0.15 }}
              className="font-mono text-grey text-sm leading-relaxed mb-6"
            >
              I am a Product Design Engineer from Universidad EAFIT (2024) and co-founder of Dynasty Studio, a 3D animation studio based in Medellín. I lead the commercial, creative, and administrative areas of the studio.
            </motion.p>
            <motion.p
              {...reveal}
              transition={{ ...reveal.transition, delay: 0.2 }}
              className="font-mono text-grey text-sm leading-relaxed mb-12"
            >
              My practice combines the rigor of industrial design with the visual sensibility of branding. I worked as a freelancer from 2020–2022 for entrepreneurs and SMEs, and today I produce content for brands such as Postobón, Yamaha, and Bajaj from Dynasty Studio.
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
