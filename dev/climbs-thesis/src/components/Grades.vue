<template>
  <div class="hello">
    <!-- <h1>Welcome to Your Vue.js App</h1> -->
    <table>
      <tr>
        <th>Font/French<br>(Universal)</th>
        <th>V Scale<br>(Boulder)</th>
        <th>YDS<br>(Sport)</th>
      </tr>
    </table>
    <div>...</div>
  </div>
</template>

<script>
export default {
  name: 'Grades',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
table {
  margin: 0 auto;
}
</style>
