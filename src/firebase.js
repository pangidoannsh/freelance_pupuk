// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAxdJwbIcUeOwARzz_sN13L3XA6042_8X8",
    authDomain: "poc-koto.firebaseapp.com",
    databaseURL: "https://poc-koto-default-rtdb.asia-southeast1.firebasedatabase.app?key=poc-koto",
    projectId: "poc-koto",
    storageBucket: "poc-koto.appspot.com",
    messagingSenderId: "572523535194",
    appId: "1:572523535194:web:54bdda3c35648968bf3163",
    measurementId: "G-QP29HBS9CF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);



