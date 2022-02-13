import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import vuetify from './plugins/vuetify'

import globals from './mixins/globals.js'

import MainLinks from './components/MainLinks.vue'
import MusicPlayer from './components/MusicPlayer.vue'

const routes = [
  { path: '/', component: MainLinks},
  { path: '/musics', component: MusicPlayer}
]

const router = new VueRouter({
  routes
})

Vue.mixin(globals);

Vue.prototype.$musicStatusUpdate = function() {
  Vue.prototype.$musicTitle="aaaaa";
  console.log("aaaa")
}

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
