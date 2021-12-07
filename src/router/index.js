import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Dashboard from "../views/Dashboard.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import Forgetpassword from "../views/Forgetpassword.vue";
import Updateprofile from "../views/Updateprofile.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Login",
    name: "Login",

    component: Login,
  },
  {
    path: "/Signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/Forgetpassword",
    name: "Forgetpassword",
    component: Forgetpassword,
  },
  {
    path: "/Updateprofile",
    name: "Updateprofile",
    component: Updateprofile,
  },
  {
    path: "/Dashboard",
    name: "Dashboard",
    component: Dashboard,
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
