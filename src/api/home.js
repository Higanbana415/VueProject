import http from "utils/http"
//新人专享
export const newshare_api=()=>http("get","/proxy/trc_bjcg/plan/list?planType=4%2C5&pageSize=4&displayTerminal=wx&_t=4dlju84ivug");

//正在热映

export const movieNow_api = () => http("get","/home/index/getRecommendShow?cityAdd=&page=1&version=6.0.3&referer=2")

//即将上映接口

export const moviecoming_api=()=>http("get","/home/index/getFloorShow?city_id=0&version=6.0.3&referer=2")

export const detail_api=()=>http("get","/proxy/trc_bjcg/loans/preLoanInfoList?pageIndex=1&pageSize=10&planId=FE46A1286C20452E9B8CC43C7FC6409C&_t=tii290avp98")
export const projrctLend_api=()=>http("get","/proxy/trc_bjcg/u/order/plan/public/InvestRecords?pageIndex=1&pageSize=10&planId=FCBC3E0F2F7C43B28A1E85AAEE45BE77&_t=09m14d305a8");
//https://jrwx.trc.com/proxy/trc_bjcg/loans/preLoanInfoList?pageIndex=1&pageSize=10&planId=FCBC3E0F2F7C43B28A1E85AAEE45BE77&_t=mttccfur1fg
//https://jrwx.trc.com/proxy/trc_bjcg/u/order/plan/public/InvestRecords?pageIndex=1&pageSize=10&planId=FCBC3E0F2F7C43B28A1E85AAEE45BE77&_t=09m14d305a8
//http://jrwx.trc.com/proxy/trc_bjcg/loans/preLoanInfoList?pageIndex=1&pageSize=10&planId=FE46A1286C20452E9B8CC43C7FC6409C&_t=tii290avp98
