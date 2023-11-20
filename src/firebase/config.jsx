// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQVqaqS-jCeKZKaArcR80Ru3c_eX3lnc0",
  authDomain: "miniblogdosdevs.firebaseapp.com",
  projectId: "miniblogdosdevs",
  storageBucket: "miniblogdosdevs.appspot.com",
  messagingSenderId: "124781393385",
  appId: "1:124781393385:web:7737a8cd430582a0284778"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};