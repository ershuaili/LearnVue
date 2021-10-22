<template>
  <div>
    <el-menu
        :default-active="currentPath"
        active-text-color="red"
        background-color="white"
        mode="horizontal"
        router
        style="min-width: 1300px"
        text-color="#222">
      <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
        {{ item.navItem }}
      </el-menu-item>
      <span style="position: absolute;padding-top: 20px;right: 43%;font-size: 20px;font-weight: bold">White Jotter - Your Mind Palace</span>
      <el-input
          v-model="keywords"
          placeholder="快速搜索..."
          prefix-icon="el-icon-search"
          size="medium"
          style="width: 300px;position:absolute;margin-top: 12px;right: 18%">
      </el-input>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'NavMenu',
  data() {
    return {
      navList: [
        {name: '/index', navItem: '首页'},
        {name: '/about', navItem: '关于'},
        {name: '/library', navItem: '图书馆'},
        {name: '/login', navItem: '管理中心'}
      ],
      keywords: ''
    }
  },
  computed: {
    currentPath() {
      const x = this.$route.path.indexOf('/', 1);
      if (x !== -1) {
        return this.$route.path.substring(0, x)
      } else {
        return this.$route.path
      }
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}

span {
  pointer-events: none;
}

</style>
