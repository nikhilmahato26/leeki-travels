import { motion } from 'framer-motion';

// Glassmorphism card with hover lift. `tone` picks light or dark glass.
export default function GlassCard({ children, tone = 'light', hover = true, className = '' }) {
  return (
    <motion.div
      whileHover={hover ? { y: -8 } : undefined}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className={`rounded-3xl shadow-glass ${tone === 'dark' ? 'glass' : 'glass-light'} ${className}`}
    >
      {children}
    </motion.div>
  );
}
