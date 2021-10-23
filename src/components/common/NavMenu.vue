<template>
  <div>
    <div id="reading-progress-bar" style="width:0"></div>
    <el-affix :offset="0">
      <el-menu :default-active="currentPath"
               mode="horizontal"
               router>
        <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
          {{ item.navItem }}
        </el-menu-item>
      </el-menu>
    </el-affix>
  </div>
</template>
<script>
export default {
  name: 'NavMenu',
  data() {
    return {
      navList: [
        {name: '/index', navItem: '首页'},
        {name: '/type', navItem: '分类'},
        {name: '/message', navItem: '留言板'},
        {name: '/picture', navItem: '照片墙'},
        {name: '/about', navItem: '关于我'}
      ],
      keywords: '',
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
  },
  // 组件创建完成
  created() {
    //监听鼠标滚动事件
    window.addEventListener('mousewheel', this.handleScroll, false);
  },
  methods: {
    // 鼠标滚动事件
    handleScroll() {
      // 页面滚动距顶部距离
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      // 网页全文高度 - 网页可见区域高度
      let c = scrollTop / (document.body.scrollHeight - document.documentElement.clientHeight) * 100
      c += "%";
      document.getElementById("reading-progress-bar").style.width = String(c);
    }
  },
}
</script>

<style scoped>
.el-menu--horizontal > .el-menu-item {
  border-bottom: none;
}

.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: none;
}

/* 进度条 */
#reading-progress-bar {
  position: fixed;
  top: 0;
  background: #ef4e7b;
  height: 2px;
  z-index: 1000;
}
</style>
