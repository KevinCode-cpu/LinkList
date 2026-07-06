import { initializeApp } from "firebase/app";

import {
    getAuth,
    GoogleAuthProvider
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDpZ2qjBv-DgMwNtE1WrF71HKTfBuupy7I",
  authDomain: "linklist-0.firebaseapp.com",
  projectId: "linklist-0",
  storageBucket: "linklist-0.firebasestorage.app",
  messagingSenderId: "909235474183",
  appId: "1:909235474183:web:a2e2ab5f3eb29caaf53fa2",
  measurementId: "G-3YWS69X4JD"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();