import { business } from "@/data/business";

// Canonical number: SSR, initial HTML, and Schema.org JSON-LD only.
export const CANONICAL_PHONE = business.phone;
export const CANONICAL_PHONE_TEL = business.phone.replace(/\s/g, "");
export const CANONICAL_PHONE_LOCAL = business.phoneLocal;

// Tracking disabled — use canonical number everywhere.
export const TRACKING_PHONE = business.trackingPhone ?? business.phone;
export const TRACKING_PHONE_TEL = (business.trackingPhone ?? business.phone).replace(/\s/g, "");
export const TRACKING_PHONE_LOCAL = business.trackingPhoneLocal ?? business.phoneLocal;

export const formatPhoneDisplay = (phone: string): string => {
  if (phone.startsWith("+44")) {
    const cleaned = phone.replace("+44", "").replace(/\s/g, "");
    if (cleaned.length === 10) {
      return `+44 ${cleaned.slice(0, 4)} ${cleaned.slice(4)}`;
    }
    return `+44 ${cleaned}`;
  }
  return phone;
};

export const formatTrackingPhoneDisplay = (): string => formatPhoneDisplay(TRACKING_PHONE);
