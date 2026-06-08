import React from "react";
import { useNavigate } from "react-router-dom";
import { ShieldCheck, Compass, Heart, Award } from "lucide-react";
import PageHero from "../components/common/PageHero";
import SectionHeader from "../components/common/SectionHeader";
import { COMPANY_INFO } from "../constants";

const values = [
  {
    icon: <ShieldCheck size={28} className="text-primary" />,
    bg: "bg-primary-fixed",
    title: "Safety Above All",
    desc: "Every vehicle is GPS-tracked, every driver background-verified. Your safety is non-negotiable.",
  },
  {
    icon: <Compass size={28} className="text-secondary" />,
    bg: "bg-secondary-fixed",
    title: "Local Expertise",
    desc: "Born and raised in the Nilgiris region, our team shares intimate knowledge of every road and hidden gem.",
  },
  {
    icon: <Heart size={28} className="text-tertiary" />,
    bg: "bg-tertiary-fixed",
    title: "Passion for Travel",
    desc: "We don't just drive you to destinations — we craft memories that last a lifetime.",
  },
  {
    icon: <Award size={28} className="text-primary" />,
    bg: "bg-primary-fixed",
    title: "Premium Service",
    desc: "From meticulously maintained vehicles to hospitality-trained chauffeurs, every detail matters.",
  },
];

const milestones = [
  { year: "2012", title: "Founded", desc: "Started with a single Innova Crysta and a dream to redefine travel in South India." },
  { year: "2015", title: "Fleet Expansion", desc: "Grew to 15 vehicles covering Ooty, Munnar, Valparai, and all Nilgiri destinations." },
  { year: "2018", title: "1,000 Trips", desc: "Crossed the milestone of 1,000 successful tours with a 4.9-star average rating." },
  { year: "2021", title: "Digital Booking", desc: "Launched online booking platform making it seamless for travellers across India." },
  { year: "2024", title: "10,000+ Trips", desc: "Over 10,000 journeys completed — cementing our place as South India's top tour operator." },
];

const team = [
  {
    name: "Rajesh Kumar",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    bio: "15+ years in luxury travel. Born in Coimbatore with a passion for the Nilgiri hills.",
  },
  {
    name: "Anitha Selvam",
    role: "Operations Head",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    bio: "Ensures every trip runs like clockwork. Former hospitality professional with an eye for detail.",
  },
  {
    name: "Murugan Pillai",
    role: "Fleet Manager",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    bio: "20+ years in vehicle maintenance. Every car in our fleet is his personal responsibility.",
  },
];

const About: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero — Kodaikanal misty lake, verified travel image */}
      <PageHero
        title="About Winners Tours & Travels"
        subtitle="Making travel personal, safe, and memorable since 2012."
        image="https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=1600&q=80"
        height="h-80 md:h-[420px]"
      />

      {/* Story */}
      <section className="py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                eyebrow="Our Story"
                title="A Journey That Began With a Dream"
              />
              <div className="space-y-4 text-on-surface-variant leading-relaxed">
                <p>
                  In 2012, Rajesh Kumar — a Coimbatore native with a deep love for the Nilgiri hills —
                  set out with one Toyota Innova Crysta and a simple promise: to give every traveller the
                  experience they deserve. Not just a ride, but a curated journey.
                </p>
                <p>
                  Today, Winners Tours & Travels has grown into South India's most trusted travel partner, having
                  completed over <strong className="text-primary">{COMPANY_INFO.tripsCompleted} trips</strong> and
                  delighting <strong className="text-primary">{COMPANY_INFO.satisfiedTravellers} families</strong>.
                  Our fleet of premium vehicles, our team of hospitality-trained chauffeurs, and our
                  intimate knowledge of every hairpin bend in the Nilgiris — these are the pillars of our brand.
                </p>
                <p>
                  We believe travel should be effortless, safe, and deeply personal. From airport
                  pick-ups to week-long multi-destination tours, every journey we craft carries the
                  same commitment we started with on day one.
                </p>
              </div>
              <div className="mt-8 flex gap-4">
                <button onClick={() => navigate("/packages")} className="btn-primary">
                  Explore Packages
                </button>
                <button onClick={() => navigate("/contact")} className="btn-outline">
                  Contact Us
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-secondary/8 rounded-4xl blur-2xl" />
              {/* Ooty lake & Nilgiri hills — verified */}
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
                alt="Ooty lake and Nilgiri hills"
                className="relative z-10 rounded-3xl w-full object-cover aspect-4/3 shadow-ambient-lg"
              />
              <div className="absolute -bottom-6 -right-6 z-20 glass-card p-5 rounded-2xl shadow-ambient">
                <div className="font-display text-3xl font-bold text-primary">12+</div>
                <div className="text-xs text-outline font-semibold uppercase tracking-wider">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary">
        <div className="section-container grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "10,000+", label: "Trips Completed" },
            { value: "1,000+", label: "Happy Travellers" },
            { value: "15+", label: "Fleet Vehicles" },
            { value: "4.9★", label: "Average Rating" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-4xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-white/70 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-surface-container-low">
        <div className="section-container">
          <SectionHeader eyebrow="What We Stand For" title="Our Core Values" centered />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val) => (
              <div key={val.title} className="glass-card rounded-3xl p-8 text-center hover:shadow-ambient transition-all">
                <div className={`w-16 h-16 ${val.bg} rounded-2xl flex items-center justify-center mx-auto mb-5`}>
                  {val.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-primary mb-3">{val.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="section-container">
          <SectionHeader eyebrow="Our Journey" title="Milestones" centered />
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-1/2 -translate-x-0.5 top-0 bottom-0 w-px bg-outline-variant/40 hidden md:block" />
            <div className="space-y-10">
              {milestones.map((m, idx) => (
                <div
                  key={m.year}
                  className={`relative flex flex-col md:flex-row gap-6 items-start md:items-center ${
                    idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${idx % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="glass-card rounded-2xl p-6 inline-block">
                      <span className="text-xs font-bold uppercase tracking-widest text-secondary mb-1 block">
                        {m.year}
                      </span>
                      <h3 className="font-display font-bold text-primary mb-2">{m.title}</h3>
                      <p className="text-on-surface-variant text-sm">{m.desc}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-5 h-5 rounded-full bg-primary border-4 border-white shadow-md flex-shrink-0 z-10" />
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-surface-container-low">
        <div className="section-container">
          <SectionHeader eyebrow="The People Behind the Wheel" title="Meet Our Team" centered />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member) => (
              <div key={member.name} className="glass-card rounded-3xl p-8 text-center hover:shadow-ambient transition-all">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-primary-fixed"
                />
                <h3 className="font-display font-bold text-primary">{member.name}</h3>
                <p className="text-secondary text-xs font-bold uppercase tracking-widest my-1">{member.role}</p>
                <p className="text-on-surface-variant text-sm mt-3">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
