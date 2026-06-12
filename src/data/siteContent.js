// ============================================================================
// LIKES CALL TAXI — Single source of truth for all site content.
// Edit business details, packages, routes, copy and images here only.
// Images: drop real photos into src/assets and import them, or replace the
// Unsplash URLs below. Every <TempleImage> falls back to a sacred gradient
// if a photo is missing, so the site never looks broken pre-launch.
// ============================================================================

export const business = {
  name: 'LIKES TOURS & TRAVELS',
  tagline: 'Your Spiritual Journey Starts Here',
  description:
    'Affordable and reliable pilgrimage tour packages and travel services for families and devotees.',
  phoneDisplay: '+91 8919369510',
  phone: '918919369510', // for tel: and wa.me links (no +, no spaces)
  city: 'Visakhapatnam',
  region: 'Andhra Pradesh, India',
};

// Pre-filled WhatsApp greeting
export const whatsappGreeting =
  'Namaste 🙏 I would like to book a pilgrimage tour package with LIKES TOURS & TRAVELS.';

export const services = [
  'Pilgrimage Tour Packages',
  'Custom Sightseeing Travels',
  'Temple Tour Packages',
  'One Day Spiritual Trips',
  'Family Pilgrimage Tours',
];

export const heroBadges = [
  'Safe Journey',
  'Affordable Packages',
  'Temple Tours',
  'Trusted Travels',
];

// ----------------------------------------------------------------------------
// Popular routes
// ----------------------------------------------------------------------------
export const routes = [
  {
    id: 'vizag-vadapalli',
    from: 'Vizag',
    to: 'Vadapalli',
    price: 950,
    unit: 'Per Person',
    note: 'Riverside Sri Lakshmi Narasimha Swamy darshan',
    image:
      'https://holaciti.com/assets/place/1745048262_91pnAn5d9E.webp',
  },
  {
    id: 'vizag-atuku',
    from: 'Vizag',
    to: 'Atuku',
    price: 950,
    unit: 'Per Person',
    note: 'Hill shrine surrounded by forest and waterfalls',
    image:
      'https://res.cloudinary.com/dyiffrkzh/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_center,h_400,q_auto,w_700/v1699336539/bbj/dyoflojm5avnwmybtunb.jpg',
  },
];

// ----------------------------------------------------------------------------
// Temple packages
// ----------------------------------------------------------------------------
export const packages = [
  {
    id: 'pkg-aruku',
    name: 'Aruku Package',
    price: 750,
    unit: 'Per Person',
    image:
      'https://inditales.com/wp-content/uploads/2023/09/araku-view-point-clouds-passing.jpg',
    includes: [
      'Araku Valley Visit',
      'Borra Caves & Chaprai',
      'Coffee Plantations & Gardens',
      'Scenic Hill Station Ride',
    ],
  },
  {
    id: 'pkg-vadapalli-new',
    name: 'Vadapalli Package',
    price: 900,
    unit: 'Per Person',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ6FhK37EJZE9oAlhtSu9quoOlNz8wNawUfg&s',
    includes: [
      'Vadapalli Venkateswara Swamy Temple',
      'Sri Lakshmi Narasimha Swamy Temple',
      'River Godavari Darshan',
      'Hassle-free Yatra Experience',
    ],
  },
  {
    id: 'pkg-srikakulam-new',
    name: 'Srikakulam Package',
    price: 950,
    unit: 'Per Person',
    image:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/e1/61/46/temple-view-from-outside.jpg?w=1200&h=1200&s=1',
    includes: [
      'Arasavalli Sun Temple',
      'Sri Kurmam (Tortoise Temple)',
      'Srimukhalingam Temple',
      'Complete Sacred Circuit',
    ],
  },

  {
    id: 'pkg-venkateswara',
    name: 'Sri Venkateswara Darshan',
    price: 950,
    unit: 'Per Person',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/d/de/Malekallu_Tirupathi-balaji%2C_Arsikere.jpg',
    includes: [
      'Sri Venkateswara Swamy Temple',
      'Traditional Pilgrimage Tour',
    ],
  },
  {
    id: 'pkg-srikurmam',
    name: 'Govindapuram Circuit',
    price: 750,
    unit: 'Per Person',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMpWWKdL_uzWQU-HyGbuZSPlE1yk4rvajqKg&s',
    includes: ['Govindapuram', 'Arasavalli', 'Sri Kurmam Temple'],
  },
  {
    id: 'pkg-kanakadurga',
    name: 'Kanaka Durga & Simhachalam',
    price: 500,
    unit: 'Per Person',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsOa36fRbu6n5O0ngJNqZktUsEuVtJmsodRg&s',
    includes: [
      'Vijayawada',
      'Kanaka Durga Temple',
      'Ramateertham',
      'Simhachalam Temple',
    ],
  },
];

// ----------------------------------------------------------------------------
// Additional services
// ----------------------------------------------------------------------------
export const additionalServices = [
  'Temple Darshan Trips',
  'Family Pilgrimage Tours',
  'Group Tour Booking',
  'Daily Sightseeing Tours',
  'Shared Travel Packages',
  'Private Custom Tours',
  'Festival Special Trips',
];

