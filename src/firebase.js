import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DAMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
// };

const firebaseConfig = {
  apiKey: 'AIzaSyC2IhVMJrYMUhB431_aZgqBi61R1-EfPGQ',
  authDomain: 'sushisite-a3e0a.firebaseapp.com',
  projectId: 'sushisite-a3e0a',
  storageBucket: 'sushisite-a3e0a.appspot.com',
  messagingSenderId: '516147894343',
  appId: '1:516147894343:web:4fcd1627c98c0cb2a97962',
  measurementId: 'G-H5P9R4RMJY',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
