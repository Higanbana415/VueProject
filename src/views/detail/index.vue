<template>
   <div class="page-loan-detail" >
      <div class="mod-product-wrap" >
          <div class="pro-base-info" >
             <div class="pro-rate">
                <div class="rate">
                  <span class="fs-40">
                     10.6
                      <em class="fs-24">
                         <i class="add">
                           + 1.4
                         </i>
                         %
                      </em>
                  </span>
                </div>
              <label class="c-bce2f7">预期年化</label>
              <span class="sign">限时加息</span>
             </div>
             <div class="attribute">
                <ul class="clearfix">
                   <li class="col-md-12 line">
                     <span>500.000.00</span>
                     <br>
                     <label>剩余金额(元)</label>
                   </li>
                    <li class="col-md-12">
                     <span>12个月</span>
                     <br>
                     <label>服务期限</label>
                   </li>
                </ul>
             </div>
          </div>
          <div class="pro-quota">
             <p class="fs-14">项目价值<span class="c-333">500.000.00</span>元</p>
          </div>
      </div>
      <div class="container">
        <h3 class="title">
           项目简介
        </h3>
        <ul class="list">
           <li class="row" v-for="(item,index) in projectMessage" :key="index">
              <a class="projectname">{{item.title}}</a>
              <span class="projectMonth">{{item.detail}}</span>
           </li>
        </ul>
      </div>
      <div class="containers">
         <div class="col-md-8 coupon">
            <label>返</label>
            <span>28%T币</span>
         </div>
         <div class="col-md-16 coupon">
            <label>劵</label>
            <span>支持使用指定卡券</span>
         </div>
      </div>
      <div class="products-info-wrap">
         <div class="swiper-tab">
            <ul>
               <li @click="cur=0" :class="{active:cur==0}"> 项目介绍</li>
               <li @click="cur=1" :class="{active:cur==1}"> 项目组成</li>
               <li @click="cur=2" :class="{active:cur==2}"> 出借记录</li>
            </ul>
          </div>
            <div  v-show="cur==0" class="projectIntroduce">
              <div class="ui-intro-section"> 
                 <p class="ui-intro-title">项目简介</p>
                 <div class="mt-10">
                    <div class="c-333">
                       本项目是平台推出的自动投标工具，平台提供系统和技术服务支持，经由出借人授权，在服务期限内根据本项目的条件为出借人完成撮合，为出借人完成分散投标。
                    </div>
                 </div>
                  <div class="ui-intro-section1"> 
                     <p class="ui-intro-title1">风险提示</p>
                     <div class="mt-10">
                       <div class="c-3334">
                        1、借款人可能会因信用状况不良导致逾期，或者恶意逾期
                        2、平台从借款人和第三方处获得的信息可能不正确或不能准确反映其实际情况，可能影响评估准确性
                        3、平台依赖于自己的信用评估模型来评估用户的信誉度，模型可能存在缺陷或者无效
                        4、根据《网络借贷资金存管业务指引》第二条规定，存管银行提供网络借贷资金存管业务，提供专用账户资金保管、资金清算、账务核对等服务，但不对网络借贷交易行为提供保证或担保；
                           仔细阅读项目详情，谨慎出借。更多风险提示，详见
                       </div>
                     </div>
                  </div>
              </div>
            </div>
            <div  v-show="cur==1">
               <div class="list-wrap">
                  <div class="ui-record-head">
                     <ul>
                        <li>姓名</li>
                        <li>借款金额（元）</li>
                        <li>借款期限</li>
                     </ul>
                      <ul class="list" v-for="(item,index) in detailList" :key="index">
                        <li>{{item.originalUserName}}</li>
                        <li>{{item.loanShare}}（元）</li>
                        <li>{{item.termName}}</li>
                     </ul>       
                  </div>
               </div>
            </div>
            <div  v-show="cur==2">
               <div class="list-wrap">
                  <div class="ui-record-head">
                     <ul>
                        <li>出借人</li>
                        <li>出借金额</li>
                     </ul>
                  </div>
                  <div class="projectContent">
                     <ul v-for="(item,index) in projrctLendList" :key="index">
                        <li class="ui-record" >
                           <div class="loan-record">
                               <span>{{item.userName}}</span>
                                <p>{{item.createDate}}</p>
                           </div>
                            <div class="loan-money">
                               <span class="fs-16">{{item.money}}</span>
                            </div>
                        </li>
                     </ul>
                  <div class="drop-statu-box">
                     别拉了，我也是有底线的~
                  </div>
                  </div>
                
               </div>
            </div>
      </div>
      <router-view></router-view>
      <div class="mod-purchase-bar">
         <span>立即登录</span>
      </div>
      <div class="nav-item" @click="handleBack">
        <i class="iconfont">&#xe658;</i>
        <p>首页</p>
      </div>
    </div> 
