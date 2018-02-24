
<template>
  <div class="hello">
    <ul v-for="i in Object.keys(msg)">
      <h1 @click="showStu(i)">{{ msg[i].name }}</h1>
      <li v-for="stu in msg[i].students"
          :style="{ display: msg[i].show ? 'block' : 'none' }"
      >{{ stu }}</li>
    </ul>
    <World :message="theMsg"/>
  </div>
</template>

<script>
import World from './world';
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
      },
      theMsg: 'hello'
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

  beforeCreate: function () {
      console.log('beforeCreate 创建前状态===============》');
  },
  created: function () {
      console.log('created 创建完毕状态===============》');
  },
  beforeMount: function () {
      console.log('beforeMount 挂载前状态===============》');
  },
  mounted: function () {
      console.log('mounted 挂载结束状态===============》');
  },
  beforeUpdate: function () {
      console.log('beforeUpdate 更新前状态===============》');
  },
  updated: function () {
      console.log('updated 更新完成状态===============》');
  },
  beforeDestroy: function () {
      console.log('beforeDestroy 销毁前状态===============》');
  },
  destroyed: function () {
      console.log('destroyed 销毁完成状态===============》');
  },
  methods: {
    showStu: function(className) {
      this.msg[className].show = !this.msg[className].show;
      this.theMsg = "hello" + new Date();
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
