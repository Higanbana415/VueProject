/*
    事件池
    eventList = {
         handle:[fn1,fn2,fn3]
         abc:[fn1,fn2,fn3]
    }
    ||
    eventList = {
      
    }

    $on(eventName,callback)
    判断当前事件名称是否存在，如果不存在则创建一个key值为事件名称  value为一个数组
    将callback push到数组中

    如果事件名称存在则直接添加到数组中去


    $emit(eventName,[params])

    判断当前事件名称是否存在，如果存在则遍历数组，得到所有的函数，并执行。然后将params当做实参传递到函数中去


    $off(eventName,[callback])


    判断当前事件名称是否存在，如果存在继续判断第二个参数是否存在，如果存在则找到相对于的下标 然后将函数在数组中移除
    如果不存在则将整个数组清空
*/

const eventList = {}


const $on = (eventName,callback)=>{
    if(!eventList[eventName]){
        eventList[eventName] = [];
    }
    eventList[eventName].push(callback)
}



const $emit = (eventName,params)=>{
    if(eventList[eventName]){
        let arr = eventList[eventName];
        arr.map((cb)=>{
            cb(params);
        })
    }

}

const $off = (eventName,callback)=>{
    if(eventList[eventName]){
        if(callback){
            let index = eventList[eventName].indexOf(callback);
            eventList[eventName].splice(index,1);
        }else{
            eventList[eventName].length = 0;
        }
    }
}


function fn1(val){
    console.log(111,val)
}

function fn2(val){
    console.log(222,val)
}

function fn3(val) { 
    console.log(333,val)
 }



 $on("handle",fn1)
 $on("handle",fn2)
 $on("handle",fn3)
 $off("handle",fn1)
 $emit("handle","abc")