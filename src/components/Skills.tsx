import { motion } from 'framer-motion';

const skills = [
  'Branding',
  'Manual de Marca',
  'Identidad Visual',
  'Diseño Gráfico',
  'Edición de Video',
  'Animación 3D',
  'Dirección de Arte',
  'SolidWorks',
  'Illustrator',
  'Premiere Pro',
  'Meta Ads',
  'IA Generativa',
];

export default function Skills() {
  return (
    <section className="py-20 border-t border-border">
      <div className="container">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-label"
        >
          // Skills
        </motion.span>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap gap-2"
        >
          {skills.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 * i }}
              className="skill-chip"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
