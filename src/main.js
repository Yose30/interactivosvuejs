// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import Home from './components/Home'
import Exercise46One from './components/Exercise46One'
import Exercise46Two from './components/Exercise46Two'
import Exercise37One from './components/Exercise37One'
import VueRouter from 'vue-router'
import { Drag, Drop } from 'vue-drag-drop'
import VueSweetalert2 from 'vue-sweetalert2'
import('./assets/css/style.css')


import { library } from '@fortawesome/fontawesome-svg-core'
import { faMusic,faPlayCircle,faStopCircle,faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

library.add(faMusic,faPlayCircle, faStopCircle,faHome )

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.component('drag', Drag)
Vue.component('drop', Drop)
Vue.use(VueSweetalert2)
Vue.use(BootstrapVue)
Vue.use(VueRouter)

Vue.config.productionTip = false

/* eslint-disable no-new */
const router = new VueRouter({
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/lesson371', name: 'lesson371', component: Exercise37One },
    { path: '/lesson461', name: 'lesson461', component: Exercise46One },
    { path: '/lesson462', name: 'lesson462', component: Exercise46Two }
  ]
})

new Vue({
  el: '#app',
  router,
  components: { App, Home, Exercise37One, Exercise46One, Exercise46Two },
  template: '<App/>'
})
