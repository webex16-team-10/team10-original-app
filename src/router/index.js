import { createRouter, createWebHistory } from "vue-router"
const routes = [
  {
    path: "/title",
    name: "title",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/TitleView.vue"),
  },
  {
    path: "/Page2View",
    name: "Page2View",
    component: () => import("../views/Page2View.vue"),
  },
  {
    path: "/Page2commentary",
    name: "Page2commentary",
    component: () => import("../views/Page2CommentaryView.vue"),
  },
  {
    path: "/title",
    name: "title",
    component: () => import("../views/TitleView.vue"),
  },
  {
    path: "/Page1View",
    name: "Page1View",
    component: () => import("../views/page1View.vue"),
  },
  {
    path: "/Page3View",
    name: "Page3View",
    component: () => import("../views/page3View.vue"),
  },
  {
    path: "/Page3commentary",
    name: "Page3commentary",
    component: () => import("../views/page3commentaryView.vue"),
  },
  {
    path: "/Page4View",
    name: "Page4View",
    component: () => import("../views/Page4View.vue"),
  },
  {
    path: "/Page4commentary",
    name: "Page4commentary",
    component: () => import("../views/Page4commentaryView.vue"),
  },
  {
    path: "/Page5View",
    name: "Page5View",
    component: () => import("../views/page5View.vue"),
  },
  {
    path: "/Page5commentary",
    name: "Page5commentary",
    component: () => import("../views/page5commentaryView.vue"),
  },
  {
    path: "/LastPageView",
    name: "LastPageView",
    component: () => import("../views/LastPageView.vue"),
  },
  {
    path: "/Page6View",
    name: "Page6View",
    component: () => import("../views/page6View.vue"),
  },
  {
    path: "/page6commentary",
    name: "page6commetary",
    component: () => import("../views/page6commentaryView.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
