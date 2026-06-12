import { business, whatsappGreeting } from '../../data/siteContent';

// tel: link
export const telLink = `tel:+${business.phone}`;

// WhatsApp deep link with an optional pre-filled message
export function waLink(message = whatsappGreeting) {
  return `https://wa.me/${business.phone}?text=${encodeURIComponent(message)}`;
}

// Build a tidy WhatsApp message from booking-form values
export function bookingMessage(data = {}) {
  const lines = [
    'Namaste 🙏 New booking request — LIKES TOURS & TRAVELS',
    '',
    data.name && `Name: ${data.name}`,
    data.phone && `Phone: ${data.phone}`,
    data.package && `Package: ${data.package}`,
    data.date && `Travel Date: ${data.date}`,
    data.members && `Members: ${data.members}`,
    data.message && `Message: ${data.message}`,
  ].filter(Boolean);
  return lines.join('\n');
}
