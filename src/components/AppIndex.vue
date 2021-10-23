<template>
  <div>
    <h1>11111111111</h1>
    <h1>22222222222</h1>
    <h1>我是index页面</h1>
    <h1>我是index页面</h1>
    <h1>我是index页面</h1>
    <h1>我是index页面</h1>
    <h1>我是index页面</h1>
    <h1>我是index页面</h1>
    <h1>我是index页面</h1>
    <h1>我是index页面</h1>
    <h1>我是index页面</h1>
    <h1>我是index页面</h1>
    <h1>我是index页面</h1>
    <button @click="about">点击转跳auto页面</button>
  </div>
</template>

<script>
export default {
  name: "Index",
  components: {},
  methods: {
    about() {
      this.$router.push({
        name: 'About',
      })
    },
  }
}
</script>