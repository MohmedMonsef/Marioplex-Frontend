<template>
  <div class="song" @mouseover="hover = true" @mouseleave="hover = false">
    <div id="icon">
      <i v-if="!hover" id="music_icon" class="fa fa-music"></i>
      <i v-if="hover" class="fa fa-play"></i>
      <i v-if="false" class="fa fa-pause"></i>
    </div>
    <div id="song_body">
      <div id="song_name">{{song_name}}</div>
      <div id="song_info">
        <router-link tag="div" to="library"
         v-for="song_artist in song_artists" :key="song_artist" id="song_artist">
         {{song_artist}}
        <span>
          .
        </span>
        </router-link>
       
        <router-link tag="div" id="song_album" to="library">
            {{song_album}}
        </router-link>
      </div>
    </div>
    <div id="song_length">{{song_length}}</div>
    <div id="song_options" class="dropleft">
      <i
        v-if="hover"
        class="fa fa-ellipsis-h dots_icon"
        id="dropdownMenuIcon"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      ></i>
      <div class="dropdown-menu db" aria-labelledby="dropdownMenuIcon">
        <p class="dropdown-item">Start Radio</p>
        <p v-if="!isLiked" class="dropdown-item">Add to Liked Songs</p>
        <p v-if="isLiked" class="dropdown-item">Remove from Liked Songs</p>
        <p class="dropdown-item">Add to Queue</p>
        <p class="dropdown-item">Add to Playlist</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.song {
  min-width: 426px;
  height: 64px;
  margin: 0%;
  padding: 0%;
  display: block;
  // box-sizing: border-box;
  line-height: 20px;
  background-color: #161516;
  clear: both;
  overflow: visibility;
  transition-property: background-color;
  transition-duration: 0.2s;
  transition-timing-function: linear;
  color: #fff;
  font-size: 1rem;
  font-weight: 400;
  position: relative;
}
.db {
  position: absolute;
  background-color: #282828;
  width: 203px;
  padding: 5px 0;
  p {
    color: darkgray;
    margin: 0%;
    margin-top: 2px;
    padding: 10px 20px;
    font-size: 14px;
    height: 38px;
  }
  p:hover {
    background-color: #313030;

    color: #fff;
  }
  // background-color: #b3b3b3;
}
.song:hover {
  background-color: #313030;
}
span{
    color: white;
   
    padding-right: 4px;
}

#icon {
  width: 43px;

  float: left;
  height: inherit;
  padding-right: 14px;
  padding-top: 10px;
  padding-left: 10px;
}
#song_body {
  float: left;
  margin-top: 10px;
}
#song_options {
  padding-top: 20px;
  float: right;
  width: 65px;
}
#song_length {
  float: right;
  text-align: right;
  padding-right: 14px;
  padding-top: 12px;
  width: 55px;
  height: inherit;
  color: darkgray;
}
#song_name {
  display: inline-block;
  height: 20px;
  color: #fff;
}
#song_artist,
#song_album {
  display: inline-block;
  height: 20px;
  color: darkgray;
}
.dots_icon {
  text-align: center;
  font-size: 18px;
  color: darkgray;
}
#music_icon {
  color: darkgray;
}
</style>

<script>
export default {
  data: function() {
    return {
      hover: false
    };
  },
  props: ["song_name", "song_album","song_artists", "song_length","isLiked"]//must add isplayable also
  // 
};
</script>
