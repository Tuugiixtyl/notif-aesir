<script setup lang="ts">
import { ref } from "vue";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const router = useRouter()

function register() {
  const auth = getAuth()
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
      console.log("Successfully registered!");

      console.log(auth.currentUser);

      router.push("/feed");
    })
    .catch((error) => {
      console.log(error.code);
      alert(error.message);
    })
};

function signInWithGoogle() {
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      console.log(result.user);
      router.push("/feed");
    })
    .catch((error) => {
      console.log(error);
    })
}
</script>
<template>
  <ul>
    <li
      class="relative mb-3 w-full max-w-2xl flex flew-wrap z-10 items-center justify-center grow-0 shrink-0 text-center rounded-3xl opacity-100 ease-in-out duration-300 bg-white border-2 border-500/[.20] hover:border-slate-400">
      <div class="border-inherit p-5 w-full text-black text-center">
        <h1 class="pb-5">Create an Account</h1>
        <div class="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <input v-model="email" type="text"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Email" required>
          </div>
          <div>
            <input v-model="password" type="Password"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Password" required>
          </div>
        </div>
        <p class="py-5"><button @click="register"
            class="outline outline-blue-500 px-4 rounded-[12px] bg-lime-200 hover:bg-lime-500 hover:text-white">Register</button>
        </p>
        <p class="py-5"><button @click="signInWithGoogle"
            class="outline outline-slate-400 px-4 rounded-[12px] hover:bg-gray-100 hover:text-teal-400">Sign In With
            Google</button></p>
      </div>
    </li>
  </ul>
</template>
