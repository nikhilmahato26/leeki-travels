import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { business, navLinks } from '../../data/siteContent';
import useScrolled from '../../hooks/useScrolled';
import Button from '../ui/Button';
import { Phone, Menu, X, FaWhatsapp, FaGopuram } from '../ui/Icons';
import { telLink, waLink } from '../ui/links';

export default function Navbar() {
  const scrolled = useScrolled(40);
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-light shadow-glass py-2' : 'bg-transparent py-4'
      }`}
    >
      <nav className="container-x flex items-center justify-between px-5 sm:px-8 lg:px-16">
        {/* Brand */}
        <a href="#home" className="group flex items-center gap-3" aria-label={`${business.name} home`}>
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-royal-fade shadow-glow">
            <FaGopuram className="h-5 w-5 text-gold-light transition-transform duration-500 group-hover:scale-110" />
          </span>
          <span className="leading-tight">
            <span className={`block font-display text-lg tracking-widest ${scrolled ? 'text-royal-dark' : 'text-white'}`}>
              LEEKI
            </span>
            <span className={`block text-[10px] uppercase tracking-[0.35em] ${scrolled ? 'text-saffron' : 'text-gold-light'}`}>
              Call Taxi
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-saffron ${
                  scrolled ? 'text-ink/80' : 'text-white/85'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 lg:flex">
          <Button href={waLink()} target="_blank" rel="noopener noreferrer" variant="whatsapp" size="sm">
            <FaWhatsapp className="h-4 w-4" /> WhatsApp
          </Button>
          <Button href={telLink} variant="gold" size="sm">
            <Phone className="h-4 w-4" /> {business.phoneDisplay}
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className={`rounded-xl p-2 lg:hidden ${scrolled ? 'text-royal-dark' : 'text-white'}`}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden lg:hidden"
          >
            <div className="glass-light mx-4 mt-3 rounded-3xl p-6 shadow-glass">
              <ul className="space-y-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-4 py-3 font-medium text-ink/85 transition-colors hover:bg-saffron/10 hover:text-saffron"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <Button href={waLink()} target="_blank" rel="noopener noreferrer" variant="whatsapp" size="sm">
                  <FaWhatsapp className="h-4 w-4" /> WhatsApp
                </Button>
                <Button href={telLink} variant="primary" size="sm">
                  <Phone className="h-4 w-4" /> Call Now
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
