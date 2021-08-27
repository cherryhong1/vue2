<template>
  <div>
    <section class="app-main">
      <transition>
        <router-view :key="key"></router-view>
      </transition>
    </section>
  </div>
</template>

<script>
export default {
  name: "AppMain",
  computed: {
    key() {
      return this.$route.path;
    },
  },
};
</script>

<style scoped>
  .app-main{
    width: 100%;
    position: relative;
    overflow: hidden;
    min-height: calc(100% - 50px);
  }
</style>
