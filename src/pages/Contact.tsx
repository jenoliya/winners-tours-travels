import React, { useState } from "react";
import { Phone, Mail, MessageCircle, MapPin, Clock, ChevronDown, ChevronUp } from "lucide-react";
import PageHero from "../components/common/PageHero";
import SectionHeader from "../components/common/SectionHeader";
import { COMPANY_INFO } from "../constants";
import { faqs } from "../data";

const officeHours = [
  { day: "Monday – Friday", hours: "8:00 AM – 8:00 PM" },
  { day: "Saturday", hours: "8:00 AM – 6:00 PM" },
  { day: "Sunday & Holidays", hours: "9:00 AM – 5:00 PM" },
];

const Contact: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const contactCards = [
    {
      icon: <Phone size={26} className="text-white" />,
      bg: "bg-primary",
      label: "Call Us",
      value: COMPANY_INFO.phone,
      sublabel: "Mon–Sat, 8 AM – 8 PM",
      href: `tel:${COMPANY_INFO.phone}`,
    },
    {
      icon: <MessageCircle size={26} className="text-white" />,
      bg: "bg-green-500",
      label: "WhatsApp",
      value: COMPANY_INFO.whatsapp,
      sublabel: "Quick replies, 7 days a week",
      href: `https://wa.me/${COMPANY_INFO.whatsapp.replace(/\D/g, "")}`,
    },
    {
      icon: <Mail size={26} className="text-white" />,
      bg: "bg-tertiary",
      label: "Email Us",
      value: COMPANY_INFO.email,
      sublabel: "We respond within 24 hours",
      href: `mailto:${COMPANY_INFO.email}`,
    },
    {
      icon: <MapPin size={26} className="text-white" />,
      bg: "bg-secondary",
      label: "Visit Us",
      value: "Race Course, Coimbatore",
      sublabel: COMPANY_INFO.address,
      href: "https://maps.google.com/?q=Race+Course+Coimbatore",
    },
  ];

  return (
    <>
      {/* Hero — Ooty lake scenic road, verified travel image */}
      <PageHero
        title="Let's Plan Your Journey"
        subtitle="Our travel specialists are ready to craft the perfect South India experience for you."
        image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80"
        height="h-80 md:h-[420px]"
      />

      {/* ── Contact Cards ────────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="section-container">
          <SectionHeader
            eyebrow="Reach Us"
            title="Get In Touch"
            subtitle="Whether you have a question about a package, need a custom itinerary, or want to make a booking — we're here."
            centered
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactCards.map((card) => (
              <a
                key={card.label}
                href={card.href}
                target={card.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="glass-card rounded-3xl p-7 flex flex-col items-start gap-4 hover:-translate-y-1 hover:shadow-ambient-lg transition-all duration-300 group"
              >
                <div className={`w-14 h-14 rounded-2xl ${card.bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  {card.icon}
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-outline mb-1">{card.label}</p>
                  <p className="font-display font-bold text-on-surface text-base group-hover:text-primary transition-colors leading-tight">
                    {card.value}
                  </p>
                  <p className="text-xs text-on-surface-variant mt-1.5 leading-relaxed">{card.sublabel}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Office Hours + Map ───────────────────────────────────────────── */}
      <section className="bg-surface-container-low py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Office hours */}
            <div>
              <SectionHeader eyebrow="Working Hours" title="When We're Available" />
              <div className="space-y-4 mb-8">
                {officeHours.map((slot) => (
                  <div
                    key={slot.day}
                    className="glass-card rounded-2xl px-6 py-4 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <Clock size={16} className="text-primary flex-shrink-0" />
                      <span className="font-semibold text-on-surface text-sm">{slot.day}</span>
                    </div>
                    <span className="text-primary font-bold text-sm">{slot.hours}</span>
                  </div>
                ))}
              </div>

              {/* Quick contact strip */}
              <div className="bg-primary rounded-3xl p-7">
                <h3 className="font-display text-xl font-bold text-white mb-2">
                  Prefer a quick call?
                </h3>
                <p className="text-white/80 text-sm mb-5">
                  Our team is just a phone call away. Book a free consultation and we'll plan your perfect trip.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="flex items-center justify-center gap-2 bg-white text-primary font-bold px-5 py-3 rounded-xl hover:bg-white/90 transition-all text-sm"
                  >
                    <Phone size={16} /> {COMPANY_INFO.phone}
                  </a>
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsapp.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 bg-green-500 text-white font-bold px-5 py-3 rounded-xl hover:bg-green-400 transition-all text-sm"
                  >
                    <MessageCircle size={16} /> WhatsApp Us
                  </a>
                </div>
              </div>
            </div>

            {/* Map visual */}
            <div className="space-y-5">
              <div className="glass-card rounded-3xl overflow-hidden relative" style={{ height: 340 }}>
                {/* Coimbatore city aerial — verified travel image */}
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=900&q=80"
                  alt="Coimbatore city map view"
                  className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-10 h-10 bg-primary rounded-full animate-ping absolute opacity-50" />
                    <div className="w-10 h-10 bg-primary rounded-full relative z-10 flex items-center justify-center text-white border-3 border-white shadow-2xl">
                      <MapPin size={18} />
                    </div>
                    <div className="absolute top-12 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-xl shadow-2xl whitespace-nowrap">
                      <p className="text-xs font-bold text-primary">Winners Tours & Travels</p>
                      <p className="text-xs text-on-surface-variant">Race Course, Coimbatore</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-5">
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-sm text-on-surface mb-1">Office Address</p>
                    <p className="text-on-surface-variant text-sm leading-relaxed">{COMPANY_INFO.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="section-container">
          <SectionHeader
            eyebrow="FAQ"
            title="Common Inquiries"
            subtitle="Everything you need to know before booking your South India tour."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {faqs.map((faq) => (
              <div key={faq.id} className="glass-card rounded-2xl overflow-hidden">
                <button
                  className="w-full text-left flex items-start justify-between gap-3 p-6"
                  onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                >
                  <span className="font-display font-bold text-primary leading-snug">{faq.question}</span>
                  <span className="flex-shrink-0 mt-0.5 text-outline">
                    {openFaq === faq.id ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </span>
                </button>
                {openFaq === faq.id && (
                  <div className="px-6 pb-6 border-t border-outline-variant/20 pt-4">
                    <p className="text-on-surface-variant text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ──────────────────────────────────────────────────────── */}
      <section className="py-20 bg-surface-container-low">
        <div className="section-container max-w-4xl">
          <div className="relative rounded-[3rem] overflow-hidden p-12 text-center bg-primary">
            <div className="relative z-10">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to experience the best of South India?
              </h2>
              <p className="text-white/80 mb-8 max-w-xl mx-auto">
                Join thousands of satisfied travellers who chose Winners Tours & Travels for their premium travel needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={`tel:${COMPANY_INFO.phone}`} className="bg-white text-primary font-bold text-base px-10 py-4 rounded-2xl hover:bg-white/90 transition-all">
                  Call for Consultation
                </a>
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="border-2 border-white text-white font-bold text-base px-10 py-4 rounded-2xl hover:bg-white/10 transition-all"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
            <div className="absolute -top-20 -right-20 w-56 h-56 bg-white/5 rounded-full blur-2xl" />
            <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-white/5 rounded-full blur-2xl" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
