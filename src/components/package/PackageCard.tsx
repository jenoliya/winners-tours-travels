import React from "react";
import { Link } from "react-router-dom";
import { Clock, Users, ArrowRight } from "lucide-react";
import { Package } from "../../types";
import { formatCurrency } from "../../utils";
import StarRating from "../common/StarRating";

interface PackageCardProps {
  pkg: Package;
  horizontal?: boolean;
}

const badgeColors: Record<string, string> = {
  secondary: "bg-secondary text-white",
  tertiary: "bg-tertiary text-white",
  primary: "bg-primary text-white",
};

const PackageCard: React.FC<PackageCardProps> = ({ pkg, horizontal = false }) => {
  if (horizontal) {
    return (
      <div className="glass-card rounded-4xl overflow-hidden flex flex-col md:flex-row group hover:shadow-ambient-lg transition-all duration-300">
        <div className="md:w-5/12 h-64 md:h-auto relative overflow-hidden flex-shrink-0">
          <img
            src={pkg.image}
            alt={pkg.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          {pkg.badge && (
            <span
              className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold ${
                badgeColors[pkg.badgeColor ?? "secondary"]
              }`}
            >
              {pkg.badge}
            </span>
          )}
        </div>
        <div className="p-8 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <StarRating rating={pkg.rating} showNumber />
              <span className="text-xs text-outline">({pkg.reviewCount} reviews)</span>
            </div>
            <h3 className="font-display text-2xl font-bold text-primary mb-2">{pkg.title}</h3>
            <p className="text-on-surface-variant text-sm mb-4">{pkg.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {pkg.inclusions.slice(0, 4).map((item) => (
                <span key={item} className="tag">{item}</span>
              ))}
            </div>
            <div className="flex gap-6 text-on-surface-variant text-sm">
              <span className="flex items-center gap-1.5">
                <Clock size={14} className="text-primary" /> {pkg.duration}
              </span>
              <span className="flex items-center gap-1.5">
                <Users size={14} className="text-primary" /> Max {pkg.maxGuests}
              </span>
            </div>
          </div>
          <div className="flex justify-between items-center mt-6 pt-5 border-t border-outline-variant/40">
            <div>
              {pkg.originalPrice && (
                <span className="text-outline text-sm line-through mr-2">
                  {formatCurrency(pkg.originalPrice)}
                </span>
              )}
              <span className="font-display text-2xl font-bold text-primary">
                {formatCurrency(pkg.price)}
              </span>
              <span className="text-outline text-xs ml-1">/person</span>
            </div>
            <Link
              to={`/packages/${pkg.slug}`}
              className="btn-primary flex items-center gap-2"
            >
              View Details <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="glass-card rounded-4xl overflow-hidden group hover:shadow-ambient-lg transition-all duration-300 flex flex-col">
      <div className="h-52 relative overflow-hidden flex-shrink-0">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
          style={{ transform: "scale(1)" }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
        {pkg.badge && (
          <span
            className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold ${
              badgeColors[pkg.badgeColor ?? "secondary"]
            }`}
          >
            {pkg.badge}
          </span>
        )}
        <div className="absolute bottom-3 right-3 glass-card px-3 py-1 rounded-full">
          <StarRating rating={pkg.rating} size={12} showNumber />
        </div>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-display text-lg font-bold text-primary mb-1">{pkg.title}</h3>
        <p className="text-on-surface-variant text-sm mb-3 line-clamp-2">{pkg.description}</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {pkg.inclusions.slice(0, 3).map((item) => (
            <span key={item} className="tag text-xs">{item}</span>
          ))}
        </div>
        <div className="flex gap-4 text-on-surface-variant text-xs mb-5">
          <span className="flex items-center gap-1">
            <Clock size={12} className="text-primary" /> {pkg.duration}
          </span>
          <span className="flex items-center gap-1">
            <Users size={12} className="text-primary" /> Max {pkg.maxGuests}
          </span>
        </div>
        <div className="flex justify-between items-center mt-auto pt-4 border-t border-outline-variant/40">
          <div>
            {pkg.originalPrice && (
              <span className="text-outline text-xs line-through mr-1">
                {formatCurrency(pkg.originalPrice)}
              </span>
            )}
            <div className="font-display text-xl font-bold text-primary">
              {formatCurrency(pkg.price)}
            </div>
          </div>
          <Link
            to={`/packages/${pkg.slug}`}
            className="btn-primary text-xs px-4 py-2 flex items-center gap-1.5"
          >
            View Details <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
