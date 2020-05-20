import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store"
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
import LibraryPlaylists from "../views/LibraryPlaylists.vue";
import LibraryArtists from "../views/LibraryArtists.vue";
import LibraryAlbums from "../views/LibraryAlbums.vue";
import Queue from "../views/Queue.vue";
import ForArtist from "../views/ForArtist.vue";
import AccessArtist from "../views/AccessArtist";
import ClaimArtist from "../views/ClaimArtist";
import ArtistPersonalPage from "../views/ArtistPersonalPage";
import Premium from "../components/HomePremium.vue";
import playlist from "../views/PlaylistView.vue";
import GetPremium from "../components/GetPremium.vue";
import UserAccount from "../views/UserAccount.vue";
import album from "../views/AlbumView.vue";
import AllLists from "../views/AllLists.vue";
import AllArtists from "../views/AllArtists.vue";
import AllAlbums from "../views/AllAlbums.vue";
import AllReleases from "../views/AllReleases.vue";
import AccountOverview from "../components/AccountOverview.vue";
import AccountEdit from "../components/AccountEdit.vue";
import AccountChange from "../components/AccountChange.vue";
import AccountRecover from "../components/AccountRecover.vue";
import AccountNotifications from "../components/AccountNotifications.vue";
import ArtistProfile from "../views/ArtistProfile.vue";
import seeallartist from "../views/SeeallArtist.vue";
import seeallalbum from "../views/SeeallAlbum.vue";
import seeallplaylist from "../views/SeeallPlaylist.vue";
import seeallcategoryplaylists from "../views/SeeallCategoryPlaylists.vue";
import seealluser from "../views/SeeallUser.vue";
import seealltrack from "../views/SeeallTrack";
import UserProfile from "../views/UserProfile";
import category from "../views/CategoryPlaylists.vue";
import UnAuthorized from "../views/UnAuthorized.vue"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "",
        component: HomeBody,
      },
      {
        path: "UserAccount",
        component: UserAccount,
        children: [
          {
            path: "Account-overview",
            component: AccountOverview,
          },
          {
            path: "Account-edit",
            component: AccountEdit,
          },
          {
            path: "Account-change",
            component: AccountChange,
          },
          {
            path: "Account-recover",
            component: AccountRecover,
          },
          {
            path: "Account-notifications",
            component: AccountNotifications,
          },
        ],
        meta: { 
          requiresAuth: true
        }
      },
      { path: "", name: "HomePage", component: HomeBody },
      {
        path: "premium",
        name: "Premium",
        component: Premium,
        meta: { 
          isPremium:true
        }
      },
      {
        path: "/GetPremium",
        name: "GetPremium",
        component: GetPremium,
        meta: { 
          toPremium: true,
          isPremium:true
        }
      },
    ],
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
            component: seeallartist,
          },
          {
            path: "seeallalbum",
            component: seeallalbum,
          },
          {
            path: "seeallplaylist",
            component: seeallplaylist,
          },
          {
            path: "seealluser",
            component: seealluser,
          },
          {
            path: "seealltrack",
            component: seealltrack,
          },
        ],
      },
      {
        path: "library",
        component: Library,
        children: [
          {
            path: "library-playlists",
            component: LibraryPlaylists,
          },
          {
            path: "library-artists",
            component: LibraryArtists,
          },
          {
            path: "library-albums",
            component: LibraryAlbums,
          },
        ],
        meta: { 
          requiresAuth: true
        }
      },
      { 
        path: "liked-tracks",
         component: LikedTracks,
         meta: { 
          requiresAuth: true
        }
        },
      { path: "queue",
       component: Queue,
       meta: { 
        requiresAuth: true
      }
       },
      {
        path: "playlist/:playlist_id",
        name: "playlist",
        component: playlist,
      },
      {
        path: "album/:album_id",
        name: "album",
        component: album,
      },
      {
        path: "ArtistProfile/:artist_id",
        name: "ArtistProfile",
        component: ArtistProfile,
      },
      {
        path: "/AllLists",
        name: "AllLists",
        component: AllLists,
      },
      {
        path: "/AllArtists",
        name: "AllArtists",
        component: AllArtists,
      },
      {
        path: "/AllAlbums",
        name: "AllAlbums",
        component: AllAlbums,
      },
      {
        path: "/AllReleases",
        name: "AllReleases",
        component: AllReleases,
      },
      {
        path: "UserProfile/:user_id",
        name: "UserProfile",
        component: UserProfile,
      },
      {
        path: "category/:categoryId/:name",
        name: "category",
        component: category,
      },
      {
        path: "category/:categoryId/:name/seeallcategoryplaylists",
        name: "seeallcategoryplaylists",
        component: seeallcategoryplaylists,
      },
    ],
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
    meta: { 
      isLogged:true
    }
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    children:[
      {
        path: "/reset_password",
        name: "ResetPassword",
        component: ResetPassword,
        props: (route) => ({
          token: route.query.token,
        }),
      }
    ],
    meta: { 
      isLogged:true
    }
  },
  {
    path: "/ForgetPassword",
    name: "ForgetPassword",
    component: ForgetPassword,
  },
  {
    path: "/ForArtist",
    name: "ForArtist",
    component: ForArtist,
  },
  {
    path: "/ClaimArtist",
    name: "ClaimArtist",
    component: ClaimArtist,
  },
  {
    path: "/AccessArtist",
    name: "AccessArtist",
    component: AccessArtist,
  },
  {
    path: "/ArtistPersonalPage",
    name: "ArtistPersonalPage",
    component: ArtistPersonalPage,
  },
  {
    path: "/UnAuthorized",
    name: "UnAuthorized",
    component: UnAuthorized
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  store
});

router.beforeEach((to, from, next) => {
  console.log(store.getters["Authorization/GetStatus"])
  if(to.matched.some(record => record.meta.requiresAuth)) {
    var status= localStorage.getItem("x-auth-token");
    if (!status) {
      next('/UnAuthorized')
      return
    }
} 
else {
  next() 
}
  if(to.matched.some(record => record.meta.toPremium)) {
    if (store.getters["Authorization/GetStatus"] != "success") {
      next('/login')
      return
    }
  } 
  else {
    next() 
  }
  if(to.matched.some(record => record.meta.isLogged)) {
    if (store.getters["Authorization/GetStatus"] == "success") {
      next('/')
      return
    }
  } 
  else {
    next() 
  }
  if(to.matched.some(record => record.meta.isPremium)) {
    if (store.getters["Authorization/user"].product == "premium") {
      next(from.path)
      return
    }
  } 
  else {
    next() 
  }
})
export default router;
