// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDGnq010Dw-Jrl1Ww2zt18tIytyt_PMRHI',
  authDomain: 'contractfixs.firebaseapp.com',
  projectId: 'contractfixs',
  storageBucket: 'contractfixs.appspot.com',
  messagingSenderId: '736135069',
  appId: '1:736135069:web:8a890c97e30e4fb5b51174',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
