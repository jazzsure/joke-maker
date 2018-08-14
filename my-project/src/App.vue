<template>
  <div id="app">
    <router-view></router-view>
    <footer-bar class="footer"></footer-bar>
  </div>
</template>

<script>
  import Footer from './components/FooterBar.vue'
  export default {
    name: 'app',
    components:{
        'footer-bar': Footer
    }
  }
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
