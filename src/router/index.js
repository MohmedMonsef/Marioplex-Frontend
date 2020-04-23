import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import HomeBody from "../components/HomeBody.vue";
import SignUp from "../views/SignUp.vue";
import Login from "../views/Login.vue";
import ForgetPassword from "../views/ForgetPassword.vue";
import ResetPassword from "../views/ResetPassword.vue";
import HomeWebPlayer from "../views/HomeWebPlayer.vue";
import UserHome from "../views/UserHome.vue";
import Search from "../views/Search.vue";
import LikedTracks from "../views/LikedTracks.vue";
import Library from "../views/Library.vue";
import LibraryPlaylists from "../views/library-playlists.vue";
import LibraryArtists from "../views/library-artists.vue";
import LibraryAlbums from "../views/library-albums.vue";
import Queue from "../views/Queue.vue";
import ForArtist from "../views/ForArtist.vue";
import AccessArtist from "../views/AccessArtist";
import ClaimArtist from "../views/ClaimArtist";
import ArtistPersonalPage from "../views/ArtistPersonalPage";
import Premium from "../components/HomePremium.vue";
import playlist from "../views/playlist_view.vue";
import GetPremium from "../components/GetPremium.vue";
import UserAccount from "../views/UserAccount.vue";
import album from "../views/album_view.vue";
import ArtistProfile from "../views/ArtistProfile.vue";
import seeallartist from "../views/seeallartist.vue";
import seeallalbum from "../views/seeallalbum.vue";
import seeallplaylist from "../views/seeallplaylist.vue";
import category from"../views/categoryplaylists.vue";
import seeallcategoryplaylists from"../views/seeallcategoryplaylists.vue";
import seealluser from "../views/seealluser.vue";
import seealltrack from '../views/seealltrack';
import UserProfile from "../views/UserProfile";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      { path: "",
        name:"HomePage",
       component: HomeBody 
      },
      {
       path: "premium",
       name:"Premium",
       component: Premium 
      },
      {
        path: "/GetPremium",
        name: "GetPremium",
        component: GetPremium
      },
    ]
  },
  {
    path: "/HomeWebPlayer",
    name: "HomeWebPlayer",
    component: HomeWebPlayer,
    children: [
      { path: "", component: UserHome },

      {
        path: "search",
        component: Search,
        children: [
          {
            path: "seeallartist",
            component: seeallartist
          },
          {
            path: "seeallalbum",
            component: seeallalbum
        }
         ,
         {
            path: "seeallplaylist",
            component: seeallplaylist
        } ,
        {
          path: "seealluser",
          component: seealluser
      }, {
        path: "seealltrack",
        component: seealltrack
    }
        ]
      },
      {
        path: "library",
        component: Library,
        children: [
          {
            path: "library-playlists",
            component: LibraryPlaylists
          },
          {
            path: "library-artists",
            component: LibraryArtists
          },
          {
            path: "library-albums",
            component: LibraryAlbums
          }
        ]
      },
      { path: "liked-tracks", component: LikedTracks },
      { path: "queue", component: Queue },
      {
        path: "playlist/:playlist_id",
        name: "playlist",
        component: playlist
      },
      {
        path: "album/:album_id",
        name: "album",
        component: album
      },
      {
        path: "ArtistProfile/:artist_id",
        name: "ArtistProfile",
        component: ArtistProfile
      },
      {
        path: "UserProfile/:user_id",
        name: "UserProfile",
        component: UserProfile
      }
      , {
        path: "category/:categoryId/:name",
        name: "category",
        component: category
      }
      ,
      {
        path: "category/:categoryId/:name/seeallcategoryplaylists",
        name: "seeallcategoryplaylists",
        component: seeallcategoryplaylists
      }
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
  },
  {
    path: "/reset_password",
    name: "ResetPassword",
    component: ResetPassword,
    props: (route) => ({
      token: route.query.token
    })
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
  {
    path: "/UserAccount",
    name: "UserAccount",
    component: UserAccount
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
