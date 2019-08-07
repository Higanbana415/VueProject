export default{
    path:"/newcomers",
    redirect:"newcomers/movienow",
    component:()=>import("views/newcomers"),
    name:"newcomers",
   
    children:[
        {
          path:"movienow",
          component:()=>import("components/movieNow"),
          name:"movienow",
          meta:{
            tabBar:true,
            auth:false
        },
       },
       {
        path:"moviecoming",
        component:()=>import("components/moviecoming"),
        name:"moviecoming",
        meta:{
          tabBar:true,
          auth:false
      },
     }
     ] , 
  
}