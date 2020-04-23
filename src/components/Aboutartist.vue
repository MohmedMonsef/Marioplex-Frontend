<template>
    <div class="biography">
        <h2 class="biotitle">Biography</h2>
        <p>
           {{about}}
        </p>
    </div>
</template>

<style lang="scss" scoped>
.biography{
margin: 25px;
}
.biotitle{
color: white;
}
p{
    color: #b3b3b3;
    margin-top: 20px;
}
</style>

<script>
import { mapGetters } from "vuex";
export default {
    name: "aboutartist",
       computed: {
    ...mapGetters({
      about: "artistpage/artist_bio"
    })
  },
}
</script>