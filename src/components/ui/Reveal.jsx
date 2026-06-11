import { motion } from 'framer-motion';

// Scroll-reveal wrapper. Use `delay` for stagger inside grids.
export default function Reveal({ children, delay = 0, y = 32, className = '', ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
