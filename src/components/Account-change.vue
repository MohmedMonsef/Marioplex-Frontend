<template>
    <div class="row" id="row2">
        <div class="col-lg-30%">
            <account-sidebar/>
        </div>
        <div class="col-lg-70%" id="grey_div">
            <h1>Change your password</h1>
            <div class="edit_border"></div>
            <div class="white_div">
                <h2>Current password</h2>
                <input type="text" class="in_text"/>
                <h2>New password</h2>
                <input type="text" class="in_text"/>
                <h2>Repeat new password</h2>
                <input type="text" class="in_text"/>
                <div class="end_border"></div>
                <button class="cancel">CANCEL</button>
                <button class="save">SET NEW PASSWORD</button>
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
    margin-bottom: 4%;
}
.white_div{
    margin-left: 7%;
    width: 90%;
    height: 600px;
    background: white;
    padding-top: 6%;
}
.in_text{
     margin-left: 5%;
     width: 90%;
     height: 40px;
     margin-bottom: 3%;
     outline: rgb(78, 78, 78);
}
h2{
    color: gray;
    margin-left: 5%;
    font-size: 16px;
    font-weight: normal;
}
.end_border{
    border-bottom: 1px solid rgb(235, 234, 234);
    width: 90%;
    margin-left: 5%;
    margin-bottom: 4%;
    margin-top: 4%;
}
.cancel{
    background: transparent;
    border: none;
    outline: none;
    color: black;
    width: 20%;
    height: 4%;
    margin-left: 45%;
    margin-top: -1%;
    font-weight: bold;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 12px;
}
.save{
    background-color: #1db954;
    border: none;
    outline: none;
    border-radius: 25px;
    color: white;
    width: 28%;
    height: 6%;
    margin-left: 2%;
    margin-top: -1%;
    font-weight: bold;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 12px;
}
.save:hover{
     background-color: #36e072;
}
</style>
<script>
import AccountSidebar from "@/components/AccountSidebar.vue";
export default {
     name:"Account-change",
    components:{
        AccountSidebar
    },
    
}
</script>