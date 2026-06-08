import React from "react";
import PageHero from "../components/common/PageHero";
import SectionHeader from "../components/common/SectionHeader";
import TestimonialCard from "../components/gallery/TestimonialCard";
import { testimonials } from "../data";

const Testimonials: React.FC = () => {
  return (
    <>
      <PageHero
        title="Traveller Stories"
        subtitle="Real experiences from our wonderful guests across South India."
        image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80"
      />

      <section className="py-16 bg-surface-container-low">
        <div className="section-container">
          <SectionHeader
            eyebrow="Reviews"
            title="What Our Guests Say"
            subtitle="Over 1,000+ satisfied families have entrusted us with their most precious moments."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.id} className="flex">
                <TestimonialCard testimonial={t} variant="light" />
              </div>
            ))}
          </div>

          {/* Rating summary */}
          <div className="mt-16 glass-card rounded-3xl p-10 text-center max-w-2xl mx-auto">
            <div className="font-display text-6xl font-bold text-primary mb-2">4.9</div>
            <div className="flex justify-center gap-1 mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-secondary text-2xl">★</span>
              ))}
            </div>
            <p className="text-on-surface-variant">Based on 380+ verified reviews</p>
            <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-outline-variant/30">
              {[
                { label: "Safety", value: "4.9" },
                { label: "Comfort", value: "4.8" },
                { label: "Value", value: "4.9" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="font-display text-2xl font-bold text-primary">{item.value}</div>
                  <div className="text-xs text-outline font-semibold uppercase tracking-wider mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
