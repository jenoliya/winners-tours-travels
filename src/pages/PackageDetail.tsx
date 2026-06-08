import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  ArrowLeft, Clock, Users, Calendar, CheckCircle2,
  ChevronDown, ChevronUp, Star
} from "lucide-react";
import { packages } from "../data";
import { formatCurrency } from "../utils";
import StarRating from "../components/common/StarRating";

const PackageDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const pkg = packages.find((p) => p.slug === slug);
  const [openDay, setOpenDay] = useState<number | null>(1);
  const [travelDate, setTravelDate] = useState("");
  const [travellers, setTravellers] = useState(2);

  if (!pkg) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-24">
        <p className="text-2xl font-display font-bold text-primary mb-4">Package not found</p>
        <Link to="/packages" className="btn-primary">Back to Packages</Link>
      </div>
    );
  }

  const handleBook = () => {
    navigate("/booking", {
      state: {
        packageId: pkg.id,
        packageTitle: pkg.title,
        packageImage: pkg.image,
        destination: pkg.destination,
        travelDate,
        travellers,
        nights: pkg.nights,
        basePrice: pkg.price,
      },
    });
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="relative h-96 md:h-[520px] overflow-hidden">
        <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-primary/70" />
        <div className="absolute bottom-0 left-0 right-0 section-container pb-8">
          <Link
            to="/packages"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm mb-4 transition-colors"
          >
            <ArrowLeft size={16} /> Back to Packages
          </Link>
          {pkg.badge && (
            <span className="block mb-2 text-xs font-bold uppercase tracking-widest text-secondary-fixed-dim">
              {pkg.badge}
            </span>
          )}
          <h1 className="font-display text-3xl md:text-5xl font-bold text-white text-shadow mb-2">
            {pkg.title}
          </h1>
          <p className="text-white/80 text-base">{pkg.destination}</p>
        </div>
      </div>

      <div className="section-container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left: Details */}
          <div className="lg:col-span-2 space-y-10">
            {/* Quick info */}
            <div className="flex flex-wrap gap-6 p-6 glass-card rounded-2xl">
              <div className="flex items-center gap-2 text-on-surface-variant text-sm">
                <Clock size={18} className="text-primary" />
                <span className="font-semibold">{pkg.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-on-surface-variant text-sm">
                <Users size={18} className="text-primary" />
                <span className="font-semibold">Max {pkg.maxGuests} guests</span>
              </div>
              <div className="flex items-center gap-2">
                <StarRating rating={pkg.rating} showNumber />
                <span className="text-xs text-outline">({pkg.reviewCount} reviews)</span>
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="font-display text-2xl font-bold text-primary mb-3">About This Tour</h2>
              <p className="text-on-surface-variant leading-relaxed">{pkg.description}</p>
            </div>

            {/* Inclusions */}
            <div>
              <h2 className="font-display text-2xl font-bold text-primary mb-4">What's Included</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {pkg.inclusions.map((item) => (
                  <div key={item} className="flex items-center gap-3 p-3 bg-surface-container-low rounded-xl">
                    <CheckCircle2 size={18} className="text-primary flex-shrink-0" />
                    <span className="text-sm font-semibold text-on-surface">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Itinerary */}
            <div>
              <h2 className="font-display text-2xl font-bold text-primary mb-4">Day-by-Day Itinerary</h2>
              <div className="space-y-3">
                {pkg.itinerary.map((day) => (
                  <div key={day.day} className="glass-card rounded-2xl overflow-hidden">
                    <button
                      className="w-full flex items-center justify-between p-5 text-left"
                      onClick={() => setOpenDay(openDay === day.day ? null : day.day)}
                    >
                      <div>
                        <span className="text-xs font-bold uppercase tracking-widest text-secondary mr-3">
                          Day {day.day}
                        </span>
                        <span className="font-display font-bold text-on-surface">{day.title}</span>
                      </div>
                      {openDay === day.day ? <ChevronUp size={18} className="text-outline" /> : <ChevronDown size={18} className="text-outline" />}
                    </button>
                    {openDay === day.day && (
                      <div className="px-5 pb-5 border-t border-outline-variant/30">
                        <ul className="space-y-2 mt-3">
                          {day.activities.map((a) => (
                            <li key={a} className="flex items-start gap-2 text-on-surface-variant text-sm">
                              <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                              {a}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Booking Widget */}
          <div className="lg:col-span-1">
            <div className="glass-card rounded-3xl p-6 shadow-ambient sticky top-24">
              <div className="mb-4">
                {pkg.originalPrice && (
                  <span className="text-outline text-sm line-through mr-2">
                    {formatCurrency(pkg.originalPrice)}
                  </span>
                )}
                <span className="font-display text-3xl font-bold text-primary">
                  {formatCurrency(pkg.price)}
                </span>
                <span className="text-outline text-sm ml-1">/person</span>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-primary mb-2">
                    Travel Date
                  </label>
                  <div className="relative">
                    <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" />
                    <input
                      type="date"
                      value={travelDate}
                      onChange={(e) => setTravelDate(e.target.value)}
                      className="input-field pl-9"
                      min={new Date().toISOString().split("T")[0]}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-primary mb-2">
                    Travellers
                  </label>
                  <div className="relative">
                    <Users size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" />
                    <input
                      type="number"
                      value={travellers}
                      onChange={(e) => setTravellers(Number(e.target.value))}
                      min={1}
                      max={pkg.maxGuests}
                      className="input-field pl-9"
                    />
                  </div>
                </div>
              </div>

              <button onClick={handleBook} className="btn-primary w-full text-base py-4 mb-4">
                Book This Package
              </button>
              <p className="text-center text-xs text-outline">
                Free cancellation up to 48 hours before travel
              </p>

              <div className="mt-5 pt-5 border-t border-outline-variant/30">
                <div className="flex items-center gap-2 mb-2">
                  <Star size={14} className="text-secondary fill-secondary" />
                  <span className="text-sm font-semibold text-on-surface">
                    {pkg.rating} · {pkg.reviewCount} reviews
                  </span>
                </div>
                <p className="text-xs text-on-surface-variant">Trusted by 1,000+ happy travellers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetail;
