import axios from 'axios'

const baseUrl = ''

export const login = params => {
  return axios.post(`${baseUrl}/login`, params).then(res => res.data)
}
