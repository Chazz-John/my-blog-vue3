<template>
个人中心{{userInfo}}
<el-button type="primary" @click="updateUserInfo">更新用户信息</el-button>
</template>

<script setup>
const userInfo = $ref({
  name:'zhangzhao',
  age:12
})
const updateUserInfo = ()=>{
  userInfo.name = "12"
  userInfo.age = 1
}
</script>

<style scoped>

</style>