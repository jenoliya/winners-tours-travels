import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import PageHero from "../components/common/PageHero";
import SectionHeader from "../components/common/SectionHeader";
import { destinations } from "../data";

const Destinations: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <PageHero
        title="Our Destinations"
        subtitle="Discover the unspoiled beauty of South India's most stunning hill stations and wilderness."
        image="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1600&q=80"
      />

      <section className="py-16">
        <div className="section-container">
          <SectionHeader
            eyebrow="Explore"
            title="Where Will You Go?"
            subtitle="Each destination offers a unique experience — from misty tea gardens to sacred spiritual centres."
            centered
          />

          <div className="space-y-16 mt-12">
            {destinations.map((dest, idx) => (
              <div
                key={dest.id}
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                  idx % 2 !== 0 ? "md:[direction:rtl]" : ""
                }`}
              >
                <div
                  className="relative rounded-3xl overflow-hidden aspect-video group"
                  style={idx % 2 !== 0 ? { direction: "ltr" } : {}}
                >
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <MapPin size={16} className="text-white" />
                    <span className="text-white font-semibold text-sm">Tamil Nadu / Kerala</span>
                  </div>
                </div>

                <div style={idx % 2 !== 0 ? { direction: "ltr" } : {}}>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                    Featured Destination
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mt-2 mb-2">
                    {dest.name}
                  </h2>
                  <p className="text-secondary font-semibold text-sm mb-4">{dest.tagline}</p>
                  <p className="text-on-surface-variant leading-relaxed mb-6">{dest.description}</p>
                  <div className="mb-6">
                    <p className="text-xs font-bold uppercase tracking-widest text-outline mb-3">
                      Highlights
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {dest.highlights.map((h) => (
                        <span key={h} className="tag">{h}</span>
                      ))}
                    </div>
                  </div>
                  <button
                    onClick={() => navigate("/packages")}
                    className="btn-primary flex items-center gap-2"
                  >
                    View Packages <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="section-container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Can't decide? We'll help you choose!
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Our travel specialists are just a call away. Let us craft the perfect itinerary for you.
          </p>
          <button onClick={() => navigate("/contact")} className="bg-white text-primary font-bold px-10 py-4 rounded-2xl hover:bg-white/90 transition-all">
            Talk to a Specialist
          </button>
        </div>
      </section>
    </>
  );
};

export default Destinations;
