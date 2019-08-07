import Vue from 'vue'
import Router from 'vue-router'
import home from "./home/index"
import lend from "./lend/index"
import mine from "./mine/index"
import newcomers from "./newcomers/index"
import partner from "./partner/index"
import operational from "./operational/index"
import message from "./message/index"
import community from "./community/index"
import city from "./city/'index"
import detail from "./detail/index"
Vue.use(Router)
export default new Router({
    routes: [
     {
       path:"/",
       redirect:"/home"
     },
        detail,
        city,
        home,
        lend,
        mine,
        newcomers,
        partner,
        operational,
        message,
        community
    ]
})

