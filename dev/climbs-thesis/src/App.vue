<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <h1>What is strength in climbing?</h1>
    <div class="intro">
      <p>Intro copy lorem ipsum</p>
    </div>
    <h3>Climbing Holds</h3>
    <div class="viz">
      <template v-for="n in holds_data">
        <Holds/>
      </template>
    </div>
    <Grades/>
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
import Grades from './components/Grades.vue'
import Chart from './components/Chart.vue'

export default {
  name: 'App',
  components: {
    Holds,
    Grades,
    Chart,
    // HelloWorld
  },
  data: function(){
    return {
      holds_data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
    }
  }
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
  grid-template-columns: repeat(4, 1fr);
}
</style>
