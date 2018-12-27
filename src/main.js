import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './plugins/axios'
import './plugins/element'
import './assets/style/base.scss'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
