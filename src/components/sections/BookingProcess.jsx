import { bookingSteps } from '../../data/siteContent';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import { Icon } from '../ui/Icons';

export default function BookingProcess() {
  return (
    <section id="process" className="section-pad relative overflow-hidden bg-royal-fade">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[120%] -translate-x-1/2 rounded-[100%] bg-saffron/15 blur-3xl" aria-hidden="true" />
      <div className="container-x relative">
        <SectionHeading
          light
          eyebrow="How It Works"
          title="Four Steps to Darshan"
          lead="From choosing a package to standing before the deity — booking takes minutes."
        />

        <div className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* connector line (desktop) */}
          <div className="absolute left-[12%] right-[12%] top-9 hidden h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent lg:block" aria-hidden="true" />

          {bookingSteps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.12} className="relative text-center">
              <span className="relative z-10 mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-full bg-gold-sheen text-royal-dark shadow-glow">
                <Icon name={step.icon} className="h-7 w-7" />
                <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-saffron font-display text-sm text-white shadow">
                  {i + 1}
                </span>
              </span>
              <h3 className="mt-5 text-lg text-white">{step.title}</h3>
              <p className="mx-auto mt-2 max-w-[240px] text-sm leading-relaxed text-white/70">{step.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
