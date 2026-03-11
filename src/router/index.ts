import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Main",
      component: HomeView,
      redirect: "/",
      children: [
        {
          path: "/kursus",
          name: "Kursus",
          component: () => import("../views/AboutView.vue"),
        },
      ],
    },
  ],
});

export default router;
