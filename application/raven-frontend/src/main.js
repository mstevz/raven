import Vue from 'vue';
import router from './routing/router.js';
import App from './components/app/App.vue';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
