import { routes } from '../../data/siteContent';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import TempleImage from '../ui/TempleImage';
import Button from '../ui/Button';
import { MapPin, ArrowRight, Calendar } from '../ui/Icons';
import { waLink, bookingMessage } from '../ui/links';

export default function RoutesSection() {
  return (
    <section id="routes" className="section-pad relative overflow-hidden bg-royal-fade">
      {/* ambient glows */}
      <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-saffron/25 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-gold/20 blur-3xl" aria-hidden="true" />

      <div className="container-x relative">
        <SectionHeading
          light
          eyebrow="Popular Tour Routes"
          title="Daily Shared Excursions from Vizag"
          lead="Fixed per-person fares on our most loved pilgrimage and sightseeing routes — travel with fellow devotees, leave the details to us."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {routes.map((route, i) => (
            <Reveal key={route.id} delay={i * 0.12}>
              <article className="glass group relative overflow-hidden rounded-3xl">
                <div className="relative h-56 overflow-hidden sm:h-64">
                  <TempleImage
                    src={route.image}
                    alt={`${route.from} to ${route.to} pilgrimage route`}
                    className="h-full w-full"
                    imgClassName="object-cover transition-transform duration-700 group-hover:scale-108 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-royal-dark/85 via-royal-dark/20 to-transparent" />
                  {/* route line */}
                  <div className="absolute bottom-5 left-6 right-6">
                    <div className="flex items-center gap-3 text-white">
                      <span className="font-display text-2xl sm:text-3xl">{route.from}</span>
                      <span className="relative h-px flex-1 bg-gradient-to-r from-gold-light/30 via-gold-light to-gold-light/30">
                        <ArrowRight className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 text-gold-light" />
                      </span>
                      <span className="font-display text-2xl sm:text-3xl">{route.to}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
                  <div>
                    <p className="flex items-baseline gap-2">
                      <span className="font-display text-4xl text-gold-light">₹{route.price}</span>
                      <span className="text-sm text-white/70">{route.unit}</span>
                    </p>
                    <p className="mt-1.5 flex items-center gap-1.5 text-sm text-white/70">
                      <MapPin className="h-3.5 w-3.5 text-saffron-light" /> {route.note}
                    </p>
                  </div>
                  <Button
                    href={waLink(bookingMessage({ package: `${route.from} → ${route.to}` }))}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="gold"
                    size="md"
                    className="shrink-0"
                  >
                    <Calendar className="h-4 w-4" /> Book Tour
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
