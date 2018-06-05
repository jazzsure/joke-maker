
<template>
  <div class="hello">
    <Header></Header>

  </div>
</template>

<script>
  import Header from '../../components/Header'
  export default {
    name: 'login',
    data () {
      return {
        username: '',
        password: ''
      }
    },
    components: {
      Header
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
