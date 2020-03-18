<template>
  <span>
    <div>
      <CreatePlaylist testid="create_and_delete_component" />
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
