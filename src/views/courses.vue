<template>
  <section class="container d-flex flex-column gap-5">
    <div class="row g-4">
        <div class="col-12">
            <h4 class="text-secondary">Check out the courses you are currently enrolled in.</h4>
        </div>
        <div class="col-12 col-lg-4">
          <select class="form-select" v-model="semesterTab">
            <option v-for="s in getSemesters()" :key="s" :value="s">{{s}}</option>
          </select>
        </div>
    </div>
    <div class="row g-4">
        
        <div v-for="c in coursesBySemester" :key="c" class="col-12 col-lg-6">
            <aside class="p-3 bg-light shadow-sm rounded d-flex flex-column gap-2 position-relative">
                <h5 class="text-primary fs-5 font-monospace"><span>{{c.title}}</span></h5>
                <small class="text-success text-uppercase">
                    <span>{{c.code}}</span><i class="bi bi-dot"></i>
                    <span>{{c.semester}}</span><i class="bi bi-dot"></i>
                    <span>{{c.instructor}}</span>
                </small>
                <!-- <b class="text-secondary pop">MARK = {{c.mark}}</b> -->
                <p class="text-secondary text-fade-2">{{c.description}}</p>
                <a :href="c.link" class="btn btn-outline-primary">Go to classroom</a>
                <span v-if="c.mark != ''" class="bg-dark position-absolute top-0 end-0 translate-middle badge rounded-pill fs-small">
                   {{getLetterGrade(c.mark)}} - {{c.mark}} / 100 
                </span>

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
  data(){
    return{
      semesterTab : "Semester 1"
    }
  },
  methods:{
    getLetterGrade(scoreString) {
      const score = parseFloat(scoreString);
    
      if (isNaN(score)) {
        return "NAN";
      }

      if(score < 0) return "NAN"
      if(score >= 0 && score <= 49) return "F"
      if(score >= 50 && score <= 59) return "D"
      if(score >= 61 && score <= 69) return "C"
      if(score >= 70 && score <= 89) return "B"
      if(score >= 90 && score <= 100) return "A"
    },
    getSemesters(){
      var arr = []
      this.store.userAccount.courses.forEach(c => {
        arr.push(c.semester)
      })
      console.log(arr);
      return Array.from(new Set(arr))
    }
  },
  computed:{
    coursesBySemester(){
      return this.store.userAccount.courses.filter(c => {
        return c.semester == this.semesterTab
      })
    }
  },
  mounted(){
    console.log(this.getLetterGrade('51'));
  }
}
</script>