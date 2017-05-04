import Mock from 'mockjs'
const ExampleData = [{
  id: 1,
  username: 'admin',
  password: '123456',
  avatar: 'https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png',
  name: '张某某'
}]

const LoginUsers = [{
  id: 1,
  username: 'admin',
  password: '123456',
  avatar: 'https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png',
  name: '张某某'
}, {
  id: 2,
  username: 'developer',
  password: '123456',
  avatar: 'https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png',
  name: '李四'
}, {
  id: 3,
  username: 'guest',
  password: '123456',
  avatar: 'https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png',
  name: '王五'
}]
const ExampleDataList = []

for (let i = 0; i < 86; i++) {
  ExampleDataList.push(Mock.mock({
    id: Mock.Random.guid(),
    name: Mock.Random.cname(),
    addr: Mock.mock('@county(true)'),
    'age|18-60': 1,
    birth: Mock.Random.date(),
    sex: Mock.Random.integer(0, 1)
  }))
}

const controlData = Mock.mock({
  'userCount|1000-9999': 1201,
  'activeCount|1-999': 728,
  'newCount|1-99': 1
})

const employeeList = []

for (let i = 0; i < 15; i++) {
  employeeList.push(Mock.mock({
    id: Mock.Random.guid(),
    name: Mock.Random.cname(),
    'age|18-60': 1,
    joinDate: Mock.Random.date(),
    'gender|1': [
      '男',
      '女'
    ],
    'state|1': true
  }))
}

const dataTotal = 999

export {
  ExampleData,
  LoginUsers,
  ExampleDataList,
  controlData,
  employeeList,
  dataTotal
}
