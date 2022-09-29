import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "../views/Dashboard.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "*",
    component: () =>
      import(/* webpackChunkName: "notFount" */ "../views/NotFound.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
