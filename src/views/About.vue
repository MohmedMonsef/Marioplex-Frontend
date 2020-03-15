<template>
  <span>
    <div class="about">
      hello from the other side
    </div>
    <div>
      <CreatePlaylist />
    </div>
  </span>
</template>
<script>
// @ is an alias to /src
import CreatePlaylist from "@/components/CreatePlaylist.vue";

export default {
  name: "About",
  components: {
    CreatePlaylist
  }
};
</script>

