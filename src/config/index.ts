export const getAPIURL = () => {
  if (typeof window !== "undefined" && window.VITE_APP_API_URL) {
    return window.VITE_APP_API_URL;
  } else {
    return import.meta.env.VITE_APP_PUBLIC_API_URL;
  }
};

// Usage
export const API_URL =
  window.VITE_APP_API_URL || import.meta.env.VITE_APP_PUBLIC_API_URL || null;

export const APP_URL =
  window.VITE_APP_URL || import.meta.env.VITE_APP_PUBLIC_URL || null;

export const MOBILE_DEVICE =
  window.VITE_APP_MOBILE_DEVICE ||
  import.meta.env.VITE_APP_PUBLIC_MOBILE_DEVICE ||
  null;
