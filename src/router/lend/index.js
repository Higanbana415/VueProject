export default{
    path:"/lend",
    component:()=>import("../../views/lend/lend.vue"),
    name:"lend",
    meta:{
        tabBar:true,
        auth:false
    },
}