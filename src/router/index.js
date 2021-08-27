import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Layout from "@/layout";

export const constantRoutes = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login/index.vue"),
    hidden: true,
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/404/index.vue"),
    hidden: true,
  },
  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: () => import("@/views/dashboard/index.vue"),
        meta: {
          title: "Dashboard",
          icon: "dashBoard",
        },
      },
    ],
  },
  {
    path: "/example",
    name: "Example",
    component: Layout,
    redirect: "/example/table",
    meta: {
      title: "Example",
      icon: "el-icon-s-help",
    },
    children: [
      {
        path: "table",
        name: "Table",
        component: () => import("@/views/table/index.vue"),
        meta: {
          title: "Table",
          icon: "table",
        },
      },
      {
        path: "tree",
        name: "Tree",
        component: () => import("@/views/tree/index.vue"),
        meta: {
          title: "Tree",
          icon: "tree",
        },
      },
    ],
  },
  {
    path: "*",
    redirect: "/404",
    hidden: true,
  },
];
const createRouter = () =>
  new VueRouter({
    scrollBehavior: () => ({
      y: 0,
    }),
    routes: constantRoutes,
  });
const router = createRouter();

export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher;
}

export default router;
