// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4NMRjf7I0Kj5_B1hwyqmbwxbWK_K3MnQ",
  authDomain: "fir-storage-d56fa.firebaseapp.com",
  projectId: "fir-storage-d56fa",
  storageBucket: "fir-storage-d56fa.appspot.com",
  messagingSenderId: "456223602171",
  appId: "1:456223602171:web:f6a2a027b0d15132ca475e",
  measurementId: "G-MF6J9YKKLX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db=getFirestore(app);

export { auth, googleProvider,db };
  