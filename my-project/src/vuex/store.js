import Vue from 'vue'
import Vuex from 'vuex'
import account from './account'
import main from './main'
import * as types from './mutation-types'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    selectedTab: 'main'
  },
  mutations: {
    [types.SELECT_TAB] (state, val) {
      state.selectedTab = val
    }
  },
  modules: {
      account,
      main
  }
})

export default store
