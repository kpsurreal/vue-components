import Vue from 'vue'
import App from './App'
import router from './router'
import XcUI from '../packages/index'
import demoBlock from './components/demo-block.vue'
import '../packages/theme-default/lib/index.css'

Vue.component('demo-block', demoBlock)

Vue.use(XcUI)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
