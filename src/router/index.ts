import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/About.vue"),
  },
  {
    path: "/order",
    name: "Order",
    meta: { layout: "admin" },
    component: () => import("../views/Order.vue"),
  },
  {
    path: "/stock",
    name: "Stock",
    meta: { layout: "admin" },
    component: () => import("../views/Stock.vue"),
  },
  {
    path: "*",
    name: "NotFound",
    component: () => import("../views/404.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
