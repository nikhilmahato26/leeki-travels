import { motion } from 'framer-motion';

// Consistent section header: eyebrow + display title + optional lead text.
export default function SectionHeading({ eyebrow, title, lead, light = false, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`mx-auto max-w-2xl text-center ${className}`}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className={`mt-4 text-3xl sm:text-4xl lg:text-5xl ${light ? 'text-white' : 'text-royal-dark'}`}>
        {title}
      </h2>
      {lead && (
        <p className={`mt-4 text-base sm:text-lg ${light ? 'text-white/75' : 'text-ink/70'}`}>
          {lead}
        </p>
      )}
    </motion.div>
  );
}
