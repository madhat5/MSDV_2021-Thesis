<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <h1>What is strength in climbing?</h1>
    <div class="intro">
      <p>Intro lorem ipsum</p>
    </div>
    <Holds/>
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
</style>
