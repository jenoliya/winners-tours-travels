import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import { COMPANY_INFO } from "../../constants";

const FloatingActions: React.FC = () => {
  return (
    <div className="fixed right-5 bottom-8 flex flex-col gap-3 z-50">
      <div className="group flex items-center justify-end gap-3">
        <span className="bg-white text-primary text-xs font-semibold px-3 py-1 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-2 group-hover:translate-x-0 whitespace-nowrap">
          WhatsApp Us
        </span>
        <a
          href={`https://wa.me/${COMPANY_INFO.whatsapp.replace(/\D/g, "")}`}
          target="_blank"
          rel="noreferrer"
          className="w-14 h-14 bg-green-500 text-white rounded-full shadow-xl flex items-center justify-center hover:scale-110 hover:shadow-2xl transition-all duration-300 active:scale-95"
          aria-label="WhatsApp"
        >
          <MessageCircle size={24} />
        </a>
      </div>
      <div className="group flex items-center justify-end gap-3">
        <span className="bg-white text-primary text-xs font-semibold px-3 py-1 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-2 group-hover:translate-x-0 whitespace-nowrap">
          Call Now
        </span>
        <a
          href={`tel:${COMPANY_INFO.phone}`}
          className="w-14 h-14 bg-primary text-white rounded-full shadow-xl flex items-center justify-center hover:scale-110 hover:shadow-2xl transition-all duration-300 active:scale-95"
          aria-label="Call us"
        >
          <Phone size={24} />
        </a>
      </div>
    </div>
  );
};

export default FloatingActions;
