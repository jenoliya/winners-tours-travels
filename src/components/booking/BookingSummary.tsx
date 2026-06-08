import React from "react";
import { Calendar, Car, Users, Shield } from "lucide-react";
import { BookingDetails } from "../../types";
import { formatCurrency, formatDate } from "../../utils";

interface BookingSummaryProps {
  booking: BookingDetails;
}

const BookingSummary: React.FC<BookingSummaryProps> = ({ booking }) => {
  return (
    <div className="space-y-4">
      <h2 className="font-display text-2xl font-bold text-primary">Booking Summary</h2>

      {/* Package card */}
      <div className="glass-card rounded-2xl overflow-hidden shadow-ambient">
        {booking.packageImage && (
          <div className="h-44 relative">
            <img
              src={booking.packageImage}
              alt={booking.packageTitle}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 right-3 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Premium Package
            </div>
          </div>
        )}
        <div className="p-5 space-y-4">
          <div>
            <h3 className="font-display font-bold text-on-surface">
              {booking.packageTitle ?? "Selected Package"}
            </h3>
            <p className="text-on-surface-variant text-sm">
              {booking.destination} · {booking.nights ? `${booking.nights} Night${booking.nights > 1 ? "s" : ""}` : "Day Tour"}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 border-y border-outline-variant/40 py-4">
            {booking.travelDate && (
              <div className="flex items-start gap-2">
                <Calendar size={16} className="text-primary mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-outline uppercase tracking-wider">Date</p>
                  <p className="text-on-surface text-sm font-semibold">{formatDate(booking.travelDate)}</p>
                </div>
              </div>
            )}
            {booking.vehicleName && (
              <div className="flex items-start gap-2">
                <Car size={16} className="text-primary mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-outline uppercase tracking-wider">Vehicle</p>
                  <p className="text-on-surface text-sm font-semibold">{booking.vehicleName}</p>
                </div>
              </div>
            )}
            {booking.travellers && (
              <div className="flex items-start gap-2">
                <Users size={16} className="text-primary mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-outline uppercase tracking-wider">Guests</p>
                  <p className="text-on-surface text-sm font-semibold">{booking.travellers} Travellers</p>
                </div>
              </div>
            )}
          </div>

          {/* Fare Breakdown */}
          <div className="space-y-2">
            <p className="text-xs font-bold text-outline uppercase tracking-wider">Fare Breakdown</p>
            <div className="flex justify-between text-sm text-on-surface-variant">
              <span>Base Fare</span>
              <span>{formatCurrency(booking.basePrice ?? 0)}</span>
            </div>
            <div className="flex justify-between text-sm text-on-surface-variant">
              <span>Service Fee & Tax (8%)</span>
              <span>{formatCurrency(booking.serviceFee ?? 0)}</span>
            </div>
            <div className="pt-3 border-t border-dashed border-outline-variant flex justify-between items-center">
              <span className="font-bold text-on-surface">Total Amount</span>
              <span className="font-display text-xl font-bold text-primary">
                {formatCurrency(booking.total ?? 0)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Trust badge */}
      <div className="flex items-center gap-4 p-4 bg-surface-container-low rounded-xl border border-primary/10">
        <Shield size={32} className="text-primary flex-shrink-0" fill="rgba(0,61,155,0.12)" />
        <div>
          <p className="font-semibold text-on-surface text-sm">Secure Checkout Guarantee</p>
          <p className="text-xs text-on-surface-variant">
            Your data is protected by 256-bit SSL encryption.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookingSummary;
