import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { business, packageOptions } from '../../data/siteContent';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import Button from '../ui/Button';
import { Phone, MapPin, Clock, FaWhatsapp, CheckCircle2, Calendar } from '../ui/Icons';
import { telLink, waLink, bookingMessage } from '../ui/links';

const inputCls =
  'w-full rounded-2xl border border-gold/25 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/40 transition-all focus:border-saffron focus:outline-none focus:ring-2 focus:ring-saffron/25';

function Field({ label, error, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-royal">
        {label}
      </span>
      {children}
      {error && <span className="mt-1 block text-xs text-red-600">{error.message}</span>}
    </label>
  );
}

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [sent, setSent] = useState(false);

  // No backend: bookings open a pre-filled WhatsApp chat with the business.
  const onSubmit = (data) => {
    window.open(waLink(bookingMessage(data)), '_blank', 'noopener,noreferrer');
    setSent(true);
    setTimeout(() => setSent(false), 6000);
  };

  return (
    <section id="contact" className="section-pad temple-grid">
      <div className="container-x">
        <SectionHeading
          eyebrow="Book Your Yatra"
          title="Reserve Your Seat Today"
          lead="Fill the form and your booking request opens directly in WhatsApp — or simply call us."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          {/* Info panel */}
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col justify-between gap-8 rounded-3xl bg-royal-fade p-8 text-white">
              <div>
                <h3 className="font-display text-2xl tracking-widest">{business.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/75">
                  {business.description}
                </p>
                <ul className="mt-8 space-y-5 text-sm">
                  <li className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                      <Phone className="h-4 w-4 text-gold-light" />
                    </span>
                    <a href={telLink} className="transition-colors hover:text-gold-light">
                      {business.phoneDisplay}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                      <MapPin className="h-4 w-4 text-gold-light" />
                    </span>
                    {business.city}, {business.region}
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                      <Clock className="h-4 w-4 text-gold-light" />
                    </span>
                    Open daily · Early-morning darshan pickups available
                  </li>
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <Button href={waLink()} target="_blank" rel="noopener noreferrer" variant="whatsapp" size="md">
                  <FaWhatsapp className="h-4 w-4" /> WhatsApp
                </Button>
                <Button href={telLink} variant="gold" size="md">
                  <Phone className="h-4 w-4" /> Call Now
                </Button>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1} className="lg:col-span-3">
            <div className="glass-light rounded-3xl p-7 shadow-glass sm:p-9">
              {/* react-hook-form handles validation; submission opens WhatsApp */}
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" error={errors.name}>
                  <input
                    className={inputCls}
                    placeholder="Your full name"
                    {...register('name', { required: 'Please enter your name' })}
                  />
                </Field>
                <Field label="Phone" error={errors.phone}>
                  <input
                    className={inputCls}
                    type="tel"
                    inputMode="tel"
                    placeholder="10-digit mobile number"
                    {...register('phone', {
                      required: 'Please enter your phone number',
                      pattern: { value: /^[6-9]\d{9}$/, message: 'Enter a valid 10-digit Indian mobile number' },
                    })}
                  />
                </Field>
                <Field label="Package" error={errors.package}>
                  <select
                    className={inputCls}
                    defaultValue=""
                    {...register('package', { required: 'Please choose a package' })}
                  >
                    <option value="" disabled>Select a package</option>
                    {packageOptions.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Travel Date" error={errors.date}>
                  <input
                    className={inputCls}
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    {...register('date', { required: 'Please pick a travel date' })}
                  />
                </Field>
                <Field label="Number of Members" error={errors.members}>
                  <input
                    className={inputCls}
                    type="number"
                    min="1"
                    max="60"
                    placeholder="e.g. 4"
                    {...register('members', { required: 'How many are travelling?', min: { value: 1, message: 'At least 1 member' } })}
                  />
                </Field>
                <Field label="Message (optional)">
                  <input
                    className={inputCls}
                    placeholder="Pickup point, special requests…"
                    {...register('message')}
                  />
                </Field>
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-4">
                <Button as="button" type="button" onClick={handleSubmit(onSubmit)} variant="primary" size="lg">
                  <Calendar className="h-5 w-5" /> Book Now
                </Button>
                <Button href={waLink()} target="_blank" rel="noopener noreferrer" variant="whatsapp" size="lg">
                  <FaWhatsapp className="h-5 w-5" /> WhatsApp
                </Button>
                <Button href={telLink} variant="ghost" size="lg">
                  <Phone className="h-5 w-5" /> Call Now
                </Button>
              </div>

              {sent && (
                <p className="mt-5 flex items-center gap-2 rounded-2xl bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
                  <CheckCircle2 className="h-4 w-4" />
                  Your booking request opened in WhatsApp — send the message to confirm.
                </p>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
