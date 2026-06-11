/* eslint-disable react-refresh/only-export-components -- intentional: icon registry exports constants + helper */
// ============================================================================
// Curated icon registry.
// Named imports only (tree-shakeable) — never `import * as Icons`.
// Add a new icon here once, then reference it by key in siteContent.js or by
// component anywhere in the app.
// ============================================================================

// lucide-react
import {
  Phone,
  MessageCircle,
  MapPin,
  Star,
  ArrowRight,
  ChevronRight,
  Menu,
  X,
  Calendar,
  Users,
  Sparkles,
  Quote,
  ShieldCheck,
  IndianRupee,
  Car,
  ListChecks,
  CheckCircle2,
  Mail,
  Clock,
  ArrowUpRight,
} from 'lucide-react';

// react-icons (brand + devotional glyphs lucide doesn't carry)
import { FaWhatsapp, FaGopuram } from 'react-icons/fa';
import { TbSteeringWheel } from 'react-icons/tb';
import { GiLotus } from 'react-icons/gi';

// Direct exports for use in components
export {
  Phone,
  MessageCircle,
  MapPin,
  Star,
  ArrowRight,
  ChevronRight,
  Menu,
  X,
  Calendar,
  Users,
  Sparkles,
  Quote,
  ShieldCheck,
  IndianRupee,
  Car,
  ListChecks,
  CheckCircle2,
  Mail,
  Clock,
  ArrowUpRight,
  FaWhatsapp,
  FaGopuram,
  TbSteeringWheel,
  GiLotus,
};

// Key-based registry for data-driven icons (whyChooseUs, bookingSteps, ...)
export const iconRegistry = {
  shield: ShieldCheck,
  wheel: TbSteeringWheel,
  rupee: IndianRupee,
  users: Users,
  temple: FaGopuram,
  car: Car,
  list: ListChecks,
  phone: Phone,
  check: CheckCircle2,
  lotus: GiLotus,
};

// Helper: resolve an icon component from a string key
export function Icon({ name, ...props }) {
  const Cmp = iconRegistry[name];
  return Cmp ? <Cmp {...props} /> : null;
}
