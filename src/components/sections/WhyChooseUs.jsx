import { whyChooseUs, additionalServices } from '../../data/siteContent';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import { Icon, Sparkles } from '../ui/Icons';
import useCountUp from '../../hooks/useCountUp';

const stats = [
  { end: 500, suffix: '+', label: 'Happy Pilgrims' },
  { end: 50, suffix: '+', label: 'Temples Covered' },
  { end: 100, suffix: '%', label: 'Safe Journeys' },
];

function Stat({ end, suffix, label }) {
  const [ref, value] = useCountUp(end);
  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-4xl text-gradient-saffron sm:text-5xl">
        {value}{suffix}
      </p>
      <p className="mt-1 text-sm uppercase tracking-[0.2em] text-ink/60">{label}</p>
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section-pad">
      <div className="container-x">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Travel Like Family, Arrive Blessed"
          lead="Every journey is handled with the same care we'd give our own parents on a yatra."
        />

        {/* Counter stats */}
        <Reveal className="mx-auto mt-12 grid max-w-2xl grid-cols-3 gap-6">
          {stats.map((s) => (
            <Stat key={s.label} {...s} />
          ))}
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.1}>
              <div className="group h-full rounded-3xl border border-gold/20 bg-white p-7 shadow-glass transition-all duration-500 hover:-translate-y-2 hover:border-gold/50 hover:shadow-lift">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-saffron-fade text-white shadow-glow-saffron transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <Icon name={item.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-xl text-royal-dark">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink/70">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Additional services ribbon */}
        <Reveal delay={0.15} className="mt-14">
          <div className="rounded-3xl bg-royal-fade p-7 sm:p-9">
            <p className="flex items-center justify-center gap-2 text-center text-sm font-semibold uppercase tracking-[0.25em] text-gold-light">
              <Sparkles className="h-4 w-4" /> Also Available
            </p>
            <ul className="mt-5 flex flex-wrap items-center justify-center gap-3">
              {additionalServices.map((s) => (
                <li
                  key={s}
                  className="glass rounded-full px-5 py-2 text-sm text-white/90 transition-colors hover:bg-white/25"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
