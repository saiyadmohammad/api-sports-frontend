import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA07KYGY_7VbUtd6UjOcF3W8bOgTgSksAY",
  authDomain: "api-sports-d47ff.firebaseapp.com",
  projectId: "api-sports-d47ff",
  storageBucket: "api-sports-d47ff.firebasestorage.app",
  messagingSenderId: "612541163129",
  appId: "1:612541163129:web:a4b066ce6590a1a40716a8"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

