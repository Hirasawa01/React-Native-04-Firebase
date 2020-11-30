import firebase from 'firebase';
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBLbbtzd5vUFQyf4WuvAieGhfqKoQmS0Tg",
    authDomain: "colecionaveisfb-6ed14.firebaseapp.com",
    databaseURL: "https://colecionaveisfb-6ed14.firebaseio.com",
    projectId: "colecionaveisfb-6ed14",
    storageBucket: "colecionaveisfb-6ed14.appspot.com",
    messagingSenderId: "643018051744",
    appId: "1:643018051744:web:d2bc699da9ad70ff05b9c5",
    measurementId: "G-H3NCTJJMNQ"
  };

 var app = firebase.initializeApp(firebaseConfig);

 export const conexaoFS = app.firestore();