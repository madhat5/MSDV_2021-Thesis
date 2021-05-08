<template>
  <div id="app">
    <div class="section thesis-title">
      <!-- <div class="intro-img"></div> -->
      <h1>What Is Strength in Climbing?</h1>
      <div class="line"></div>
      <!-- <h2>Are climbers getting stronger or are there more strong climbers?</h2> -->
      <h2>How do climbers use it?</h2>
    </div>
    <div class="section section-0 intro">
      <h3>Introduction</h3>
      <div class="subhead-line"></div>
      <div class="intro-copy">
        <p>As I’ve delved into climbing, both in practice and research, one thing has quickly become apparent: the<strong>continuous effort to get stronger</strong>. As I began to look into this further, and developed questions about climbing benchmarks around the world, as well as the rate of strength increase of climbers, I focused my research on <strong>how strength is expressed</strong> in climbing.</p>
        
        <p>Our treatment for this thesis will attempt to answer these questions by understanding <strong>what strength is in climbing</strong>. Our focus will be on <strong>bouldering</strong>, moving up a wall with our body only, no ropes or other climbing tools. It should be noted that there are other types of climbing, including: top-rope; ice-climbing; mountaineering and trad climbing; free solo and deep water solo.</p>

        <p>We will analyze several aspects of climbing, including what the records and benchmarks are for climbing routes, what the various grading systems are (how climbs are measured); what makes a climb hard; how climbers get stronger; and other aspects such as the increase in popularity of the sport over time, and accompanying research and literature. As we work on answering the aforementioned questions, we will work to expand the reader’s climbing knowledge and vocabulary throughout this project.</p>
      </div>
    </div>
    <div class="section section-1">
      <h3>Climbing Holds</h3>
      <div class="subhead-line"></div>
      <div class="viz">
        <Holds
          v-for="hold in holdsData"
          :key="hold.id"
          :name="hold.name"
          :description="hold.description"
          :imagePath="hold.imagePath"
          :overlayImg="hold.overlayImg"
        />
      </div>
    </div>
    <div class="section section-2">
      <h3>Climbing Grades</h3>
      <div class="subhead-line"></div>
    
      <div class="grades-copy">
        <p>Now that we know how to hold onto the wall, we’ll talk about <strong>climbing grades</strong> - this is how climbs are measured. There are quite a few different scales, each being developed separately (like Celsius/Fahrenheit) so we focus on the most common bouldering scales: <strong>V scale</strong> and <strong>Font scale</strong>. These grades are used both indoors and outdoors, and were developed “as a way to indicate the difficulty of a boulder problem to someone who had never tried it before”, and to compare to problems in other locations.</p>

        <p>Before we dive into specific grades, we'll mention some of the other grading systems: YDS (Yosemite Decimal System) scale, and French scale. Keep in mind at the end of the day, grading systems are both <strong>variable</strong> and <strong>subjective</strong> in their attempts to quantify difficulty. Free climbing grades are generally understood to reflect the hardest move or section on a particular route. - they do not indicate time commitment or duration.</p>
        
        <p>
        <b>V scale</b>
        <br/>
        Specific to bouldering, the V scale, also known as the <strong>Hueco scale</strong>, was developed by John 'Vermin' Sherman; he based this system off of another/simpler system - John Gill’s B-system for bouldering. In this V scale, V0 moves are the equivalent of 5.10 climbing moves (part of the YDS scale, which we’ll see further down). The Vscale is open ended, with the simplest/easiest moves starting at V0 and the current hardest boulder problem is V17.
        </p>

        <p>
        <b>Font/Fontainebleau</b>
        <br/>
        Specific to bouldering, the <strong>Fontainebleau</strong> grading system has been around much longer than the Hueco system. This scale’s grades follow a similar rating system to French free-climb ratings (which we’ll see further down).The scale includes a numerical grade ascending with difficulty; starting at level 6, letters are appended to the numbers starting (format: 7C). To differentiate the Font scale from its similar French free-climbing scale, letters are capitalized in the Font system. 
        </p>
      </div>
      <Grades/>
    </div>
    <div class="section section-3">
      <h3>Comparing Boulder Problems</h3>
      <div class="subhead-line"></div>

      <!-- <p>At this point we can combine what we’ve learned so far, and attempt to answer our question of what is strength in climbing. We’ll do this by analyzing some of the different moves of a climb, by comparing climbers at 2 different levels (and genders?). For each boulder problem we’ll look at each move, the hold types and size, the body position, the grade, route length, and the sequences required to stay and move on the wall.</p>  -->

      <p>At this point we can combine what we’ve learned so far, and attempt to analyze some of the different moves of a climb, by comparing climbers at 2 different levels. For each boulder problem we’ll look at each move, the hold types and size, the body position, the grade, route length, and the sequences required to stay and move on the wall. </p>

      <p><strong>Blair Witch</strong> (6B+/V4), Ice Pond || <strong>La Toupie Carnivore</strong> assis (8B+/V14) - Jimmy Webb</p>

      <Problems/>
      <!-- <div class="line"></div>
      <p>Based on what we’ve seen to this point, our constant has been the climber and the variables include hold types and size and combinations, route length and angles, body positioning, route grade. With this, we’ll conclude that strength in climbing is the ability for a climber to stay on the wall while moving through the problem.</p> -->

    </div>
    <div class="section section-4">
      <h3>The Numbers</h3>
      <div class="subhead-line"></div>
      <p>After gaining a better understanding of hold types, climbing grades, and what a boulder problem looks like,  we can look at metrics to analyze aspects of this strength, and seek to questions such as:</p>
      <div class="numbers-questions">
        <div class="q-left">
          <ul>
            <li>How many hard/elite level climbs are completed per year?</li>
            <li>What’s the gender distribution in the sport?</li>
            <li>Are climbers getting stronger or are there more strong climbers?</li>
            <li>What do the gym membership metrics tell us about the growth of the sport and how this compares to hard climbs?</li>
          </ul>
        </div>
        <div class="q-right">
          <ul>
            <li>Among this elite level, what grade sees the most climbs?</li>
            <li>Are the metrics similar for other types of climbing?</li>
            <li>Is there an age for elite climbing?</li>
            <li>What do the body movements look like?</li>
            <li>What about other types of climbing?</li>
          </ul>
        </div>
      </div>
      <Chart/>
      <!-- <Chart :data="yearsData"/> -->
      <!-- <BarChart
       xKey="year"
       yKey="climbs" 
      :data="yearsData"/> -->
    </div>
    <div class="section conclusion">
      <!-- <h3>The End</h3>
      <div class="subhead-line"></div> -->
      <h3>What Is Strength in Climbing?</h3>
      <div class="subhead-line"></div>

      <!-- <p>Based on what we’ve seen to this point, our constant has been the climber and the variables include hold types and size and combinations, route length and angles, body positioning, route grade. With this, we’ll conclude that strength in climbing is the ability for a climber to stay on the wall while moving through the problem.</p> -->

      <p>Based on what we’ve seen, our constant has been the climber, and our variables include hold types and size, hold combinations, route length, body positioning, and route grade. With this, we’ll conclude that <strong>strength in climbing is the ability for a climber to stay on the wall while moving through the problem.</strong></p>

      <p>With this project, we should have a better understanding of climbing, both in practice and for watching the upcoming Olympic climbing competitions.</p>
    </div>
    <!-- <div class="section reference">
      <p>References? (in treatment only?) lorem ipsum</p>
    </div> -->
  </div>
