<template>
  <div class="mediaplayer">
    <div class="row">
      <div class="col-sm-3" id="song_info_col">
        <!-- here i need to link album image with mock server -->
        <div class="album_image">
          <img src="../assets/cry.png" alt="album_image" testid="album_image" />
        </div>
        <!-- here i need to link both song name and artist name with mock server they navigate to another pages
          and i need to change <a> to router link -->
        <div class="song_info">
          <a href="#" id="song_name" testid="song_name">Song Name</a>
          <!-- this div is for like songs and them to the library of the user -->
          <!-- donot forget that the second icon is still weird -->
          <div class="actionbuttons">
            <button
              class="heartbutton"
              v-if="!liked"
              @click="likecurrentsong()"
            >
              <span data-toggle="tooltip" title="Save to your Liked Songs">
                <i
                  class="fa fa-heart-o"
                  id="emptyhearticon"
                  testid="emptyhearticon"
                ></i>
              </span>
            </button>

            <!-- ////////////////////////////////////// -->
            <button class="heartbutton" v-if="liked" @click="likecurrentsong()">
              <span data-toggle="tooltip" title="Remove from your Liked Songs">
                <i
                  class="fa fa-heart"
                  id="filledhearticon"
                  testid="filledhearticon"
                  style="color:green"
                ></i>
              </span>
              <!-- <div class="snackbar" id="unlikesnackbar">Removed from your Liked Songs</div> -->
            </button>

            <!-- /////////////////////////////////// -->
          </div>

          <br />
          <!-- <a
            href="#"
            id="artist_name"
            v-for="artist in artist_name"
            v-bind:key="artist.id"
            >{{ artist.songs.artist_name }}</a
          > -->
          <a href="#" id="artist_name" testid="artist_name">Artist1Name</a>
        </div>
      </div>
      <div class="col-sm-6">
        <div
          class="play_controllers"
          id="test_play_controllers"
          testid="play_controllers"
        >
          <div class="controllers" id="test_controllers" testid="controllers">
            <audio id="myAudio">
              <source :src="media_player.song" type="audio/ogg" />
              <source
                :src="media_player.song"
                type="audio/mpeg"
                testid="audio"
              />
            </audio>
            <button
              id="random_button"
              testid="shufflebutton"
              @click="random_songs()"
            >
              <span data-toggle="tooltip" title="Enable shuffle">
                <i
                  class="fa fa-random"
                  id="randomicon"
                  testid="shuffleicon"
                ></i>
              </span>
            </button>
            <button id="prev_button" testid="prevbutton" @click="prev_song()">
              <span data-toggle="tooltip" title="Previous">
                <i
                  class="fa fa-step-backward"
                  id="playbackicon"
                  testid="previcon"
                ></i>
              </span>
            </button>
            <!-- /////////////////////////////////////////////// -->
            <button
              id="play_button"
              testid="playbutton"
              v-if="playicon"
              @click="play_pause_song(), changeplayicon()"
            >
              <span data-toggle="tooltip" title="Pause">
                <i class="fa fa-pause" id="playicon" testid="playicon"></i>
              </span>
            </button>

            <!-- //////////////////////////////// -->
            <!-- ///////////////////////////////// -->
            <button
              id="pause_button"
              testid="pausebutton"
              v-if="!playicon"
              @click="play_pause_song(), changeplayicon()"
            >
              <span data-toggle="tooltip" title="Play">
                <i class="fa fa-play" id="pauseicon" testid="pauseicon"></i>
              </span>
            </button>
            <!-- //////////////////////////////// -->
            <button id="next_button" testid="nextbutton" @click="next_song()">
              <span data-toggle="tooltip" title="Next">
                <i
                  class="fa fa-step-forward"
                  id="playforwardicon"
                  testid="nexticon"
                ></i>
              </span>
            </button>
            <button
              id="repeat_button"
              testid="repeatbutton"
              @click="repeat_song()"
            >
              <span data-toggle="tooltip" title="Enable repeat">
                <i class="fa fa-repeat" id="repeaticon" testid="repeaticon"></i>
              </span>
            </button>
          </div>
        </div>

        <!-- here the song bar moves correctly -->
        <!-- <div
          id="seek_bar"
          testid="seek_bar"
          style="display:flex;justify-content: center;"
        >
          <div id="current_time" testid="currenttime" class="current_time">
            00:00
          </div>
          <div>
            <div class="songslider">   
               <div class="movingslider" id="movingslider"></div>
            </div>
          </div>
          <div id="duration" testid="songduration" class="duration">3:45</div>
        </div> -->
        <!-- ///////////////// the end of the old code where the song bar moves correctly -->

        <!-- the start of the new code  -->
        <div class="topcontrols">
          <span class="starttime" id="starttime">00:00</span>
          <div class="seekbar">
            <div class="progressbar" id="progressbar"></div>
            <!-- <progress-bar :val="audio.currentTime" :max="!audio.duration ? 100 : audio.duration"></progress-bar> -->
            <!-- <input class="progressbar" id="progressbar" type="range" min="0" value="0"> -->
          </div>
          <span class="endtime" id="endtime">00:00</span>
        </div>
        <!-- the end of the new code  -->
      </div>
      <div class="col-md-3 hidden-sm">
        <div class="additional_actions">
          <button id="queue_button" testid="queuebutton" @click="go_to_queue()">
            <span data-toggle="tooltip" title="Queue">
              <i class="fa fa-bars" id="queueicon" testid="queueicon"></i>
            </span>
          </button>
          <button id="sound_button" testid="soundbutton" @click="volume_song()">
            <i class="fa fa-volume-up" id="soundicon" testid="soundicon"></i>
          </button>
          <!-- still doesnot work correctly -->
          <!-- <div id="seek_bar" style="transform:translateX(0%);">
            <div id="fill"></div>
            <div id="handle"></div>
          </div> -->
          <!-- ///////////////// -->
          <div class="volume" id="volume" testid="volume">
            <!-- here you must add onchange="adjustvolume()" to control the volume -->
            <input
              id="volume_slider"
              testid="volumeslider"
              class="volume_slider"
              type="range"
              min="0"
              max="1"
              step="0.01"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="toast" id="liketoast"></div>
  </div>
