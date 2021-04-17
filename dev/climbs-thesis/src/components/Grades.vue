<template>
  <Scrollama
      :offset="0.5"
      @step-enter="({ element }) => (currStep = element.dataset.stepNo)"
    >
      <div class="graphic" slot="graphic">{{ currStep }}</div>
      <div class="step" data-step-no="1">step 1</div>
      <div class="step" data-step-no="2">step 2</div>
      <div class="step" data-step-no="3">step 3</div>
      <div class="step" data-step-no="4">step 4</div>
    </Scrollama>
</template>

<script>
import 'intersection-observer'; // for cross-browser support
import Scrollama from 'vue-scrollama';

export default {
  name: "App",
  components: {
    Scrollama
  },
  data() {
    return {
      currStep: null
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="vue-scrollama/dist/vue-scrollama.css"></style>
<style scoped>
.scrollama-container {
    display: flex;
}

.scrollama-container .scrollama-graphic {
    flex: 1;
    height: 80vh;
    top: 10vh;
}

.scrollama-container .scrollama-steps {
    flex: 1;
}

.graphic {
    height: 100%;
    margin: 0 3rem;
    border: 1px solid #ccc;
    background-color: #eee;
    font-size: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

.step {
    padding: 20vh 0;
    margin: 0 3rem;
    margin-bottom: 10vh;
    background-color: beige;
    border: 1px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
}

.step:last-child {
    margin-bottom: 0;
}
</style>