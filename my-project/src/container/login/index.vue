
<template>
  <div class="hello">
    <HeaderBar></HeaderBar>

  </div>
</template>

<script>
  import HeaderBar from '../../components/HeaderBar'
  export default {
    name: 'login',
    data () {
      return {
        username: '',
        password: ''
      }
    },
    components: {
      HeaderBar
    },
    computed: {

    },
    methods: {
      handlechange(){
        console.log(this.username)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  width: 100%;
  margin: 0 auto;
}

</style>
