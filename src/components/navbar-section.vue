<template>
    <header class="w-100 p-3 bg-light shadow d-flex justify-content-between align-items-center">
        <section class="d-flex gap-3 align-items-center">
            <!-- <i class="bi bi-person-circle fs-3 text-secondary"></i> -->
            <div>
                <!-- <h5 class="text-primary fs-5">{{store.userAccount.profile.firstName}} {{store.userAccount.profile.lastName}}</h5> -->
                <!-- <h5 class="text-uppercase">{{store.userAccount.profile.domain}}</h5> -->
                <img v-if="store.userAccount.profile.domain == 'ssplatform'" src="https://drive.google.com/uc?id=1OqP0A5Iqrrh3S23QIhoDmRQnPAQoG4d-" alt="ssplatform logo" width="100" class="img-fluid skeleton">
                <img v-else src="https://drive.google.com/uc?id=1xtGz7iKGyoXdj4ywuJOWAyn-lWVUCMjC" alt="bayan logo" width="80" class="img-fluid skeleton">
            </div>
        </section>
        <nav>
            <div class="d-none d-lg-flex gap-3 align-items-center">
                <a class="no-decoration" :href="store.userAccount.about">About</a>
                <router-link class="no-decoration" to="/profile">Profile</router-link>
                <router-link class="no-decoration" to="/courses">Courses</router-link>
                <a class="no-decoration" :href="store.userAccount.library">Library</a>
                <a class="no-decoration" href="mailto:info@bayanint.com?subject=Feedback">Feedbacks</a>

            </div>
            <i class="d-block d-lg-none bi bi-three-dots-vertical fs-3 text-secondary" data-bs-toggle="dropdown"></i>
            <ul class="dropdown-menu point">
                <li class="dropdown-item"><a class="no-decoration" :href="store.userAccount.about">About</a></li>
                <li class="dropdown-item"><router-link class="no-decoration" to="/profile">Profile</router-link></li>
                <li class="dropdown-item"><router-link class="no-decoration" to="/courses">Courses</router-link></li>
                <li class="dropdown-item"><a class="no-decoration" :href="store.userAccount.library">Library</a></li>
                <li class="dropdown-item"><a class="no-decoration" href="mailto:info@bayanint.com?subject=Feedback">Feedbacks</a></li>
                <li><hr class="dropdown-divider"></li>
                <li class="dropdown-item text-danger" @click="logOut">Logout</li>
            </ul>
        </nav>

    </header>
</template>
<script>

import { useStore } from "../stores/mainStore";
export default {
  setup() {
    const store = useStore();
    return { store };
  },
  methods:{
    logOut(){
        location.reload()
    }
  }
}
</script>