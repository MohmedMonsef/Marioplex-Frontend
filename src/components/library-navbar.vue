<template>
    <div class="library-navbar">
        <ul class="nav">
            <li class="nav-item">
                <div class="divOnFocus">
                    <router-link
                    to="/HomeWebPlayer/library/library-playlists"
                    testid="playlists in library"
                    class="nav-link">Playlists</router-link>
                </div>
            </li>
            <li class="nav-item">
                <div class="divOnFocus">
                    <router-link 
                    to="/HomeWebPlayer/library/library-artists" 
                    testid="Artists in library" 
                    class="nav-link">Artists</router-link>
                </div>
            </li>
            <li class="nav-item">
                <div class="divOnFocus">
                    <router-link 
                    to="/HomeWebPlayer/library/library-albums" 
                    testid="Albums in library" 
                    class="nav-link">Albums</router-link>
                </div>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.library-navbar ul a{
    font-size: 14px;
    color:white;
    font-weight: bold;
    align-content: center;
    line-height:13px;
    height: 100%;
    width: 100%;
}
.divOnFocus {
  width: 80px;
  height: 30px;
  border-radius:3px;
  background: #161516;
  margin-left: 8px;
  margin-top: 15px; 
}
.divOnFocus :focus{
   width: 100%;
  height: 100%;
  background: #313030;
  display: block;
}
</style>

<script>
export default {
    
}
</script>