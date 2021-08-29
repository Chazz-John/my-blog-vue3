//创建axios实例
import axios from 'axios'
import {
  ElLoading,
  ElMessage
} from 'element-plus';

let instance = axios.create({
  baseURL: import.meta.env.VITE_APP_URL, //接口统一域名
  timeout:6000, //设置超时
  headers:{
    'Content-Type': 'application/json;charset=UTF-8;',
  },
  withCredentials:false
})
//请求加载动画执行方法
let loading;
//请求的个数
let requestCount = 0;

//显示loading
const showLoading = (showLoading)=>{
  if (showLoading && requestCount === 0 && !loading) {
    loading = ElLoading.service({
      text:'加载中...',
      background:'rgba(0, 0, 0, 0.7)',
      spinner:'el-icon-loading'
    })
  }
  requestCount++;
}

//隐藏loading
let hideLoading =()=>{
  requestCount--;
  if (requestCount === 0 && loading) {
      loading.close();
  }
}

//请求拦截
instance.interceptors.request.use((config)=>{
  //请求开始显示加载画面
  showLoading(config.showLoading);
  //获取本地缓存中的token
  const token = window.localStorage.getItem("token");
  //没看懂? == 当token存在时,将token保存到headers中Authorization中
  token && (config.headers.Authorization = token)

  //如果请求为post,则将data参数转为json字符串
  if (config.method ==='POST') {
    config.data = JSON.stringify(config.data)
  }
  return config
},error =>{
  //请求错误
  return  Promise.reject(error)})

//响应拦截器
instance.interceptors.response.use((response)=>{
  //获取响应之后
  hideLoading();
  //响应成功,这句打印看不懂
  // console.log('拦截器报错');
  return response.data
},error => {
  console.log(error);
  //请求报错处理
  if (error.response&&error.response.status){
    const status = error.response.status;
    let message;
    switch (status) {
      case 400:
        message = '请求错误'
        break;
      case 401:
        message = '请求错误'
        break;
      case 404:
        message = '请求地址错误'
        break;
      case 408:
        message = '请求超时'
        break;
      case 500:
        message = '服务器内部错误'
        break;
      case 501:
        message = '服务未实现'
        break;
      case 502:
        message = '网关错误'
        break;
      case 503:
        message = '服务不可用'
        break;
      case 504:
        message = '网关超时!'
        break;
      case 505:
        message = 'http版本不支持'
        break;
      default:
        message = '请求失败'
    }
    ElMessage.error(message)
    hideLoading();
    return Promise.reject(error)
  }
  hideLoading();
  return Promise.reject(error)
})
export default instance;