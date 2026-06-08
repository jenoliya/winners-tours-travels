import React from "react";
import { useNavigate } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background pt-20">
      <div className="text-center px-6">
        <div className="font-display text-[120px] md:text-[180px] font-bold text-primary/10 leading-none select-none">
          404
        </div>
        <div className="-mt-8 relative z-10">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
            Page Not Found
          </h1>
          <p className="text-on-surface-variant max-w-md mx-auto mb-8">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => navigate(-1)} className="btn-outline flex items-center justify-center gap-2">
              <ArrowLeft size={16} /> Go Back
            </button>
            <button onClick={() => navigate("/")} className="btn-primary flex items-center gap-2">
              <Home size={16} /> Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
