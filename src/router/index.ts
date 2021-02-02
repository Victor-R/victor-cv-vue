import { createWebHistory, createRouter } from "vue-router";
import Landing from "@/views/Landing/index.vue";
import Main from "@/views/Main/index.vue";

const routes = [
  {
    path: "/",
    name: "Landing",
    component: Landing
  },
  {
    path: "/main",
    name: "Main",
    component: Main
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
