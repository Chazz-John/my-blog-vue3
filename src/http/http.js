//封装请求方式
import instance from "./index";
/**
 * @param {String} method         请求方法:get,post,delete,put
 * @param {String} url            请求的url
 * @param {Boolean} showLoading   是否显示加载动画
 * @param {Object} data           请求参数
 * @param {Object} config         请求的配置
 * @return {Promise}              返回的一个promise对象,其实就相对于axios请求数据的返回值
 */

const axios = ({
  method,
  url,
  showLoading,
  data,
  config
})=>{
  if (!method){
    method = 'post'
  }
  method = method.toLowerCase()
  //判断是否传入了加载参数,不传则默认显示
  if (config){
    config.showLoading = typeof (showLoading) !== 'undefined'?showLoading:true
  }else {
    config = {
      showLoading:typeof (showLoading) !== 'undefined'?showLoading:true
    }
  }

  if (method === 'get'){
    return instance.get(url,{
      params:data,
      ...config
    })
  }else if (method === 'post'){
    return instance.post(url,data,{...config})
  }else if (method === 'delete'){
    return instance.delete(url,{
      params:data,
      ...config
    })
  }else if (method === 'put'){
    return instance.put(url,data,{...config})
  }else {
    console.error("未知的method"+method)
    return false
  }
}
export default axios;