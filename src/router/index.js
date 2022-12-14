import { createRouter, createWebHistory } from "vue-router";

import DashboardLayout from "../layouts/DashboardLayout";

import HomeView from "../views/HomeView.vue";
import Dashboard from "../views/Dashboard/Dashboard";
import Auth from "../views/Auth/Auth"
const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/auth",
    name: "Auth",
    component: Auth, 
  },
  {
    path:"/about",
    name:"About",
    component:()=>import("../views/About")
  },
  {
    path:"/contactus",
    name:"Contact",
    component:()=>import("../views/Contact")
  },
  {
    path: "/layout",
    name: "Layout",
    component: DashboardLayout,
    children: [
      {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
