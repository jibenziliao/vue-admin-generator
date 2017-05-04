import * as types from '../mutation-types'
import api from '../../api/api'

const state = {
  userCount: 0,
  activeCount: 0,
  newCount: 0,
  controlLoading: false
}

const getters = {
  userCount: state => state.userCount,
  activeCount: state => state.activeCount,
  newCount: state => state.newCount,
  controlLoading: state => state.controlLoading
}

const actions = {
  commonAction ({ commit }, params) {
    commit(types.FETCH_BEGIN, { params })
    api.commonRequest(params, res => commit(types.FETCH_SUCCESS, { params, res }), err => commit(types.FETCH_FAILED, { params, err }))
  }
}

const mutations = {
  [types.FETCH_BEGIN] (state, {params}) {
    console.log(state, params)
  },

  [types.FETCH_SUCCESS] (state, {params, res}) {
    console.log(state, params, res)
  },

  [types.FETCH_FAILED] (state, {params, err}) {
    console.log(state, params, err)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
