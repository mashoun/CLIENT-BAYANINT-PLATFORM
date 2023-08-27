<template>
  
  <login-section v-if="!store.isLogedIn"></login-section>
  <navbar-section></navbar-section>
  <main class="my-5">
    <router-view></router-view>
  </main>
</template>

<script>

import { useStore } from "./stores/mainStore";
import loginSection from './components/login-section.vue'
import navbarSection from './components/navbar-section.vue'
export default {
  components:{loginSection,navbarSection},
  setup() {
    const store = useStore();
    return { store };
  },
}
</script>