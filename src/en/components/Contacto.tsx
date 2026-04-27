import { motion } from 'framer-motion';

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

export default function Contacto() {
  return (
    <section id="contact" className="py-32 border-t border-border">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div>
            <motion.span {...reveal} className="section-label">// Contact</motion.span>
            <motion.h2
              {...reveal}
              transition={{ ...reveal.transition, delay: 0.1 }}
              className="font-syne font-bold text-text leading-tight mb-8"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              Let's talk<span className="text-slash">.</span>
            </motion.h2>
            <motion.p
              {...reveal}
              transition={{ ...reveal.transition, delay: 0.15 }}
              className="font-mono text-grey text-sm leading-relaxed max-w-md"
            >
              Open to freelance projects in product design, branding, visual identity, and creative consulting. Also available for collaborations with Dynasty Studio.
            </motion.p>
          </div>

          {/* Right — contact links */}
          <motion.div
            {...reveal}
            transition={{ ...reveal.transition, delay: 0.2 }}
            className="space-y-3"
          >
            <a
              href="mailto:santiagobaenas@gmail.com"
              className="group flex items-start justify-between p-5 bg-surface border border-border hover:border-accent transition-all duration-300"
            >
              <div>
                <span className="font-mono text-[0.62rem] tracking-widest uppercase text-slash block mb-1">Email</span>
                <span className="font-syne font-semibold text-text group-hover:text-accent transition-colors duration-300">
                  santiagobaenas@gmail.com
                </span>
              </div>
              <span className="font-mono text-slash group-hover:text-accent transition-colors duration-300 mt-1">→</span>
            </a>

            <a
              href="https://www.instagram.com/santiagobaena12/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start justify-between p-5 bg-surface border border-border hover:border-accent transition-all duration-300"
            >
              <div>
                <span className="font-mono text-[0.62rem] tracking-widest uppercase text-slash block mb-1">Instagram</span>
                <span className="font-syne font-semibold text-text group-hover:text-accent transition-colors duration-300">
                  @santiagobaena12
                </span>
              </div>
              <span className="font-mono text-slash group-hover:text-accent transition-colors duration-300 mt-1">→</span>
            </a>

            <div className="flex items-start p-5 bg-surface border border-border">
              <div>
                <span className="font-mono text-[0.62rem] tracking-widest uppercase text-slash block mb-1">Location</span>
                <span className="font-syne font-semibold text-grey">Medellín, Colombia</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          {...reveal}
          transition={{ ...reveal.transition, delay: 0.3 }}
          className="mt-24 pt-8 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <span className="font-syne font-bold text-text tracking-widest text-sm uppercase">
            SB<span className="text-slash">.</span>
          </span>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-right">
            <span className="font-mono text-slash text-xs tracking-widest">
              © {new Date().getFullYear()} Santiago Baena Santamaría
            </span>
            <span className="font-mono text-slash text-xs tracking-widest">
              Designed and built with intention
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
