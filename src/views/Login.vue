<template>
  <div>
    用户名:<input v-model="loginForm.name" placeholder="请输入用户名" type="text"/>
    <br><br>
    密码： <input v-model="loginForm.password" placeholder="请输入密码" type="password"/>
    <br><br>
    <button v-on:click="login">登录</button>
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        name: '',
        password: ''
      },
      responseResult: []
    }
  },
  methods: {
    login() {
      let params = new URLSearchParams();
      params.append("name", this.loginForm.name)
      params.append("password", this.loginForm.password)
      axios.post('/b', params)
          .then(successResponse => {
            if (successResponse.data === 200) {
              this.$router.replace({path: '/home'})
            } else {
              alert("用户名或密码错误");
            }
          }).catch(function (error) {
        console.log(error);
      });
    }
  }
}
</script>

