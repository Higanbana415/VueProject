export default {
    path:"/detail/:id/:name",
    component:()=>import("../../views/detail"),
    name:"detail",
    meta:{
        tabBar:false,
        auth:false
    },
    children:[
        {
            path:"projectIntroduce",
            component:()=>import("components/projectIntroduce"),
            name:"projectIntroduce",
        }
    ],
    props:true
}