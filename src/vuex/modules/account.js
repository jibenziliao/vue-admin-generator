import * as types from '../mutation-types'
import account from '../../api/account'

const state = {
  userList: [],
  loading: false,
  total: 0
}

const getters = {
  userList: state => state.userList,
  loading: satte => state.loading
}

const actions = {
  login ({ commit }, params) {
    commit(types.LOGIN, { ...params })
    account.login(params, res => commit(types.LOGIN_SUCCESS, { params, res }), err => commit(types.LOGIN_FAILED, { params, err }))
  },
  getUserList ({ commit }, params) {
    commit(types.GET_USER_LIST, { ...params })
    account.getUserList(params, res => commit(types.GET_USER_LIST_SUCCESS, { params, res }), err => commit(types.GET_USER_LIST_FAILED, { params, err }))
  }
}

const mutations = {
  [types.LOGIN] (state) {
    state.loading = true
  },
  [types.LOGIN_SUCCESS] (state, { params, res }) {
    state.loading = false
    if (res.data.code === 200) {
      params.resolve(res)
    } else {
      params.reject(res.data.msg)
    }
  },
  [types.LOGIN_FAILED] (state, { params, err }) {
    state.loading = false
    params.reject(err)
  },
  [types.GET_USER_LIST] (state) {
    state.loading = true
  },
  [types.GET_USER_LIST_SUCCESS] (state, { params, res }) {
    state.loading = false
    params.resolve(res)
  },
  [types.GET_USER_LIST_FAILED] (state, { params, err }) {
    state.loading = false
    params.reject(err)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
