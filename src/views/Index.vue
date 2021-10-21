<template>
  <h1>hello world!!</h1>
  <router-link to='/about'>
    <button>点击转跳auto</button>
  </router-link>
  <router-link to='/home'>
    <button>点击转跳home</button>
  </router-link>
  <about/>
</template>

<script>
import About from "@/components/About";

export default {
  name: "index",
  components: {About}
}
</script>

<style scoped>

</style>