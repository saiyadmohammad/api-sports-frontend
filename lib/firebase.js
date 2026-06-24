import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBqnkmIca9_hPCXcR7BDyanRMi-NJoJPrE",
  authDomain: "iota-theme.firebaseapp.com",
  projectId: "iota-theme",
  storageBucket: "iota-theme.firebasestorage.app",
  messagingSenderId: "514379471008",
  appId: "1:514379471008:web:39423824b23695246791c5"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

