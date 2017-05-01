import axios from 'axios'

const baseUrl = ''

export default {
  login (params, resolve, reject) {
    return axios.post(`${baseUrl}/login`, params).then(res => resolve(res)).catch(err => reject(err))
  },
  getUserList (params, resolve, reject) {
    return axios.get(`${baseUrl}/users`, params).then(res => resolve(res)).catch(err => reject(err))
  }
}
