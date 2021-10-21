<template>
  <h1>hello world!!</h1>

  <button @click="auto">点击转跳auto</button>

  <router-link active-class="active" to='/home'>
    <button>点击转跳home</button>
  </router-link>
  <div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "Index",
  components: {},
  methods: {
    auto() {
      this.$router.push({
        name: 'auto',
      })
    }
  }
}
</script>

<style scoped>

</style>