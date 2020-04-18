<template>
    <div class="row" id="row2">
            <div class="col-lg-30%">
                <account-sidebar/>
            </div>
            <div class="col-lg-70%" id="white_div">
                <h1>Edit profile</h1>
            </div>
        </div>
    
</template>
<style scoped>
#row2{
    margin-left: 7%;
}
#white_div{
 background: #F8F8F8;
 width: 68.5%;
 height: 100%;
 padding-right: 5%;
 padding-bottom: 5%;
}
h1{
    color: #1DB954;
    font-size: 25px;
    font-family: Helvetica, Arial, sans-serif;
    margin-left: 7%;
    margin-top: 8%;
}
</style>
<script>
import AccountSidebar from "@/components/AccountSidebar.vue";
export default {
      name:"Account-edit",
    components:{
        AccountSidebar
    },
    
}
</script>