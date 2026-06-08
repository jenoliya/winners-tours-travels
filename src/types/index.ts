// ─── Destination ────────────────────────────────────────────────────────────
export interface Destination {
  id: string;
  name: string;
  tagline: string;
  image: string;
  description: string;
  highlights: string[];
}

// ─── Package ─────────────────────────────────────────────────────────────────
export interface Package {
  id: string;
  slug: string;
  title: string;
  destination: string;
  duration: string;
  nights: number;
  days: number;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: string;
  badgeColor?: "secondary" | "tertiary" | "primary";
  description: string;
  inclusions: string[];
  itinerary: ItineraryDay[];
  maxGuests: number;
  rating: number;
  reviewCount: number;
}

export interface ItineraryDay {
  day: number;
  title: string;
  activities: string[];
}

// ─── Vehicle ─────────────────────────────────────────────────────────────────
export interface Vehicle {
  id: string;
  name: string;
  type: string;
  seating: string;
  luggage: string;
  features: string[];
  pricePerKm: number;
  image: string;
  badge?: string;
}

// ─── Testimonial ─────────────────────────────────────────────────────────────
export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  review: string;
  destination: string;
  avatar?: string;
}

// ─── Gallery Image ────────────────────────────────────────────────────────────
export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  colSpan?: number;
  rowSpan?: number;
}

// ─── Booking Flow ─────────────────────────────────────────────────────────────
export interface BookingDetails {
  packageId?: string;
  packageTitle?: string;
  packageImage?: string;
  destination?: string;
  travelDate?: string;
  travellers?: number;
  vehicleId?: string;
  vehicleName?: string;
  nights?: number;
  basePrice?: number;
  serviceFee?: number;
  total?: number;
}

export interface TravellerInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address?: string;
  specialRequests?: string;
}

export interface ContactForm {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
export interface FAQ {
  id: string;
  question: string;
  answer: string;
  icon: string;
}

// ─── Nav Link ─────────────────────────────────────────────────────────────────
export interface NavLink {
  label: string;
  path: string;
}
