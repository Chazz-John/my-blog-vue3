<!--首页-->
<template>
  <el-button @click="toLogin">登录</el-button>
  <el-button @click="toUser">个人中心</el-button>
</template>

<script setup>
import {useRouter} from "vue-router";
const router = useRouter()
function toLogin(){
  router.push({
    path:'/login'
  })
}
function toUser() {
  router.push({
    path:'/user'
  })
}
</script>

<style scoped>

</style>