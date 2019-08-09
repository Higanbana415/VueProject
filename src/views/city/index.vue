<template>
  <div class="main">
    <div class="header">
      <span>城市选择</span>
      <router-link to="newcomers">
        <div class="iconfont header-back">返回</div>
      </router-link>
      <div class="search">
            <input class="search-input" v-model="cityValue" type="text" placeholder="输入城市名或拼音">
      </div>
    </div>
    <div class="list" ref="wrapper">
       <BScroll  ref="lb_BScroll">
        <div class="area">
          <div class="title border-topbottom">当前城市</div>
          <div class="button-list">
            <div class="button-wrapper">
              <div class="button">北京</div>
            </div>
          </div>
        </div>
        <div class="area">
          <div class="title border-topbottom">热门城市</div>
          <div class="button-list">
            <div class="button-wrapper">
              <div class="button">北京</div>
            </div>
            <div class="button-wrapper">
              <div class="button">上海</div>
            </div>
            <div class="button-wrapper">
              <div class="button">深圳</div>
            </div>
            <div class="button-wrapper">
              <div class="button">广州</div>
            </div>
          </div>
        </div>
       <div class="city_body" ref="list">
        <div class="area">
          <div class="title border-topbottom">A</div>
          <div class="item-list">
            <div class="item border-bottom">阿拉善盟</div>
            <div class="item border-bottom">鞍山</div>
            <div class="item border-bottom">安庆</div>
            <div class="item border-bottom">安阳</div>
            <div class="item border-bottom">安顺</div>
            <div class="item border-bottom">安康</div>
          </div>
        </div>
        <div class="area">
          <div class="title border-topbottom">B</div>
          <div class="item-list">
            <div class="item border-bottom">北京</div>
            <div class="item border-bottom">保定</div>
            <div class="item border-bottom">包头</div>
            <div class="item border-bottom">本溪</div>
            <div class="item border-bottom">白山</div>
            <div class="item border-bottom">滨州</div>
          </div>
        </div>
        <div class="area">
          <div class="title border-topbottom">C</div>
          <div class="item-list">
            <div class="item border-bottom">成都</div>
            <div class="item border-bottom">承德</div>
            <div class="item border-bottom">沧州</div>
            <div class="item border-bottom">长治</div>
            <div class="item border-bottom">长春</div>
            <div class="item border-bottom">重庆</div>
          </div>
        </div>
        <div class="area">
          <div class="title border-topbottom">D</div>
          <div class="item-list">
            <div class="item border-bottom">大同</div>
            <div class="item border-bottom">大连</div>
            <div class="item border-bottom">丹东</div>
            <div class="item border-bottom">大庆</div>
            <div class="item border-bottom">东莞</div>
            <div class="item border-bottom">德阳</div>
          </div>
        </div>
         <div class="area">
          <div class="title border-topbottom">E</div>
          <div class="item-list">
            <div class="item border-bottom">鄂尔多斯</div>
            <div class="item border-bottom">鄂州</div>
          </div>
        </div>
         <div class="area">
          <div class="title border-topbottom">F</div>
          <div class="item-list">
            <div class="item border-bottom">抚顺</div>
            <div class="item border-bottom">阜阳</div>
            <div class="item border-bottom">福州</div>
            <div class="item border-bottom">抚州</div>
            <div class="item border-bottom">佛山</div>
          </div>
        </div>
         <div class="area">
          <div class="title border-topbottom">G</div>
          <div class="item-list">
            <div class="item border-bottom">赣州</div>
            <div class="item border-bottom">广州</div>
            <div class="item border-bottom">桂林</div>
            <div class="item border-bottom">广元</div>
            <div class="item border-bottom">广安</div>
            <div class="item border-bottom">贵阳</div>
          </div>
        </div>
         <div class="area">
          <div class="title border-topbottom">H</div>
          <div class="item-list">
            <div class="item border-bottom">衡水邯郸</div>
            <div class="item border-bottom">大连</div>
            <div class="item border-bottom">哈尔滨</div>
            <div class="item border-bottom">鹤岗</div>
            <div class="item border-bottom">黑河</div>
            <div class="item border-bottom">杭州</div>
          </div>
        </div>
         <div class="area">
          <div class="title border-topbottom">J</div>
          <div class="item-list">
            <div class="item border-bottom">晋城</div>
            <div class="item border-bottom">锦州</div>
            <div class="item border-bottom">金华</div>
            <div class="item border-bottom">吉林</div>
            <div class="item border-bottom">九江</div>
            <div class="item border-bottom">景德镇</div>
          </div>
        </div>
         <div class="area">
          <div class="title border-topbottom">K</div>
          <div class="item-list">
            <div class="item border-bottom">开封</div>
            <div class="item border-bottom">昆明</div>
          </div>
        </div>
       </div>
       </BScroll>
    </div>
    
      <ul class="citylist">
        <v-touch class="cityitem" 
        v-for="(item,index) in CityAlphabet"
         :key="index"
         tag="li"
         @tap="handleIndexTo(index)"
         >{{item}}</v-touch>
      </ul>
    </div>
