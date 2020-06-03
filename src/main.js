import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible'
import './assets/css/reset.css'

import { Dialog, DatePicker, LuckDraw } from '@nutui/nutui';

Dialog.install(Vue);
DatePicker.install(Vue);
LuckDraw.install(Vue);

// Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
