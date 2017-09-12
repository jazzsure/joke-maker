
<template>
  <div class="hello">
    <ul v-for="i in Object.keys(msg)">
      <h1 @click="showStu(i)">{{ msg[i].name }}</h1>
      <li v-for="stu in msg[i].students"
          :style="{ display: msg[i].show ? 'block' : 'none' }"
      >{{ stu }}</li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'hello',
  data () {
    return {
      msg : {
        'class1' : {
            show: false, 
            name: "三年级一班",
            students: ['Lilei', 'Hanmeimei']
        },
        'class2' : {
            show: false, 
            name: "三年级二班",
            students: ['lucy', 'lily']
        }
      }
    }
  },
  components: {
    
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
    showStu: function(className) {
      this.msg[className].show = !this.msg[className].show;
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
