// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store/index'
import DateFilter from './filters/date'
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  VCarousel,
  VCard,
  VImg,
  VTextField,
  VTextarea,
  VForm,
  VDatePicker,
  VTimePicker,
  transitions
} from 'vuetify'
import '../node_modules/vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    VCarousel,
    VCard,
    VImg,
    VTextField,
    VTextarea,
    VForm,
    VDatePicker,
    VTimePicker,
    transitions
  },
  theme: {
    primary: '#db456f',
    secondary: '#a74faf',
    accent: '#ff9668',
    error: '#ea4c4c',
    info: '#dbf1f2'
  }
})

Vue.use(require('vue-moment'))

Vue.filter('date', DateFilter)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
