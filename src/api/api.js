//公共api接口
import axios from '../http/http'

export const getToken = (data)=>{
  return axios({
    url:'/nacos-consumer/getUserInfo',
    data:data,
    showLoading:false
  })
}