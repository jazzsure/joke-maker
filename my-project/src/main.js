// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './vuex/store'
import './config/rem'

Vue.use(Vuex);

//引入相关的mint-ui组件
import { Header, Button, Search, } from 'mint-ui';
Vue.component(Button.name, Button);
Vue.component(Header.name, Header);
Vue.component(Search.name, Search);
// Vue.component(Toast.name, Toast);
/* 或写为
 * Vue.use(Button)
 * Vue.use(Cell)
 */


Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
