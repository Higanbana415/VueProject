<template>
  <div id="app">  
     <TabBar v-if="$route.meta.tabBar"></TabBar>
    <router-view></router-view>
  </div>
</template>

<script>
import TabBar from "common/tabBar/index.vue"
// import Loading from "./lib/loading/index.js"
// console.log(Loading().handlemount())
// import http from "utils/http.js"
export default {
  name:"App",
  components:{
    TabBar,
  },
//接口测试
//   created(){
//       http("get","/gateway?k=5293799").then((data)=>{
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