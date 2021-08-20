import VuePageTransition from 'vue-page-transition'
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import './assets/tailwind.css'
import vueTopprogress from 'vue-top-progress'

Vue.config.productionTip = false

new Vue({
  router,
  VuePageTransition,
  vueTopprogress,
  render: h => h(App)
}).$mount('#app') 