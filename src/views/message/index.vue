<template>
   <div class='container' ref='topTab'>
    <div class="absolute" :class='{fixed:isFixed}'>
       111
    </div>
    <div>
       222222
    </div>
</div>
</template>

<script>
export default {
  name:"Message",
  data(){
    return{
      isFixed:false,
    }
  },
  methods:{
    onScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      var offsetTop = this.$refs.topTab.offsetTop
      // console.log(scrollTop , offsetTop)
      if (scrollTop > offsetTop) {
        this.isFixed = true
      } else {
        this.isFixed = false
      }
    },
  },
  created () {
    window.addEventListener('scroll', this.onScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.onScroll)
  },
}
</script>

<style>
 .container{
        padding-top: 40px; position: relative; 
    }
    .absolute{
        position: absolute; width:100%; top:0; left:0;
    }
    .absolute.fixed{
        position: fixed;
    }
</style>
