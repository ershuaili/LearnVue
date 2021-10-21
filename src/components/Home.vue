<template>
  <div class="common-layout">
    <el-container>
      <el-container>
        <el-aside style="background: #505458" width="200px">
          Aside
        </el-aside>
        <el-main style="background: aquamarine">
          <h1>home</h1>
          <router-link to='/about'>
            <button>点击转跳auto</button>
          </router-link>
          <el-affix :offset="20" position="bottom">
            <el-button type="primary">Offset bottom 20px</el-button>
          </el-affix>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>