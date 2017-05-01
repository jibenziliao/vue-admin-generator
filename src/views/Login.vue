<template>
  <el-form :model="ruleForm2"
           :rules="rules2"
           ref="ruleForm2"
           label-position="left"
           label-width="0px"
           class="demo-ruleForm login-container">
    <h3 class="title">系统登录</h3>
    <el-form-item prop="account">
      <el-input type="text"
                v-model="ruleForm2.account"
                auto-complete="off"
                placeholder="账号">
      </el-input>
    </el-form-item>
    <el-form-item prop="checkPass">
      <el-input type="password"
                v-model="ruleForm2.checkPass"
                auto-complete="off"
                placeholder="密码"></el-input>
    </el-form-item>
    <el-checkbox v-model="checked"
                 checked
                 class="remember">
      记住密码
    </el-checkbox>
    <el-form-item style="width:100%;">
      <el-button type="primary"
                 style="width:100%;"
                 @click.native.prevent="handleSubmit2"
                 :loading="loading">
        登录
      </el-button>
      <!--<el-button @click.native.prevent="handleReset2">重置</el-button>-->
    </el-form-item>
    <el-form-item>
      <el-row :gutter="20">
        <el-col :span="12">
          用户名: admin
        </el-col>
        <el-col :span="12">
          密码: 123456
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          可登录的用户在${project_root}/src/mock/data/exampleData.js中
        </el-col>
      </el-row>
    </el-form-item>
  </el-form>
</template>

<script>
  import {LoginUsers} from '../mock/data/exampleData'
  import {mapGetters} from 'vuex'
  export default {
    data () {
      return {
        ruleForm2: {
          account: 'admin',
          checkPass: '123456'
        },
        rules2: {
          account: [
            {required: true, message: '请输入账号', trigger: 'blur'}
            // { validator: validaePass }
          ],
          checkPass: [
            {required: true, message: '请输入密码', trigger: 'blur'}
            // { validator: validaePass2 }
          ]
        },
        checked: true
      }
    },
    methods: {
      handleReset2 () {
        this.$refs.ruleForm2.resetFields()
      },
      handleSubmit2 (ev) {
        this.$refs.ruleForm2.validate((valid) => {
          if (valid) {
            let loginParams = {
              username: this.ruleForm2.account,
              password: this.ruleForm2.checkPass
            }
            this.login(loginParams)
          } else {
            return false
          }
        })
      },
      login (params) {
        this.$store.dispatch('login', {
          ...params,
          resolve: (res) => {
            console.log(res)
            this.successTip('登录')
            sessionStorage.setItem('user', JSON.stringify(LoginUsers[0]))
            this.$router.push({path: '/'})
          },
          reject: (err) => this.failedTip(err)
        })
      },
      successTip (str) {
        this.$notify({
          title: '成功',
          message: `${str}成功`,
          type: 'success'
        })
      },
      failedTip (str) {
        this.$notify.error({
          title: '错误',
          message: str
        })
      }
    },
    mounted () {
    },
    computed: {
      ...mapGetters([
        'loading'
      ])
    }
  }

</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .login-container {
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    .title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
    }
    .remember {
      margin: 0px 0px 35px 0px;
    }
  }
</style>
