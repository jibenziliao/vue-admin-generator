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
    state.controlLoading = true
  },

  [types.FETCH_SUCCESS] (state, {params, res}) {
    state.controlLoading = false
    if (res.data.code === 200) {
      params.resolve(state, res.data)
    } else {
      params.reject(state, res.data)
    }
  },

  [types.FETCH_FAILED] (state, {params, err}) {
    state.controlLoading = false
    params.reject(state, err)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
