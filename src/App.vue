<template id="app">
  <router-view></router-view>
</template>

<script setup>
import {onMounted} from "vue";
import {getToken} from './api/api'

onMounted(()=>{
  getToken().then(res=>{
    console.log(res);
  })
})

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.element-plus-logo {
  width: 50%
}
</style>