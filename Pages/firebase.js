
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSMyNh0TAgs5iacp81PqGvTmCK-10dDXY",
  authDomain: "wish-list-30dce.firebaseapp.com",
  projectId: "wish-list-30dce",
  storageBucket: "wish-list-30dce.appspot.com",
  messagingSenderId: "1077037270637",
  appId: "1:1077037270637:web:94d2f1b52af0198ef2a164"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
