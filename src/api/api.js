import axios from 'axios'
import {URL_DEV, REQUEST_TIME_OUT} from '../constants/constant'

const baseUrl = ''

export const login = params => {
  return axios.post(`${baseUrl}/login`, params).then(res => res.data)
}

export default {
  commonRequest (params, resolve, reject) {
    return axios.request({
      url: params.url,
      method: params.method,
      baseUrl: URL_DEV,
      data: {
        ...params.data
      },
      timeout: REQUEST_TIME_OUT
    }).then(res => resolve(res)).catch(err => reject(err))
  }
}
