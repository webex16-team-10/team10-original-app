import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"

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
    path: "/Page2View",
    name: "Page2View",
    component: () => import("../views/Page2View.vue"),
  },
  {
    path: "/Page2Commentary",
    name: "Page2Commentary",
    component: () => import("../views/Page2CommentaryView.vue"),
  },
  {
    path: "/Page1View",
    name: "Page1View",
    component: () => import("../views/Page1View.vue"),
  },
  {
    path: "/Page3View",
    name: "Page3View",
    component: () => import("../views/Page3View.vue"),
  },
  {
    path: "/Page4View",
    name: "Page4View",
    component: () => import("../views/Page4View.vue"),
  },
  {
    path: "/Page5View",
    name: "Page5View",
    component: () => import("../views/Page5View.vue"),
  },
  {
    path: "/Page6View",
    name: "Page6View",
    component: () => import("../views/Page6View.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
