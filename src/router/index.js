import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Home from '@/views/Home.vue'
import Main from '@/views/Main.vue'
import Employee from '../views/settings/employee.vue'
import Permissions from '../views/settings/permissions.vue'
import Group from '../views/settings/group.vue'
import Log from '../views/settings/logs.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/login',
    component: Login,
    name: 'Login',
    hidden: true
  }, {
    path: '/',
    component: Home,
    name: '',
    iconCls: 'fa fa-dashboard',
    leaf: true, // 只有一个节点
    children: [
      { path: '/', component: Main, name: '控制' }
    ]
  }, {
    path: '/',
    component: Home,
    name: '设置',
    iconCls: 'el-icon-setting', //  图标样式class
    children: [
      { path: '/employee', component: Employee, name: '员工管理' },
      { path: '/permissions', component: Permissions, name: '权限配置' },
      { path: '/groups', component: Group, name: '角色管理' },
      { path: '/logs', component: Log, name: '活动日志' }
    ]
  }]
})
