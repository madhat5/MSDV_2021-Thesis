<template>
<div>
  <div class="container flex-container">
     <!-- <iframe frameborder="0" class="juxtapose" width="640" height="360" src="https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=05283b24-a3bf-11eb-84bf-df397a3ba76f"></iframe> -->
    
    <div class="button-div flex-child">
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

    <div class="img-slider flex-child">
          <iframe frameborder="0" class="juxtapose" width="100%" height="100%" :src="'https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=' + imgData"></iframe>
    </div>

    <!-- <div class="move-description">
      <p>{{detailsData}}</p>
    </div> -->
  </div> 
  <div class="move-description">
      <p>{{detailsData}}</p>
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

.flex-container {
    display: flex;
    height: 34em;
}

.flex-child {
    flex: 1;
}  

/* .flex-child:first-child {
    margin-right: 5px;
    margin-top: .5em;
}  */

.button-div {
  margin-right: 5px;
  margin-top: .5em;
  text-align: center;
  display: flex;
  flex-direction: column-reverse;
  height: 30em;
  /* margin: 0 auto; */
  /* flex-grow: 1; */
}

.move-img {
  display: block;
  width: 50%;
  height: auto;
  margin: 0 auto

}

.img-slider {
  text-align: center;
  margin: 1em auto 0;
  flex-grow: 5;
}

.move-description {
  text-align: center;
  margin: -2em auto 4em;
  text-align: left;
}

.move-button {
  border-radius: 10px;
  /* background-color: #ffffff;
  border: 2px solid #555555; */
  background-color: #dddddd;
  border: 2px solid #555555;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: block;
  font-size: 1em;
  margin: 1.25em 2.5em;
  width: 9em;
}

.move-button {
  transition-duration: 0.4s;
}

.move-button:hover {
  /* background-color: #555555; 
  color: #ffffff; */
  background-color:#ffffff;
  color: #555555;
  border: 2px solid #ffffff;
}


</style>
