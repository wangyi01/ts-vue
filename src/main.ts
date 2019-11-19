/*
 * @Author: wangyi
 * @Date: 2019-11-12 15:40:35
 * @LastEditTime: 2019-11-18 10:29:44
 * @LastEditors: Please set LastEditors
 * @Description: main
 * @FilePath: /project/src/main.ts
 */
import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
import store from "./store";
import router from "./router";
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");
