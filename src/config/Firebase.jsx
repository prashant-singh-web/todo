// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

//  web app's Firebase configuration
const firebaseConfig = {
  // Your Firebase configuration here
  apiKey: "AIzaSyBLWcPbtP3xnEP-lb_r8S-55cpWhiBFumo",
  authDomain: "notestakingapp-39745.firebaseapp.com",
  projectId: "notestakingapp-39745",
  storageBucket: "notestakingapp-39745.appspot.com",
  messagingSenderId: "919427286385",
  appId: "1:919427286385:web:00c558632e7733a27da2d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// for authentication
export const auth = getAuth(app);
// for authentication with google o
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
