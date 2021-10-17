import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
Vue.use(VueRouter);

import SL from '/home/dfy/Documents/FISE2/JSS/TD5/Act2/second-projet/src/pages/ShoppingList.vue'
import monCompteur from './pages/monCompteur.vue'

Vue.config.productionTip = false

const routes = [
  { path: '/shoppingList', component: SL },
  { path: '/counter',component: monCompteur }
]
const router = new VueRouter({
  routes // short for `routes: routes`
})
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
