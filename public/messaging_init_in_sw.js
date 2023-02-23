import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging/sw";

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
var firebaseApp = initializeApp({
  apiKey: "AIzaSyBWgdieB9eOQ-9aKOw91nRy7-GvgOoImTQ",
  authDomain: "notif-aesir.firebaseapp.com",
  databaseURL: "https://notif-aesir-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "notif-aesir",
  storageBucket: "notif-aesir.appspot.com",
  messagingSenderId: "620987264380",
  appId: "1:620987264380:web:eaeddcdbc125a25b7488f9",
  measurementId: "G-VVXH5TV2Y8"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = getMessaging(firebaseApp);