</template>

<script>
import {projrctLend_api} from "api/home";
import {detail_api} from "api/home"
export default {
async created(){
  let data=await projrctLend_api();
  this.projrctLendList=data.data.list;
//   console.log(this.projrctLendList);
  let data1=await detail_api();
  console.log(data1);
  this.detailList=data1.data.list;
  console.log(this.detailList);
  },
  data(){
     return{
        detailList:[],
        projrctLendList:[],
        projectMessage:[
           {
              title:"项目名称",
              detail:"u选项目24个月No.201908060034"
           },
           {
              title:"出借条件",
              detail:"出借额度不限"
           },
           {
              title:"还款方式",
              detail:"每月还息到期还本"
           },
           {
              title:"发布时间",
              detail:"2019-08-07 07:55:00"
           },
           {
              title:"募集期",
              detail:"72小时"
           },
           {
              title:"募集结束时间",
              detail:"2019-08-10 07:55:00"
           },
           {
              title:"转让条件",
              detail:"持有2个月后可以转让(参加活动除外)"
           }
        ],
        cur:0,//默认选中第一个tab  
     }
  },
methods:{
   handleBack(){
      if((window.history.length <= 1)){
          this.$router.push({path:'/'})
         return false
      }else{
          this.$router.go(-1);
      }
     
   }
}
}
</script>

<style scoped>
 .page-loan-detail{
    height:100%;
    width:100%;
    box-sizing: border-box;
    background:#eee;
    text-align: center;
    overflow: auto;
 }
