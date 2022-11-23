// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAp9pusCMatW9fA_3VUxRr3kQAtwdZ4nwM",
  authDomain: "ctg-mobile-resale-market.firebaseapp.com",
  projectId: "ctg-mobile-resale-market",
  storageBucket: "ctg-mobile-resale-market.appspot.com",
  messagingSenderId: "242920862489",
  appId: "1:242920862489:web:4125da35d9fb2bb9ac0b88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;