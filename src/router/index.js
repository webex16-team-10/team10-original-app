import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import page5View from "@/views/page5View.vue"
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/title",
    name: "title",
    component: () => import("../views/TitleView.vue"),
  },
  {
    path: "/page3",
    name: "page3",
    component: () => import("../views/page3View.vue"),
  },
  {
    path: "/page3commentary",
    name: "page3commentary",
    component: () => import("../views/page3commentaryView.vue"),
  },
  {
    path: "/page4",
    name: "page4",
    component: () => import("../views/Page4View.vue"),
  },
  {
    path: "/page4commentary",
    name: "page4commentary",
    component: () => import("../views/Page4commentaryView.vue"),
  },
  {
    path: "/page5",
    name: "page5",
    component: page5View,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
