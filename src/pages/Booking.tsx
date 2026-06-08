import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { User, Mail, Phone, MapPin, MessageSquare, ArrowRight, ArrowLeft } from "lucide-react";
import BookingSummary from "../components/booking/BookingSummary";
import { BookingDetails, TravellerInfo } from "../types";
import { packages, vehicles } from "../data";

// Step indicator
const steps = ["Selection", "Traveller Info", "Payment", "Success"];

const Booking: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as Partial<BookingDetails> | null;

  const [booking, setBooking] = useState<BookingDetails>(() => {
    if (state) {
      const basePrice = state.basePrice ?? 0;
      const serviceFee = Math.round(basePrice * 0.08);
      return { ...state, serviceFee, total: basePrice + serviceFee };
    }
    // default: first package
    const pkg = packages[0];
    const basePrice = pkg.price;
    const serviceFee = Math.round(basePrice * 0.08);
    return {
      packageId: pkg.id,
      packageTitle: pkg.title,
      packageImage: pkg.image,
      destination: pkg.destination,
      nights: pkg.nights,
      basePrice,
      serviceFee,
      total: basePrice + serviceFee,
      travellers: 2,
    };
  });

  const [form, setForm] = useState<TravellerInfo>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    specialRequests: "",
  });

  const [selectedVehicle, setSelectedVehicle] = useState(vehicles[0]);

  const handleVehicleChange = (id: string) => {
    const v = vehicles.find((v) => v.id === id);
    if (v) {
      setSelectedVehicle(v);
      setBooking((prev) => ({ ...prev, vehicleId: v.id, vehicleName: v.name }));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/checkout", { state: { booking, travellerInfo: form } });
  };

  return (
    <div className="pt-24 pb-20 bg-background min-h-screen">
      <div className="section-container">
        {/* Progress stepper */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center gap-2">
            {steps.map((step, idx) => (
              <React.Fragment key={step}>
                <div className="flex items-center gap-2">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                      idx === 1
                        ? "bg-primary text-white shadow-md"
                        : idx < 1
                        ? "bg-primary/20 text-primary border-2 border-primary"
                        : "border-2 border-outline-variant text-outline-variant"
                    }`}
                  >
                    {idx + 1}
                  </div>
                  <span
                    className={`text-sm font-semibold hidden sm:block ${
                      idx === 1 ? "text-primary" : "text-outline-variant"
                    }`}
                  >
                    {step}
                  </span>
                </div>
                {idx < steps.length - 1 && (
                  <div
                    className={`h-px flex-1 mx-2 ${
                      idx < 1 ? "bg-primary/30" : "bg-outline-variant/40"
                    }`}
                    style={{ minWidth: 24 }}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-8 shadow-ambient">
              <h2 className="font-display text-2xl font-bold text-primary mb-6">Traveller Information</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Names */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-primary mb-2">First Name</label>
                    <div className="relative">
                      <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" />
                      <input name="firstName" value={form.firstName} onChange={handleChange} required placeholder="John" className="input-field pl-9" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-primary mb-2">Last Name</label>
                    <div className="relative">
                      <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" />
                      <input name="lastName" value={form.lastName} onChange={handleChange} required placeholder="Doe" className="input-field pl-9" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-primary mb-2">Email Address</label>
                  <div className="relative">
                    <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" />
                    <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="john@example.com" className="input-field pl-9" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-primary mb-2">Phone Number</label>
                  <div className="relative">
                    <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" />
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} required placeholder="+91 98765 43210" className="input-field pl-9" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-primary mb-2">Address (Optional)</label>
                  <div className="relative">
                    <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" />
                    <input name="address" value={form.address} onChange={handleChange} placeholder="Your home address" className="input-field pl-9" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-primary mb-2">Special Requests</label>
                  <div className="relative">
                    <MessageSquare size={16} className="absolute left-3 top-3 text-outline" />
                    <textarea name="specialRequests" value={form.specialRequests} onChange={handleChange} rows={3} placeholder="Dietary requirements, accessibility needs, pickup preferences..." className="input-field pl-9 resize-none" />
                  </div>
                </div>

                {/* Vehicle selection */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-primary mb-3">Choose Vehicle</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {vehicles.slice(0, 4).map((v) => (
                      <button
                        key={v.id}
                        type="button"
                        onClick={() => handleVehicleChange(v.id)}
                        className={`p-4 rounded-2xl border-2 text-left transition-all ${
                          selectedVehicle.id === v.id
                            ? "border-primary bg-primary/5"
                            : "border-outline-variant/40 hover:border-primary/40"
                        }`}
                      >
                        <div className="font-bold text-sm text-on-surface">{v.name}</div>
                        <div className="text-xs text-outline mt-1">{v.seating} · ₹{v.pricePerKm}/km</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-2">
                  <button type="button" onClick={() => navigate(-1)} className="btn-outline flex items-center gap-2">
                    <ArrowLeft size={16} /> Back
                  </button>
                  <button type="submit" className="btn-primary flex-1 flex items-center justify-center gap-2 text-base py-3">
                    Continue to Payment <ArrowRight size={18} />
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Booking Summary */}
          <div className="lg:col-span-5 sticky top-24">
            <BookingSummary booking={{ ...booking, vehicleName: selectedVehicle.name }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
