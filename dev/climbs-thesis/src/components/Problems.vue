<template>
<div>
  <div class="container">
     <!-- <iframe frameborder="0" class="juxtapose" width="640" height="360" src="https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=05283b24-a3bf-11eb-84bf-df397a3ba76f"></iframe> -->
      <div  
        v-for="problem in problemsData"
          :key="problem.id"
          :imagePath="problem.imagePath">
            <iframe frameborder="0" class="juxtapose" width="640" height="360" :src="'https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=' + imagePath"></iframe>
            <p>image + {{imagePath}} </p>
      </div>
    <!-- <img :src="'/imgs/' + imagePath" :alt="name" class="image"> -->
  </div> 

  <div class="move-description">
    <p>lorem ipsum</p>
  </div>
</div>
</template>

<script>
import problemsJson from "../../public/problemsData.json"

export default {
  name: 'Problems',
  // props: {
  //   imagePath: String,
  // },
  data() {
    return {
      currStepId: null,
      problemsData: problemsJson
    }
  },
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
</style>
