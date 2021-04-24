<template>
  <div id="app">
    <div class="thesis-title">
      <h1>What is strength in climbing?</h1>
      <div class="line"></div>
      <h2>Are climbers getting stronger or are there more strong climbers?</h2>
    </div>
    <div class="section section-0 intro">
      <h3>Introduction</h3>
      <p>As I’ve delved into climbing, both in practice and research, one thing has quickly become apparent: the continuous effort and never-ending endeavour to get stronger. As I began to look into this further, and developed questions about climbing benchmarks around the world, as well as the rate of strength increase of climbers, I focused my research on two questions: have we as climbers gotten stronger over time, or are there more strong climbers (or both)? Our treatment for this thesis will attempt to answer these questions by understanding what strength is in climbing. We will focus on bouldering and sport/lead climbing. It should be noted that there are other types of climbing, including: top-rope; ice-climbing; mountaineering and trad climbing; free solo and deep water solo. We will analyze several aspects of climbing, including what the records and benchmarks are for climbing routes, what the various grading systems are (how climbs are measured); what makes a climb hard; how climbers get stronger; and other aspects such as the increase in popularity of the sport over time, and accompanying research and literature. As we work on answering the aforementioned questions, we will work to expand the reader’s climbing knowledge and vocabulary throughout this essay.</p>
    </div>
    <div class="section section-1">
      <h3>Climbing Holds</h3>
      <div class="viz">
        <Holds
          v-for="hold in holdsData"
          :key="hold.id"
          :name="hold.name"
          :description="hold.description"
          :imagePath="hold.imagePath"
          :overlayImg="hold.overlayImg"
        />
          <!-- :imagePath="hold.imagePath" -->
      </div>
    </div>
    <div class="section section-2">
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

        <!-- <p>
        <b>YDS (Yosemite Decimal System)</b>
        <br/>
        Specific to sport/roped climbing, this scale is split into different classes, from 1 to 5. Class 5 is our main concern. Starting here, we consider the climbing as technical climbing where hands and feet are in constant use, technical gear and ropes are used, and any fall may be fatal. The class 5 grading is further split with a decimal point and additional numbers (format: 5.X). YDS uses letters above 5.9 to create increments between full number grades (format: 5.11c).
        </p>

        <p>
        <b>French</b>
        <br/>
        Specific to sport/roped climbing, this scale starts at 1 (easiest), and incrementally increases difficulty. Starting at level 4, the scale adds letters a-c for smaller increases in difficulty. For even smaller increments in difficulty, starting at level 6 the scale includes a + with each letter. To differentiate the French scale from the Font scale, letters are kept lower case. 
        </p> -->

      </div>
      <Grades/>
    </div>
    <div class="section section-3">
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
// import problemsJson from "../public/problemsData.json"

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
      // problemsData: problemsJson,
    }
  }
}
</script>

<style>
#app {
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif; 
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 60px auto 0;
  max-width: 1200px;
  font-size: 16px;
  line-height: 1.7em;
}

p {
  font-size: 1.1em;
}

h2, h3 {
  font-size: 1.6em;
}

.section {
  margin-bottom: 4em
}

.thesis-title {
  margin: 0 auto;
  width: 80%;
  height: 720px;
}

.thesis-title h1 {
  font-family: Didot,Didot LT STD,Hoefler Text,Garamond,Times New Roman,serif;
  font-size: 3.2em;
  text-align: center;
  padding-top: 30%;
}

.thesis-title .line {
  width: 80%;
  height: 47px;
  border-bottom: 1px solid black;
  margin: 0 auto;
}

.thesis-title h2 {
  text-align: center;
}

.viz {
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(3, 1fr);
}

.section section-1 .viz {
  text-align: center;
}

.center {
  margin: 0 auto;
}

.grades-copy {
  margin-bottom: 3em;
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
