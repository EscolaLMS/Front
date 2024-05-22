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

export const VITE_APP_FIREBASE_VAPID_KEY =
  window.VITE_APP_FIREBASE_VAPID_KEY ||
  import.meta.env.VITE_APP_FIREBASE_VAPID_KEY ||
  null;
export const VITE_APP_FIREBASE_APIKEY =
  window.VITE_APP_FIREBASE_APIKEY ||
  import.meta.env.VITE_APP_FIREBASE_APIKEY ||
  null;
export const VITE_APP_FIREBASE_AUTHDOMAIN =
  window.VITE_APP_FIREBASE_AUTHDOMAIN ||
  import.meta.env.VITE_APP_FIREBASE_AUTHDOMAIN ||
  null;
export const VITE_APP_FIREBASE_PROJECTID =
  window.VITE_APP_FIREBASE_PROJECTID ||
  import.meta.env.VITE_APP_FIREBASE_PROJECTID ||
  null;
export const VITE_APP_FIREBASE_STORAGEBUCKET =
  window.VITE_APP_FIREBASE_STORAGEBUCKET ||
  import.meta.env.VITE_APP_FIREBASE_STORAGEBUCKET ||
  null;
export const VITE_APP_FIREBASE_MESSAGINGSENDERID =
  window.VITE_APP_FIREBASE_MESSAGINGSENDERID ||
  import.meta.env.VITE_APP_FIREBASE_MESSAGINGSENDERID ||
  null;
export const VITE_APP_FIREBASE_APPID =
  window.VITE_APP_FIREBASE_APPID ||
  import.meta.env.VITE_APP_FIREBASE_APPID ||
  null;
export const VITE_APP_IOS_APIKEY =
  window.VITE_APP_IOS_APIKEY || import.meta.env.VITE_APP_IOS_APIKEY || null;
export const VITE_APP_ANDROID_APIKEY =
  window.VITE_APP_ANDROID_APIKEY ||
  import.meta.env.VITE_APP_ANDROID_APIKEY ||
  null;
