import React, { useState } from "react";
import PageHero from "../components/common/PageHero";
import SectionHeader from "../components/common/SectionHeader";
import { galleryImages } from "../data";

const categories = ["All", "Landscapes", "Wildlife", "Spiritual", "Culture"];

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <>
      <PageHero
        title="Photo Gallery"
        subtitle="Moments captured across South India's most breathtaking landscapes."
        image="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1600&q=80"
      />

      <section className="py-16">
        <div className="section-container">
          <SectionHeader eyebrow="Gallery" title="Snapshots of Joy" centered />

          {/* Category filters */}
          <div className="flex gap-3 justify-center flex-wrap mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-white shadow-ambient"
                    : "bg-surface-container text-on-surface-variant hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            style={{ gridAutoRows: "220px" }}
          >
            {filtered.map((img) => (
              <div
                key={img.id}
                className="rounded-3xl overflow-hidden group cursor-pointer"
                style={{
                  gridColumn: `span ${img.colSpan ?? 1}`,
                  gridRow: `span ${img.rowSpan ?? 1}`,
                }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
