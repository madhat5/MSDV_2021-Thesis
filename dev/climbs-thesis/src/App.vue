<template>
  <!-- add static page code (cf treatment copy) -->
  <main id="app">
    <div class="container">
      <div class="chart" ref="chart"></div>

    </div>
  </main>
</template>

<script>
import * as d3 from 'd3'
import moment from "moment"
import axios from "axios"

export default {
  name: 'App',
  data() {
    return {
      type: "",
      climberList: [],
      totalClimbers: null,
      sendDates: [],
      totalGapYears: null
    }
  },
  methods: {
    // get data
    getClimbData() {
      fetch("../public/hardClimbData.json")
        .then
    }
  },
  components: {
    HelloWorld
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
