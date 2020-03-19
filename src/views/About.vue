<template>
  <span>
    <div>
      <CreatePlaylist testid="create_and_delete_component" >
     </CreatePlaylist  >

     <CreatePlaylist testid="create_e_component" >
     </CreatePlaylist  >
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
