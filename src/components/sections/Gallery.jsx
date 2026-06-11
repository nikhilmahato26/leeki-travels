import { gallery } from '../../data/siteContent';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import TempleImage from '../ui/TempleImage';

export default function Gallery() {
  return (
    <section id="gallery" className="section-pad temple-grid">
      <div className="container-x">
        <SectionHeading
          eyebrow="Gallery"
          title="Moments of Devotion"
          lead="Glimpses from the yatras we've had the honour of driving."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3">
          {gallery.map((img, i) => (
            <Reveal
              key={img.src}
              delay={(i % 3) * 0.08}
              className={i % 5 === 0 ? 'row-span-2' : ''}
            >
              <figure className="group relative h-full min-h-[180px] overflow-hidden rounded-3xl shadow-glass">
                <TempleImage
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full"
                  imgClassName="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <figcaption className="absolute inset-0 flex items-end bg-gradient-to-t from-royal-dark/75 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="m-4 rounded-full bg-gold-sheen px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-royal-dark">
                    {img.tag}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
