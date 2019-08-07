const Mock = require('mockjs')
// const newsData=function(){
//     let movieList=[];
//     for(var i=1;i<30;i++){
//         let movieObj={
//          "id|+1":0,    //电影id 
//           "movieName":"@ctitle(4, 6)",  //电影名称
//           "string|1-10": "★",  //观众评分
//           "star":'@cname',   //主演名称
//           "address":'@county(2,4)',  //上映地址
//           "time":"@date('yyyy-MM- dd')",  //电影上映时间
//           "movieImg":"@image('66x90', '#894FC4', '#FFF', 'jpg', '')"
//         }
//         movieList.push(movieObj);
//     }
//     return {
//         movieList:movieList
//     },
//     console.log(movieList)
// }

// Mock.mock("/home/movieNow","get",newsData);



var data=Mock.mock({
    "data|30":[
        {
          "id|+1":0,    //电影id 
          "movieName":"@ctitle(4, 6)",  //电影名称
          "string|1-10": "★",  //观众评分
          "star":'@cname',   //主演名称
          "address":'@county(2,4)',  //上映地址
          "time":"@date('yyyy-MM- dd')",  //电影上映时间
          "movieImg":"@image('66x90', '#894FC4', '#FFF', 'jpg', '')"
        }   
    ]
})
console.log(data);
Mock.mock("/\home\/movieNow/","get",function(options){
   console.log(options);
})