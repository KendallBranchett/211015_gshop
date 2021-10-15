// 入口js
import Vue from 'vue'
import App from './App.vue'
import router from './router'


// 关闭生产提醒
Vue.config.productionTip = false

new Vue({
  el:'#app',
  render: h => h(App),
  router
})