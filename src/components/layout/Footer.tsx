import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, MessageCircle, Share2, Play, Monitor } from "lucide-react";
import { COMPANY_INFO } from "../../constants";

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface-container-high border-t border-outline-variant/30">
      <div className="section-container py-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="font-display text-2xl font-bold text-primary mb-4">
              Winner <span className="text-secondary">Tours</span>
            </div>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
              Making travel personal, safe, and memorable since {COMPANY_INFO.founded}. Your trusted companion for South Indian adventures.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                className="w-9 h-9 rounded-full bg-surface flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
                aria-label="Social"
              >
                <Monitor size={16} />
              </a>
              <a
                href="https://instagram.com"
                className="w-9 h-9 rounded-full bg-surface flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
                aria-label="Instagram"
              >
                <Share2 size={16} />
              </a>
              <a
                href="https://youtube.com"
                className="w-9 h-9 rounded-full bg-surface flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
                aria-label="YouTube"
              >
                <Play size={16} />
              </a>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp.replace(/\D/g, "")}`}
                className="w-9 h-9 rounded-full bg-surface flex items-center justify-center text-green-600 hover:bg-green-500 hover:text-white transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-display font-semibold text-primary mb-4">Destinations</h4>
            <ul className="space-y-3">
              {["Ooty & Coonoor", "Munnar & Thekkady", "Valparai & Pollachi", "Coimbatore City", "Kodaikanal"].map(
                (dest) => (
                  <li key={dest}>
                    <Link
                      to="/destinations"
                      className="text-on-surface-variant text-sm hover:text-primary transition-colors"
                    >
                      {dest}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-primary mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Our Packages", path: "/packages" },
                { label: "Fleet Details", path: "/fleet" },
                { label: "Photo Gallery", path: "/gallery" },
                { label: "About Us", path: "/about" },
                { label: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-on-surface-variant text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-primary mb-4">Get In Touch</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="flex items-start gap-3 text-on-surface-variant text-sm hover:text-primary transition-colors group"
                >
                  <Phone size={16} className="mt-0.5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-start gap-3 text-on-surface-variant text-sm hover:text-primary transition-colors group"
                >
                  <Mail size={16} className="mt-0.5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-on-surface-variant text-sm">
                  <MapPin size={16} className="mt-0.5 text-primary flex-shrink-0" />
                  <span>{COMPANY_INFO.address}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-outline-variant/30">
        <div className="section-container py-4 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-on-surface-variant text-xs">
            © {new Date().getFullYear()} Winner Tours and Travels. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cancellation Policy"].map((item) => (
              <Link
                key={item}
                to="#"
                className="text-on-surface-variant text-xs hover:text-primary transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
