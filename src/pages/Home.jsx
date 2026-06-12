import Hero from '../components/sections/Hero';
import Packages from '../components/sections/Packages';
import RoutesSection from '../components/sections/Routes';
import Fleet from '../components/sections/Fleet';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Gallery from '../components/sections/Gallery';
import BookingProcess from '../components/sections/BookingProcess';
import Testimonials from '../components/sections/Testimonials';
import Contact from '../components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Packages />
      <RoutesSection />
      <Fleet />
      <WhyChooseUs />
      <Gallery />
      <BookingProcess />
      <Testimonials />
      <Contact />
    </>
  );
}
