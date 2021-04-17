<template>
  <div id="app">
    <h1>What is strength in climbing?</h1>
    <div class="intro">
      <p>Intro copy lorem ipsum</p>
    </div>
    <h3>Climbing Holds</h3>
    <div class="viz">
      <Holds
        v-for="hold in holdsData"
        :key="hold.id"
        :name="hold.name"
        :description="hold.description"
      />
        <!-- :imagePath="hold.imagePath" -->
    </div>
    <div>
    <!-- <Grades/> -->
    <GradesTwo/>
    </div>
    <Chart/>
    <div class="conclusion">
      <p>Conclusion lorem ipsum</p>
    </div>
    <div class="reference">
      <p>References lorem ipsum</p>
    </div>
  </div>
</template>

<script>
import Holds from './components/Holds.vue'
// import Grades from './components/Grades.vue'
import GradesTwo from './components/GradesTwo.vue'
import Chart from './components/Chart.vue'

import holdsJson from "../public/holdsData.json"

export default {
  name: 'App',
  // created() {
  //   fetch('../public/holdsData.json')
  //     .then(response => response.json())
  //     .then(
  //       // this.holds_data = data
  //       holdsData => console.log(holdsData)
  //     );
  // },
  components: {
    Holds,
    // Grades,
    GradesTwo,
    Chart
  },
  data() {
    return {
      holdsData: holdsJson
    }
  }
  // data: function(){
  //   return {
  //     // holds_data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
  //   }
  // }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.viz {
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(3, 1fr);
}

.center {
  margin: 0 auto;
}

#scrollama-container-flexed {
    display: flex;
    flex-direction: row-reverse;
}

#scrollama-container-flexed .scrollama-graphic {
    flex: 1;
    height: 80vh;
    top: 10vh;
}

#scrollama-container-flexed .scrollama-steps {
    flex: 1;
}
</style>
