export default{
    path:"/mine",
    component:()=>import("../../views/mine/mine.vue"),
    name:"mine",
    meta:{
        tabBar:true,
        auth:false
    },
}