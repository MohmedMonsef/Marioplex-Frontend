<template>
    <div class="row" id="row2">
        <div class="col-lg-30%">
            <account-sidebar/>
        </div>
        <div class="col-lg-70%" id="grey_div">
            <h1>Notification settings</h1>
            <div class="edit_border"></div>
            <div class="white_div">
                <div>
                    
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
#row2{
    margin-left: 7%;
}
#grey_div{
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
.edit_border{
    border-bottom: 1px solid rgb(230, 230, 230);
    width: 90%;
    margin-left: 7%;
    margin-bottom: 3%;
}
.white_div{
    margin-left: 7%;
    width: 90%;
    height: 600px;
    background: white;
    padding-top: 6%;
    padding-left: 7%;
}

</style>
<script>
import AccountSidebar from "@/components/AccountSidebar.vue";
export default {
    name: "Account-notifications",
    components:{
        AccountSidebar
    },
}
</script>