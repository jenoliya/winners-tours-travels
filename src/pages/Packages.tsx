import React, { useState } from "react";
import { Search, Filter } from "lucide-react";
import PageHero from "../components/common/PageHero";
import PackageCard from "../components/package/PackageCard";
import { packages } from "../data";

const durations = ["All", "1 Day", "2 Days", "3 Days", "4+ Days"];
const destinations = ["All", "Ooty", "Munnar", "Valparai", "Kodaikanal", "Coimbatore"];

const Packages: React.FC = () => {
  const [search, setSearch] = useState("");
  const [duration, setDuration] = useState("All");
  const [dest, setDest] = useState("All");

  const filtered = packages.filter((pkg) => {
    const matchSearch =
      pkg.title.toLowerCase().includes(search.toLowerCase()) ||
      pkg.destination.toLowerCase().includes(search.toLowerCase());
    const matchDuration =
      duration === "All" ||
      (duration === "1 Day" && pkg.days === 1) ||
      (duration === "2 Days" && pkg.days === 2) ||
      (duration === "3 Days" && pkg.days === 3) ||
      (duration === "4+ Days" && pkg.days >= 4);
    const matchDest =
      dest === "All" || pkg.destination.toLowerCase().includes(dest.toLowerCase());
    return matchSearch && matchDuration && matchDest;
  });

  return (
    <>
      <PageHero
        title="Tour Packages"
        subtitle="Handcrafted itineraries to South India's most stunning destinations."
        image="https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=1600&q=80"
      />

      <section className="py-16">
        <div className="section-container">
          {/* Filters */}
          <div className="glass-card rounded-2xl p-5 mb-10 flex flex-col md:flex-row gap-4 items-end">
            <div className="flex-1">
              <label className="block text-xs font-bold uppercase tracking-widest text-primary mb-2">
                Search
              </label>
              <div className="relative">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" />
                <input
                  type="text"
                  placeholder="Search packages or destinations..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="input-field pl-9"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-primary mb-2">
                Duration
              </label>
              <select
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="input-field"
              >
                {durations.map((d) => <option key={d}>{d}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-primary mb-2">
                Destination
              </label>
              <select
                value={dest}
                onChange={(e) => setDest(e.target.value)}
                className="input-field"
              >
                {destinations.map((d) => <option key={d}>{d}</option>)}
              </select>
            </div>
            <div className="flex items-center gap-2 text-outline text-sm">
              <Filter size={16} />
              <span>{filtered.length} packages</span>
            </div>
          </div>

          {/* Results */}
          {filtered.length === 0 ? (
            <div className="text-center py-24 text-on-surface-variant">
              <p className="text-2xl font-display font-bold text-primary mb-2">No packages found</p>
              <p>Try adjusting your search or filters.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filtered.map((pkg) => (
                <PackageCard key={pkg.id} pkg={pkg} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Packages;
