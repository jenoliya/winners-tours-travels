import React from "react";
import { Link } from "react-router-dom";
import { Destination } from "../../types";

interface DestinationCardProps {
  destination: Destination;
  tall?: boolean;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination, tall }) => {
  return (
    <Link
      to="/packages"
      className={`group relative rounded-3xl overflow-hidden cursor-pointer block ${
        tall ? "aspect-[3/4]" : "aspect-[4/3]"
      }`}
    >
      <img
        src={destination.image}
        alt={destination.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5">
        <h3 className="text-white font-display text-xl font-bold">{destination.name}</h3>
        <p className="text-white/80 text-sm font-medium">{destination.tagline}</p>
        <span className="mt-2 text-white/60 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Explore packages →
        </span>
      </div>
    </Link>
  );
};

export default DestinationCard;
