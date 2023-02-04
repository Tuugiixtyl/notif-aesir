// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
  apiKey: "AIzaSyBWgdieB9eOQ-9aKOw91nRy7-GvgOoImTQ",
  authDomain: "notif-aesir.firebaseapp.com",
  databaseURL: "https://notif-aesir-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "notif-aesir",
  storageBucket: "notif-aesir.appspot.com",
  messagingSenderId: "620987264380",
  appId: "1:620987264380:web:eaeddcdbc125a25b7488f9",
  measurementId: "G-VVXH5TV2Y8"
};

firebase.initializeApp(firebaseConfig);