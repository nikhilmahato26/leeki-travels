import { fleet } from '../../data/siteContent';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import TempleImage from '../ui/TempleImage';
import Button from '../ui/Button';
import { Users, Briefcase, CheckCircle2, ArrowRight, FaWhatsapp } from '../ui/Icons';
import { waLink } from '../ui/links';

export default function Fleet() {
  return (
    <section id="fleet" className="section-pad relative overflow-hidden bg-white">
      {/* Ambient background accent */}
      <div className="pointer-events-none absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-saffron/10 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-32 bottom-10 h-96 w-96 rounded-full bg-gold/10 blur-3xl" aria-hidden="true" />

      <div className="container-x relative z-10">
        <SectionHeading
          eyebrow="Our Fleet"
          title="Comfortable Rides for Every Family Size"
          lead="Choose from our range of clean, air-conditioned, and well-maintained vehicles for a safe and peaceful spiritual journey."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {fleet.map((car, i) => (
            <Reveal key={car.id} delay={i * 0.15}>
              <article className="group flex flex-col overflow-hidden rounded-3xl bg-royal-fade/30 border border-saffron/10 shadow-glass transition-shadow duration-500 hover:shadow-lift h-full">
                {/* Vehicle Image */}
                <div className="relative h-60 overflow-hidden sm:h-72">
                  <TempleImage
                    src={car.image}
                    alt={car.name}
                    className="h-full w-full"
                    imgClassName="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-royal-dark/60 via-transparent to-transparent" />
                  
                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 rounded-xl bg-gold-sheen px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-royal-dark shadow-glow">
                    {car.type}
                  </span>
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <h3 className="text-2xl font-display text-royal-dark">{car.name}</h3>
                  <p className="mt-2 text-sm text-ink/70 italic font-medium">{car.priceText}</p>

                  {/* Specifications Row */}
                  <div className="mt-6 flex items-center gap-6 border-y border-saffron/10 py-4">
                    <div className="flex items-center gap-2 text-sm text-ink/80">
                      <Users className="h-5 w-5 text-saffron" />
                      <div>
                        <span className="font-semibold block text-royal-dark">Capacity</span>
                        <span className="text-xs text-ink/60">{car.capacity}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-ink/80">
                      <Briefcase className="h-5 w-5 text-saffron" />
                      <div>
                        <span className="font-semibold block text-royal-dark">Luggage</span>
                        <span className="text-xs text-ink/60">{car.luggage}</span>
                      </div>
                    </div>
                  </div>

                  {/* Features List */}
                  <ul className="mt-6 flex-1 space-y-3">
                    {car.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-ink/75">
                        <CheckCircle2 className="h-4.5 w-4.5 text-saffron shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Booking CTA */}
                  <Button
                    href={waLink(`Namaste 🙏 I would like to book a ${car.name} (${car.type}) ride with LIKES CALL TAXI. Please share details.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    size="lg"
                    className="mt-8 w-full group-hover:bg-saffron group-hover:border-saffron"
                  >
                    <FaWhatsapp className="h-5 w-5" /> Book {car.name.split(' / ')[0]}
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