</template>

<script>
import Holds from './components/Holds.vue'
import Grades from './components/Grades.vue'
import Chart from './components/Chart.vue'
import Problems from './components/Problems.vue'
// import BarChart from './components/BarChart.vue'

import holdsJson from "../public/holdsData.json"
// import yearsJson from "../public/yearlyClimbData.json"

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
    Chart,
    // BarChart
  },
  data() {
    return {
      holdsData: holdsJson,
      // yearsData: yearsJson,
    }
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif; 
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0 auto;
  /* max-width: 1200px; */
  width: 100%;
  font-size: 16px;
  line-height: 1.7em;
}

p {
  font-size: 1.1em;
}

h2 {
  font-size: 1.6em;
}

h3 {
  /* font-family: Didot,Didot LT STD,Hoefler Text,Garamond,Times New Roman,serif; */
  font-size: 1.9em;
  margin-bottom: 0.5em;
}

h4 {
  font-size: 1.3em;
}

.section {
  margin: 0 auto;
  margin-bottom: 1em;
  padding: 1em 11em;
}

.section-1, .section-3 {
    background-color: #ddd;
    padding: 2em 11em 4em;
}

.thesis-title {
  margin: 0 auto;
  /* width: 80%; */
  /* height: 720px; */
  background-image: url('https://raw.githubusercontent.com/madhat5/MSDV_2021-Thesis/master/dev/climbs-thesis/public/imgs/bg_img-intro.png');
  height: 100vh;  
  color: #F5F5F5;
  text-align: left;
  background-size: cover;
  background-repeat: no-repeat;
}

.conclusion {
  margin: 0 auto;
  background-image: url('https://raw.githubusercontent.com/madhat5/MSDV_2021-Thesis/master/dev/climbs-thesis/public/imgs/bg_img-bookend.png');
  height: 100vh;  
  color: #F5F5F5;
  padding-top: 6em;
  background-size: cover;
  background-repeat: no-repeat;
}

.thesis-title h1 {
  /* font-family: Didot,Didot LT STD,Hoefler Text,Garamond,Times New Roman,serif; */
  font-size: 3.8em;
  text-align: left;
  padding-top: 25%;
  line-height: 1.5em;
}

.thesis-title h2 {
  text-align: left;
  font-weight: 500;
  font-size: 2em;
}

.thesis-title .line {
  width: 80%;
  height: 30px;
  border-bottom: 2px solid #F5F5F5;
  margin: 0 auto 0 0;
}

.section-3 .line {
  width: 60%;
  height: 1px;
  border-bottom: 1px solid black;
  margin: 0 auto 3em;
}

.subhead-line {
  width: 30%;
  height: 1px;
  border-bottom: 2px solid black;
  margin: 0 auto 3em 0;
}

.conclusion .subhead-line {
  border-bottom: 2px solid #F5F5F5;
}

.intro-copy {
  padding: 1em 20em 1em 0;
}

.viz {
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(4, 1fr);
}

.section .section-1 .viz {
  text-align: center;
}

.center {
  margin: 0 auto;
}

/* .section-2 {
  margin-bottom: 8em;
} */

.grades-copy {
  padding: 1em 20em 0 0;
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

.section-4 p {
  padding: 1em 12em 0 0;
}

.numbers-questions {
  display: flex;
}

.q-left, .q-right {
  flex: 1;
}

.conclusion p{
  padding: 1em 25em 0 0;
}
</style>
