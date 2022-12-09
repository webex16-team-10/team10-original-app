import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import page3View from "@/views/page3View.vue"
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
    path: "/page3View",
    name: "page3View",
    component: page3View,
  },
  {
    path: "/page5View",
    name: "page5View",
    component: page5View,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
