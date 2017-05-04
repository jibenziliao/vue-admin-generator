<template>
  <section>
    <!--工具条-->
    <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
      <el-form :inline="true" :model="filters">
        <el-form-item>
          <el-input v-model="filters.name"
                    placeholder="按名称搜索">
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"
                     icon="plus">
            新增
          </el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <!--列表-->
    <el-table :data="employeeList"
              highlight-current-row
              v-loading="pageLoading"
              stripe
              style="width: 100%;">
      <el-table-column prop="name" label="姓名" min-width="120">
      </el-table-column>
      <el-table-column prop="gender" label="性别" width="160" sortable>
      </el-table-column>
      <el-table-column prop="age" label="年龄" width="160" sortable>
      </el-table-column>
      <el-table-column prop="joinDate" label="入职时间" width="160" sortable>
      </el-table-column>
      <el-table-column label="状态" width="140" sortable>
        <template scope="scope">
          <el-tag :type="scope.row.state === true ? 'primary' : 'danger'">
            {{scope.row.state | stateText}}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="180">
        <template scope="scope">
          <el-button size="small">
            <i class="fa fa-pencil-square-o"></i>
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--工具条-->
    <el-col :span="24" class="toolbar">
      <el-pagination layout="total, prev, pager, next, jumper"
                     @current-change="handleCurrentChange"
                     :page-size="15"
                     :total="dataTotal"
                     style="float:right;">
      </el-pagination>
    </el-col>
  </section>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  export default {
    data () {
      return {
        filters: {
          name: ''
        }
      }
    },
    methods: {
      ...mapActions([
        'commonAction'
      ]),
      handleCurrentChange (val) {
        this.getList(val)
      },
      getList (params) {
        this.$store.dispatch('commonAction', {
          url: '/employees',
          method: 'get',
          data: {},
          resolve: (state, res) => {
            state.employeeList = res.employeeList
            state.dataTotal = res.dataTotal
          },
          reject: () => {}
        })
      },
      successTipFn (str) {
        this.$notify({
          title: '成功',
          message: `${str}成功`,
          type: 'success'
        })
      },
      failedTipFn (str) {
        this.$notify.error({
          title: '错误',
          message: `${str}`
        })
      }
    },
    mounted () {
      this.getList(this.reqParams)
    },
    filters: {
      stateText (val) {
        return val ? '在职' : '离职'
      }
    },
    computed: {
      ...mapGetters([
        'employeeList',
        'dataTotal',
        'pageLoading'
      ])
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  @import '../../styles/vars';

  .lock-color {
    color: $color-danger;
  }

  .unlock-color {
    color: $color-success;
  }

  .btn-group {
    text-align: right;
  }
</style>
