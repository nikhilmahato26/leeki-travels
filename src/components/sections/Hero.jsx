import { motion } from 'framer-motion';
import { business, heroBadges } from '../../data/siteContent';
import Button from '../ui/Button';
import { Phone, Calendar, CheckCircle2, FaWhatsapp, ChevronRight } from '../ui/Icons';
import { telLink, waLink } from '../ui/links';

// Layered SVG temple-sunrise scene — renders instantly, no image dependency.
function SunriseScene() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-sunrise" />
      {/* Sun */}

      {/* bottom fade into page */}
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-sacred to-transparent" />
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center pt-24 pb-20">
      <SunriseScene />

      <div className="container-x relative z-10 px-5 text-center sm:px-8">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="glass inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold-light"
        >
          ॐ &nbsp;Pilgrimage · Darshan · Devotion
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mx-auto mt-6 max-w-4xl text-4xl leading-tight text-white sm:text-6xl lg:text-7xl"
        >
          Your Spiritual Journey{' '}
          <span className="text-gradient-gold animate-shimmer">Starts Here</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-4 font-display text-xl tracking-[0.4em] text-gold-light sm:text-2xl"
        >
          {business.name}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mx-auto mt-5 max-w-xl text-base text-white/85 sm:text-lg"
        >
          {business.description}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          <Button href="#contact" variant="gold" size="lg">
            <Calendar className="h-5 w-5" /> Book Your Seat <ChevronRight className="h-4 w-4" />
          </Button>
          <Button href={waLink()} target="_blank" rel="noopener noreferrer" variant="whatsapp" size="lg">
            <FaWhatsapp className="h-5 w-5" /> WhatsApp
          </Button>
          <Button href={telLink} variant="outline" size="lg">
            <Phone className="h-5 w-5" /> Call Now
          </Button>
        </motion.div>

        {/* Floating badges */}
        <div className="mx-auto mt-12 flex max-w-3xl flex-wrap items-center justify-center gap-3 sm:gap-4">
          {heroBadges.map((badge, i) => (
            <motion.span
              key={badge}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 + i * 0.12 }}
              className="glass animate-float rounded-2xl px-5 py-3 text-sm font-medium text-white"
              style={{ animationDelay: `${i * 0.8}s` }}
            >
              <CheckCircle2 className="mr-2 inline h-4 w-4 text-gold-light" />
              {badge}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
