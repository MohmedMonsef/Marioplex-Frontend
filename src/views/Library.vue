<template>
    <div class="library">
        <library-navbar/>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>

<script>
import LibraryNavbar from "@/components/library-navbar.vue";
export default {
    components:{
        LibraryNavbar,
    }
}
</script>
