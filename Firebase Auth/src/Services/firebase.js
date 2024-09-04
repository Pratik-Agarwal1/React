// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDS0sRVcNbbb9yJqtMRTzTgcQ5tLQZan4o",
  authDomain: "fir-auth-c5917.firebaseapp.com",
  projectId: "fir-auth-c5917",
  storageBucket: "fir-auth-c5917.appspot.com",
  messagingSenderId: "48414122863",
  appId: "1:48414122863:web:61e672baa609fb9878be9a",
  measurementId: "G-W85891JJ77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export  const auth = getAuth(app);
export const provider = new GoogleAuthProvider();