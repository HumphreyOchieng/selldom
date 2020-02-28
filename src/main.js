import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import semantic from 'semantic-ui-vue'
import 'semantic-ui-css/semantic.min.css'
import 'vue-material-design-icons/styles.css'

Vue.config.productionTip = false;
Vue.use(semantic);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
