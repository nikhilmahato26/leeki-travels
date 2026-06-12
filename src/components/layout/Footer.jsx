import { business, navLinks, services } from '../../data/siteContent';
import { Phone, MapPin, FaWhatsapp, FaGopuram, GiLotus } from '../ui/Icons';
import { telLink, waLink } from '../ui/links';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-royal-dark text-white/80">
      {/* gold rim */}
      <div className="h-1 w-full bg-gold-sheen" />
      <div className="container-x grid gap-12 px-5 py-16 sm:px-8 md:grid-cols-3 lg:px-16">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
              <FaGopuram className="h-5 w-5 text-gold-light" />
            </span>
            <div className="leading-tight">
              <p className="font-display text-lg tracking-widest text-white">LIKES</p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-gold-light">Tours & Travels</p>
            </div>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed">
            {business.description} Serving devotees across {business.city} and {business.region}.
          </p>
          <p className="mt-5 inline-flex items-center gap-2 text-sm text-gold-light">
            <GiLotus className="h-4 w-4" /> Om Namo Venkatesaya
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-display text-sm uppercase tracking-[0.25em] text-gold">Our Services</h3>
          <ul className="mt-5 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>

        {/* Quick links + contact */}
        <div>
          <h3 className="font-display text-sm uppercase tracking-[0.25em] text-gold">Quick Links</h3>
          <ul className="mt-5 space-y-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-gold-light">{l.label}</a>
              </li>
            ))}
          </ul>
          <div className="mt-6 space-y-3 text-sm">
            <a href={telLink} className="flex items-center gap-2 transition-colors hover:text-gold-light">
              <Phone className="h-4 w-4 text-saffron-light" /> {business.phoneDisplay}
            </a>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors hover:text-gold-light">
              <FaWhatsapp className="h-4 w-4 text-[#25D366]" /> WhatsApp Booking
            </a>
            <p className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-saffron-light" /> {business.city}, {business.region}
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        © {year} {business.name}. All rights reserved.
      </div>
    </footer>
  );
}
