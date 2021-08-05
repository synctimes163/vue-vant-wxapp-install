import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import '@/styles/index.scss' // global css

import * as Vant from './plugins/vant/index'
Vue.config.productionTip = false

Vue.config.ignoredElements = [
  'wx-open-launch-weapp',
  // 用一个 `RegExp` 忽略所有“ion-”开头的元素 
  // 仅在 2.5+ 支持 
  /^ion-/
]


new Vue({
  router,
  store,
  Vant,
  render: h => h(App)
}).$mount('#app')
