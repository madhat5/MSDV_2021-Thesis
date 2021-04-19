<template>
  <div>
    <Scrollama @step-enter="stepEnterHandler" id="flexed">
      <div slot="graphic" class="graphic">
        <p>{{currStepId}}</p>
      </div>
      <div
        v-for="step in scalesData" 
          :key="step.no"
          :data-step-id="step.id"
        class="step" 
          :class="{'is-active': step.id === currStepId}">
        <p><b>{{step.level}}:</b></p>
        <pre>&nbsp;</pre>
        <p>{{step.details}}</p>
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
      currStepId: null,
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

.step {
  width: 80%;
  max-width: 40rem;
  padding: 10rem 0;
  margin: 0 3rem 15rem;
  border: 1px solid #333;
  background-color: white;
  display: flex;
  justify-content: center;
}
.step.is-active {
  background-color: beige;
}
.graphic {
  height: 80vh;
  background-color: #DDD;
  border: 1px solid #333;
  margin: 0 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5rem;
}
</style>