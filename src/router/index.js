import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import SignUp from "../views/SignUp.vue";
import Login from "../views/Login.vue";
import ForgetPassword from "../views/ForgetPassword.vue";
import HomeWebPlayer from "../views/HomeWebPlayer.vue";
import UserHome from "../views/UserHome.vue";
import Search from "../views/Search.vue";
import LikedTracks from "../views/LikedTracks.vue";
import Library from "../views/Library.vue";
import Queue from "../views/Queue.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/HomeWebPlayer",
    name: "HomeWebPlayer",
    component: HomeWebPlayer,
    children: [
      { path: "", component: UserHome },

      { path: "search", component: Search },
      { path: "library", component: Library },
      { path: "liked-tracks", component: LikedTracks },
      { path: "queue", component: Queue }
    ]
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/ForgetPassword",
    name: "ForgetPassword",
    component: ForgetPassword
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
