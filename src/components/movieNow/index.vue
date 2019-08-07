<template>
   <div class="movieWrapper">
    <div class="nowPlayingList-wrap"> 
        <BScroll  ref="lb_BScroll">
        <ul class="movieNow_body" >
           <li class="nowPlayingFilm-item" v-for="(item,index) in movieNowList" :key="index" >
             <div class="nowPlayingFilm-img">
                <img :src="item.schePic">
             </div>
             <div class="nowPlayingFilm-info">
               <h3 class="name">{{item.show_name}}</h3>
               <div class="nowPlayingFilm-grade info-col">
                  <span class="label">最高价格:</span>
                  <span class="grade">{{item.high_price}}元</span>
               </div>
               <p class="actress">描述：<span>{{item.c_name}}</span></p>
               <p class="state"><span>中国大陆</span>|<span>{{item.min_show_time}}</span>分钟</p>
              </div>
             <div class="nowPlayingFilm-buy">购票</div>
           </li>
        </ul> 
       </BScroll>
      </div>   
 </div>
</template>

<script>
// import BScroll from 'better-scroll'
import axios from "axios"
import {movieNow_api} from "api/home"
export default {
 async created(){
    if(!sessionStorage.getItem("movieNowList")){
      let data=await movieNow_api();
      this.movieNowList=data.data.recommend_show_list;
      sessionStorage.setItem("movieNowList",JSON.stringify(data.data.recommend_show_list));
      console.log(data);
    }
},
data(){
   return{
      movieNowList:JSON.parse(sessionStorage.getItem("movieNowList"))||[],
 }
},
// methods:{
//   handleClick(){
//      alert(1)
//   }
// },
// mounted(){
//    new BScroll(this.$refs.nowPlayingList-wrap,{
//       click:true,
//       tap:true
//    });
// }

mounted(){
    this.$refs.lb_BScroll.handlepullingDown(()=>{
       console.log(111)
       this.$refs.lb_BScroll.handlefinishPullDown();
    })
}
}
</script>

<style>
.movieWrapper {
  height: 100%;
  overflow: auto;
}
</style>
