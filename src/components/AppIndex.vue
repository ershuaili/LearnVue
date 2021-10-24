<template>
  <div class="index">
    <blog-list/>
    <blog-list/>
    <blog-list/>
    <blog-list/>
    <blog-list/>
    <blog-list/>
    <blog-list/>
    <blog-list/>
    <blog-list/>
    <blog-list/>
    <blog-list/>
  </div>
</template>

<script>
import BlogList from "@/components/common/BlogList";

export default {
  name: "Index",
  components: {BlogList},
  methods: {
    about() {
      this.$router.push({
        name: 'About',
      })
    },
  }
}
</script>

<style>
.index {
  padding-top: 1px;
  padding-bottom: 30px;
}
</style>