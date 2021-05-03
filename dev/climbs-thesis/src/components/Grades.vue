<template>
  <div class='grades-container'>
    <Scrollama @step-enter="stepEnterHandler" id="flexed">
      <div slot="graphic" class="graphic">
        <!-- <p style="display:none">{{currStepId}}</p> -->
        <img :src="'../../imgs/' + scalesData[currStepId].imagePath" class="image"> 
        <!-- <p>{{scalesData[currStepId].level}}</p> -->
        <!-- <img :src="'/imgs/' + scalesData[currStepId].imagePath" :alt="name" class="image">  -->
      </div>
      <div
        v-for="step in scalesData" 
          :key="step.no"
          :data-step-id="step.id"
        class="step" 
          :class="{'is-active': step.id === currStepId}">
        <p><b>{{step.level}}:</b></p>
        <p><b>{{step.v}} <br/> {{step.font}}</b></p>
        <p><b>Climber profile:</b> {{step.details}}</p>
        <p><b>Common holds:</b></p>
        <!-- <p>{{step.holds}}</p> -->
        <ul>
          <li v-for="el in step.holds"
            :key="el"
          >{{el}}</li>
        </ul>
      </div>
    </Scrollama>
  </div>
</template>

<script>
import 'intersection-observer'; // for cross-browser support
import Scrollama from 'vue-scrollama';

import scalesJson from "../../public/scalesData.json"

export default {
  components: {
    Scrollama
  },
  data() {
    return {
      currStepId: 0,
      scalesData: scalesJson
    }
  },
  methods: {
    stepEnterHandler({element, direction, index}) {
      console.log({element, direction, index});
      this.currStepId = element.dataset.stepId
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="vue-scrollama/dist/vue-scrollama.css"></style>
<style scoped>
.step {
  width: 80%;
  max-width: 40rem;
  padding: 10rem 0;
  margin: 0 3rem 15rem;
  /* background-color: white; */
  display: inline-block;
  justify-content: center;
}

/* .step.is-active {
  background-color: beige;
} */

.graphic {
  height: 80vh;
  /* background-color: #DDD; */
  margin: 0 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5rem;
}

.image {
  display: block;
  width: 100%;
  height: auto;
}

</style>