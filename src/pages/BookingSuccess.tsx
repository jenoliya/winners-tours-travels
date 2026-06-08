import React from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { CheckCircle2, Download, Home, Phone, Calendar, MapPin, Car } from "lucide-react";
import { BookingDetails, TravellerInfo } from "../types";
import { formatCurrency, formatDate } from "../utils";
import { COMPANY_INFO } from "../constants";

const BookingSuccess: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as {
    booking: BookingDetails;
    bookingId: string;
    travellerInfo?: TravellerInfo;
  } | null;

  const booking = state?.booking;
  const bookingId = state?.bookingId ?? "WT-DEMO123";
  const traveller = state?.travellerInfo;

  return (
    <div className="pt-24 pb-20 min-h-screen bg-background flex items-start justify-center">
      <div className="section-container max-w-3xl">
        {/* Success card */}
        <div className="glass-card rounded-4xl overflow-hidden shadow-ambient-lg">
          {/* Top banner */}
          <div className="bg-adventure-gradient px-8 py-12 text-center relative overflow-hidden">
            <div className="absolute -top-16 -left-16 w-48 h-48 bg-white/5 rounded-full" />
            <div className="absolute -bottom-10 -right-10 w-36 h-36 bg-white/5 rounded-full" />
            <div className="relative z-10">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-5 shadow-xl">
                <CheckCircle2 size={40} className="text-primary" />
              </div>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-white mb-2">
                Booking Confirmed!
              </h1>
              <p className="text-white/80 text-base">
                {traveller?.firstName
                  ? `Thank you, ${traveller.firstName}! Your journey is all set.`
                  : "Your journey is all set. Get ready to explore!"}
              </p>
              <div className="mt-5 inline-block bg-white/20 px-5 py-2 rounded-full">
                <span className="text-white text-sm font-bold tracking-widest">
                  Booking ID: {bookingId}
                </span>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="p-8 space-y-8">
            {/* Trip summary grid */}
            {booking && (
              <div>
                <h2 className="font-display text-xl font-bold text-primary mb-5">Trip Summary</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      icon: <MapPin size={16} className="text-primary" />,
                      label: "Destination",
                      value: booking.destination ?? "—",
                    },
                    {
                      icon: <Calendar size={16} className="text-primary" />,
                      label: "Travel Date",
                      value: booking.travelDate ? formatDate(booking.travelDate) : "To Be Confirmed",
                    },
                    {
                      icon: <Car size={16} className="text-primary" />,
                      label: "Vehicle",
                      value: booking.vehicleName ?? "Premium Vehicle",
                    },
                    {
                      icon: <CheckCircle2 size={16} className="text-primary" />,
                      label: "Package",
                      value: booking.packageTitle ?? "Selected Package",
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-start gap-3 p-4 bg-surface-container-low rounded-2xl"
                    >
                      <div className="mt-0.5 flex-shrink-0">{item.icon}</div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-outline mb-0.5">
                          {item.label}
                        </p>
                        <p className="font-semibold text-on-surface text-sm">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Amount */}
            {booking?.total && (
              <div className="flex justify-between items-center p-5 bg-primary/5 rounded-2xl border border-primary/10">
                <span className="font-bold text-on-surface">Total Paid</span>
                <span className="font-display text-2xl font-bold text-primary">
                  {formatCurrency(booking.total)}
                </span>
              </div>
            )}

            {/* What's next */}
            <div>
              <h3 className="font-display text-lg font-bold text-primary mb-4">What Happens Next?</h3>
              <div className="space-y-4">
                {[
                  {
                    step: "1",
                    title: "Confirmation Email",
                    desc: `A detailed booking confirmation has been sent to ${traveller?.email ?? "your email address"}.`,
                  },
                  {
                    step: "2",
                    title: "Driver Assignment",
                    desc: "We'll assign your dedicated chauffeur and share contact details 24 hours before your trip.",
                  },
                  {
                    step: "3",
                    title: "Day of Travel",
                    desc: "Your driver will arrive at the pickup location 10 minutes early. Enjoy the journey!",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <p className="font-bold text-on-surface text-sm">{item.title}</p>
                      <p className="text-on-surface-variant text-xs mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact support */}
            <div className="flex items-center gap-4 p-5 bg-surface-container rounded-2xl">
              <Phone size={22} className="text-primary flex-shrink-0" />
              <div>
                <p className="text-sm font-bold text-on-surface">Need Help?</p>
                <p className="text-xs text-on-surface-variant">
                  Call our 24/7 support at{" "}
                  <a href={`tel:${COMPANY_INFO.phone}`} className="text-primary font-bold hover:underline">
                    {COMPANY_INFO.phone}
                  </a>
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={() => window.print()}
                className="btn-outline flex items-center justify-center gap-2 flex-1"
              >
                <Download size={16} /> Download Ticket
              </button>
              <Link to="/" className="btn-primary flex items-center justify-center gap-2 flex-1">
                <Home size={16} /> Back to Home
              </Link>
            </div>
          </div>
        </div>

        {/* Explore more */}
        <div className="mt-8 text-center">
          <p className="text-on-surface-variant text-sm mb-4">
            Want to plan another trip?
          </p>
          <button onClick={() => navigate("/packages")} className="btn-secondary">
            Explore More Packages
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingSuccess;
