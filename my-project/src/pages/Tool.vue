<template>
  <div id="Tool">
    <h1 >{{message}}</h1>
  </div>
</template>

<script>
  import Footer from '../components/FooterBar.vue'
  export default {
    name: 'Tool',
    components: {

    },
    data (){
      return {
        message: '你好，这是tool页面'
      }
    },
    created(){
      this.$store.commit('SELECT_TAB', 'tool');
    }
  }
</script>
