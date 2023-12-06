// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from "firebase/firestore";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCeMrHZvK_HtRx3qyS8pAz3XQmZ7PPyeFk",
//   authDomain: "nestedtable-390fb.firebaseapp.com",
//   projectId: "nestedtable-390fb",
//   storageBucket: "nestedtable-390fb.appspot.com",
//   messagingSenderId: "806994601027",
//   appId: "1:806994601027:web:c871d1e589911e4089a0f6",
//   measurementId: "G-4GN35BQJ2L"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export  const db = getFirestore(app);
// const analytics = getAnalytics(app);


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3e-DoPN3PEd497rCD7O6qKSFcpEqHZSQ",
  authDomain: "react-list-demo.firebaseapp.com",
  projectId: "react-list-demo",
  storageBucket: "react-list-demo.appspot.com",
  messagingSenderId: "260151869989",
  appId: "1:260151869989:web:ccdeb5ecbb5d941ed935cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database= getFirestore(app)