.page-loan-detail .mod-product-wrap{
   width:100%;
   height:2.5rem;
   position: relative;
}
.page-loan-detail .mod-product-wrap .pro-base-info{
   width:100%!important;
   float:none!important;
   padding-left:.08rem;
   padding-right:.08rem;
   height:2.03rem;
   background:linear-gradient(90deg,#35b0f5,#0c90d9)
}
.page-loan-detail .mod-product-wrap .pro-rate{
   padding:.4rem .1rem .2rem;
   width:3.39rem;
   height:1.31rem;
}
.page-loan-detail .mod-product-wrap .pro-rate .rate{
   color:#fff;
   font-weight: 700;
   height:.54rem;
}
.fs-40{
   font-size: .4rem;
}
.fs-24{
   font-size:.24rem;
}
em i{
   font-style:normal;
}
.page-loan-detail .mod-product-wrap .pro-rate .add{
   position: relative;
   display: inline-block;
}
 .mod-product-wrap .pro-base-info .c-bce2f7{
    color:#bce2f7!important;
    font-size: 12px;
 }
 .mod-product-wrap .pro-base-info .sign{
   position: relative;
   margin-left:.1rem;
   border-radius:.02rem;
   padding:0 .02rem;
   color:#9ecdf1;
   border:.01rem solid #a5d9f5;
 }
.mod-product-wrap .pro-base-info .attribute{
   position: relative;
   width:100%;
   padding-bottom: .26rem;
   font-size: .12rem;
   line-height: .29rem;
   margin:0 -.08rem 0 -.08rem;
}
.mod-product-wrap .pro-base-info .attribute .clearfix{
   width:100%;
   height:.46rem;
}
.pro-base-info .attribute .clearfix .col-md-12{
   width:50%!important;
   float:left;
   padding-left:.08rem;
   padding-right: .08rem;
   text-align: center;
    height:.46rem;
}
.pro-base-info .attribute .clearfix .line{
   border-right:1px solid #9ecdf1;
}
.pro-base-info .attribute .clearfix .col-md-12 span{
   font-size:.15rem;
   color:#fff;
   font-family:Arial,Microsoft YaHei,sans-serif;
}
.pro-base-info .attribute .clearfix .col-md-12 label{
   color:#9ecdf1;
}
.mod-product-wrap .pro-quota{
   width:100%;
   height:.47rem;
   padding:.1rem 0;
   font-size:.16rem;
   color:#666;
   border-bottom:.01rem solid #a5d9f5;
   position: relative;
   background: #fff;
}
.mod-product-wrap .pro-quota .fs-14{
   position: absolute;
   left:.1rem;
   top:.17rem;
   font:14px "SimSun","\5B8B\4F53","Arial Narrow",HELVETICA;
}
.mod-product-wrap .pro-quota .fs-14 .c-333{
   color:#333!important
}
.mod-purchase-bar{
   width:100%;
   height:.5rem;
   background:#f25a2b;
   position:fixed;
   bottom: 0;
   left: 0;
}
.mod-purchase-bar span{
   text-align: center;
   line-height: .5rem;
   color:#fff;
   font-size: .17rem ;
   font-weight: 600;
}
.page-loan-detail .container{
  width:100%;
  height:2.96rem;
  font-size:.14rem;
  background:#fff;
  padding-left:.08rem;
  padding-right:.08rem;
  margin-top:.1rem;
}
.page-loan-detail .container .title{
  text-align: left;
  height:.38rem;
  line-height:.38rem;
  font-size:.16rem;
  color:#666;
  position:relative;
  padding-left:.08rem;
  padding-right:.08rem;
  font-family:Arial,Microsoft YaHei,sans-serif;
}
.page-loan-detail .container .list{
   height:2.08rem;
   padding-bottom:.12rem;
   position: relative;
   padding-left:.08rem;
   padding-right:.08rem;
   /* background: #d8b7ad; */
}
.page-loan-detail .container .list .row{
   padding:.02rem 0 .02rem 0;
   height:28px;
   line-height: .28rem;
   position:relative;
   margin-left: -0.08rem;
   margin-right: -0.08rem;
   width:3.59rem;
   margin-bottom:.1rem;
   /* background: #f25a2b; */
}
.page-loan-detail .container .list .row .projectname{
   float:left;
   color:#999;
   display: inline-block;
   width:33.33333%!important;
   text-align: left; 
}
.page-loan-detail .container .list .row .projectMonth{
  float:left;
  width:66.66666%!important;
  color:#333;
  text-align: justify;
}
.page-loan-detail .containers{
   width:100%;
   height:.46rem;
   background: #fff;
   margin:.12rem 0 .12rem 0;
   padding-left:.08rem;
   padding-right:.08rem;
   font-size: .14rem;
}
 .containers .col-md-8{
    width:1.2rem;
    height:.46rem;
    float: left;
    line-height: .46rem;
 }
 .containers .col-md-16{
    height:.46rem;
    float:left;
    line-height: .46rem;
    margin-left: .5rem;
 }
.containers .coupon label{
   display: inline-block;
   width:.22rem;
   height:.22rem;
   border-radius: .04rem;
   background:#f25a2b;
   line-height: .22rem;
   color:#fff;
   text-align: center
} 
.containers .coupon span{
   padding-left:.1rem;
}
.products-info-wrap{
   width:100%;
   margin-top:.12rem;
   background: #fff;
} 
.swiper-tab{
   width:100%;
   height:.47rem;
   padding:0;
   border-bottom: 1px solid #efefef;
   z-index:999;
   top:0;
}
.swiper-tab ul{
   width:100%;
   height:100%;
}
.swiper-tab ul li{
   line-height: .47rem;
   width:1.15rem; 
   height:100%;
   float: left;
   font-size: .14rem;
   color:#666;
   margin-left: .07rem;
}
.swiper-tab ul  .active{
   border-bottom: 1px solid #27a1e5;
   color:#27a1e5;
}
.products-info-wrap .projectIntroduce{
  width:3.75rem;
  height:5rem;
}
.projectIntroduce .ui-intro-section,.ui-intro-section1{
   width:100%;
   height:1.4rem;
   padding:.16rem; 
   border-bottom:.01rem solid #f1f1f1;
}
.ui-intro-section1{
   height:3.1rem;
   margin-top:.25rem;
}
 .ui-intro-section  .ui-intro-title ,.ui-intro-title1{
    text-align: left;
    font-size:16px;
    color:#222;
    font-family: Microsoft YaHei,sans-serif;
 }
 .ui-intro-title1{
   margin-left:-0.08rem;
 }
 .c-3334{
    margin-left: -0.08rem;
 }
.ui-intro-section  .mt-10{
   height:.75rem;
   margin-top: .06rem;
   color:#666;
   font-size:14px;
   line-height:25px;
   text-align: left;
   font-family: Microsoft YaHei,sans-serif;
}
.list-wrap{
   width:100%;
   height:10rem;
}
.list-wrap .ui-record-head{
   width:100%;
   height:.5rem;
   background:#f5f5f5;
   color:#555;
}
.list-wrap .ui-record-head ul{
   width:100%;
   height:100%;
   display: flex;
   justify-content: space-between;
   align-items: center;
}
.list-wrap .ui-record-head ul li{
  margin:0 .2rem 0 .2rem;
  font-size: .14rem;
}
.list-wrap .ui-record-head .list{
   border-bottom: .01rem solid #ccc;
}
.list-wrap .projectContent{
   width:100%;
   height:100%;
}
.list-wrap .projectContent .ui-record{
   width:100%;
   height:.72rem;
   border-bottom: .01rem solid #ccc;
}
.list-wrap .projectContent .loan-money{
   width:1.19rem;
   height: .37rem;
   float:left;
   line-height: .37rem;
   text-align: center;
   vertical-align: middle;
   margin-top:.2rem;
}
.list-wrap .projectContent .loan-money span{
   font-size: .2rem;
   font-family: Microsoft YaHei,sans-serif;
   color:#666;
   margin-left:.5rem;
}
.list-wrap .projectContent  .loan-record{
   float:left;
   height:.47rem;
   width:2.4rem;;
   vertical-align: middle;
   margin-top:.13rem;
   text-align:left;
   padding-left: .1rem;
}
.list-wrap .projectContent  .loan-record span{
   line-height: .27rem;
}
.list-wrap .projectContent  .loan-record span,p{
   font-size:.14rem;
   color:#666;
   font-family: Microsoft YaHei,sans-serif;
}
.list-wrap .projectContent .drop-statu-box{
   width:100%;
   height:.5rem;
   padding:.04rem .12rem .12rem;
   text-align: center;
   font-size: .14rem;
   color:rgb(110, 107, 107);
   line-height: .5rem;
}
.nav-item{
   width:.4rem;
   height:.4rem;
   border-radius: 100%;
   box-shadow: 0 0 6px hsla(0,0%,59%,.18);
   text-align: center;
   position: fixed;
   right:.1rem;
   top:4.5rem;
   border: .01rem solid #ccc;
}
.nav-item i{
   color:#9ecdf1;
}
.nav-item p{
   font-size: .12rem;
}
</style>
