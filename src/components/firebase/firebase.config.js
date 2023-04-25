// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5QOVIX0vXPBNHzJ5dUbZpsjfjZhNkOzU",
  authDomain: "the-latest-news-d39e0.firebaseapp.com",
  projectId: "the-latest-news-d39e0",
  storageBucket: "the-latest-news-d39e0.appspot.com",
  messagingSenderId: "626599456647",
  appId: "1:626599456647:web:1387652c13eef4c1d5ad22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;