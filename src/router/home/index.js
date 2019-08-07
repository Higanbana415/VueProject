export default{
    path:"/home",
    component:()=>import("../../views/home/home.vue"),
    name:"home",
    meta:{
        tabBar:true,
        auth:false
    },
}