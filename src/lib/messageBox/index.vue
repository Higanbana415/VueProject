<template>
    <div class="messageBox">
         <div class="message_Top">
             <div>{{title}}</div>
             <div>X</div>
         </div>
         <div class="wrapper">
           <div class="content">{{message}}</div>
           <div>
               <button  class="btn">关闭全部</button>
           </div>
         </div>
    </div>
</template>
<script>
export default {
   name:"MessageBox",
}
</script>

<style>
 .messageBox{
     position:absolute;
     top:0;
     bottom:0;
     left:0;
     right:0;
     width:3.06rem;
     height:2.39rem;
     margin:auto;
     background: #fff;
     z-index:100;
     box-shadow:0px .03rem 1rem #ccc;
 }
.messageBox .message_Top{
    width:100%;
    height:.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size:.2rem;
    border-bottom:.01rem solid #ccc;
    padding:0 .22rem;
    color:#666;
    font-family:Arial Narrow;
    background: #f8f8f8;
}
.wrapper{
  width:100%;
  height:100%;
}
.wrapper .content {
    width:100%;
    height:1rem;
    text-align: center;
    line-height: .7rem;
}
.wrapper .btn{
    width:2.2rem;
    height:.4rem;
    background:#1E9FFF;
    color:#fff;
    font-size:.16rem;
    margin:20px 0 0 45px;
    border:0;
    border-radius: .15rem;
}
</style>
