import React, { Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import FloatingActions from "../components/common/FloatingActions";

// Lazy-loaded pages
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Packages = lazy(() => import("../pages/Packages"));
const PackageDetail = lazy(() => import("../pages/PackageDetail"));
const Destinations = lazy(() => import("../pages/Destinations"));
const Fleet = lazy(() => import("../pages/Fleet"));
const Gallery = lazy(() => import("../pages/Gallery"));
const Testimonials = lazy(() => import("../pages/Testimonials"));
const Contact = lazy(() => import("../pages/Contact"));
const Booking = lazy(() => import("../pages/Booking"));
const Checkout = lazy(() => import("../pages/Checkout"));
const BookingSuccess = lazy(() => import("../pages/BookingSuccess"));
const NotFound = lazy(() => import("../pages/NotFound"));

// Pages where footer is hidden
const noFooterRoutes = ["/booking-success"];

const PageLoader: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      <span className="text-on-surface-variant text-sm font-medium">Loading...</span>
    </div>
  </div>
);

const AppRouter: React.FC = () => {
  const { pathname } = useLocation();
  const hideFooter = noFooterRoutes.includes(pathname);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/packages/:slug" element={<PackageDetail />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/fleet" element={<Fleet />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/booking-success" element={<BookingSuccess />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      {!hideFooter && <Footer />}
      <FloatingActions />
    </div>
  );
};

export default AppRouter;