</template>

<style lang="scss" scoped>
.mediaplayer {
  margin: 0px;
  padding: 0px;
  background-color: #282828;
  height: 90px;
  width: 100%;
  border-top: 1px solid #000;
  transform: translateX(0);
  transition: transform 0.25s cubic-bezier(0.3, 0, 0, 1);
  position: fixed;
  bottom: 0%;
}
.row {
  height: 90px;
}
.col-md-3 {
  height: 90px;
}
.album_image {
  float: left;
  margin: 17px 10px 17px 17px;
  width: 56px;
  height: 56px;
}
img {
  border-style: none;
  height: 56px;
  width: 56px;
}
.song_info {
  margin: 20px 20px 20px 5px;
}
#song_name {
  color: white;
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
}
#song_name:hover {
  text-decoration: underline;
}
#artist_name {
  color: #b3b3b3;
  text-decoration: none;
  font-size: 12px;
}
#artist_name:hover {
  color: white;
}
.actionbuttons {
  float: right;
  display: flex;
  justify-content: space-between;
  justify-content: center;
  // margin: top right bottom left
  margin: 8px;
}
button {
  background-color: transparent;
  border: none;
  padding-right: 10px;
  padding-left: 10px;
}
//this style (focus) for hidding the blue borders when click on the buttons
button:focus {
  outline: 0 !important;
}
.fa {
  color: #b3b3b3;
}
.fa:hover {
  color: white;
}
.play_controllers {
  display: flex;
  margin: 20px;
  margin-bottom: 10px;
  justify-content: center;
}
.controllers {
  display: flex;
  margin: 0px;
  justify-items: center;

  button {
    padding-left: 25px;
    padding-right: 25px;
  }
}
input:focus {
  outline: 0 !important;
}
//////////////////the song slider code is worked for the moving of the slider only
// .songslider {
//   width: 500px;
//   height: 5px;
//   border-radius: 10px;
//   margin: 5px;
//   padding: 0px;
//   background: #424040;
//   border-color: #424040;
// }
/////////////////////here the style of the old code but i deleted from above the input range and green div
//   .greenslider{
//   width: 0px;
//   height: 5px;
//   padding: 0px;
//   -webkit-appearance: none;
//   border-radius: 10px;
//   position: absolute;
//   background-color:#b3b3b3;
//   border-color:#b3b3b3;
//   cursor: pointer;
// }
// .greenslider::-webkit-slider-thumb{
//   visibility: hidden;
//   opacity: 0;
//   -webkit-appearance: none;
//   appearance: none;
//   //position: relative;
//   width: 12px;
//   height: 12px;
//   border-radius: 15px;
//   background: white;
//   cursor: pointer;
// }
// .greenslider:hover::-webkit-slider-thumb {
// opacity: 1;
// visibility: visible;
// }
///////////////////////////////
////////////this for the filled bar working correctly
// .movingslider {
//   height: 5px;
//   width: 0px;
//   border-radius: 10px;
//   position: absolute;
//   background-color: #b3b3b3;
// }
///////////////////////////
//////////////here the style of the new code //////////////
.topcontrols {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .starttime,
  .endtime {
    flex-basis: 10%;
    flex-shrink: 1;
    display: inline-flex;
    justify-content: center;
    color: #b3b3b3;
    font-size: 10px;
    margin: 0px;
  }
  .seekbar {
    height: 5px;
    border-radius: 10px;
    flex-basis: 80%;
    background-color: #424040;
    display: flex;
    .progressbar {
      height: 100%;
      width: 0px;
      left: 0px;
      -webkit-appearance: none;
      background-color: #b3b3b3;
      border-color: #b3b3b3;
      border-radius: 10px;
      position: relative;
      display: inline-flex;
      padding: 0px;
      margin: 0px;
      //to get the user feedback
      &::after {
        content: "";
        position: absolute;
        height: 4px;
        width: 4px;
        top: 0;
        bottom: 0;
        margin: auto;
        right: -4px;
        border-radius: 500px;
      }
    }
    //   .progressbar::-webkit-slider-thumb{
    //   visibility: hidden;
    //   opacity: 0;
    //   -webkit-appearance: none;
    //   appearance: none;
    //   position: relative;
    //   width: 12px;
    //   height: 12px;
    //   border-radius: 15px;
    //   background: white;
    //   cursor: pointer;
    // }

    &:hover {
      cursor: pointer;
      .progressbar {
        background-color: green;
        border-color: green;

        &::after {
          height: 12px;
          width: 12px;
          background-color: white;
        }
        // .progressbar::-webkit-slider-thumb{
        //   visibility: visible;
        //   opacity: 1;
        // }
      }
    }
  }
}
/////////////////////end of style of the new code but donot forget that i changed the name of current time to start time and duration to end time in the style below
// The song slider handle -webkit- for (Chrome, Opera, Safari, Edge) and -moz- for (Firefox) to override default look)
.volume_slider::-webkit-slider-thumb {
  //visibility: hidden;
  -webkit-appearance: none !important;
  appearance: none;
  width: 13px;
  height: 13px;
  border-radius: 15px;
  background: white;
  cursor: pointer;
}
///the old code style//////////////
// .current_time,
// .duration {
//   font-size: 10px;
//   color: #b3b3b3;
//   display: inline-flex;
//   margin: 0px;
// }
// .current_time {
//   float: left;
// }
// .duration {
//   float: right;
// }
//////////////////
.additional_actions {
  display: flex;
  margin: 30px;
  justify-content: flex-end;
  // #fill {
  //   width: 80px;
  //   margin-top: 10px;
  // }
}
.volume {
  bottom: 0px;
  .volume_slider {
    margin-top: 5px;
    height: 4px;
    width: 80px;
    padding: 0px;
    margin: 0px;
    -webkit-appearance: none;
    appearance: none;
    background: #b3b3b3;
    border-color: #b3b3b3;
    border-radius: 50px;
  }
}
.toast {
  visibility: hidden;
  opacity: 0;
  position: fixed;
  left: 50%;
  top: -55px;
  margin: auto;
  min-width: 300px;
  background-color: rgb(8, 118, 243);
  padding: 10px;
  color: white;
  text-align: center;
  border-radius: 10px;
  z-index: 1;
  box-shadow: 0 0 10 rgb(9, 76, 131);
  transition: opacity 0.2s, visibility 0.2s;
  font-size: 15px;
}
.toast--visible {
  visibility: visible;
  opacity: 1;
}
</style>

<script src="../javascript/mediaplayer_script.js"></script>
