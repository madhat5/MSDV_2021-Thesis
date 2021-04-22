<template>
  <div id="app">
    <h1>What is strength in climbing?</h1>
    <div class="intro">
      <p>Intro copy lorem ipsum</p>
    </div>
    <div class="section-1">
      <h3>Climbing Holds</h3>
      <div class="viz">
        <Holds
          v-for="hold in holdsData"
          :key="hold.id"
          :name="hold.name"
          :description="hold.description"
          :imagePath="hold.imagePath"
        />
          <!-- :imagePath="hold.imagePath" -->
      </div>
    </div>
    <div class="section-2">
      <h3>Climbing Grades</h3>
    
      <div class="grades-copy">
        <p>Before we dive into specific grades, let’s walk through some of the main grading systems: the V scale, YDS scale, Font scale, and French scale. Keep in mind at the end of the day, grading systems are both variable and subjective in their attempts to quantify difficulty. Free climbing grades are generally understood to reflect the hardest move or section on a particular route. - they do not indicate time commitment or duration.</p>
        
        <p>
        <b>V scale</b>
        <br/>
        Specific to bouldering, the V scale, also known as the Hueco scale, was developed by John 'Vermin' Sherman; he based this system off of another/simpler system - John Gill’s B-system for bouldering. In this V scale, V0 moves are the equivalent of 5.10 climbing moves (part of the YDS scale, which we’ll see further down). The Vscale is open ended, with the simplest/easiest moves starting at V0 and the current hardest boulder problem is V17.
        </p>

        <p>
        <b>Font/Fontainebleau</b>
        <br/>
        Specific to bouldering, the Fontainebleau grading system has been around much longer than the Hueco system. This scale’s grades follow a similar rating system to French free-climb ratings (which we’ll see further down).The scale includes a numerical grade ascending with difficulty; starting at level 6, letters are appended to the numbers starting (format: 7C). To differentiate the Font scale from its similar French free-climbing scale, letters are capitalized in the Font system. 
        </p>

        <p>
        <b>YDS (Yosemite Decimal System)</b>
        <br/>
        Specific to sport/roped climbing, this scale is split into different classes, from 1 to 5. Class 5 is our main concern. Starting here, we consider the climbing as technical climbing where hands and feet are in constant use, technical gear and ropes are used, and any fall may be fatal. The class 5 grading is further split with a decimal point and additional numbers (format: 5.X). YDS uses letters above 5.9 to create increments between full number grades (format: 5.11c).
        </p>

        <p>
        <b>French</b>
        <br/>
        Specific to sport/roped climbing, this scale starts at 1 (easiest), and incrementally increases difficulty. Starting at level 4, the scale adds letters a-c for smaller increases in difficulty. For even smaller increments in difficulty, starting at level 6 the scale includes a + with each letter. To differentiate the French scale from the Font scale, letters are kept lower case. 
        </p>

      </div>
      <Grades/>
    </div>
    <div class="section-3">
      <h3>Comparing problems</h3>
      <Problems/>
    </div>
    <div>
      <Chart/>
    </div>
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
import Problems from './components/Problems.vue'

import holdsJson from "../public/holdsData.json"
import problemsJson from "../public/problemsData.json"

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
    Grades,
    Problems,
    Chart
  },
  data() {
    return {
      holdsData: holdsJson,
      problemsData: problemsJson
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.viz {
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(3, 1fr);
}

.section-1 .viz {
  text-align: center;
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
