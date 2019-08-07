<template>
    <div class="movie_wrapper" ref="movie_wrapper">
        <!-- 组件动态的接收内部包裹的元素和标签 -->
        <slot></slot>
    </div>
</template>

<script>
import BScroll from "better-scroll"
export default {
 name:"BScroll",
 mounted(){
    this.scroll=new BScroll(this.$refs.movie_wrapper,{
        click:true,
        tap:true,
        pullDownRefresh:true
    })
 },
 methods:{
     //下拉刷新加载
     handlepullingDown(callback){
         // 触发pullingDown方法
       this.scroll.on("pullingDown",()=>{
          callback();
       })
     },
     //当下拉刷新数据加载完毕后，需要调用此方法告诉 better-scroll 数据已加载。
     handlefinishPullDown(){
         this.scroll.finishPullDown();
         this.scroll.refresh();
     }
 }
}
</script>
<style>
.movie_wrapper{
    height:100%;
}
</style>
