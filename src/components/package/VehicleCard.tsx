import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Users, Luggage } from "lucide-react";
import { Vehicle } from "../../types";

interface VehicleCardProps {
  vehicle: Vehicle;
}

const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle }) => {
  const navigate = useNavigate();

  return (
    <article className="glass-card rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-ambient">
      <div className="relative h-56 bg-surface-container-low overflow-hidden">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {vehicle.badge && (
          <span className="absolute top-4 right-4 bg-secondary text-white font-bold text-xs px-3 py-1 rounded-full">
            {vehicle.badge}
          </span>
        )}
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-display text-lg font-bold text-primary mb-1">{vehicle.name}</h3>
        <p className="text-on-surface-variant text-sm mb-4">{vehicle.type}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          <div className="flex items-center gap-1.5 text-on-surface-variant bg-surface-container-low px-3 py-1.5 rounded-lg">
            <Users size={14} />
            <span className="text-xs font-semibold">{vehicle.seating}</span>
          </div>
          <div className="flex items-center gap-1.5 text-on-surface-variant bg-surface-container-low px-3 py-1.5 rounded-lg">
            <Luggage size={14} />
            <span className="text-xs font-semibold">{vehicle.luggage}</span>
          </div>
          {vehicle.features.map((feat) => (
            <div
              key={feat}
              className="flex items-center gap-1.5 text-on-surface-variant bg-surface-container-low px-3 py-1.5 rounded-lg"
            >
              <span className="text-xs font-semibold">{feat}</span>
            </div>
          ))}
        </div>

        <div className="mt-auto pt-4 border-t border-outline-variant/30 flex items-center justify-between">
          <div>
            <p className="text-xs text-outline font-semibold uppercase tracking-wide">Starting from</p>
            <p className="font-display text-xl font-bold text-primary">₹{vehicle.pricePerKm}/km</p>
          </div>
          <button
            onClick={() => navigate("/booking")}
            className="btn-secondary flex items-center gap-2 text-xs"
          >
            Book Now <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </article>
  );
};

export default VehicleCard;
