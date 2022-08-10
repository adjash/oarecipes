// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {getDatabase, ref, onValue} from 'firebase/database';
import {getStorage} from 'firebase/storage';
import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGbIsPuUg7HgwZdiZ109KlczhrzILfniw",
  authDomain: "oarecipes-8353e.firebaseapp.com",
  projectId: "oarecipes-8353e",
  storageBucket: "oarecipes-8353e.appspot.com",
  messagingSenderId: "1016683880351",
  appId: "1:1016683880351:web:b550eec1d9337d6cdba7aa",
  measurementId: "G-HK3D2YCNSY"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

const storage = getStorage(app);

export {db, storage}