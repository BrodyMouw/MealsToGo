import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBaD5dPck0JJtGenETtWxogRy0y0KJ04kc",
  authDomain: "mealstogo-ad8a7.firebaseapp.com",
  projectId: "mealstogo-ad8a7",
  storageBucket: "mealstogo-ad8a7.appspot.com",
  messagingSenderId: "1062412045043",
  appId: "1:1062412045043:web:0ff6c7ddbf9817f90ec586",
  measurementId: "G-77GVT2F22Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
