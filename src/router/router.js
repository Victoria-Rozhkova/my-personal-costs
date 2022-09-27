import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: Dashboard,
  },
  {
    path: "*",
    // component: Dashboard,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
