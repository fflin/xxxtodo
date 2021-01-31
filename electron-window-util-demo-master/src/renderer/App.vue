<template>
  <div id="app">
    <router-view class="router-view"></router-view>
  </div>
</template>

<script>
  import Vue from 'vue'
  import BootstrapVue from 'bootstrap-vue'
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'

  Vue.use(BootstrapVue)
  export default {
    name: 'electron-window-util-demo'
  }
</script>

<style>
  #app {
    height: 100vh;
    width: 100vw;
  }

  #app * {
    cursor: default;
  }

  #app > .router-view {
    height: 100%;
    width: 100%;
  }

  /* CSS */
</style>
