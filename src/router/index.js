import { createRouter, createWebHashHistory } from "vue-router";
import SongsVue from "@/views/Songs.vue";
import LoginVue from "@/views/Login.vue";
import SignupVue from "@/views/Signup.vue";
import store from "@/store";

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.user) {
    next();
    return;
  }
  next("/");
};

const routes = [
  {
    path: "/",
    name: "songs",
    component: SongsVue,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginVue,
    beforeEnter: ifNotAuthenticated,
  },
  {
    path: "/signup",
    name: "Signup",
    component: SignupVue,
    beforeEnter: ifNotAuthenticated,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
