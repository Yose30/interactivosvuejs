// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import BootstrapVue from 'bootstrap-vue'

import Home from './components/Home'
import Exercise46One from './components/Exercise46One'
import Exercise46Two from './components/Exercise46Two'
import Exercise37One from './components/Exercise37One'
import Exercise4 from './components/Exercise4'
import Exercise5 from './components/Exercise5'
import Exercise6 from './components/Exercise6'
import Exercise7 from './components/Exercise7'
import Draw from './components/Draw'

import VueRouter from 'vue-router'
import VueSweetalert2 from 'vue-sweetalert2'

import { Drag, Drop } from 'vue-drag-drop'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMusic, faPlayCircle, faStopCircle, faHome, faPauseCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import('./assets/css/style.css')
library.add(faMusic, faPlayCircle, faStopCircle, faHome, faPauseCircle)

window.$ = window.jQuery = require('jquery')

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(require('vue-moment'))
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
    { path: '/lesson462', name: 'lesson462', component: Exercise46Two },
    { path: '/exercise4', name: 'exercise4', component: Exercise4 },
    { path: '/exercise5', name: 'exercise5', component: Exercise5 },
    { path: '/exercise6', name: 'exercise6', component: Exercise6 },
    { path: '/exercise7', name: 'exercise7', component: Exercise7 },
    { path: '/draw', name: 'draw', component: Draw }

  ]
})

new Vue({
  el: '#app',
  router,
  components: { App, Home, Exercise37One, Exercise46One, Exercise46Two, Exercise4, Exercise5, Exercise6, Exercise7, Draw },
  template: '<App/>'
})
