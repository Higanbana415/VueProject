<template>
  <div class="page">
    <div id="content">
      <div class="swiper-container" ref="banner_container">
            <div class="back"  @click="handleBack()">
              <span>&lt;返回</span>
            </div>
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="https://static.maizuo.com/pc/v5/usr/movie/0761660ec218216cf56136004175f3af.jpg" />
          </div>
          <div class="swiper-slide">
            <img src="https://static.maizuo.com/pc/v5/usr/movie/de2351149e108852768f160cbe42aa8d.jpg" />
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
      <div class="tabs-bar-wrapper">
         <router-link class="movie_city"
           to="/city"
           tag="div">
            <span>北京</span>
         </router-link>
         <ul class="movie_menu_switch">
            <router-link class="movie_menu_active"
              tag="li"
              to="/newcomers/movieNow">
               正在热映
            </router-link>
            <router-link
             tag="li"
             to="/newcomers/moviecoming">
               即将上映
            </router-link>
         </ul>
      </div>
      <router-view></router-view>
      <!-- <div class="nowPlayingList-wrap">
        <ul>
           <li class="nowPlayingFilm-item">
             <div class="nowPlayingFilm-img">
                <img src="https://static.maizuo.com/pc/v5/usr/movie/6f0ac1383f37aa00c16d6b6f9f967b8f.jpg">
             </div>
             <div class="nowPlayingFilm-info">
               <h3 class="name">某年某月</h3>
               <div class="nowPlayingFilm-grade info-col">
                  <span class="label">观众评分:</span>
                  <span class="grade">8.6</span>
               </div>
               <p class="actress">主演：<span>饺子</span></p>
               <p class="state"><span>中国大陆</span>|<span>110分钟</span></p>
              </div>
             <div class="nowPlayingFilm-buy">购票</div>
           </li>
        </ul>
      </div> -->
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
export default {
  name: "Newcomers",
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      direction: "horizontal",
      loop: true,
      autoplay: true,
      speed: 500,
      pagination: {
        el: ".swiper-pagination"
      },
      autoplayDisableOnInteraction: false
    });
  },
  methods:{
    handleBack(){
       this.$router.back()
    } 
  }
};
</script>

<style>
.page {
  height: 100%;
}
#content{
   width:100%;
   height:100%;
   position: absolute;
}
.swiper-container {
  background: rgb(247, 241, 241);
  width: 100%;
  height: 2.1rem;
  position: relative;
}
.swiper-container .back{
  position: absolute;
  top:.14rem;
  left:.15rem;
  z-index:100;
  color:#c33;
  font-size:.2rem;
  font-weight: 600;
}
.swiper-container img {
  width: 100%;
  height: 2.1rem;
}
.tabs-bar-wrapper {
  width: 100%;
  height: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.4rem;
  border: 1px solid #e6e6e6;
}
.tabs-bar-wrapper .movie_city span{
   display: block;
   width:.51rem;
   height:.3rem;
   background:rgba(0,0,0,.2);
   border-radius:.15rem;
   text-align: center;
   line-height: .3rem;
   font-size:.16rem;
   color: rgb(172, 6, 6);
 }
 #content .tabs-bar-wrapper .movie_menu_switch{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
#content .tabs-bar-wrapper .movie_menu_switch li{
    font-size:0.12px;
    height: 100%;
    line-height: .5rem;
    padding: 0 .25rem;
}
.tabs-bar-wrapper .movie_menu_switch li {
    font-size: .18rem;
    color:#666;
    font-family: PingFangSC-Regular,Hiragino Sans GB,sans-serif;
}
 #content .tabs-bar-wrapper .movie_menu_switch  .router-link-active{
    color: #ef4238;
    border-bottom:2px #ef4238 solid;
}
#content .nowPlayingList-wrap{
   height: calc(100% - 3.3rem);
   overflow-y: auto;
   width:100%;
   background: #fff;
}
#content .nowPlayingList-wrap ul .nowPlayingFilm-item{
   padding:.25rem .2rem .15rem  0;
   width:100%;
   height:1.24rem;
   position: relative;
   display: flex;
   justify-content: flex-start;
   align-items: center;
   border-bottom:.01rem solid  #f1ecec;
}
#content .nowPlayingList-wrap .nowPlayingFilm-img{
   width:.66rem;
   height:.94rem;
   background:rgb(249, 249, 249);
   float:left;
   margin-left:.15rem;
}
#content .nowPlayingList-wrap .nowPlayingFilm-img img{
    width:.66rem;
    height:.94rem;
}
#content .nowPlayingList-wrap li .nowPlayingFilm-info{
  padding:0 .2rem;
  float:left;
  width:2.29rem;
  height:.81rem;
}
#content .nowPlayingList-wrap li .nowPlayingFilm-info .name{
  color:#191a1b;
  font-size:.16rem;
  height:.22rem;
  margin-right: .05rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.nowPlayingList-wrap li .nowPlayingFilm-info .info-col{
   overflow: hidden;
   width: 100%;
   text-overflow: ellipsis;
   white-space: nowrap;
}
.nowPlayingList-wrap li .nowPlayingFilm-info .label{
   font-size:.13rem;
   margin-top: .04rem;
   color:#191a1b;
}
.nowPlayingList-wrap li .nowPlayingFilm-info  .grade{
   color:#ffb232;
   font-size:.14rem;
}
.nowPlayingList-wrap li .nowPlayingFilm-info  .actress{
   font-size:.13rem;
   margin-top:.04rem;
   color:#797d82;
}
.nowPlayingList-wrap li .nowPlayingFilm-info .state{
   font-size:.13rem;
   margin-top:.04rem;
   color:#797d82;
}
.nowPlayingList-wrap li .nowPlayingFilm-buy{
   width:.5rem;
   height:.25rem;
   line-height: .25rem;
   color:#ff5f16;
   border:.01rem solid #ff5f16;
   font-size:.13rem;
   text-align: center;
   border-radius: .02rem;
   position: relative;
}







</style>
