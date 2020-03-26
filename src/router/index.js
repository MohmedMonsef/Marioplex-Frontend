import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import SignUp from "../views/SignUp.vue";
import Login from "../views/Login.vue";
import ForgetPassword from "../views/ForgetPassword.vue";
import ForArtist from "../views/ForArtist.vue";
import AccessArtist from "../views/AccessArtist";
import ClaimArtist from "../views/ClaimArtist";
import ArtistPersonalPage from "../views/ArtistPersonalPage"

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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/HomeWebPlayer.vue")
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
  },
  {
    path: "/ForArtist",
    name: "ForArtist",
    component: ForArtist
  },
  {
    path: "/ClaimArtist",
    name: "ClaimArtist",
    component: ClaimArtist
  },
  {
    path: "/AccessArtist",
    name: "AccessArtist",
    component: AccessArtist
  },
  {
    path: "/ArtistPersonalPage",
    name: "ArtistPersonalPage",
    component: ArtistPersonalPage
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
