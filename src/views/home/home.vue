<template>
  <div class="home">
    <div class="home_content">
      <div class="row mod-fund-wrap">
        <div class="row unlogin-panel clearfix"></div>
      </div>
      <div class="row enter-list">
        <ul class="clearfix">
          <router-link to="/newcomers" tag="li"> 
            <a class="ui-icon-item">
              <img src="https://jrqnimg.trc.com/o_1d41ne4uv1u9q7votvij6a1f1n7.png" />
            </a>
            <span>新人有礼</span>
          </router-link>
          <router-link to="/partner" tag="li">
            <a class="ui-icon-item">
              <img src="https://jrqnimg.trc.com/o_1d41nef6rqiaprcgve15kr1adch.png" />
            </a>
            <span>超级合伙人</span>
          </router-link>
          <router-link to="/operational" tag="li">
            <a class="ui-icon-item">
              <img src="https://jrqnimg.trc.com/o_1d41nepdvf4pgpv1is216i53esr.png" />
            </a>
            <span>运营报告</span>
          </router-link>
          <router-link to="/message" tag="li">
            <a class="ui-icon-item">
              <img src="https://jrqnimg.trc.com/o_1d41nf357m2gtbu12vs1l3kvl15.png" />
            </a>
            <span>信息披露</span>
          </router-link>
          <router-link to="/community" tag="li">
            <a class="ui-icon-item">
              <img src="https://jrqnimg.trc.com/o_1d41nfbudt7baa91uerlubv9f1f.png" />
            </a>
            <span>小泰社区</span>
          </router-link>
        </ul>
      </div>
     <router-view></router-view>
    <div class="scroll-wrap">
      <div class="scroll-content" 
              :style="{ top }" 
              @mouseenter="Stop()" 
              @mouseleave="Up()">
              <p v-for="(item,index) in prizeList" 
              :key="index">
                <a :href="item.src">{{item.name}}</a>
              </p>
      </div>
    </div>
      <div class="swiper-container" ref="banner_container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="https://jrqnimg.trc.com/o_1ccs2lmae17651ml112c71s2p1l5o7.jpg" />
          </div>
          <div class="swiper-slide">
            <img src="https://jrqnimg.trc.com/o_1ccs2lmae17651ml112c71s2p1l5o7.jpg" />
          </div>
          <div class="swiper-slide">
            <img src="https://jrqnimg.trc.com/o_1ccs2lmae17651ml112c71s2p1l5o7.jpg" />
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
      <div class="novice-list-wrap">
            <span class="fs-16">新人专享</span>
      </div>
      <div>
      <div class="list-container">
        <ul class="clearfix">
          <li class="novice-pitem" v-for="(item,index) in newshare" :key="index">
              <div class="col-md-10">
                  <label class="prompt">预期年化</label>
                  <div class="pro-rate">
                    <span class="fs-30">
                      {{item.baseRate}}
                      <em class="fs-18">
                        0% +{{item.addRate}}
                      </em>
                    </span>
                </div>
              </div>
              <div class="col-md-7">
                <label class="pro-label">服务期限</label>
                <div class="pro-val">
                    <span class="fs-16">{{item.termName}}</span>
                </div>
              </div>
              <div class="pro-desc">
                  <span class="trc-btn">立即出借</span>
              </div>
          </li>
        </ul>
      </div>
      <h3 class="mod-product-title">
         <span class="fs-16">安心出借</span>
         <span class="ptype-label">长期选择，持有2期后可转</span>
      </h3>
      <div class="list-container">
        <ul>
          <li class="plan-pitem" v-for="(item,index) in lendList" :key="index" @click="handleDetail(item.id,item.name)">
             <span class="fs-14">{{item.name}}</span>
             <div class="col-md-9">
                <span class="fs-26 c-f63">
                  {{item.yearRate}}%
                   <!-- <em class="fs-16">
                      .60%
                   </em> -->
                </span>
                  <p class="moen">
                     返
                     <em class="c-f63">28%</em>
                     T币
                  </p>
             </div>
             <div class="col-md-7">
                <span class="fs-18">{{item.termName}}</span>
                <div class="pro-lab">{{item.repayMethodName}}</div>
             </div>
             <div class="col-md-8">
                <a class="purchase-btn">抢购</a>
                <p class="pro-lab">
                  剩余
                  <span class="c-35">{{item.availAmount/10000}}万元</span>
                </p>
             </div>
          </li>
        </ul>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import http from "utils/http.js"
