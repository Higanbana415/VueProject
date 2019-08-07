<template>
  <div class="main">
    <div class="city-list">
        <div class="header"></div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
 body .main{
     height:100%;
     width:100%
 }
 .city-list{
     background:#fff;
     width:100%;
     height:100%;
 }
.city-list .header{
    position: fixed;
    top:0;
    left: 0;
    width:100%;
    height:.44rem;
    overflow: hidden;
    margin: 0;
    padding:0;
    z-index:300;
}
</style>
