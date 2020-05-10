<template>
    <div class="cont" >
        <div v-if="playlists.length" class="margin">
            <h3>Popular playlists</h3>
            <div class="row">
                <LibPlaylists
                    v-for="playlist in playlists"
                    :key="playlist.id"
                    :images="'http://52.205.254.29/api/images/'+ playlist.images[0]._id + '?belongs_to=playlist'"
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
import LibPlaylists from "@/components/LibPlaylists.vue";
import { mapGetters } from "vuex";
export default {
    name: "seeallcategoryplaylists",
    components: {
        LibPlaylists,
    },
    computed: {
        ...mapGetters({
            playlists: "Categorys/getcategoryplaylists"
        }),
    },
};
</script>
