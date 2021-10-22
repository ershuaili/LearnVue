<template>
  <div>
    <div>我是头部导航栏,我固定不动</div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {}
}
</script>

<style>
.nav-menu {
  /*margin-bottom: 40px;*/
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .05);
}
</style>