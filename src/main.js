import Vue from 'vue'
import App from './App.vue'
import './bulma.sass'
import store from './store'

Vue.config.productionTip = false

new Vue({
  store,
  mounted: () => document.dispatchEvent(new Event('x-app-rendered')),
  render: (h) => h(App),
}).$mount('#app')
