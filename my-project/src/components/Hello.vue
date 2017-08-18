
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{author}}</h1>
    <h1>{{author1}}</h1>
    <h1>{{doubleCount}}</h1>
    <input v-model="iptVal"></input>
    <button slot="append" @click="setAuthor" icon="search"></button>
    <World :message="message" ></World>
  </div>
</template>

<script>
import World from './world';

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      iptVal: "",
      message: "this is the message"
    }
  },
  components: {
    World
  },
  computed: {
    author () {
      return this.$store.state.account.author
    },
    author1 () {
      return this.$store.state.main.author
    },
    doubleCount: function(){
      return this.$store.getters.doubleCount
    }
  },
  methods: {
    setAuthor: function(author) {
      this.$store.commit('account/newAuthor', this.iptVal)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input {
  border: 1px solid red;
  outline: none;
  height: 18px;
}
h1 {
  font-size: 20px;
  word-break: break-word;
}
button {
  width: 5rem;
  height: 20px;
  border: 1px solid red;
  vertical-align: middle;
}
</style>
