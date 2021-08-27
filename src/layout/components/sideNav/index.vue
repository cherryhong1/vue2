<template>
  <div class="sideNav">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        class="el-menu-vertical-demo"
        :unique-opened="false"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidenav-item
          v-for="route in routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import SidenavItem from "./sidenavItem.vue";
import variables from "@/styles/variables.scss";
export default {
  name: "SideNav",
  components: {
    SidenavItem,
  },
  computed: {
    routes() {
      return this.$router.options.routes;
    },
    activeMenu() {
      console.log(this.$router.options.routes);
      const route = this.$route;
      const { meta, path } = route;
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      console.log(route);
      return path;
    },
    variables() {
      return variables;
    },
  },
};
</script>

<style scoped>
.sideNav {
  width: 200px;
  background-color: #304156;
  color: aliceblue;
}
</style>
