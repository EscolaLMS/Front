import { initializeApp } from "firebase/app";

export const firebaseConfig = {
  apiKey: "AIzaSyDoAVMFXyk6oCB51mDnLBeS0FNdz_cmaWY",
  authDomain: "escolasoft-wellms-sm.firebaseapp.com",
  projectId: "escolasoft-wellms-sm",
  storageBucket: "escolasoft-wellms-sm.appspot.com",
  messagingSenderId: "1045794598307",
  appId: "1:1045794598307:web:6df5be8879e2f58ece7e16",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
