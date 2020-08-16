import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Toasted from 'vue-toasted';
import actionSheet from '@/components/ActionSheet'

Vue.use(actionSheet)
Vue.config.productionTip = false
Vue.use(Toasted)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
