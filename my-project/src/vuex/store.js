import Vue from 'vue'
import Vuex from 'vuex'
import account from './account'
import main from './main'
Vue.use(Vuex)

const store = new Vuex.Store(
    {
        modules: {
            account,
            main
        }
    }   
)

export default store