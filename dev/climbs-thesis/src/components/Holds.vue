<template>
<div>
  <div class="container">
    <!-- <img src="../assets/img_avatar.png" alt="Avatar" class="image"> -->
    <img :src="'imgs/' + imagePath" :alt="name" class="image">
    <div class="overlay">
      <div class="text title-text"> {{name}} </div>
      <div class="overlay-box"> 
        <img :src="'imgs/' + overlayImg" :alt="name" class="image overlay-img"> 
      </div>
      <div class="text details">
        <p>{{description}}</p>
      </div>
    </div>
  </div>
  <!-- <div class="details">
    <p>{{description}}</p>
  </div> -->
</div>
</template>

<script>
export default {
  name: 'Holds',
  props: {
    name: String,
    description: String,
    imagePath: String,
    overlayImg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  position: relative;
  width: 95%;
  margin: 8px auto;
}

.details {
  width: 95%;
  margin: 0 auto;
}

.image {
  display: block;
  width: 100%;
  height: auto;
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
  background-color: #333333;
}

.overlay:hover {
  /* opacity: 85%; */
  opacity: .85;
}

/* .container:hover .overlay {
  opacity: 85%;
} */

.overlay-box {
  position: absolute;
  top: 42%;
  left: 50%;
  width: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.text {
  color: white;
  text-align: center;
}

.title-text {
  width: 100%;
  font-size: 1.5em;
  text-transform: uppercase;
  position: absolute;
  top: 9%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.details {
  font-size: 1em;
  position: absolute;
  top: 85%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  font-size: .8em;
  line-height: 1.5em;
}
</style>
