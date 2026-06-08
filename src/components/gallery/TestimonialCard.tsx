import React from "react";
import { Quote } from "lucide-react";
import { Testimonial } from "../../types";
import StarRating from "../common/StarRating";

interface TestimonialCardProps {
  testimonial: Testimonial;
  variant?: "light" | "dark";
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  variant = "light",
}) => {
  const isDark = variant === "dark";
  return (
    <div
      className={`p-8 rounded-4xl flex-shrink-0 ${
        isDark ? "glass-dark" : "glass-card shadow-ambient"
      }`}
      style={{ minWidth: 340, maxWidth: 420 }}
    >
      <div className="flex items-start justify-between mb-4">
        <StarRating rating={testimonial.rating} />
        <Quote size={24} className={`${isDark ? "text-white/30" : "text-primary/20"} flex-shrink-0`} />
      </div>
      <p className={`text-sm leading-relaxed italic mb-6 ${isDark ? "text-white/90" : "text-on-surface-variant"}`}>
        "{testimonial.review}"
      </p>
      <div className="flex items-center gap-3">
        <div
          className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm ${
            isDark ? "bg-white/20 text-white" : "bg-primary/10 text-primary"
          }`}
        >
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <h4 className={`font-semibold text-sm ${isDark ? "text-white" : "text-on-surface"}`}>
            {testimonial.name}
          </h4>
          <p className={`text-xs ${isDark ? "text-white/60" : "text-outline"}`}>
            {testimonial.destination} · {testimonial.location}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
