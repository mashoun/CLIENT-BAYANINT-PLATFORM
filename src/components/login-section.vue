<template>
    <section class="w-100 h-100 position-fixed top-0 start-0 z-3 bg-light d-flex justify-content-center align-items-center">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-lg-6">
                    <aside class="p-3 bg-light shadow rounded d-flex flex-column gap-3 align-items-center text-center">
                        <!-- <i class="bi bi-person-circle fs-1 text-secondary"></i> -->
                        <img src="https://drive.google.com/uc?id=1Q9qlpoa5O39s2xxnQE6NkcOlAtN2SXlh" alt="logo" class="skeleton img-fluid rounded-circle" width="100">
                        <!-- <h5 class="text-primary fs-5">Bayan International Group</h5> -->
                        <blockquote class="fs-6 text-secondary">
                            <!-- <i class="bi bi-quote text-warning fs-4"></i> -->
                            <span class="">"{{randomQuote}}"</span>
                            <!-- <i class="bi bi-quote text-warning fs-4 rotate-180"></i> -->
                        </blockquote>
                        <input v-model="store.userID" type="text" placeholder="USER-ID" class="form-control">
                        <input v-model="store.userPassword" type="password" placeholder="USER-PASSWORD" class="form-control">
                        <button @click="login" class="w-100 btn btn-primary">
                            <span v-if="!spinner">Login</span>
                            <span v-else class="spinner-grow spinner-grow-sm"></span>
                        </button>
                        <small class="fs-x-small text-secondary ">Last update 2023-9-17 version 1.2.2</small>
                    </aside>
                </div>
            </div>
        </div>
    </section>
</template>
<script>

import { useStore } from "../stores/mainStore";
export default {
    setup() {
        const store = useStore();
        return { store };
    },
    data(){
        return{
            spinner:false
        }
    },
    computed:{
        randomQuote(){
            return this.store.quotes[Math.floor(Math.random() * 47)]
        }
    },
    methods:{
        login(){
            this.spinner = true
            fetch(this.store.getApi() + '?userLogin=1',{
                method:"POST",
                headers:{
                    "Content-Type":"text/plain"
                },
                body:JSON.stringify({
                    userID:this.store.userID,
                    userPassword:this.store.userPassword
                })
            })
            .then(res => res.json())
            .then(res => {
                if(res == null){
                    alert('Invalid username or password')
                    this.spinner = false
                }else{

                    // console.log(res);
                    this.store.userAccount = res
                    this.spinner = false
                    this.store.isLogedIn = true
                    this.store.semesterTab = this.getSemesters()[0]
                }
            })
            .catch(err => {
                alert("Network error")
                this.spinner = false
            })

        },
        
        getSemesters(){
            var arr = []
            // this.store.userAccount.courses.forEach(c => {
            //   arr.push(c.semester)
            // })
            // console.log(arr);
            for(let c of this.store.userAccount.courses){
                // console.log(c.semester);
                arr.push(c.semester)
            }
            return Array.from(new Set(arr))
        }
    }
}
</script>
