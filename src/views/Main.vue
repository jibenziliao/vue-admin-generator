<template>
  <section>
    <el-card class="box-card">
      <div class="text item"
           v-loading.fullscreen.lock="controlLoading">
        {{activeCount}}
      </div>
      <div class="item">活跃用户数/人</div>
    </el-card>
    <el-card class="box-card">
      <div class="text item">
        {{userCount}}
      </div>
      <div class="item">用户总数/人</div>
    </el-card>
    <el-card class="box-card">
      <div class="text item">
        {{newCount}}
      </div>
      <div class="item">新增用户数/人</div>
    </el-card>
  </section>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    data () {
      return {
      }
    },
    methods: {
      getControlInfo () {
        this.$store.dispatch('commonAction', {
          url: '/control',
          method: 'get',
          data: {},
          resolve: (state, res) => {
            state.userCount = res.controlData.userCount
            state.activeCount = res.controlData.activeCount
            state.newCount = res.controlData.newCount
          },
          reject: (state, err) => {}
        })
      }
    },
    mounted () {
      this.getControlInfo()
    },
    computed: {
      ...mapGetters([
        'userCount',
        'activeCount',
        'newCount',
        'controlLoading'
      ])
    }
  }

</script>

<style scoped>
  .text {
    font-size: 48px;
  }

  .item {
    text-align: center;
  }

  .box-card {
    width: 240px;
    float: left;
    margin-right: 20px;
  }
</style>
