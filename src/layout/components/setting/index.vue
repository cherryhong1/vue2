<template>
  <div>
    <el-dropdown>
      <div class="el-dropdown-link">
        <el-avatar :src="src" :size="40" shape="square" fit="fill"> </el-avatar>
        <i class="el-icon-caret-bottom"></i>
      </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>
          <router-link to="/"> Home</router-link>
        </el-dropdown-item>
        <el-dropdown-item>
          <a href="http://www.ubest.cn" target="_black" style="display: block"
            >集团</a
          ></el-dropdown-item
        >
        <el-dropdown-item divided @click.native="logout">
          Log out
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: "Setting",
  data() {
    return {
      src: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
    };
  },
  methods: {
    logout() {},
  },
};
</script>

<style scoped>
.el-dropdown-link {
  cursor: pointer;
}
</style>