import "swiper/dist/css/swiper.css";
export default {
  name: "Home",
 created(){
      this.ScrollUp(),
      http("get","/proxy/trc_bjcg/plan/m/list/new?displayTerminal=wx&_t=ovbueukkjf8").then((data)=>{
        this.newshare=data.data.list;
        // console.log(this.newshare);

    })
      http("get","/proxy/trc_bjcg/plan/list?planType=4%2C5&pageSize=4&displayTerminal=wx&_t=4dlju84ivug").then((data)=>{
        this.lendList=data.data.list;
        console.log( this.lendList);
        
    })
  },
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      direction: "horizontal",
      loop: true,
      autoplay: true,
      speed: 1000,
      pagination: {
        el: ".swiper-pagination"
      },
      autoplayDisableOnInteraction: false
    });
  },
    data() {
      return {
        newshare:[],
        lendList:[],
        prizeList: [
          { name: '关于新手福利升级的通知',src:''},
          { name: '关于7月16日平台数据中心升级的通知',src:'' },
          { name: '关于平台签到功能升级的通知',src:'' },
          { name: '关于平台预期年化收益调整延迟的通知',src:'' },
        ],
        activeIndex: 0,
        intnum: undefined
      }
    },
    computed: {
      top() {
        return - this.activeIndex * 50 + 'px';
      }
    },

 methods: {
    ScrollUp(){
        this.intnum = setInterval(_ => {
        if (this.activeIndex < this.prizeList.length) {
        this.activeIndex += 1;
        } else {
           this.activeIndex = 0;
        }
    }, 4000);
  },
  Stop(){
    clearInterval(this.intnum);
    },
  Up(){
    this.ScrollUp();
    },
    handleDetail(id,name){
      // console.log(id,name)
      this.$router.push({name:"detail",params:{id,name}});
    }
  }
};
</script>
<style scoped>
.home{
  height: 100%;
}
.home .home_content{
  height: calc(100% - .7rem) ;
  overflow-y: auto;
  width:100%;
}
.row {
  position: relative;
  margin-left: -0.08rem;
  margin-right: -0.08rem;
}
.mod-fund-wrap {
  width:100%;
  background: url("https://jrwx.trc.com/imgs/ui-box-bg.30ce0204.png") no-repeat
    #fff bottom;
  background-size: 100%;
  box-sizing: border-box;
  height: 1.6rem;
  text-align: center;
  color: #fff;
  overflow: hidden;
}
.mod-fund-wrap .unlogin-panel {
  height: 1.4rem;
  width: 100%;
  background: url("https://jrwx.trc.com//imgs/ui-unlogin-panel.d8ba59ca.png")
    no-repeat 50%;
  background-size: auto 70%;
}
.clearfix {
  zoom: 1;
}
.enter-list {
  background: #fff;
  width: 100%;
  height: 88px;
  padding-top: 0.12rem;
  padding-bottom: 0.12rem;
  text-align: center;
  color: #333;
}
.enter-list ul {
  width: 100%;
  height: 0.63rem;
  display: flex;
}
.enter-list ul li {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #555;
  font-size: 0.12rem;
  font-family: Microsoft YaHei, sans-serif;
}
.ui-icon-item {
  margin: 0 auto;
  width: 0.36rem;
  height: 0.36rem;
  border-radius: 100%;
  margin-bottom: 0.1rem;
}
.ui-icon-item img {
  width: 0.3rem;
  height: 0.3rem;
}
.scroll-wrap{
    border-top:.01rem solid #f5f5f5;
    height: 50px;
    overflow: hidden;
  }
  .scroll-content {
    position: relative;
    transition: top 0.5s;
  }
  .scroll-content p{
    line-height: 50px;
    text-align: center;
    font-size: 0.13rem;
    font-family:Arial,Microsoft YaHei,sans-serif;
    color: #666;
    
  }
