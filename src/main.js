import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import "../public/common/css/reset.css"
import "../public/common/iconfont/iconfont.css"
import "./mock/movieNow/index"
import "./common/components/index.js"
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
