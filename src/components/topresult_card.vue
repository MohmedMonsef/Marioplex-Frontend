<template>
  <div class="col-40%" id="top-card">
    <h2 style="margin-bottom:15px;" class="col-lg-30%">TopResult</h2>
    <div
      class="card rounded col-lg-30%"
      testid="top card"
      @mouseover="hover = true"
      @mouseleave="hover = false"
      style="max-width:100%;"
    >
      <img
        v-if="type == 'Artist'"
        src="http://dummyimage.com/250x400.jpg/dddddd/000000"
        testid="artistimage"
        class="col-md-4 img-card rounded-circle"
        alt="..."
        style="max-width: 40%;max-height: 120px; display:block; margin-left:0; margin-bottom:15px;"
      />
      <img
        v-if="type !== 'Artist'"
        src="http://dummyimage.com/250x400.jpg/dddddd/000000"
        class="col-md-4 img-card"
        alt="..."
        style="max-width: 40%;max-height: 100px; display:block; margin-left:0; margin-bottom:15px;"
      />
      <!-- <img
                v-if="type == 'Artist'"
                :src="image"
                testid="artistimage"
                class="col-md-4 img-card rounded-circle"
                alt="..."
                style="max-width: 40%;max-height: 120px; display:block; margin-left:0; margin-bottom:15px;"
            />
            <img
                v-if="type !== 'Artist'"
                :src="image"
                class="col-md-4 img-card"
                alt="..."
                style="max-width: 40%;max-height: 100px; display:block; margin-left:0; margin-bottom:15px;"
            /> -->
      <div class="row">
        <div class="col-8">
          <h2 class="card-title">{{ name }}</h2>
          <div class="typecont">
            <p
              class="card-text p"
              testid="type"
              id="typecont"
            >
              {{ type }}
            </p>
          </div>
        </div>
        <div class="playcon col-4" v-if="hover">
          <i class="fa fa-play-circle" testid="topplay icon"></i>
        </div>
      </div>
      <router-link
        v-if="type == 'Artist'"
        to="/"
        class="stretched-link"
        id="carglink"
        testid="cardlink"
      ></router-link>
    </div>
  </div>
</template>
<style scoped>
@media screen and (max-width: 700px) {
  #top-card {
    width: 80%;
  }
  #typecont {
    width: auto;
    border-radius: 0px;
  }
  p {
    margin: 0px;
  }
}
@media screen and (max-width: 650px) {
  #top-card {
    width: 70%;
  }
  #typecont {
    width: auto;
    border-radius: 0px;
  }
  i {
    margin-left: 5px;
  }
  p {
    font-size: 10px;
    margin: 0px;
  }
}
@media screen and (max-width: 500px) {
  #top-card {
    width: 55%;
  }
  #typecont {
    width: 100%;
  }
}
.playcon {
  background-color: transparent;
  float: right;
  padding: 0mm;
}
.card-title {
  margin-left: 10px;
  margin-bottom: 10px;
}
.card-top {
  background-color: #313030;
  padding: 20px;
  height: 250px;
}
.card {
  display: block;
  background: #313030;
  width: 400px;
  height: 270px;
  margin-top: 15px;
  z-index: 0;
  padding: 20px;
  margin-bottom: 9px;
}
h2 {
  font-size: 28px;
  font-weight: bold;
  color: white;
  margin-bottom: 10px;
}
.p {
  margin-left: 10px;
  color: white;
  margin-bottom: 15px;
}
i {
  color: #1db954;
  position: relative;
  font-size: 50px;
  margin-left: 40%;
}
.typecont {
  background-color: rgb(41, 32, 32);
  border-radius: 15px;
  width: 30%;
  height: 25px;
  float: left;
  z-index: 0;
  margin-left: 15px;
}
</style>
<script>
/**
 * Top Results card to display the top result value in search
 * @displayName Top Result Card
 * @example [none]
 */
export default {
  name: "top",
  data: function() {
    return {
      hover: false
    };
  },
  props: {
     /**
       * src for the img displayed
       */
    image: {
      type: String
    },
    name: {
      type: String
    },
    type: {
      type: String
    },
      /** 
       *if artist to go his page
       */
    artistId: {
      type: String
    },
    artistName: {
      type: String
    },
      /**
       *to navigate to album page
       */
    albumId: {
      type: String,
      default: "0"
    },
    playlist_id: {
      type: String,
     
      default: "0"
    },
    track_id: {
      type: String
    },
    ownerId: {
      type: String
    },
    ownerName: {
      type: String
    },
    Id: {
      type: String
    }
  }
};
</script>
