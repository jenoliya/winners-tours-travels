import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { NAV_LINKS } from "../../constants";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-ambient border-b border-outline-variant/30"
            : "bg-surface/80 backdrop-blur-xl border-b border-white/20"
        }`}
      >
        <div className="section-container flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            to="/"
            className="font-display text-2xl font-bold text-primary tracking-tight select-none"
          >
            Winner <span className="text-secondary">Tours</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-xl text-sm font-semibold tracking-wide transition-all ${
                    isActive
                      ? "text-primary bg-primary/8"
                      : "text-on-surface-variant hover:text-primary hover:bg-primary/5"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+914221234567"
              className="flex items-center gap-2 text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors"
            >
              <Phone size={16} />
              +91 422 1234 567
            </a>
            <button
              onClick={() => navigate("/packages")}
              className="btn-primary"
            >
              Book Now
            </button>
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden p-2 rounded-xl text-on-surface-variant hover:bg-surface-container transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/30 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute top-20 left-0 right-0 glass-card border-b border-outline-variant/30 py-4 transition-all duration-300 ${
            mobileOpen ? "translate-y-0" : "-translate-y-4"
          }`}
        >
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `block px-6 py-3 text-sm font-semibold tracking-wide transition-colors ${
                  isActive ? "text-primary bg-primary/5" : "text-on-surface-variant hover:text-primary"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <div className="px-6 pt-4 pb-2 border-t border-outline-variant/20 mt-2">
            <button
              onClick={() => { navigate("/packages"); setMobileOpen(false); }}
              className="btn-primary w-full text-center"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
