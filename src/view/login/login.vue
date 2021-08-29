<template>
  <div class="container" :class="{ 'sign-up-mode': signUpMode }">
    <!-- form表单容器 -->
    <div class="forms-container">
      <div class="signin-signup">
        <!-- 登录 -->
        <v-row v-if="showForm">
          <v-col cols="6" offset="3">
            <v-card class="grey lighten-3 pa-md-10" elevation="6">
              <p>登录</p>
              <v-text-field
                v-model="email"
                label="邮箱"
                solo
                prepend-inner-icon="mdi-email"
              ></v-text-field>
              <v-text-field
                v-model="password"
                label="密码"
                solo
                prepend-inner-icon="mdi-lock"
              ></v-text-field>
              <v-card-actions>
                <v-btn color="primary float-end">登录</v-btn>
                <v-spacer></v-spacer>
                没有账号?<el-button color="primary" plain text @click="toLogin">去注册</el-button>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>

        <!-- 注册 -->
        <v-row v-if="!showForm">
          <v-col cols="6" offset="3">
            <v-card class="grey lighten-3 pa-md-10" elevation="6">
              <p>注册</p>
              <v-text-field
                v-model="email"
                label="邮箱"
                solo
                prepend-inner-icon="mdi-email"
              ></v-text-field>
              <v-text-field
                v-model="password"
                label="密码"
                solo
                prepend-inner-icon="mdi-lock"
              ></v-text-field>
              <v-card-actions>
                <el-button color="primary">注册</el-button>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </div>
    <!-- 左右切换动画 -->
    <div class="panels-container">
      <div class="panel left-panel">
        <div class="content">
          <h2>学习是为了有更多的选择,让生活变的更美好!</h2>
          <p>何以解忧,唯有自修</p>
          <el-button
            outlined
            color="#fff"
            @click="toLogin"
          >
            注册
          </el-button>
        </div>
        <img src="../../assets/img/log.svg" class="image" />
      </div>

      <div class="panel right-panel">
        <div class="content">
          <h2>以人为镜,可明得失, 以代码为镜,可通逻辑!</h2>
          <p>学习编程,让你的生活更有趣</p>
          <el-button
            outlined
            color="#fff"
            @click="toLogin"
            class="ma-2"
            width="100"
          >
            登录
          </el-button>
        </div>
        <img src="../../assets/img/register.svg" class="image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  props: {},
  data() {
    return {
      email: "",
      password: "",
      signUpMode: "",
      showForm: true,
    };
  },
  mounted() {},
  methods: {
    toLogin() {
      this.signUpMode = !this.signUpMode;
      setTimeout(() => {
        (this.email = ""),
          (this.password = ""),
          (this.showForm = !this.showForm);
      }, 800);
    },
  },
};
</script>

<style scoped>
@import "../../assets/css/style.css";
</style>
