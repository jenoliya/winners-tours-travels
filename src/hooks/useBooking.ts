import { useState, useCallback } from "react";
import { BookingDetails, TravellerInfo } from "../types";
import { SERVICE_FEE_RATE } from "../constants";
import { generateBookingId } from "../utils";

const initialBooking: BookingDetails = {};
const initialTraveller: TravellerInfo = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  specialRequests: "",
};

export const useBooking = () => {
  const [booking, setBooking] = useState<BookingDetails>(initialBooking);
  const [travellerInfo, setTravellerInfo] = useState<TravellerInfo>(initialTraveller);
  const [bookingId, setBookingId] = useState<string>("");

  const updateBooking = useCallback((details: Partial<BookingDetails>) => {
    setBooking((prev) => {
      const updated = { ...prev, ...details };
      if (details.basePrice !== undefined) {
        const serviceFee = Math.round(details.basePrice * SERVICE_FEE_RATE);
        updated.serviceFee = serviceFee;
        updated.total = details.basePrice + serviceFee;
      }
      return updated;
    });
  }, []);

  const updateTravellerInfo = useCallback((info: Partial<TravellerInfo>) => {
    setTravellerInfo((prev) => ({ ...prev, ...info }));
  }, []);

  const confirmBooking = useCallback(() => {
    const id = generateBookingId();
    setBookingId(id);
    return id;
  }, []);

  const resetBooking = useCallback(() => {
    setBooking(initialBooking);
    setTravellerInfo(initialTraveller);
    setBookingId("");
  }, []);

  return {
    booking,
    travellerInfo,
    bookingId,
    updateBooking,
    updateTravellerInfo,
    confirmBooking,
    resetBooking,
  };
};
