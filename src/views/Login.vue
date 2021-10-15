<template>
  <div class="login-container">
    <el-form ref="myForm" :model="myForm" :rules="myRule" class="demo-ruleForm login-page" label-position="left"
             label-width="0px" status-icon>
      <h3 class="title">登录</h3>
      <el-form-item prop="username">
        <el-input v-model="myForm.username" auto-complete="off" placeholder="用户名" type="text"/>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="myForm.password" auto-complete="off" placeholder="密码" type="password"/>
      </el-form-item>
      <el-checkbox v-model="checked" class="rememberMe">记住密码
      </el-checkbox>
      <el-form-item style="width:100%;">
        <el-button :loading="logining" style="width:100%;" type="primary" @click="handleSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logining: false,
      myForm: {
        username: '',
        password: '',
      },
      myRule: {
        username: [{required: true, message: '请输入账号', trigger: 'blur'}],
        password: [{required: true, message: '请输入密码', trigger: 'blur'}]
      },
      checked: false
    }
  },
  // 验证用户名和密码
  methods: {
    handleSubmit() {
      this.$refs.myForm.validate((valid) => {
        if (valid) {
          this.logining = true;
          if (this.myForm.username === 'admin' && this.myForm.password === '123456') {
            this.logining = false;
            sessionStorage.setItem('user', this.myForm.username);
            this.$router.push({path: '/about'});
          } else {
            this.logining = false;
            this.$alert('账号或密码错误', '温馨提示', {
              confirmButtonText: '确定'
            })
          }
        } else {
          console.log('error submit!');
          return false;
        }
      })
    }
  }
};
</script>

<style>
.login-container {
  width: 100%;
  height: 100%;
}

.title {
  text-align: center;
}

.login-page {
  -webkit-border-radius: 5px;
  border-radius: 5px;
  margin: 180px auto;
  width: 350px;
  padding: 35px 35px 15px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
</style>
