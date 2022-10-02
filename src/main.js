import Vue from "vue";
import App from "./App.vue";
import store from "./store/store";
import router from "./router/router";
import modal from "./plugins/modal";
import context from "./plugins/contextMenu";

Vue.config.productionTip = false;

Vue.use(modal);
Vue.use(context);

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
