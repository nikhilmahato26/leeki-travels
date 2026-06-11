import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { testimonials } from '../../data/siteContent';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import { Star, Quote } from '../ui/Icons';

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-pad relative overflow-hidden">
      {/* warm ambient blobs */}
      <div className="pointer-events-none absolute -left-20 top-24 h-72 w-72 rounded-full bg-saffron/10 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-gold/15 blur-3xl" aria-hidden="true" />

      <div className="container-x relative">
        <SectionHeading
          eyebrow="Testimonials"
          title="Blessings from Our Pilgrims"
          lead="Real words from devotees who travelled with us."
        />

        <Reveal className="mt-14">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 3800, disableOnInteraction: false, pauseOnMouseEnter: true }}
            pagination={{ clickable: true }}
            loop
            className="!pb-14"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.name} className="h-auto">
                <figure className="glass-light flex h-full min-h-[260px] flex-col rounded-3xl p-7 shadow-glass">
                  <Quote className="h-8 w-8 text-gold" aria-hidden="true" />
                  <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink/80">
                    "{t.text}"
                  </blockquote>
                  <figcaption className="mt-5 flex items-center justify-between border-t border-gold/20 pt-4">
                    <div>
                      <p className="font-display text-royal-dark">{t.name}</p>
                      <p className="text-xs text-ink/55">{t.place}</p>
                    </div>
                    <span className="flex gap-0.5" aria-label={`${t.rating} star rating`}>
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                      ))}
                    </span>
                  </figcaption>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </Reveal>
      </div>
    </section>
  );
}
