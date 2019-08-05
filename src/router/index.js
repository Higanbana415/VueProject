import Vue from 'vue'
import Router from 'vue-router'
import home from "./home/index"
import lend from "./lend/index"
import mine from "./mine/index"
Vue.use(Router)
export default new Router({
    routes: [
        home,
        lend,
        mine
    ]
})

