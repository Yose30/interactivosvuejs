// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import { Drag, Drop } from 'vue-drag-drop'
import VueSweetalert2 from 'vue-sweetalert2'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.component('drag', Drag)
Vue.component('drop', Drop)
Vue.use(VueSweetalert2)

Vue.use(BootstrapVue)

Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
