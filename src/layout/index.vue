<template>
  <el-container class="container">
    <el-aside width='200px'>
      <sideNav></sideNav>
    </el-aside>
    <el-container>
      <el-header class="header flex-row-between" >
        <img :src="src" alt="" class="logo">
          <setting></setting>
      </el-header>
      <el-main>
        <appMain></appMain>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { appMain, setting, sideNav } from "./components/index.js";
export default {
  name: "Layout",
  components: {
    appMain,
    setting,
    sideNav,
  },
  mounted() {},
  data() {
    return {
      src: 'https://manager.ubest.cn/r/cms/www/default/pc202009/images/logor.png'
    }
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
}
.header{
  padding: 10px 20px;
}
.logo{
  width: 100px;
}
</style>
