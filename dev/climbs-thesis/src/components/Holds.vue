<template>
<div>
  <div class="container">
    <img src="../assets/img_avatar.png" alt="Avatar" class="image">
    <!-- <img src="{{imagePath}}" alt="Avatar" class="image"> -->
    <div class="overlay">
      <!-- <div class="text">Hello World</div> -->
      <div class="text"> {{name}} </div>
    </div>
  </div>
  <div class="details">
    <p>{{description}}</p>
  </div>
</div>
</template>

<script>
export default {
  name: 'Holds',
  props: {
    name: String,
    description: String
    // imagePath: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  position: relative;
  width: 100%;
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
  background-color: #008CBA;
}

.container:hover .overlay {
  opacity: 1;
}

.text {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>
