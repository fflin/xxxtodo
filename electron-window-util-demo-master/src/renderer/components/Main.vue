<template>
  <div id="main">
    <calendar ref="calendar"></calendar>
    <task ref="task"></task>
    <detail ref="detail" v-if="detailTab===1"></detail>
    <planned-detail ref="detail" ></planned-detail>
  </div>
</template>

<script>
import calendar from './calendar'
import task from './task/task'
import detail from './detail/detail'
import plannedDetail from './detail/planned-detail'

export default {
  name: 'Main',
  components: {
    calendar,
    task,
    detail,
    plannedDetail
  },
  data: function () {
    return {
      detailTab: 1
    }
  }
}
</script>

<style scoped>
  #main {
    margin: 3px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
  }
</style>