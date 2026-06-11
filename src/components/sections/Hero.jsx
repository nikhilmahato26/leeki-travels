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
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        className="absolute left-1/2 top-[38%] h-44 w-44 -translate-x-1/2 rounded-full bg-gradient-to-b from-gold-light to-saffron-light blur-[2px] sm:h-64 sm:w-64"
        style={{ boxShadow: '0 0 120px 50px rgba(232,194,90,0.45)' }}
      />
      {/* Mountains + temple silhouette */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 420"
        preserveAspectRatio="xMidYMax slice"
        fill="none"
      >
        {/* far mountains */}
        <path d="M0 290 L180 180 L340 270 L520 150 L700 260 L900 170 L1100 270 L1280 190 L1440 280 L1440 420 L0 420 Z" fill="#36134F" opacity="0.55" />
        {/* near hills */}
        <path d="M0 340 L240 240 L480 330 L760 230 L1040 330 L1260 260 L1440 330 L1440 420 L0 420 Z" fill="#2B0F3D" opacity="0.85" />
        {/* temple gopuram silhouette */}
        <g fill="#1E0A2E">
          <rect x="660" y="250" width="120" height="170" />
          <path d="M652 250 L720 130 L788 250 Z" />
          <path d="M700 130 L720 96 L740 130 Z" />
          <rect x="716" y="86" width="8" height="14" />
          <circle cx="720" cy="82" r="5" fill="#D4A017" />
          {/* steps */}
          <rect x="630" y="400" width="180" height="20" />
          <rect x="645" y="385" width="150" height="15" />
          {/* side shrines */}
          <rect x="560" y="320" width="60" height="100" />
          <path d="M555 320 L590 270 L625 320 Z" />
          <rect x="820" y="320" width="60" height="100" />
          <path d="M815 320 L850 270 L885 320 Z" />
        </g>
        {/* temple flame dots */}
        <circle cx="590" cy="300" r="3" fill="#E8C25A" opacity="0.9" />
        <circle cx="850" cy="300" r="3" fill="#E8C25A" opacity="0.9" />
      </svg>
      {/* Floating diya glows */}
      {[
        'left-[12%] top-[30%]',
        'right-[14%] top-[24%]',
        'left-[24%] top-[58%]',
        'right-[26%] top-[52%]',
      ].map((pos, i) => (
        <motion.span
          key={pos}
          className={`absolute ${pos} h-2.5 w-2.5 rounded-full bg-gold-light`}
          style={{ boxShadow: '0 0 18px 6px rgba(232,194,90,0.55)' }}
          animate={{ y: [0, -16, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
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
