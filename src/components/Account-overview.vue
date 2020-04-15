<template>
    <div>
        <div class="music">
            <div class="row">
                <div class="col-lg-50%">
                    <h1 id="header">
                        Music without limits
                    </h1>
                    <p id="paragraph">
                        Premium lets you play any song, anytime. You can even listen when you’re offline.
                    </p>
                    <p id="paragraph">
                        No restrictions. No ads.
                    </p>
                    <button class="premium">
                        GET PREMIUM
                    </button>
                </div>
                <div class="col-lg-50%">
                    <img
                        src="../assets/music.png"
                        alt="music"
                        class="music_img"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.music{
   background:  linear-gradient(to bottom, #121e3d 0%, #000 100%);
  width: 86%;
  height: 450px;
  margin-left: 7%;
  padding-top: 70px;
}
#header{
    color: white;
    font-weight: bold;
    font-size: 70px;
    font-family:Helvetica, Arial, sans-serif !important;
    margin-bottom: 5px;
    margin-left: 12%;
}
#paragraph{
    color: white;
    margin-bottom: 0px;
    margin-left: 12%;
}
.premium{
  border: none;
  border-radius: 25px;
  outline: none;
  background-color: #1db954;
  color: white;
  width: 28%;
  height: 12%;
  margin-left: 12%;
  margin-top: 4%;
  font-weight: bold;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 14px;
}
.premium:hover{
     background-color: #27ca60;
     width: 29%;
     height: 13%;
}
.music_img{
    width: 320px;
    height: 350px;
    margin-left: 10%;
    margin-top: 9%;
}
</style>
<script>
export default {
    
}
</script>