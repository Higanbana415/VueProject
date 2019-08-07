<template>
   <div class="page-loan-detail" >
      <div class="mod-product-wrap" >
          <div class="pro-base-info" >
             <div class="pro-rate">
                <div class="rate">
                  <span class="fs-40">
                      {{detailList.yearRate}}
                      <em class="fs-24">
                         <i class="add">
                           + {{detailList.addRate}}
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
                     <span>{{detailList.realAvailShare}}</span>
                     <br>
                     <label>剩余金额(元)</label>
                   </li>
                    <li class="col-md-12">
                     <span>{{detailList.termName}}</span>
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
      <div class="mod-purchase-bar">
         <span>立即登录</span>
      </div>
    </div> 
</template>

<script>
import {detail_api} from "api/home"
export default {
async created(){
  let data=await detail_api(this.$route.params.id);
  console.log(data)

  this.detailList=data.data;
  console.log(this.detailList);
  },
  data(){
     return{
        detailList:[],
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

           }
        ]
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
  height:2.76rem;
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
}
.page-loan-detail .container .list .row .projectMonth{
  float:left;
  width:66.66666%!important;
  color:#333;
}
</style>
