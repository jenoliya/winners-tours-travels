import { NavLink } from "../types";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", path: "/" },
  { label: "Packages", path: "/packages" },
  { label: "Destinations", path: "/destinations" },
  { label: "Fleet", path: "/fleet" },
  { label: "Gallery", path: "/gallery" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export const COMPANY_INFO = {
  name: "Winner Tours",
  tagline: "Your Journey, Our Commitment",
  phone: "+91 422 1234 567",
  whatsapp: "+91 90000 88888",
  email: "hello@winnertours.com",
  address: "124, West Club Road, Race Course, Coimbatore, Tamil Nadu 641018",
  founded: "2012",
  tripsCompleted: "10,000+",
  satisfiedTravellers: "1,000+",
  kmRange: "400km",
};

export const SERVICE_FEE_RATE = 0.08; // 8%
