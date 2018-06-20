<template>
  <div>
    <HeaderBar></HeaderBar>
    <div class="prdListWrap">
      <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" :autoFill="isAutoFill">
        <mt-cell-swipe
          @click.native="clickMe"
          v-for="(item,index) in items"
          :title="item"
          :key="index"
          :right="[
            {content: '发布', style: { background: 'yellow', color: '#fff' }, handler(){release(index)}},
            {content: '删除', style: { background: 'red', color: '#fff' }, handler(){release(index)}}
          ]">
        </mt-cell-swipe>

      </mt-loadmore>
    </div>
  </div>
</template>

<script>
  import HeaderBar from '../components/HeaderBar'
  export default {
    name: 'Main',
    components:{
      HeaderBar
    },
    data () {
      return {
        value: '',
        items: ['kobe', 'fisher', 'jordan', 'shark', 'duncun'],
        //可以进行上拉
        allLoaded: false, //是否可以上拉属性，false可以上拉，true为禁止上拉，就是不让往上划加载数据了
        //是否自动触发上拉函数
        isAutoFill: false,
        wrapperHeight: 0,
        courrentPage: 0
      }
    },
    created: function () {
      console.log('created 创建完毕状态===============》');

    },
    mounted: function () {
      console.log('mounted 挂载结束状态===============》');
      //下拉刷新
      this.load();
    },
    methods:{
      //   下拉刷新
      loadTop() {
        this.load();
      },
      loadBottom(){
        this.loadMore();
      },
      //下拉刷新函数
      load(){
        setTimeout(() => {
          for (let i = 0; i < 4; i++) {
            this.items.unshift('player No.' + Math.floor(Math.random() * 10) + 1);
          }
        }, 1000);
        this.courrentPage = 0;
        this.allLoaded = false; //是否可以上拉属性，false可以上拉，true为禁止上拉，就是不让往上划加载数据了
        this.$refs.loadmore.onTopLoaded();// 固定方法，查询完要调用一次，用于重新定位
      },
      //上拉加载更多函数
      loadMore(){
        setTimeout(() => {
          for (let i = 0; i < 4; i++) {
            this.items.push('items No.' + Math.floor(Math.random() * 10) + 1);
          }
        }, 1000);
//        if (this.courrentPage > 2) {
//          this.allLoaded = true; // 若数据已全部获取完毕
//          console.log("11111")
//        }
        this.courrentPage++;
        this.$refs.loadmore.onBottomLoaded();// 固定方法，查询完要调用一次，用于重新定位
      },
      clickMe(){
        console.log("你点击了我");
      },
      release(val){
        console.log(val);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .mint-search{
    height: 52px;
  }
  .prdListWrap{
    width:100%;
    height:100%;
    overflow:auto;
    box-sizing:border-box;
    -webkit-overflow-scrolling: touch;
  }
</style>
