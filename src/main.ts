import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import './assets/css/tailwind.css'

import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage} from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBWgdieB9eOQ-9aKOw91nRy7-GvgOoImTQ",
  authDomain: "notif-aesir.firebaseapp.com",
  databaseURL: "https://notif-aesir-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "notif-aesir",
  storageBucket: "notif-aesir.appspot.com",
  messagingSenderId: "620987264380",
  appId: "1:620987264380:web:eaeddcdbc125a25b7488f9",
  measurementId: "G-VVXH5TV2Y8"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase Cloud Messaging and get a reference to the service
const messaging = getMessaging(firebaseApp);
getToken(messaging, { vapidKey: 'BOWwe9WU7P2arMlr0HVYCcFCpZLI6dnw7wIpya6hBHKOVqOUjw_Wwog69ECNzm1CR_gshHzYQrD4wgGXf6n5U30'}).then((currentToken) => {
  if (currentToken) {
    console.log("Success!");
  } else {
    console.log('No registration token available. Request permission to generate one.');
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
});

// Initialize Vue
const vueApp = createApp(App)

vueApp.use(router)
vueApp.mount('#app')
