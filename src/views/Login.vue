<template>
  <div id="nav">
    <div class="Login">
      <h1>Login</h1>
    </div>
    <el-input v-model="input" placeholder="Please input"/>
    <router-link to="/home">Home</router-link>
    |
    <router-link to="/about">About</router-link>
  </div>
</template>

<script>
export default {
  name: "Login"
}
</script>

<style scoped>

</style>