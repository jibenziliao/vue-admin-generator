import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import {
  LoginUsers,
  controlData,
  employeeList,
  dataTotal
} from './data/exampleData'
import {RESPONSE_DELAY} from '../constants/constant'

export default {
  bootstrap () {
    let mock = new MockAdapter(axios, { delayResponse: RESPONSE_DELAY })

    mock.onGet('/success').reply(200, {
      msg: 'success'
    })

    mock.onGet('/error').reply(500, {
      msg: 'failure'
    })

    mock.onPost('/login').reply(config => {
      let { username, password } = JSON.parse(config.data)
      return new Promise((resolve, reject) => {
        let user = null
        let hasUser = LoginUsers.some(u => {
          if (u.username === username && u.password === password) {
            user = JSON.parse(JSON.stringify(u))
            user.password = undefined
            return true
          }
        })
        if (hasUser) {
          resolve([200, { code: 200, msg: '请求成功', user }])
        } else {
          resolve([200, { code: 500, msg: '账号或密码错误' }])
        }
      })
    })

    mock.onGet('/control').reply(200, {code: 200, msg: '请求成功', controlData})
    mock.onGet('/employees').reply(200, {code: 200, msg: '请求成功', employeeList, dataTotal})
  }
}
