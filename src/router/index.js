import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/views/Login'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/login',
    component: Login,
    name: 'Login',
    hidden: true
  }, {
    path: '/',
    name: 'Hello',
    component: Hello
  }]
})
