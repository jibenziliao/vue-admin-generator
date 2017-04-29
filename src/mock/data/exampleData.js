import Mock from 'mockjs'
const ExampleData = [{
  id: 1,
  username: 'admin',
  password: '123456',
  avatar: 'https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png',
  name: '张某某'
}]

const LoginUsers = [{
  id: 2,
  username: '963693512@qq.com',
  password: '12345678',
  avatar: 'https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png',
  name: '张某某'
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

export { ExampleData, LoginUsers, ExampleDataList }
