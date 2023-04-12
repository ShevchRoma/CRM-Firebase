import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { API_KEY } from "../constans/api";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "crm-test-d99d4.firebaseapp.com",
  projectId: "crm-test-d99d4",
  storageBucket: "crm-test-d99d4.appspot.com",
  messagingSenderId: "1042924658347",
  appId: "1:1042924658347:web:e3be585f17a67027ffe1ee",
};

/* var firebase = require('firebase');
var firebaseui = require('firebaseui'); */

/* const firebase = require("firebase");
require("firebase/firestore"); */

export const app = initializeApp(firebaseConfig);
export const googleAuthProvider = new GoogleAuthProvider();
export const auth = getAuth(app);

export const db = getFirestore(app);
