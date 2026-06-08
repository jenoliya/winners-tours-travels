import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Lock, ArrowLeft, CheckCircle2, Smartphone } from "lucide-react";
import BookingSummary from "../components/booking/BookingSummary";
import { BookingDetails, TravellerInfo } from "../types";
import { packages } from "../data";
import { formatCurrency, generateBookingId } from "../utils";

const steps = ["Selection", "Traveller Info", "Payment", "Success"];

const paymentMethods = [
  { id: "gpay", label: "GPay (Direct Transfer)", sublabel: "Pay directly to owner at +91 98765 43210", badge: "Recommended" },
  { id: "upi", label: "UPI / PhonePe / Paytm", sublabel: "Any UPI app supported" },
  { id: "card", label: "Credit / Debit Card", sublabel: "Visa, Mastercard, Rupay" },
  { id: "netbanking", label: "Net Banking", sublabel: "All major Indian banks" },
];

const Checkout: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as { booking: BookingDetails; travellerInfo: TravellerInfo } | null;

  const booking: BookingDetails = state?.booking ?? (() => {
    const pkg = packages[0];
    const base = pkg.price;
    return { packageTitle: pkg.title, packageImage: pkg.image, destination: pkg.destination, nights: pkg.nights, basePrice: base, serviceFee: Math.round(base * 0.08), total: base + Math.round(base * 0.08), travellers: 2 };
  })();

  const [selectedMethod, setSelectedMethod] = useState("gpay");
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleConfirm = () => {
    if (!agreed) return;
    setLoading(true);
    const bookingId = generateBookingId();
    setTimeout(() => {
      setLoading(false);
      navigate("/booking-success", { state: { booking, bookingId, travellerInfo: state?.travellerInfo } });
    }, 1800);
  };

  return (
    <div className="pt-24 pb-20 bg-background min-h-screen">
      <div className="section-container">
        {/* Stepper */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center gap-2">
            {steps.map((step, idx) => (
              <React.Fragment key={step}>
                <div className="flex items-center gap-2">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                      idx === 2
                        ? "bg-primary text-white shadow-md"
                        : idx < 2
                        ? "bg-primary/20 text-primary border-2 border-primary"
                        : "border-2 border-outline-variant text-outline-variant"
                    }`}
                  >
                    {idx < 2 ? <CheckCircle2 size={16} /> : idx + 1}
                  </div>
                  <span className={`text-sm font-semibold hidden sm:block ${idx === 2 ? "text-primary" : idx < 2 ? "text-primary/60" : "text-outline-variant"}`}>
                    {step}
                  </span>
                </div>
                {idx < steps.length - 1 && (
                  <div className={`h-px flex-1 mx-2 ${idx < 2 ? "bg-primary/30" : "bg-outline-variant/40"}`} style={{ minWidth: 24 }} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Payment methods */}
          <section className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-8 shadow-ambient space-y-8">
              <div>
                <h2 className="font-display text-2xl font-bold text-on-surface mb-1">Select Payment Method</h2>
                <p className="text-on-surface-variant text-sm">Complete your booking with a secure payment.</p>
              </div>

              <div className="space-y-3">
                {paymentMethods.map((method) => (
                  <button
                    key={method.id}
                    type="button"
                    onClick={() => setSelectedMethod(method.id)}
                    className={`w-full flex items-center justify-between p-5 rounded-2xl border-2 transition-all text-left ${
                      selectedMethod === method.id
                        ? "border-primary bg-primary/5"
                        : "border-outline-variant/40 hover:border-primary/30"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center border border-outline-variant/30 shadow-sm flex-shrink-0">
                        <Smartphone size={20} className="text-primary" />
                      </div>
                      <div>
                        <div className="font-bold text-on-surface text-sm">{method.label}</div>
                        <div className="text-xs text-on-surface-variant">{method.sublabel}</div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      {method.badge && (
                        <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">
                          {method.badge}
                        </span>
                      )}
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          selectedMethod === method.id ? "border-primary" : "border-outline-variant"
                        }`}
                      >
                        {selectedMethod === method.id && (
                          <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Terms */}
              <div className="space-y-5">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-1 rounded text-primary accent-primary"
                  />
                  <span className="text-sm text-on-surface-variant leading-relaxed">
                    I agree to the{" "}
                    <span className="text-primary font-bold cursor-pointer hover:underline">Terms and Conditions</span>,
                    Cancellation Policy, and Privacy Policy of Winners Tours & Travels. I confirm that all passenger details are correct.
                  </span>
                </label>

                <button
                  onClick={handleConfirm}
                  disabled={!agreed || loading}
                  className={`w-full py-4 rounded-2xl font-display font-bold text-lg flex items-center justify-center gap-3 transition-all ${
                    agreed && !loading
                      ? "bg-adventure-gradient text-white hover:scale-[1.02] active:scale-[0.98] shadow-lg"
                      : "bg-outline-variant/30 text-outline cursor-not-allowed"
                  }`}
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                      </svg>
                      Processing...
                    </>
                  ) : (
                    <>
                      Confirm & Pay {formatCurrency(booking.total ?? 0)}
                      <Lock size={18} />
                    </>
                  )}
                </button>

                <div className="flex justify-center gap-6 pt-2">
                  {["🔒 256-bit SSL", "✅ Secure Checkout", "🛡️ Money-back Guarantee"].map((item) => (
                    <span key={item} className="text-xs text-outline">{item}</span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 text-on-surface-variant text-sm hover:text-primary transition-colors"
              >
                <ArrowLeft size={16} /> Back to Traveller Info
              </button>
            </div>
          </section>

          {/* Summary */}
          <aside className="lg:col-span-5 sticky top-24">
            <BookingSummary booking={booking} />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
