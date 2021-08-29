import {createRouter,createWebHashHistory} from 'vue-router'

const routes = [
  {
    path:"/",
    component:()=>import('../view/index.vue'),
    meta: {},
    children:[]
  },
  {
    path:"/login",
    component: () => import('../view/login/login.vue'),
    meta:{
      requiresAuth:false
    }
  },
  {
    path:"/user",
    component: () => import('../view/user.vue'),
    meta:{
      requiresAuth:true
    }
  }

]

const router = createRouter({
  history:createWebHashHistory(),
  scrollBehavior:()=>({y:0}),
  routes: routes
})

router.beforeEach((to,from,next) =>{
  // 后期修改为通过接口获取token
  const token = localStorage.getItem('token')
  console.log(to,from)
  //登录了
  if (token){
    if (to.path ==='login'){
      next('/')
    }else {
      next()
    }
  }else {
  //未登录
    if (to.meta.requiresAuth){
      next('/login')
    }else {
      next()
    }
  }
} )

export default router