import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCqMRomSj3IR_v2FDFJc5GgPjSeR3qyxbQ",
  authDomain: "reactportfolio-abhi.firebaseapp.com",
  projectId: "reactportfolio-abhi",
  storageBucket: "reactportfolio-abhi.appspot.com",
  messagingSenderId: "1018700481868",
  appId: "1:1018700481868:web:6a23e961be7c0f5e39bbe9"
};





export const app = initializeApp(firebaseConfig);
export const db = getFirestore();


