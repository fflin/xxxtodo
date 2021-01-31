<template>
    <div id="task">
        <b-nav tabs fill>
            <b-nav-item @click="tab=1" :active="tab===1"><b>我的任务(仅便签)</b></b-nav-item>
            <b-nav-item @click="tab=2" :active="tab===2"><b>今日计划(便签+提醒)</b></b-nav-item>
            <b-nav-item @click="tab=3" :active="tab===3"><b>今日已完成(便签+提醒)</b></b-nav-item>
        </b-nav>
        <task-list v-show="tab===1" :isPlannedList="false" :task-list="taskList"></task-list>
        <task-list v-show="tab===2" :isPlannedList="true" :task-list="taskList"></task-list>
        <task-list v-show="tab===3" :isPlannedList="true" :task-list="taskList"></task-list>
    </div>
</template>

<script>
  import taskList from './task-list'
  const util = require('../../util/util');
  const dbUtil = require('../../db/dbUtil')
  const moment = require('moment')

  export default {
    name: 'task',
    components: {
      taskList
    },
    data: function () {
      return {
        tab: 1,
        taskList: []
      }
    },
    mounted () {
      this.loadData(1)
    },
    methods: {
      loadData (tab) {
        const that = this
        if (tab === 1 || tab === 2) {
          dbUtil.listTasksByDate(moment().format('YYYYMMDD'), tab === 2, function (data) {
            that.taskList = data
          })
        } else {
          dbUtil.getFinishedData(moment().format('YYYYMMDD'), tab === 3, function (data) {
            that.taskList = data
          })
          // this.openWin('bottomRightToup')
        }
      },
      async openWin (type) {
        let _config = {
          width: 300,
          height: 300,
          x: 0,
          y: 0,
          windowConfig: {
            router: '/landing',
            name: type,
            data: ''
          }
        }

        let config = util[type](_config)

        console.log('config --- ' + config)

        this.$Win.openWin(config)
      },
      removeItem (index) {
        this.taskList.splice(index, 1)
      }
    },
    watch: {
      tab (newVal) {
        // 切换tab清空详情栏的内容
        if (this.$parent != null) {
          if (this.$parent.$refs != null) {
            if (this.$parent.$refs.detail != null) {
              this.$parent.$refs.detail.taskId = ''
              this.$parent.$refs.detail.task = null
              this.$parent.detailTab = newVal
              this.loadData(newVal)
            } else {
              console.log('detail  == null')
              this.loadData(newVal)
            }
          } else {
            console.log('$refs == null')
          }
        } else {
          console.log('$parent == null')
        }
      }
    }
  }
</script>

<style scoped>
    #task {
        padding-left: 5px;
        padding-right: 5px;
        width: 500px;
        min-width: 400px;
        flex-grow: 1.5;
    }
</style>
