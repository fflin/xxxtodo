import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

const winUtil = require('electron-window-util');
const electron = require('electron');

let baseUrl = electron.remote.getGlobal('baseUrl');

let win = new winUtil({
  baseUrl: baseUrl,
  router: router
});
Vue.prototype.$Win = win;

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
