<template>
  <div id="app">  
     <TabBar v-if="$route.meta.tabBar"></TabBar>
    <router-view></router-view>
  </div>
</template>

<script>
import {MessageBox} from "./lib/messageBox/index.js"
import TabBar from "common/tabBar/index.vue"
console.log(MessageBox)
// import Loading from "./lib/loading/index.js"
// // console.log(Loading().handlemount())
// import http from "utils/http.js"
export default {
  name:"App",
  components:{
    TabBar,
  },
//接口测试
//   created(){
//       http("get","/ajax/v6/user/address/opencities").then((data)=>{
//       console.log(data)
//     })
// }
}
</script>

<style>
#app{
  height: 100%;
}
</style>