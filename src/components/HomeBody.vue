<template>
  <div>
    <homeBodyNoUser v-if="isLoggedIn!='success'" />
    <homeBodyUser v-if="isLoggedIn=='success'" />
  </div>
</template>
<style lang="scss" scoped>
</style>
<script>
import { mapGetters } from "vuex";
import homeBodyNoUser from "@/components/HomeBodyNoUser.vue";
import homeBodyUser from "@/components/HomeBodyUser.vue";
/**
 * Body of home page
 * @displayName HomeBody
 * @example [none]
 */
export default {
components:{
homeBodyNoUser,
homeBodyUser

},
  computed: {
    ...mapGetters({
      isLoggedIn: "Authorization/GetStatus"
    })
  }
};
</script>