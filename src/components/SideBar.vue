<template>
    <div class="SideBar " id="sidebar">
        <!-- spotify logo -->
        <router-link to="/" id="logo">
          <img src="../../../../spotify logo.png" alt="Logo" style="width:150px; height:65px; margin:20px;">
        </router-link>
        <!-- navigations to pages -->
        <ul>
            <li>
                <router-link to="/HomeWebPlayer" id="homeicon"><i class="fa fa-home"></i>Home</router-link>
            </li>
            <li>
                <router-link to="/" id="searchicon"><i class="fa fa-search"></i>Search</router-link> <!-- router link should navigate to search page -->
            </li>
            <li>
                <router-link to="/" id="libraryicon"><i class="fa fa-bars"></i> Your Library</router-link> <!-- router link should navigate to library page -->
            </li>

        </ul>
        <label id="PLAYLISTS">PLAYLISTS</label>
        <!-- creat play lists or show liked songs -->
        <ul>
            <li>
                <router-link to="/" id="createicon"><i class="fa fa-plus-square" id="CreatePlaylist"></i>Creat Playlist</router-link> <!-- router link should navigate to pop up -->
            </li>
            <li>
                <router-link to="/" id="likedsongs"><img src="../../../../like.png" style="width:30px; height:30px; margin-right: 15px; ">Liked Songs</router-link> <!-- router link should navigate to liked songs page -->
            </li>
        </ul>
        <!-- lower border -->
        <div id="border" class="border" ></div>
        <!-- user's play lists -->
        <ul>
            <li  v-for="playlist in playlists1" :key="playlist.id">
                <router-link to="/" id="userlists">{{playlist.name}}</router-link>  <!-- router link should navigate to play list page-->
            </li>
        </ul>


    </div>
</template>


<style scoped>
  *{
      margin: 0;
      padding: 0;
      list-style: none;
      text-decoration: none;
      
  }
  .SideBar{
      position: fixed;
      width: 235px;
      height: 100%;
      background-color: black;
  } 
  label{
      font-size: 11px;
      padding-left: 20px;
       color:darkgray;
       padding-top: 23px;
       margin-bottom: 16px;
       
  }
  .border{
      background-color:#747272;
      width: 190px;
      height: 0.5px;
      margin: 25px;
      margin-top: 10px;
      margin-bottom: 9px;
  }
  .SideBar ul a i{
      margin-right: 15px;
      font-size: 25px;
  }
  #CreatePlaylist{
      font-size:33px ;
     
  }
  #homeicon , #searchicon , #libraryicon , #createicon , #likedsongs{
      height: 100%;
      width: 100%;
      font-size: 14px;
      color:darkgray;
      padding-left: 30px;
      font-weight: bold;
      line-height: 40px;
     
  }
   #homeicon:hover , #searchicon:hover , #libraryicon:hover , #createicon:hover , #likedsongs:hover{
      color: white;
      text-decoration: none;
      align-content:center;
   }
   #userlists{
        font-size: 14px;
      color:darkgray;
      padding-left: 30px;
   }
    #userlists:hover{
        color: white;
        text-decoration: none;
    }
 
</style> 

<script>
import {mapGetters} from 'vuex';
export default {
    
    mounted(){
         this.$store.dispatch("showplaylists")
    },
    computed:{
                ...mapGetters({
               // map `this.playlists1` to `this.$store.getters.playlists`
               playlists1: 'playlists'               // creat new object "playlists1" and map to it
         })
        
    },
    name: "SideBar" ,
    
}
</script>