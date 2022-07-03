// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAmbZX7pK9918iwsgg_6CHbDSDyFMCKqOM',
  authDomain: 'flat-finder-9e834.firebaseapp.com',
  projectId: 'flat-finder-9e834',
  storageBucket: 'flat-finder-9e834.appspot.com',
  messagingSenderId: '299441254758',
  appId: '1:299441254758:web:004cf25667b3a75f3058a7',
  measurementId: 'G-XESJMJHRTP',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
