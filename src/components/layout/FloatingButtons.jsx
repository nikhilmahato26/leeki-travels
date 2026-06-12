import { motion } from 'framer-motion';
import { Phone, FaWhatsapp, Calendar } from '../ui/Icons';
import { telLink, waLink } from '../ui/links';

const items = [
  { label: 'Book Tour', href: '#contact', Icon: Calendar, cls: 'bg-saffron-fade text-white shadow-glow-saffron' },
  { label: 'WhatsApp', href: null, Icon: FaWhatsapp, cls: 'bg-[#25D366] text-white shadow-lg shadow-green-900/30', wa: true },
  { label: 'Call Now', href: telLink, Icon: Phone, cls: 'bg-royal-fade text-gold-light shadow-lift' },
];

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col items-end gap-3 sm:bottom-8 sm:right-6">
      {items.map(({ label, href, Icon, cls, wa }, i) => (
        <motion.a
          key={label}
          href={wa ? waLink() : href}
          target={wa ? '_blank' : undefined}
          rel={wa ? 'noopener noreferrer' : undefined}
          aria-label={label}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 + i * 0.15, type: 'spring', stiffness: 260, damping: 20 }}
          whileHover={{ scale: 1.08, x: -4 }}
          whileTap={{ scale: 0.95 }}
          className={`group relative flex h-13 items-center gap-2 rounded-full px-4 py-3.5 ${cls}`}
        >
          {wa && (
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring" aria-hidden="true" />
          )}
          <Icon className="relative h-5 w-5" />
          <span className="relative hidden text-sm font-semibold sm:inline">{label}</span>
        </motion.a>
      ))}
    </div>
  );
}
