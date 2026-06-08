import React from "react";
import { useNavigate } from "react-router-dom";
import { ShieldCheck, Map, Star } from "lucide-react";
import PageHero from "../components/common/PageHero";
import VehicleCard from "../components/package/VehicleCard";
import SectionHeader from "../components/common/SectionHeader";
import { vehicles } from "../data";

const driverHighlights = [
  {
    icon: <ShieldCheck size={22} className="text-white" />,
    title: "Fully Vetted Drivers",
    desc: "Extensive background checks and continuous performance monitoring for your peace of mind.",
  },
  {
    icon: <Map size={22} className="text-white" />,
    title: "Local Navigation Experts",
    desc: "Intimate knowledge of local routes and shortcuts to ensure you arrive on time, every time.",
  },
  {
    icon: <Star size={22} className="text-white" />,
    title: "Hospitality Trained",
    desc: "Punctual, polite, and professional behavior that reflects the premium nature of our brand.",
  },
];

const Fleet: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <PageHero
        title="Premium Travel Fleet"
        subtitle="Experience the ultimate in comfort and reliability. Curated vehicles for every journey."
        image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80"
      />

      {/* Fleet Grid */}
      <section className="py-16">
        <div className="section-container">
          <SectionHeader eyebrow="Our Fleet" title="Choose Your Ride" centered />
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((v) => (
              <VehicleCard key={v.id} vehicle={v} />
            ))}
            {/* Custom charter card */}
            <article className="glass-card rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-ambient">
              <div className="h-56 bg-adventure-gradient flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Star size={32} className="text-white" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white">Custom Requests</h3>
                  <p className="text-white/80 text-sm mt-2">
                    Need a specific vehicle or long-term rental package?
                  </p>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-center text-center">
                <p className="text-on-surface-variant text-sm mb-6">
                  Contact our fleet manager for bespoke luxury transport solutions and corporate contracts.
                </p>
                <button
                  onClick={() => navigate("/contact")}
                  className="btn-outline flex items-center justify-center gap-2"
                >
                  Contact Us
                </button>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Driver Highlights */}
      <section className="bg-surface-container py-16">
        <div className="section-container grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              eyebrow="Our Drivers"
              title="Professional Chauffeured Excellence"
              subtitle="A premium vehicle is only as good as the person behind the wheel. Our drivers are carefully vetted and trained."
            />
            <div className="space-y-6">
              {driverHighlights.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-container flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-primary mb-1">{item.title}</h4>
                    <p className="text-on-surface-variant text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-secondary/10 rounded-3xl blur-xl" />
            <img
              src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80"
              alt="Professional chauffeur"
              className="relative z-10 rounded-3xl shadow-xl w-full object-cover aspect-4/3"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="section-container">
          <div className="glass-card max-w-3xl mx-auto p-12 rounded-4xl text-center">
            <h2 className="font-display text-3xl font-bold text-primary mb-3">
              Ready to Start Your Journey?
            </h2>
            <p className="text-on-surface-variant mb-8">
              Book your premium vehicle in just a few clicks or call us for a custom quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => navigate("/booking")} className="btn-secondary text-base px-10 py-4">
                Book Online Now
              </button>
              <a href="tel:+914221234567" className="btn-outline text-base px-10 py-4">
                Call +91 422 1234 567
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Fleet;
