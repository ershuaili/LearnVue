<template>
  <h1>hello world!!</h1>
  <router-link to='/about'>
    <button>点击转跳auto</button>
  </router-link>
  <router-link to='/home'>
    <button>点击转跳home</button>
  </router-link>
  <router-view/>
</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped>

</style>