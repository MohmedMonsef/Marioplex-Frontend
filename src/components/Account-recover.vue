<template>
    <div class="row" id="row2">
        <div class="col-lg-30%">
            <account-sidebar/>
        </div>
        <div class="col-lg-70%" id="grey_div">
            <h1>Recover playlists</h1>
            <div class="edit_border"></div>
            <h2>Accidentally deleted a playlist? No worries, find the deleted playlist you'd like to recover below, then click RESTORE to recover it.</h2>
            <div class="white_div">
                <div class="row">
                    <div class="col-lg">
                        <h3 class="head1">DELETED</h3>
                    </div>
                    <div class="col-lg">
                        <h3 class="head2">TITLE</h3>
                    </div>
                    <div class="col-lg">
                        <h3 class="head3">SONGS</h3>
                    </div>
                    <div class="col-lg">
                        <h3 class="head4">RESTORE</h3>
                    </div>
                </div>
                <div class="edit_border2"></div>    
                    <!-- body -->
                <div class="row" id="playlist_row" v-for="playlist in deleted_playlists" :key="playlist.id">
                    <div class="col-lg">
                        <h4 class="head1">{{playlist.deletedAt.slice(8,10) +"/"+ playlist.deletedAt.slice(5,7) +"/"+ playlist.deletedAt.slice(0,4)}}</h4>
                    </div>
                    <div class="col-lg">
                        <h4 class="head2">{{playlist.name}}</h4>
                    </div>
                    <div class="col-lg">
                        <h4 class="head3">{{playlist.songsNumber}}</h4>
                    </div>
                    <div class="col-lg">
                        <button class="restore">RESTORE</button>
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
#grey_div{
 background: #F8F8F8;
 width: 68.5%;
 height: 100%;
 padding-right: 5%;
 padding-bottom: 5%;
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
    width: 90%;
    margin-left: 1%;
    margin-bottom: 3%;
    margin-top: 1%;
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
    margin-left: 6%;
}
.head2{
    margin-left: 7%;
}
.head3{
    margin-left: -2%;
}
.restore{
    color: #1DB954;
    font-size: 12px;
    font-weight: bold;
    outline: none;
    background: transparent;
    border: none;
    letter-spacing: 1px;
}
#playlist_row{
    height: 50px;
}
</style>
<script>
import AccountSidebar from "@/components/AccountSidebar.vue";
import { mapGetters } from "vuex";
export default {
    name: "Account-recover",
    components:{
        AccountSidebar
    },
    mounted() {
    this.$store.dispatch("authorization/showDeletedPlaylists");
    },
    computed:{
        ...mapGetters({
      deleted_playlists: "authorization/deleted_playlists",
    })
    }
}
</script>