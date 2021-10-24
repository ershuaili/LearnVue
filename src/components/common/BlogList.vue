<template>
  <div class="blog-list">
    <div class="blogs-left">
      <h1>这是个标题</h1>
      <p>博客简介</p>
      <div class="blogs-left-icon">
        <p>这里是一些图标</p>
      </div>
    </div>
    <div class="blogs-right">
      <a @click="toAbout">
        <img alt="" src="../../assets/background.jpg">
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogList",
  methods: {
    toAbout() {
      this.$router.push({
        name: 'About',
      })
    }
  }
}
</script>

<style scoped>
.blog-list {
  background-color: rgb(255, 255, 255, 0.5);
  width: 70%;
  height: 200px;
  margin: 30px auto 0;
  border-radius: 5px;
}

.blogs-left {
  float: left;
  width: 70%;
  height: 200px;
}

.blogs-right {
  float: left;
  width: 30%;
  height: 200px;
  border-radius: 5px;
  line-height: 200px;
}

img {
  width: 95%;
  height: 80%;
  z-index: 1;
  vertical-align: middle;
  border-radius: 5px;
}

</style>