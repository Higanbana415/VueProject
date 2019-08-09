import messageBox from "./index.vue"
import Vue from "vue";
export const MessageBox=(function(){
  //设置默认信心
  let defaultProps={
      title:"信息",
      message:"登录",
      handleOk:function(){},
      handleCancle:function(){}
  }
  let messageVue=Vue.extend(messageBox);

  return(options)=>{
      for(var key in options){
         if(options[key]){
            defaultProps[key]=options[key]
         }
      }
      let messageVm=new messageVue({
          el:document.createElement("div"),
          data:{
             title:defaultProps.title,
             message:defaultProps.message
          },
          methods:{
             handleTrue(){
                 console.log(111);
             },
             handleFalse(){
                 console.log(222);
             }
          }
      })
      document.body.appendChild(messageVm.$mount().$el);
  }
})()