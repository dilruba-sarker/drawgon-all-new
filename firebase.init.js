// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCdcs5ZtiGxGrhZuhCScOFJJIAMoxefwE",
  authDomain: "my-9-dragon.firebaseapp.com",
  projectId: "my-9-dragon",
  storageBucket: "my-9-dragon.firebasestorage.app",
  messagingSenderId: "1053096016499",
  appId: "1:1053096016499:web:b73a7beb37fcee0485c806"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);