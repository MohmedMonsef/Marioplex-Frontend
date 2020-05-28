<template>
    <div class="row" id="row2">
        <div class="col-lg-30% side_bar">
            <account-sidebar/>
        </div>
        <div class="col-lg-70%" id="grey_div">
            <h1>Recover playlists</h1>
            <div class="edit_border"></div>
            <h2>Accidentally deleted a playlist? No worries, find the deleted playlist you'd like to recover below, then click RESTORE to recover it.</h2>
            <div class="white_div">
                <div class="row main_row">
                    <div class="col-sm">
                        <h3 class="head1">DELETED</h3>
                    </div>
                    <div class="col-sm">
                        <h3 class="head2">TITLE</h3>
                    </div>
                    <div class="col-sm">
                        <h3 class="head3">SONGS</h3>
                    </div>
                    <div class="col-sm">
                        <h3 class="head4">RESTORE</h3>
                    </div>
                </div>
                <div class="edit_border2"></div>    
                    <!-- body -->
                <div class="row playlist_row" 
                 v-for="(playlist, index) in deleted_playlists"
                 :class="{playlist_row2: index%2==0}" 
                 :key="playlist.id">
                    <div class="col-md">
                        <h4 class="col1">{{playlist.deletedAt.slice(8,10) +"/"+ playlist.deletedAt.slice(5,7) +"/"+ playlist.deletedAt.slice(0,4)}}</h4>
                    </div>
                    <div class="col-md">
                        <h4 class="col2">{{playlist.name}}</h4>
                    </div>
                    <div class="col-md">
                        <h4 class="col3">{{playlist.songsNumber}}</h4>
                    </div>
                    <div class="col-md">
                        <button class="restore" @click="(playlistid = playlist.id) , Restore()">RESTORE</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
#row2{
    margin-left: 7%;
}
@media only screen and (max-width:880px){
  #row2{
  width: 100%;
  margin-left: 0%;
  margin-right: 0%;
  position: relative;
  }
}
#grey_div{
 background: #F8F8F8;
 width: 68.5%;
 height: 100%;
 padding-right: 5%;
 padding-bottom: 5%;
 position:relative;
}  
@media only screen and (max-width: 880px){
  #grey_div{
  background-color: #f8f8f8;
  width: 77%;
  height: 100%;
  padding-right: 5%;
  padding-bottom: 5%;
  position:relative;
  margin-right: 0%;
  }
}
@media only screen and (max-width: 800px){
  #grey_div{
  background-color: #f8f8f8;
  width: 100%;
  height: 100%;
  padding-right: 5%;
  padding-bottom: 5%;
  position:relative;
  }
}
h1{
    color: #1DB954;
    font-size: 25px;
    font-family: Helvetica, Arial, sans-serif;
    margin-left: 7%;
    margin-top: 8%;
}
.edit_border{
    border-bottom: 1px solid rgb(230, 230, 230);
    width: 90%;
    margin-left: 7%;
    margin-bottom: 3%;
}
.edit_border2{
    border-bottom: 1px solid rgb(230, 230, 230);
    width: 92%;
    margin-left: -1%;
    margin-top: 1%;
}
@media only screen and (max-width: 1030px){
  .edit_border2{
    width: 94%;
  }
}
@media only screen and (max-width: 767px){
  .edit_border2{
    visibility: hidden;
    position: absolute;
  }
}
.white_div{
    margin-left: 7%;
    width: 90%;
    height: 600px;
    background: white;
    padding-top: 6%;
    padding-left: 7%;
}
h2{
    color: black;
    margin-left: 7%;
    font-size: 16px;
    font-weight: normal;
    margin-bottom: 3%;
}
h3{
    color: #C1C3C6;
    font-size: 14px;
    letter-spacing: 1px;
    font-weight: normal;
}
h4{
    color: black;
    font-size: 15px;
    letter-spacing: 1px;
    font-weight: normal;
}
.head1{
    /* margin-left: 6%; */
    position: absolute;
    left: 12%;
}
.head2{
    /* margin-left: 7%; */
    position: absolute;
    left: 15%;
}
.head3{
    /* margin-left: -2%; */
    position: absolute;
    left: 10%;
}
.restore{
    color: #1DB954;
    font-size: 12px;
    font-weight: bold;
    outline: none;
    background: transparent;
    border: none;
    letter-spacing: 1px;
    /* margin-left: 40%; */
    position: absolute;
    left: 42%;
}
@media only screen and (max-width: 767px){
  .restore{
    position: absolute;
    left: 85%;
  }
}
@media only screen and (max-width: 615px){
  .restore{
    position: absolute;
    left: 80%;
  }
}
.playlist_row{
    height: 9%;
    padding-top: 2.4%;
    margin-left: -1%;
    width: 92%;
}
@media only screen and (max-width: 1030px){
  .playlist_row{
    width: 94%;
  }
}
@media only screen and (max-width: 767px){
  .playlist_row{
    height: 16%;
    width: 94%;
    padding-bottom: 5%;
  }
}
.playlist_row2{
    background: #F8F8F8;
}
.col2{
    /* margin-left: 20%; */
    position: absolute;
    left: 26%;
}
@media only screen and (max-width: 767px){
  .col2{
    position: relative;
    left: 0%;
  }
}
.col3{
    /* margin-left: 30%; */
    position: absolute;
    left: 32%;
}
@media only screen and (max-width: 767px){
  .col3{
    position: absolute;
    left: 4%;
  }
}
.side_bar{
  position: relative;
  width: 23%;
}
@media only screen and (max-width: 800px){
  .side_bar{
    visibility: hidden;
    position: absolute;
  }
}
@media only screen and (max-width: 767px){
  .main_row{
    visibility: hidden;
    position: absolute;
  }
}
</style>
<script>
import AccountSidebar from "@/components/AccountSidebar.vue";
import { mapGetters } from "vuex";
export default {
  name: "AccountRecover",
   data: function () {
    return {
      playlistid: ""
    };
  },
  components: {
    AccountSidebar,
  },
  mounted() {
    this.$store.dispatch("Authorization/showDeletedPlaylists");
  },
  computed: {
    ...mapGetters({
      deleted_playlists: "Authorization/deleted_playlists",
      isRestored: "Playlist/restored"
    }),
  },
  methods:{
    Restore(){
      this.$store.dispatch("Playlist/restorePlaylist", this.playlistid)
    }
  }
};
</script>
