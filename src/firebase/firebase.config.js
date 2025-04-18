// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCf2pPgFw3tWN9RLzrIITRnyWybNPFzopQ",
  authDomain: "fir-a0dd4.firebaseapp.com",
  projectId: "fir-a0dd4",
  storageBucket: "fir-a0dd4.firebasestorage.app",
  messagingSenderId: "928518289110",
  appId: "1:928518289110:web:a91dda2c462bc3dae43b77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export {initializeApp , firebaseConfig , auth , db} 