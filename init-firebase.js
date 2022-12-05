// Import the functions you need from the SDKs you need
//import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
//import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBivzi0jgULAKPXBQBekiJWyLK_MgkNneo",
  authDomain: "mtho-reall.firebaseapp.com",
  projectId: "mtho-reall",
  storageBucket: "mtho-reall.appspot.com",
  messagingSenderId: "936946323838",
  appId: "1:936946323838:web:e3627e458fd7f9a09b232f",
  measurementId: "G-74V3H1NVNS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = firebase.firestore();
(async ()=>{
    await db.collection.get().then(snap =>{
    snap.forEach(val => console.log(val.data()));
}).catch(err => console.log(err));
})();

const analytics = getAnalytics(app);