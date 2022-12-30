// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");
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
const app_db = initializeApp(firebaseConfig);
const db = getFirestore(app_db);

module.exports = {
    app_db,
    db
}