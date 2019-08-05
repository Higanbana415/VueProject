<template>
  <div id="footer">
     <ul>
        <router-link
            tag="li" 
            v-for="(item,index) in tabbar " 
            :key="index" 
            :to="item.path">
           <i class="iconfont" v-html="item.icon"></i>
          <span>{{item.title}}</span>
        </router-link>
     </ul>
  </div>
</template>

<script>
export default {
  name:"tabBar",
  data(){
      return{
          tabbar:[
              {
                  icon:"&#xe658;",
                  title:"首页",
                  path:"/home"
              },
               {
                  icon:"&#xe632;",
                  title:"出借",
                  path:"/lend"
              },
               {
                  icon:"&#xe617;",
                  title:"我的",
                  path:"/mine"
              }
          ]
      };
  }
};
</script>

<style scoped>
 #footer{
    width:100%;
    height:.7rem;
    position:fixed;
    background:#fff;
    left:0;
    bottom:0;
    border-top:.01rem  solid #ccc;
    /* text-align:center; */
 }
 #footer ul,#footer li{
     width:100%;
     height:100%;
 }
 #footer ul{
   display:flex;
 }
 #footer ul li{
     display:flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     color:#555;
     font-size:.16rem;
     font-family: Microsoft YaHei,sans-serif;
 }
  #footer ul .router-link-active{
     color:rgb(17, 137, 180);
  }
  #footer ul li i{
    font-size:.25rem
  }
</style>
