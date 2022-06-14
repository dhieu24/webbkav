import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import '@mdi/font/css/materialdesignicons.css'
import VueRouter from 'vue-router'
import Routes from './routes/routes'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: Routes
})

Vue.config.productionTip = false


export const EventBus = new Vue();

new Vue({
  vuetify,
  render: h => h(App),
  router: router,
}).$mount('#app')
