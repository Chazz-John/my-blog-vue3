<!--首页-->
<template>
  <img alt="Vue logo" class="element-plus-logo" src="../assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Element Plus + Vite" />
  <el-button @click="toLogin">登录</el-button>
  <el-button @click="toUser">个人中心</el-button>
</template>

<script setup>
import HelloWorld from '../components/HelloWorld.vue'
import {useRouter} from "vue-router";
const router = useRouter()
function toLogin(){
  router.push({
    path:'/'
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