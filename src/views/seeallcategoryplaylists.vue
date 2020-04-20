<template>
    <div class="cont" >
        <div v-if="playlists.length" class="margin">
            <h3>Popular playlists</h3>
            <div class="row">
                <LibPlaylists
                    v-for="playlist in playlists"
                    :key="playlist.id"
                    :images="playlist.images"
                    :name="playlist.name"
                    :ownerName="playlist.ownerName"
                    :ownerId="playlist.ownerId"
                    :playlist_id="playlist._id"
                />
            </div>
        </div>
    </div>
</template>
<style scoped>
.margin{
  margin-bottom: 200px;
}
h3 {
    color: white;
}
.cont {
    margin-left: 15px;
    margin-bottom: 250px;
    width: 100%;
    height: 100vh;
}
.row {
    margin-bottom: 15px;
    width: 95%;
}
</style>
<script>
import LibPlaylists from "@/components/lib-playlists.vue";
import { mapGetters } from "vuex";
export default {
    name: "seeallcategoryplaylists",
    components: {
        LibPlaylists,
    },
    computed: {
        ...mapGetters({
            playlists: "categorys/getcategoryplaylists"
        }),
    },
};
</script>