.swiper-container {
  background: rgb(247, 241, 241);
  width: 100%;
  height: 0.84rem;
}
.swiper-container img {
  width: 100%;
  height: 0.84rem;
}
.novice-list-wrap{
  width:100%;
  margin-top:.1rem;
  height:.47rem;
  border-bottom: 1px solid #f5f5f5;
   border-top: 1px solid #f5f5f5;
}
.novice-list-wrap .fs-16{
  font-size:.14rem;
  line-height:.47rem;
  color:#333;
  font-weight:700;
  margin-left:.05rem;
}
.list-container{
   width:100%;
   height:2.1rem;
}
.list-container ul{
  width:100%;
  height:100%;
}
.list-container .novice-pitem  {
  width:100%;
  height:.94rem;
  background:linear-gradient(90deg,#fb595a,#fe7f62);
  position: relative;
  padding: .12rem  0;
  margin-top:.1rem;
  color:#fff;
}
.novice-pitem  .col-md-10{
   width:41.66666%!important;
   position:relative;
   box-sizing: border-box;
   float:left;
   padding-left:.08rem;
   padding-right:.08rem;
   zoom:1;
}
 .novice-pitem .prompt{
   display:block;
   border:.01rem solid #fff;
   width:.66rem;
   height:.2rem;
   line-height:.18rem;
   font-family: cursiveArial,Microsoft YaHei,sans-serif;
   padding:0 .08rem;
 }
 .col-md-10 .pro-rate{
   width:1.34rem;
   height:.42rem;
 }
 .col-md-10 .pro-rate .fs-30{
   font-size:.3rem;
   font-weight:800;
 }
 .col-md-10 .pro-rate .fs-18{
   font-size:.18rem;
   font-weight:800;
   font-style: normal;
   margin-left:-.2rem
 }
.col-md-7{
  width:1.05rem;
  height:.61rem;
  float:left;
  position: relative;
  padding-left:.08rem;
  padding-right:.08rem;
}
.col-md-7 .pro-label{
  width:.48rem;
  height:.14rem;
  line-height: .14rem;
  vertical-align: bottom;
  font-family: cursiveArial,Microsoft YaHei,sans-serif;
}
.novice-pitem .pro-val{
  position:relative;
  width:.89rem;
  height:.44rem;
  white-space:nowrap;
  padding-top:.1rem;
} 
.novice-pitem .pro-val .fs-16{
    height:.44rem;
    line-height: .44rem;
    font-size: .14rem;
    font-family: cursiveArial,Microsoft YaHei,sans-serif;
  }
  .novice-pitem .pro-desc{
     position:relative;
     font-size: .16rem;
     text-align: center;
     width:1.05rem;
     height:.68rem;
     float: left;
     border-left:1px dashed #feaca0;
  }
  .novice-pitem .pro-desc .trc-btn{
    height:.28rem;
    padding:.04rem .1rem;
    margin-top:20px;
    border-radius: 14px;
    border:.01rem solid #fff;
    background-color:hsla(0,0%,100%,.2);
    font-size: .12rem;
    font-weight: 400;
    vertical-align: middle;
    text-align: center;
    cursor: pointer;
    position: relative;
    left:.1rem;
    top:.2rem;
  }
  .mod-product-title{
    width:100%;
    height:.47rem;
    border-bottom:.01rem solid #f5f5f5;
    background:#fff;
    padding:.12rem .14rem .06rem;
  }
 .mod-product-title .fs-16{
  font:.16rem cursiveArial,Microsoft YaHei,sans-serif;
  font-weight: 800;
 }
.ptype-label{
  display: inline-block;
  margin-left: .1rem;
  vertical-align: .02rem;
  font-size: .12rem;
  height: .2rem;
  line-height: .2rem;
  padding:0 .1rem;
  border-radius: 10px;
  font-weight: 400;
  color:#f25a2b;
  background:#ffebe0;
}
.list-container{
  width:100%;
}
.list-container .plan-pitem{
  position: relative;
  border:.01rem solid #f5f5f5;
  padding:.12rem;
  width:100%;
  height:1.27rem;
}
.plan-pitem{
  width:100%;
  height:1.26rem;
  border-top:1px solid #f5f5f5;
  border-bottom:1px solid #f5f5f5;
}
.plan-pitem .fs-14{
  display: block;
  height:.16rem;
  width: 100%;
  font-size:.14rem;
  color:#999!important;
}
.plan-pitem .col-md-9{
  width:138px;
  height:61px;
  position: relative;
  float: left;
  top:.22rem;
}
.plan-pitem .col-md-9 .c-f63{
  color:#f63!important;
}
.plan-pitem .col-md-9 .fs-26{
  font-size:.3rem;
  font-weight: 600;
}
.plan-pitem .col-md-9 .fs-26 .fs-16{
  font-size:.16rem;
  font-style: normal;
  position: relative;
  left:-.15rem;
  font-weight: 600;
}
.plan-pitem .col-md-9  .pro-lab{
  white-space: nowrap;
  color:#999;
}
.plan-pitem .col-md-9 .moen{
  margin-left:.07rem;
}
.plan-pitem .col-md-7{
  height:.61rem;
  width:1.07rem;
  position:relative;
  top:.2rem;
  float: left;
  padding-right:.08rem;
  padding-left:.08rem;
}
.plan-pitem .col-md-7 .fs-18{
  font-size:.18rem;
  font-family:Arial Narrow;
}
.plan-pitem .col-md-7 .pro-lab{
  margin-top:.1rem;
  color:#999;
   overflow:hidden;
   text-overflow:ellipsis;
   white-space:nowrap;
}
.plan-pitem .col-md-8{
  position: relative;
  top:.1.5rem;
  float:right;
  height:.61rem;
  text-align: right;
  width:1rem;
}
.plan-pitem .col-md-8 .purchase-btn{
  background: #27a1e5;
  position: relative;
  right:-.3rem;
  display:block;
  width:.7rem;
  height:.28rem;
  line-height: .28rem;
  font-size: .14rem;
  color:#fff;
  border-radius:.2rem;
  text-align: center;
  margin-top:.2rem;
}
.plan-pitem .col-md-8 .pro-lab{
  color:#999;
  font:.12rem Arial,Microsoft YaHei,sans-serif;
  padding-top:.1rem;
}
</style>
