<template>
    <section class="container d-flex flex-column gap-5">
        <div class="row">
            <div class="col-12">
                <h4 class="text-secondary">Check out your profile</h4>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <aside class="p-3 bg-light rounded"> 
                    <div class="table-responsive">
                        <table class="table table-hover">
                            <tbody>
                                <tr v-for="(value,key) in store.userAccount.profile" :key="key">
                                    <td v-if="key != 'index'" class="fw-bold text-uppercase">{{key}}</td>
                                    <td v-if="key != 'index'" :ref="key" class="font-monospace" >{{value}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </aside>
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
}
</script>