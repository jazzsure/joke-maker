<template>
  <div class="hello">
    <h1>{{author}}</h1>
    <h1>{{message}}</h1>
  </div>
</template>

<script>
export default {
  name: 'world',
  props:['message'],
  computed: {
    author () {
      return this.$store.state.account.author
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  background-color: red;
  font-size: 20px;
  word-break: break-word;
}
button {
  width: 50px;
  height: 20px;
}
</style>
