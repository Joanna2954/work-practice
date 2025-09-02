// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaH7mS2mpW3S3e2Lzn1UVOHEulJ17B1XQ",
  authDomain: "fir-bbf23.firebaseapp.com",
  projectId: "fir-bbf23",
  storageBucket: "fir-bbf23.firebasestorage.app",
  messagingSenderId: "906701242325",
  appId: "1:906701242325:web:f3e95fb33014a4faec475c",
  measurementId: "G-V943K7TSR9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider()

export {auth,provider}