// ----------------------------------------------------------------------------
// Why choose us  (icon keys map to src/components/ui/Icons.jsx registry)
// ----------------------------------------------------------------------------
export const whyChooseUs = [
  {
    icon: 'shield',
    title: 'Safe Travel',
    text: 'Sanitised, well-maintained vehicles and careful, route-aware driving on every trip.',
  },
  {
    icon: 'compass',
    title: 'Local Tour Guides',
    text: 'Local tour captains and drivers who know every temple route, timing, and shortcut.',
  },
  {
    icon: 'rupee',
    title: 'Affordable Pricing',
    text: 'Honest per-person fares with no hidden charges — packages from just ₹500.',
  },
  {
    icon: 'users',
    title: 'Group Booking',
    text: 'Comfortable arrangements for families and large devotee groups travelling together.',
  },
  {
    icon: 'temple',
    title: 'Temple Experts',
    text: 'Guidance on darshan timings, sevas and rituals so you never miss a blessing.',
  },
  {
    icon: 'map',
    title: 'Tour Fleet',
    text: 'Clean, air-conditioned tour vehicles with ample space for long travels and pilgrimage yatras.',
  },
];

// ----------------------------------------------------------------------------
// Booking process
// ----------------------------------------------------------------------------
export const bookingSteps = [
  { icon: 'list', title: 'Choose Tour', text: 'Pick the temple route or tour that suits your family.' },
  { icon: 'phone', title: 'Contact Us', text: 'Call or WhatsApp us with your date and group size.' },
  { icon: 'check', title: 'Confirm Yatra', text: 'We confirm your seats, pickup point and timing.' },
  { icon: 'lotus', title: 'Enjoy Darshan', text: 'Relax and travel — we handle the rest of the journey.' },
];

// ----------------------------------------------------------------------------
// Gallery  (mixed: temples, family travel, taxi service)
// ----------------------------------------------------------------------------
export const gallery = [
  { src: 'https://images.unsplash.com/photo-1567591414240-e9c1a2c1e8c4?auto=format&fit=crop&w=900&q=80', alt: 'South Indian temple gopuram at sunrise', tag: 'Temple' },
  { src: 'https://images.unsplash.com/photo-1604608672516-f1b9b1d37076?auto=format&fit=crop&w=900&q=80', alt: 'Devotees at a sacred shrine', tag: 'Darshan' },
  { src: 'https://images.unsplash.com/photo-1545126178-862cdb469409?auto=format&fit=crop&w=900&q=80', alt: 'Waterfalls near a hill temple', tag: 'Nature' },
  { src: 'https://images.unsplash.com/photo-1601999009162-7d09c4f6e0e8?auto=format&fit=crop&w=900&q=80', alt: 'Family travelling together', tag: 'Family' },
  { src: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=900&q=80', alt: 'Comfortable tour vehicle on a scenic road', tag: 'Travel' },
  { src: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=900&q=80', alt: 'Ornate temple architecture', tag: 'Temple' },
];

// ----------------------------------------------------------------------------
// Testimonials
// ----------------------------------------------------------------------------
export const testimonials = [
  {
    name: 'Lakshmi Prasad',
    place: 'Vizag',
    rating: 5,
    text: 'Booked the Simhachalam tour package for my whole family. Clean vehicle, polite driver and we reached every temple right on time. Very reasonable price.',
  },
  {
    name: 'Ramesh Babu',
    place: 'Gajuwaka',
    rating: 5,
    text: 'The Vadapalli pilgrimage was peaceful and well organised. The driver knew the darshan timings and helped my elderly parents throughout.',
  },
  {
    name: 'Sridevi M.',
    place: 'Madhurawada',
    rating: 5,
    text: 'Shared tour was comfortable and affordable. Felt safe travelling as a group of women. Will surely book again for our next pilgrimage.',
  },
  {
    name: 'Venkata Rao',
    place: 'Anakapalle',
    rating: 5,
    text: 'Arranged a group booking for 8 people to Arasavalli and Sri Kurmam. Smooth experience from the first call to drop-off. Highly recommended.',
  },
];

// ----------------------------------------------------------------------------
// Fleet options
// ----------------------------------------------------------------------------
export const fleet = [
  {
    id: 'fleet-sedan',
    name: 'Swift Dzire',
    type: 'Comfort Sedan',
    capacity: '4 + 1 Passengers',
    luggage: '2-3 Bags',
    priceText: 'Ideal for small families & solo yatras',
    features: ['Air Conditioned', 'Experienced Tour Driver', 'Clean & Sanitised', 'Ample boot space'],
    image: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Dzire-Tour-S/12461/1762857975456/front-left-side-47.jpg',
  },
  {
    id: 'fleet-suv',
    name: 'Ertiga',
    type: 'Premium SUV / MUV',
    capacity: '6/7 + 1 Passengers',
    luggage: '4-5 Bags',
    priceText: 'Perfect for larger families & group tours',
    features: ['Dual AC System', 'Spacious Legroom & Boot', 'Pushback Comfort Seats', 'Music System Enabled'],
    image: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Ertiga-Tour/9617/1762858404297/front-left-side-47.jpg',
  },
];

// ----------------------------------------------------------------------------
// Navigation
// ----------------------------------------------------------------------------
export const navLinks = [
  { label: 'Packages', href: '#packages' },
  { label: 'Routes', href: '#routes' },
  { label: 'Fleet', href: '#fleet' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

// Packages exposed to the booking form dropdown
export const packageOptions = [
  ...packages.map((p) => p.name),
  ...routes.map((r) => `${r.from} → ${r.to}`),
  'Custom / Other',
];
