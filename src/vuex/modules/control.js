import * as types from '../mutation-types'
import api from '../../api/api'

const state = {
  userCount: 0,
  activeCount: 0,
  newCount: 0,
  employeeList: [],
  dataTotal: 0,
  pageLoading: false
}

const getters = {
  userCount: state => state.userCount,
  activeCount: state => state.activeCount,
  newCount: state => state.newCount,
  pageLoading: state => state.pageLoading,
  employeeList: state => state.employeeList,
  dataTotal: state => state.dataTotal
}

const actions = {
  commonAction ({ commit }, params) {
    commit(types.FETCH_BEGIN, { params })
    api.commonRequest(params, res => commit(types.FETCH_SUCCESS, { params, res }), err => commit(types.FETCH_FAILED, { params, err }))
  }
}

const mutations = {
  [types.FETCH_BEGIN] (state, {params}) {
    state.pageLoading = true
  },

  [types.FETCH_SUCCESS] (state, {params, res}) {
    state.pageLoading = false
    if (res.data.code === 200) {
      params.resolve(state, res.data)
    } else {
      params.reject(state, res.data)
    }
  },

  [types.FETCH_FAILED] (state, {params, err}) {
    state.pageLoading = false
    params.reject(state, err)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
