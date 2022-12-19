import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import page3View from "@/views/page3View.vue"
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
    path: "/page3View",
    name: "page3View",
    component: page3View,
  },
  {
    path: "/page5commentaryView",
    name: "page5commentaryView",
    component: () => import("@/views/page5commentaryView.vue"),
  },
  {
    path: "/page6View",
    name: "page6View",
    component: () => import("@/views/page6View.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
