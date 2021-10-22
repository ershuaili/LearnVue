<template>
  <h1>我是index页面</h1>
  <button @click="about">点击转跳auto页面</button>
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

<style scoped>

</style>