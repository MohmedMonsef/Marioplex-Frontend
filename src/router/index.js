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
import LibraryPlaylists from "../views/library-playlists.vue";
import LibraryArtists from "../views/library-artists.vue";
import LibraryAlbums from "../views/library-albums.vue";
import Queue from "../views/Queue.vue";
import ForArtist from "../views/ForArtist.vue";
import AccessArtist from "../views/AccessArtist";
import ClaimArtist from "../views/ClaimArtist";
import ArtistPersonalPage from "../views/ArtistPersonalPage"
import playlist from "../views/playlist_view.vue";
import GetPremium from "../views/GetPremium.vue";
import UserAccount from "../views/UserAccount.vue";
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
        path: "/GetPremium",
        name: "GetPremium",
        component: GetPremium
    },
    {
        path: "/UserAccount",
        name: "UserAccount",
        component: UserAccount
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
