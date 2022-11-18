// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsqq9gbYsbXX4FfNz2jmvw-xvU6aCtdyo",
  authDomain: "react-form-auth-f5038.firebaseapp.com",
  projectId: "react-form-auth-f5038",
  storageBucket: "react-form-auth-f5038.appspot.com",
  messagingSenderId: "21034908802",
  appId: "1:21034908802:web:f85c2e524c2931a057889b",
  measurementId: "G-59XSY05JLH"
};

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_APP_ID,
//   measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();