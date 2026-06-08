import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search, Shield, Compass, Route, ArrowRight, CheckCircle2,
} from "lucide-react";
import SectionHeader from "../components/common/SectionHeader";
import PackageCard from "../components/package/PackageCard";
import DestinationCard from "../components/gallery/DestinationCard";
import { packages, destinations, vehicles } from "../data";

const whyUs = [
  {
    icon: <Shield className="text-primary" size={28} />,
    bg: "bg-primary-fixed",
    title: "Safety First",
    color: "text-primary",
    desc: "GPS-tracked vehicles and background-verified chauffeurs for your complete peace of mind.",
  },
  {
    icon: <Compass className="text-secondary" size={28} />,
    bg: "bg-secondary-fixed",
    title: "Local Expertise",
    color: "text-secondary",
    desc: "Our drivers are destination specialists who know every hidden gem of the Nilgiris.",
  },
  {
    icon: <Route className="text-tertiary" size={28} />,
    bg: "bg-tertiary-fixed",
    title: "400km Daily Range",
    color: "text-tertiary",
    desc: "Generous daily range limits that let you explore more without hidden costs.",
  },
];

// Home page bento gallery — all images verified to match location
const bentoImages = [
  {
    // Munnar tea gardens — large hero cell
    src: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=900&q=85",
    alt: "Munnar tea gardens",
    cls: "col-span-2 row-span-2",
  },
  {
    // Ooty lake & Nilgiri hills
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    alt: "Ooty lake and hills",
    cls: "",
  },
  {
    // Adiyogi Shiva statue, Coimbatore — tall cell
    src: "https://images.unsplash.com/photo-1609766418204-5b81aa27e68a?w=600&q=80",
    alt: "Adiyogi Shiva statue, Coimbatore",
    cls: "row-span-2",
  },
  {
    // Valparai misty forest road
    src: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80",
    alt: "Valparai misty rainforest",
    cls: "",
  },
];

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [destination, setDestination] = useState("Munnar, Kerala");
  const [travelDate, setTravelDate] = useState("");
  const [travellers, setTravellers] = useState(2);

  const handleSearch = () => navigate("/packages");

  const featuredPackages = packages.slice(0, 2);
  const topDestinations = destinations.slice(0, 4);
  const topVehicles = vehicles.slice(0, 3);

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative h-screen min-h-[640px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/45 z-10" />
          {/* Munnar tea estate aerial — verified hero image */}
          <img
            src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1920&q=85"
            alt="Munnar tea plantations"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 text-center px-6 w-full max-w-5xl mx-auto">
          <span className="inline-block text-secondary font-semibold text-sm tracking-[0.2em] uppercase mb-4">
            South India's Premier Travel Partner
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 text-shadow leading-tight">
            Your Journey,<br />
            <span className="text-secondary-fixed-dim">Our Commitment.</span>
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-10">
            Experience the majestic beauty of Ooty, Munnar, Valparai, and Coimbatore with premium chauffeur-driven tours.
          </p>

          {/* Search Banner */}
          <div className="glass-card max-w-4xl mx-auto p-5 rounded-3xl shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
              <div className="text-left md:col-span-1">
                <label className="block text-primary font-bold text-xs tracking-widest uppercase mb-2">
                  Destination
                </label>
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="input-field"
                >
                  <option>Munnar, Kerala</option>
                  <option>Ooty, Tamil Nadu</option>
                  <option>Valparai, Pollachi</option>
                  <option>Coimbatore, City</option>
                  <option>Kodaikanal</option>
                </select>
              </div>
              <div className="text-left">
                <label className="block text-primary font-bold text-xs tracking-widest uppercase mb-2">
                  Travel Date
                </label>
                <input
                  type="date"
                  value={travelDate}
                  onChange={(e) => setTravelDate(e.target.value)}
                  className="input-field"
                  min={new Date().toISOString().split("T")[0]}
                />
              </div>
              <div className="text-left">
                <label className="block text-primary font-bold text-xs tracking-widest uppercase mb-2">
                  Travellers
                </label>
                <input
                  type="number"
                  value={travellers}
                  onChange={(e) => setTravellers(Number(e.target.value))}
                  min={1}
                  max={30}
                  className="input-field"
                  placeholder="2 Adults"
                />
              </div>
              <button
                onClick={handleSearch}
                className="btn-secondary flex items-center justify-center gap-2 py-3 rounded-xl"
              >
                <Search size={18} /> Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {whyUs.map((item) => (
              <div key={item.title} className="flex items-start gap-5">
                <div className={`w-16 h-16 rounded-2xl ${item.bg} flex items-center justify-center flex-shrink-0`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className={`font-display text-xl font-bold ${item.color} mb-2`}>{item.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Popular Destinations ──────────────────────────────────────────── */}
      <section className="py-20 bg-surface-container-low">
        <div className="section-container">
          <div className="flex justify-between items-end mb-12">
            <SectionHeader eyebrow="Explore South India" title="Popular Destinations" />
            <button
              onClick={() => navigate("/destinations")}
              className="hidden md:flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all"
            >
              View All <ArrowRight size={16} />
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {topDestinations.map((dest) => (
              <DestinationCard key={dest.id} destination={dest} tall />
            ))}
          </div>
          <div className="md:hidden text-center mt-6">
            <button
              onClick={() => navigate("/destinations")}
              className="btn-outline"
            >
              View All Destinations
            </button>
          </div>
        </div>
      </section>

      {/* ── Featured Packages ─────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="section-container">
          <div className="flex justify-between items-end mb-12">
            <SectionHeader eyebrow="Handpicked" title="Featured Packages" />
            <button
              onClick={() => navigate("/packages")}
              className="hidden md:flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all"
            >
              View All <ArrowRight size={16} />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredPackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} horizontal />
            ))}
          </div>
          <div className="text-center mt-8">
            <button onClick={() => navigate("/packages")} className="btn-outline">
              View All Packages
            </button>
          </div>
        </div>
      </section>

      {/* ── Fleet Preview ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-surface-container">
        <div className="section-container">
          <SectionHeader
            eyebrow="Our Fleet"
            title="Travel in Luxury"
            subtitle="Our fleet is maintained to the highest standards of safety and comfort."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topVehicles.map((v) => (
              <div
                key={v.id}
                className="bg-white p-6 rounded-4xl text-center shadow-sm hover:shadow-ambient transition-all group"
              >
                <div className="h-44 rounded-2xl overflow-hidden mb-5">
                  <img
                    src={v.image}
                    alt={v.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-display text-lg font-bold text-primary">{v.name}</h3>
                <p className="text-on-surface-variant text-sm mb-3">{v.type}</p>
                <div className="flex justify-center gap-4 text-outline text-xs">
                  <span>👥 {v.seating}</span>
                  <span>🧳 {v.luggage}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button onClick={() => navigate("/fleet")} className="btn-outline">
              View Full Fleet
            </button>
          </div>
        </div>
      </section>

      {/* ── Gallery Bento ─────────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="section-container">
          <div className="flex justify-between items-end mb-12">
            <SectionHeader eyebrow="Gallery" title="Captured Moments" />
            <button
              onClick={() => navigate("/gallery")}
              className="hidden md:flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all"
            >
              View Gallery <ArrowRight size={16} />
            </button>
          </div>
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            style={{ gridAutoRows: "200px" }}
          >
            {bentoImages.map((img) => (
              <div
                key={img.alt}
                className={`rounded-3xl overflow-hidden group cursor-pointer ${img.cls}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button onClick={() => navigate("/gallery")} className="btn-outline">
              View Full Gallery
            </button>
          </div>
        </div>
      </section>

      {/* ── CTA Section ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-surface-container-low">
        <div className="section-container">
          <div className="bg-surface-container-highest rounded-[3rem] px-8 py-16 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="font-display text-3xl md:text-5xl font-bold text-primary mb-4">
                Ready for your next adventure?
              </h2>
              <p className="text-on-surface-variant max-w-xl mx-auto mb-8">
                Book your premium South Indian escape today and enjoy exclusive early-bird discounts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => navigate("/packages")}
                  className="btn-secondary text-base px-10 py-4 rounded-2xl font-bold"
                >
                  Explore Packages
                </button>
                <button
                  onClick={() => navigate("/contact")}
                  className="btn-outline text-base px-10 py-4 rounded-2xl font-bold"
                >
                  Inquire Now
                </button>
              </div>
              <div className="flex justify-center gap-8 mt-8 flex-wrap">
                {["No Hidden Fees", "24/7 Support", "Free Cancellation"].map((item) => (
                  <span key={item} className="flex items-center gap-1.5 text-sm text-on-surface-variant">
                    <CheckCircle2 size={15} className="text-primary" /> {item}
                  </span>
                ))}
              </div>
            </div>
            {/* Decorative blobs */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
