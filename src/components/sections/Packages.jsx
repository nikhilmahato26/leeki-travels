import { packages } from '../../data/siteContent';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import TempleImage from '../ui/TempleImage';
import Button from '../ui/Button';
import { CheckCircle2, ArrowRight, GiLotus } from '../ui/Icons';
import { waLink, bookingMessage } from '../ui/links';

export default function Packages() {
  return (
    <section id="packages" className="section-pad temple-grid relative">
      <div className="container-x">
        <SectionHeading
          eyebrow="Temple Packages"
          title="Sacred Tours, Honest Prices"
          lead="Hand-crafted darshan packages covering the most beloved temples of Andhra — pick one and leave the road to us."
        />

        <div className="mt-14 grid gap-7 sm:grid-cols-2 xl:grid-cols-4">
          {packages.map((pkg, i) => (
            <Reveal key={pkg.id} delay={i * 0.1} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-glass transition-shadow duration-500 hover:shadow-lift">
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <TempleImage
                    src={pkg.image}
                    alt={pkg.name}
                    className="h-full w-full"
                    imgClassName="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-royal-dark/70 via-transparent to-transparent" />
                  {/* Price tag */}
                  <div className="absolute bottom-4 left-4 rounded-2xl bg-gold-sheen px-4 py-2 shadow-glow">
                    <span className="font-body font-bold text-xl text-royal-dark">₹{pkg.price}</span>
                    <span className="ml-1 text-xs font-semibold text-royal-dark/80">{pkg.unit}</span>
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl text-royal-dark">{pkg.name}</h3>
                  <ul className="mt-4 flex-1 space-y-2.5">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-ink/75">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-saffron" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button
                    href={waLink(bookingMessage({ package: pkg.name }))}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    size="md"
                    className="mt-6 w-full"
                  >
                    Book Now <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-10 text-center">
          <p className="inline-flex items-center gap-2 text-sm text-ink/60">
            <GiLotus className="h-4 w-4 text-saffron" />
            Custom group itineraries available — call us to plan your own yatra.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
