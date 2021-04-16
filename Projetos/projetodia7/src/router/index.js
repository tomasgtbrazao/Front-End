import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/Home.vue"),
  },
  
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  
  {
    path: "/Profile",
    name: "Profile",
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/Profile.vue"),
  },
  
  {
    path: "*",
    name: "Erro",
    component: () =>
      import(/* webpackChunkName: "erro" */ "../views/Erro.vue"),
  },
  
  {
    path: "/profiles/:id",
    name: "Profiles",
    component: () =>
      import(/* webpackChunkName: "profiles" */ "../views/Profiles.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;