</template>

<script>
import BScroll from "better-scroll"
export default {
  name:"CityList",
  data(){
    return{
      CityAlphabet:["A","B","C","D","E","F","G","H","J","K","L","M"],
      cityValue:"",
      cityList:[],
      timer:null
    }
  },
  methods:{
    handleIndexTo(index){
      let letterFirsts=this.$refs.list.querySelectorAll(".title")
      console.log(letterFirsts);
      this.$refs.wrapper.scrollTop=letterFirsts[index].offsetTop;
    }
  },
  watch:{
    cityValue(newVal,oldVal){
      console.log(newVal);
      if(this.timer){
        clearTimeout(this.timer);
        this.setTimeout(() => {
          const result=[];
         for (let i in this.item-list) {
          this.item-list[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.cityList = result
         },100)
      }
    }
  }
}
</script>

<style scoped>
.city_body{
  width:100%;
  height:100%;
}
.main {
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: auto;
}
.header {
  width: 100%;
  position: relative;
  height: 1.3rem;
  text-align: center;
  color: #fff;
  background: cornflowerblue;
}
.header span {
  display: inline-block;
  margin-top: 10px;
  font-size: 0.25rem;
  font-family: Arial Narrow;
}
.header .header-back {
  position: absolute;
  top: 0;
  left: 0;
  width: 0.64rem;
  text-align: center;
  font-size: 0.2rem;
  color: #ffffff;
  margin-top: 10px;
}
.search {
  height: 0.72rem;
  padding: 0 0.1rem;
  background: cornflowerblue;
  margin-top: 0.2rem;
}
.search-input {
  border: 0;
  box-sizing: border-box;
  width: 100%;
  height: 0.42rem;
  padding: 0 0.1rem;
  line-height: 0.62rem;
  text-align: center;
  border-radius: 0.06rem;
  color: #666666;
}
.border-topbottom {
  border-color: #ccc;
}
.list {
  overflow: auto;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
}
.title {
  line-height: 0.54rem;
  background: #eee;
  padding-left: 0.2rem;
  color: #666;
  font-size: 0.18rem;
  font-family: Arial Narrow;
}
.button-list {
  padding: 0.1rem 0.6rem 0.1rem 0.1rem;
  overflow: hidden;
}
.button-wrapper {
  float: left;
  width: 33.33%;
}
.button {
  margin: 0.1rem;
  padding: 0.1rem 0;
  text-align: center;
  border: 0.01rem solid #ccc;
  border-radius: 0.06rem;
}
.item-list .item {
  line-height: 0.56rem;
  padding-left: 0.2rem;
  font-size:.14rem;
}
.citylist{
   display :flex;
    flex-direction :column;
    justify-content: center;
    position:fixed;
    top: 1.58rem;
    right :0;
    bottom: 0;
    width:.4rem;
} 
    .cityitem{
     
      right:.05rem;
       font-size:.16rem;
       line-height:.4rem;
       text-align:center;
       color:rgb(101, 104, 107);
    }
    .search-content{
    z-index: 1;
    overflow: hidden;
    position: absolute;
    top: 1.58rem;
    left: 0;
    right: 0;
    bottom: 0;
    background: #eee;
    }
   
</style>