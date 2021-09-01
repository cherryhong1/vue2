import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUi from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "@/styles/index.css"
import "@/icons"
import { mockXHR } from '@/mock'
Vue.config.productionTip = false;
Vue.use(ElementUi);
mockXHR()
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
