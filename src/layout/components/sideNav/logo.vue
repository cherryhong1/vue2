<template>
  <div class="sidenav-logo-container" :class="{ collapse: collapse }">
    <transition name="sidenavLogoFade">
      <router-link
        v-if="collapse"
        key="collapse"
        class="sidenav-logo-link"
        to="/"
      >
        <img v-if="logo" :src="logo" alt="" class="sidenav-logo" />
        <h1 v-else class="sidenav-title">{{ title }}</h1>
      </router-link>
      <router-link v-else key="expand" class="sidenav-logo-link" to="/">
        <img v-if="logo" :src="logo" alt="" class="sidenav-logo" />
        <h1 v-else class="sidenav-title">{{ title }}</h1>
      </router-link>
    </transition>
  </div>
</template>

<script>
export default {
  name: "SidenavLogo",
  props: {
    collapse: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      title: "vue2",
      logo: "https://wpimg.wallstcn.com/69a1c46c-eb1c-4b46-8bd4-e9e686ef5251.png",
    };
  },
};
</script>

<style lang="scss" scoped >
.sidenavFade-enter-active{
  transition: opacity 1.5s;
}
.sidenavLogoFade-enter,
.sidenavLogoFade-leave-to {
  opacity: 0;
}

.sidenav-logo-container {
  position: relative;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: #2b2f3a;
  text-align: center;
  overflow: hidden;

  & .sidenav-logo-link {
    height: 100%;
    width: 100%;

    & .sidenav-logo {
      width: 32px;
      height: 32px;
      vertical-align: middle;
      margin-right: 12px;
    }

    & .sidenav-title {
      display: inline-block;
      margin: 0;
      color: #fff;
      font-weight: 600;
      line-height: 50px;
      font-size: 14px;
      font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
      vertical-align: middle;
    }
  }

  &.collapse {
    .sidenav-logo {
      margin-right: 0px;
    }
  }
}
</style>
