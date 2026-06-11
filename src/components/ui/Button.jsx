import { motion } from 'framer-motion';

const variants = {
  primary:
    'bg-saffron-fade text-white shadow-glow-saffron hover:shadow-lift',
  gold:
    'bg-gold-sheen bg-[length:200%_auto] text-royal-dark font-semibold hover:bg-right shadow-glow',
  whatsapp:
    'bg-[#25D366] text-white hover:bg-[#1da851] shadow-lg shadow-green-900/20',
  outline:
    'border border-white/40 text-white hover:bg-white/10 backdrop-blur-sm',
  ghost:
    'border border-saffron/30 text-saffron hover:bg-saffron/10',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

export default function Button({
  as = 'a',
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) {
  const Cmp = motion[as] || motion.a;
  return (
    <Cmp
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 22 }}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-body font-medium tracking-wide transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-sacred ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </Cmp>
  );
}
