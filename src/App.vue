<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth"
import router from './router';

const isLoggedIn = ref(false);

let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  })
})

function handleSignOut() {
  signOut(auth).then(() => {
    router.push("/");
  });
};
</script>

<template>
  <div class="flex bg-slate-100 items-center justify-center">
    <div class="bg-slate-100 flex-col min-h-screen z-20 overflow-hidden p-4 text-2xl">
      <nav>
        <ul>
          <li class="inline-block align-middle max-w-[calc(100%-0.5rem)] m-[0.25rem]">
            <router-link to="/"
              class="flex w-[8.25rem] h-[2.25rem] leading-[2.25rem] pr-[1.125rem] pt-0 uppercase text-[0.725rem] tracking-[.15rem] pl-[calc(0.15rem+1.125rem)] font-normal rounded-[1.625rem] bg-[#FF4085] text-[#FFFFFF] hover:bg-[#8D90B0] !important max-w-full cursor-pointer whitespace-nowrap items-center justify-center align-middle">
              Home
            </router-link>
          </li>
          <li class="inline-block align-middle max-w-[calc(100%-0.5rem)] m-[0.25rem]">
            <router-link to="/feed"
              class="flex w-[8.25rem] h-[2.25rem] leading-[2.25rem] pr-[1.125rem] pt-0 uppercase text-[0.725rem] tracking-[.15rem] pl-[calc(0.15rem+1.125rem)] font-normal rounded-[1.625rem] bg-[#FF4085] text-[#FFFFFF] hover:bg-[#8D90B0] !important max-w-full cursor-pointer whitespace-nowrap items-center justify-center align-middle">
              Feed
            </router-link>
          </li>
          <li v-if="!isLoggedIn" class="inline-block align-middle max-w-[calc(100%-0.5rem)] m-[0.25rem]">
            <router-link to="/Login"
              class="flex w-[8.25rem] h-[2.25rem] leading-[2.25rem] pr-[1.125rem] pt-0 uppercase text-[0.725rem] tracking-[.15rem] pl-[calc(0.15rem+1.125rem)] font-normal rounded-[1.625rem] bg-[#40afff] text-[#FFFFFF] hover:bg-[#8D90B0] !important max-w-full cursor-pointer whitespace-nowrap items-center justify-center align-middle">
              Login
            </router-link>
          </li>
          <li v-if="!isLoggedIn" class="inline-block align-middle max-w-[calc(100%-0.5rem)] m-[0.25rem]">
            <router-link to="/Register"
              class="flex w-[8.25rem] h-[2.25rem] leading-[2.25rem] pr-[1.125rem] pt-0 uppercase text-[0.725rem] tracking-[.15rem] pl-[calc(0.15rem+1.125rem)] font-normal rounded-[1.625rem] bg-[#46b742] text-[#FFFFFF] hover:bg-[#8D90B0] !important max-w-full cursor-pointer whitespace-nowrap items-center justify-center align-middle">
              Register
            </router-link>
          </li>
          <li class="inline-block align-middle max-w-[calc(100%-0.5rem)] m-[0.25rem]">
            <button @click="handleSignOut" v-if="isLoggedIn" class="flex w-[8.25rem] h-[2.25rem] leading-[2.25rem] pr-[1.125rem] pt-0 uppercase text-[0.725rem] tracking-[.15rem] pl-[calc(0.15rem+1.125rem)] font-normal rounded-[1.625rem] bg-[#8f0034] text-[#FFFFFF] hover:bg-[#8D90B0] !important max-w-full cursor-pointer whitespace-nowrap items-center justify-center align-middle">Sign Out</button>
          </li>
        </ul>
      </nav>
      <router-view class="mt-4"/>
    </div>
  </div>
</template>

<style scoped>

</style>
