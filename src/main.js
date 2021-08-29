import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

const app = createApp(App)
//自定义挂载

//挂载element-plus依赖
app.use(ElementPlus)
app.mount('#app')
