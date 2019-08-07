import http from "utils/http"
//新人专享
export const newshare_api=()=>http("get","/proxy/trc_bjcg/plan/list?planType=4%2C5&pageSize=4&displayTerminal=wx&_t=4dlju84ivug");

//正在热映

export const movieNow_api = () => http("get","/home/index/getRecommendShow?cityAdd=&page=1&version=6.0.3&referer=2")

//即将上映接口

export const moviecoming_api=()=>http("get","/home/index/getFloorShow?city_id=0&version=6.0.3&referer=2")

 export const detail_api=(id)=>http("get","/proxy/trc_bjcg/plan/m/planDetails/2FA8C956490945E8BE7F05232CDA6504?&_t=n61jvli6ghg")

//https://jrwx.trc.com
