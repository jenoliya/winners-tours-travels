export const formatCurrency = (amount: number, currency = "INR"): string => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
};

export const formatDate = (dateStr: string): string => {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

export const generateBookingId = (): string => {
  return `WT-${Date.now().toString(36).toUpperCase()}`;
};

export const slugify = (text: string): string =>
  text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");

export const clamp = (value: number, min: number, max: number): number =>
  Math.min(Math.max(value, min), max);
