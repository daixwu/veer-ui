import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Veer from '../src/index'

Vue.config.productionTip = false

Vue.use(Veer)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
