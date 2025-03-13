// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDF3qU2X2LZ2ujJpQQo5PxnKE4laKDIPiE",
  authDomain: "quiz-dc681.firebaseapp.com",
  projectId: "quiz-dc681",
  storageBucket: "quiz-dc681.firebasestorage.app",
  messagingSenderId: "296240901885",
  appId: "1:296240901885:web:e4366225ec00fa7bf91894"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export default app;