<template>
<div>
  <div class="container">
     <!-- <iframe frameborder="0" class="juxtapose" width="640" height="360" src="https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=05283b24-a3bf-11eb-84bf-df397a3ba76f"></iframe> -->
    
    <div class="button-div">
      <button class="move-button"
     @click="
     clickData = problemsData[problem.id].id, 
     detailsData = problemsData[problem.id].description
     imgData= problemsData[problem.id].imagePath"
      v-for="problem in problemsData"
          :key="problem.id"
          :class="'move-' + problemsData[problem.id].id">
          {{problemsData[problem.id].move}}
      </button>
    </div>

    <div class="img-slider">
          <iframe frameborder="0" class="juxtapose" width="100%" height="500" :src="'https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=' + imgData"></iframe>
    </div>

    <div class="move-description">
      <p>{{detailsData}}</p>
    </div>
  </div> 
</div>
</template>

<script>
import problemsJson from "../../public/problemsData.json"

export default {
  name: 'Problems',
  data() {
    return {
      problemsData: problemsJson,
      clickData: 0,
      detailsData: problemsJson[0].description,
      imgData: problemsJson[0].imagePath
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  position: relative;
  width: 100%;
}

.move-img {
  display: block;
  width: 50%;
  height: auto;
  margin: 0 auto

}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background-color: #008CBA;
}

.container:hover .overlay {
  opacity: 1;
}

.text {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}

.button-div {
  text-align: center;
  margin: 0 auto;
}

.img-slider {
  text-align: center;
  margin: 2em auto;
}

.move-description {
  text-align: center;
  margin: 0 auto;
}

.move-button {
  border-radius: 10px;
  background-color: #ffffff;
  border: 2px solid #555555;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1em;
  margin: 2.5em;
  width: 9em;
}

.move-button {
  transition-duration: 0.4s;
}

.move-button:hover {
  background-color: #555555; /* Green */
  color: white;
}


</style>
