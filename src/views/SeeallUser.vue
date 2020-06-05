<template>
  <div class="cont" v-if="search_value !== '' && !searchfocus">
    <div v-if="match_users.length" v-on:load="inartist" class="margin">
      <h3>Show Users For"{{ search_value }}"</h3>
      <div class="row">
        <LibArtists
          class="col-lg-10% col-md-60% col-xs-6"
          v-for="match_user in match_users"
          :key="match_user.id"
          :images="
            $url +
              '/api/images/' +
              match_user.images[0]._id +
              '?belongs_to=user'
          "
          :name="match_user.displayName"
          :artistId="match_user._id"
          :type="match_user.user"
        />
      </div>
    </div>
  </div>
</template>
<style scoped>
.margin {
  margin-bottom: 200px;
}
h3 {
  color: white;
}
.cont {
  margin-left: 15px;
  width: 100%;
  height: 100vh;
}
.row {
  margin-bottom: 15px;
  width: 95%;
}
</style>
<script>
import LibArtists from "@/components/LibArtists.vue";
import { mapGetters } from "vuex";
export default {
  name: "seealluser",
  components: {
    LibArtists,
  },
  methods: {
    inartist() {
      this.$store.dispatch("Search/artistin", true);
    },
  },
  computed: {
    ...mapGetters({
      match_users: "Search/getuser",
      search_value: "Search/get_value",
      searchfocus: "Search/searchfocus",
    }),
  },
};
</script>
