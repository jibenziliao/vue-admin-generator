import Vue from 'vue'
import Vuex from 'vuex'
import account from './modules/account'
import control from './modules/control'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    account,
    control
  }
})
