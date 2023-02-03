import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import './assets/css/tailwind.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const app = initializeApp(firebaseConfig);
const vueApp = createApp(App)

vueApp.use(router)
vueApp.mount('#app')
