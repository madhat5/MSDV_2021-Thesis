<template>
  <div id="app">
    <h1>Spotify Top50 of 2019</h1>
    <div class="grade-tables">
      <Grades/>
    </div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col >
          <Chart 
            v-if="data_chart.length > 0"
            :data="data"
            :data_chart="data_chart"
            :colorScale="colorScale"
            :key="chartReloadKey"
          />
        </b-col>
        <b-col sm="3">
          <Legend 
            v-if="data.length > 0"
            :data="data"
            :legend_class="legend_class"
            :colorScale="colorScale"
            @inputChange="filterInput"
            @inputChangeBack="filterInputBack"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import * as d3 from "d3";

import Grades from '@/components/Grades.vue'
import Chart from '@/components/Chart.vue'
import Legend from '@/components/Legend.vue'

export default {
  name: 'app',
  components: {
    Grades,
    Chart,
    Legend,
  },
  data: function(){
    return {
      data: [],
      data_chart: [],
      legend_class: [],
      chartReloadKey: 0,
      colorScale: null,
    }
  },
  created: function() {
    var that = this 

    d3.csv("spotify_top50_2019.csv",
      function(data) {  
        that.data.push(data)
      }
    );
    // d3.json("hardClimbData.json",
    //   function(data) {  
    //     that.data.push(data)
    //   }
    // );
    this.data_chart = this.data
    this.colorScale = d3.scaleOrdinal(d3.schemeSet3)
    this.data_chart = this.data
  },
  methods: {
    filterInput (input) {
      // this.data_chart = this.data_chart.filter(function(d){return d.Genre != input;})
      this.data_chart = this.data_chart.filter(function(d){return d.geoInfo.country != input;})
      this.chartReloadKey += 1
    },
    filterInputBack (input) {
      // this.data_chart = this.data_chart.concat(this.data.filter(function(d){return d.Genre == input;}))
      this.data_chart = this.data_chart.concat(this.data.filter(function(d){return d.geoInfo.country == input;}))
      this.chartReloadKey += 1
    },
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>