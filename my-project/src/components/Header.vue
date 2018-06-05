<template>
  <div class="header">
    <img src="../assets/iconfont/averate.jpg" class="averate">
    <div class="search">
      <img class="search-icon" src="../assets/iconfont/search.svg">
      <input class="input">
    </div>
    <div class="camera">
      <img class="publish-icon" src="../assets/iconfont/camera.svg">
      <div class="publish">发布</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    data () {
      return {
          value: ''
      }
    },
    components: {

    },
    computed: {

    },
    methods: {

    }
  }
</script>


<style scoped>
.header{
  width: 100%;
  height: 124px;
  background-color: #d33d3e;
  overflow: hidden;
}
.averate{
  display: block;
  width: 58px;
  height: 58px;
  border-radius: 50%;
  float: left;
  margin: 36px 20px 0 20px;
}
.search{
  width: 530px;
  float: left;
  border-radius: 4px;
  overflow: hidden;
  background-color: #fff;
  margin-top: 34px;
}
.search-icon{
  display: block;
  float: left;
  width: 30px;
  height: 36px;
  margin: 12px 0 0 12px;
}
.input{
  width: 472px;
  height: 58px;
  border: none;
  margin-left: 15px;
}
.camera{
  width: 60px;
  float: left;
  color: #fff;
  margin-left: 30px;
  height: 88px;
  margin-top: 26px;
}
.publish-icon{
  display: block;
  width: 60px;
  height: 45px;
}
.publish{
  position: relative;
  top: -4px;
  font-size: 22px;
  text-align: center;
}

</style>
