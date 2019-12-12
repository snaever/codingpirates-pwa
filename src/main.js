import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import 'normalize-scss';
import 'remove-focus-outline';
import { Datetime } from 'vue-datetime';
 
Vue.component('datetime', Datetime);

Vue.config.productionTip = process.env.NODE_ENV === 'production';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
