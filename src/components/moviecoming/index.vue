<template>
        <div class="nowPlayingList-wrap">
        <BScroll>
        <ul>
           <li class="nowPlayingFilm-item" v-for="(item,index) in movieComingList" :key="index">
             <div class="nowPlayingFilm-img">
                <img :src="item.pic">
             </div>
             <div class="nowPlayingFilm-info">
               <h3 class="name">{{item.schedular_name}}</h3>
               <p class="actress">最高价格：<span>{{item.high_price}}</span></p>
               <p class="state">上映时期<span>{{item.display_show_time}}</span></p>
              </div>
             <div class="nowPlayingFilm-buy">预购</div>
           </li>
        </ul>
        </BScroll>
      </div>
</template>

<script>
import {moviecoming_api} from "api/home"
export default {
 async created(){
   let data=await moviecoming_api();
   for(var i=0;i<data.data.length;i++){
     this.movieComingList=data.data[i].list
   }
      console.log( this.movieComingList);
},
 data(){
   return{
     movieComingList:[],
   }
 }
}
</script>

<style>
.nowPlayingFilm-item .nowPlayingFilm-info .state{
    margin-top:.1rem;
}
</style>
