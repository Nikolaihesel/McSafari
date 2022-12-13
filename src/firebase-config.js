
import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAQqzedKX-bwSn_KCzlNv08pcr3lhMTAz0",
  authDomain: "mcsafari-b0ca0.firebaseapp.com",
  projectId: "mcsafari-b0ca0",
  storageBucket: "mcsafari-b0ca0.appspot.com",
  messagingSenderId: "777320348810",
  appId: "1:777320348810:web:25e7d1569a3eb17e9cc173"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 export const db = getFirestore()