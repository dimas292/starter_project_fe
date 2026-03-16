import { createRouter, createWebHistory } from "vue-router";
import DefautLayout from "@/layouts/DefautLayout.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Main",
      component: DefautLayout,
      redirect: "/",
      children: [
        {
          path: "/",
          name: "Home",
          component: () => import("../views/HelloView.vue"),
        },
      ],
    },
    {
      path: "/auth",
      name: "Auth",
      component: AuthLayout,
      children: [
        // {
        //   path: "/login",
        //   name: "Login",
        //   // component: () => import("../views/LoginView.vue"),
        // },
      ],
    },
  ],
});

export default router;
