<template>
  <div id="Mine">
    <h1>{{massage}}</h1>
  </div>
</template>

<script>
  import Footer from '../components/FooterBar.vue'
  export default {
    name: 'Mine',
    components: {
      'footer-bar': Footer
    },
    data(){
      return {
        massage: '这是我的'
      }
    },
    created(){
      this.$store.commit('SELECT_TAB', 'mine');
    }
  }
</script>
