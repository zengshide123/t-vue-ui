import Vue from 'vue'
import App from './App.vue'
import TUI from './t-vue-ui'

Vue.use(TUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
