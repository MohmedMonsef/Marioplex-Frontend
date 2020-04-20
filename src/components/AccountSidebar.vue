<template>
    <div class="account_sidebar">
        <svg
         testid="user_svg"
         id="user_svg"
         class="Icon__root--20DBB Menu__userIcon--1JcsY" 
         version="1.1" 
         xmlns="http://www.w3.org/2000/svg" 
         xmlns:xlink="http://www.w3.org/1999/xlink" 
         viewBox="0 0 1024 1024">
            <title>user</title>
            <path 
                d="m730.06 679.64q-45.377 53.444-101.84 83.443t-120 29.999q-64.032 0-120.75-30.503t-102.6-84.451q-40.335 13.109-77.645 29.747t-53.948 26.722l-17.142 10.084q-29.747 19.159-51.175 57.729t-21.428 73.107 25.461 59.242 60.754 24.705h716.95q35.293 0 60.754-24.705t25.461-59.242-21.428-72.603-51.679-57.225q-6.554-4.033-18.907-10.84t-51.427-24.453-79.409-30.755zm-221.84 25.72q-34.285 0-67.561-14.873t-60.754-40.335-51.175-60.502-40.083-75.124-25.461-84.451-9.075-87.728q0-64.032 19.915-116.22t54.452-85.964 80.67-51.931 99.072-18.151 99.072 18.151 80.67 51.931 54.452 85.964 19.915 116.22q0 65.04-20.167 130.58t-53.948 116.72-81.426 83.443-98.568 32.268z">
            </path>
        </svg>
        <ul>
            <li @click="(show1=true) ,(show2=false) ,(show3=false) ,(show4=false) ,(show5=false)"
                @mouseover="hover1=true"
                @mouseleave="hover1=false">
                <router-link to="/UserAccount/Account-overview" testid="overview_link">
                    <div v-if="show1 || hover1" class="green_div"></div>
                    <svg 
                     version="1.1" 
                     xmlns="http://www.w3.org/2000/svg" 
                     xmlns:xlink="http://www.w3.org/1999/xlink" 
                     viewBox="0 0 1024 1024">
                       <title>home</title>
                       <path 
                        class="path1" 
                        d="M635.273 895.937v-254.109q0-26.218-18.655-44.872t-44.872-18.655h-127.055q-26.218 0-44.872 18.655t-18.655 44.872v254.109h-190.582v-380.66l-63.527 45.377v335.283q0 26.218 18.655 44.872t44.872 18.655h635.273q26.218 0 44.872-18.655t18.655-44.872v-335.283l-63.527-45.377v380.66h-190.582zM582.838 138.147q-20.672-14.621-47.645-19.915t-53.948 0-47.645 19.915l-393.264 280.831q-13.109 9.58-15.882 25.713t6.806 29.495 25.713 16.134 29.747-6.806l392.76-280.831q11.092-7.563 28.739-7.563t28.739 7.563l392.76 280.831q10.588 7.563 23.193 7.563 20.672 0 32.268-16.638 9.58-13.613 6.806-29.747t-15.882-25.713l-393.264-280.831z">
                       </path>
                    </svg>
                    Account overview
                </router-link>
            </li>
            <li @click="(show2=true) ,(show1=false) ,(show3=false) ,(show4=false) ,(show5=false)"
                @mouseover="hover2=true"
                @mouseleave="hover2=false">
                <router-link to="/UserAccount/Account-edit" testid="edit_profile_link">
                    <div v-if="show2 || hover2" class="green_div"></div>
                    <svg 
                     class="Icon__root--20DBB Menu__icon--2YGXY" 
                     version="1.1" 
                     xmlns="http://www.w3.org/2000/svg" 
                     xmlns:xlink="http://www.w3.org/1999/xlink" 
                     viewBox="0 0 1024 1024">
                        <title>edit</title>
                        <path 
                            class="path1" 
                            d="M751.236 461.329q-28.234 28.234-75.628 20.167t-86.72-47.393-47.393-86.72 20.167-75.628l-0.504-0.504-325.704 325.704q-18.655 18.655-38.57 49.158t-29.999 54.704l-79.661 199.657q-3.529 9.075-4.286 16.638t1.26 12.605 6.806 7.815 11.344 2.773q9.075 0 20.167-4.538l199.657-79.661q16.134-6.554 35.797-17.899t37.814-24.957 30.251-25.713l325.704-325.704-0.504-0.504zM149.239 873.753l62.015-155.289q8.067-19.663 25.461-46.133t32.52-41.595l31.259-31.259q10.588 43.36 45.125 77.897t77.897 45.125l-31.259 31.259q-15.126 15.126-41.595 32.52t-46.133 25.461l-155.289 62.015zM908.037 114.954q-23.697-23.697-51.679-36.301t-54.2-12.605q-34.789 0-56.469 21.68l-0.504-0.504-115.963 115.963v0.504q-27.73 28.234-19.663 75.628t47.393 86.72 86.72 47.393 75.628-20.167l0.504 0.504 115.963-115.963-0.504-0.504q9.075-9.075 14.621-21.428t6.806-25.713-1.26-28.234-8.571-29.747-16.134-29.495-22.688-27.73zM802.159 97.812q13.613 0 28.234 4.79t28.739 13.613 26.218 21.428q32.268 31.764 38.822 69.578 0.504 5.042 0.756 10.336t-0.504 12.1-3.529 13.361-7.815 11.596q-12.1 12.1-34.285 12.1-20.167 0-42.352-10.336t-40.839-28.991q-19.159-19.159-29.747-42.099t-10.084-43.108 12.605-32.268 33.78-12.1z">
                        </path>
                    </svg>
                    Edit profile
                </router-link>
            </li>
            <li @click="(show3=true) ,(show2=false) ,(show1=false) ,(show4=false) ,(show5=false)"
                @mouseover="hover3=true"
                @mouseleave="hover3=false">
                <router-link to="/UserAccount/Account-change" testid="change_password_link">
                    <div v-if="show3 || hover3" class="green_div"></div>
                    <svg 
                     class="Icon__root--20DBB Menu__icon--2YGXY" 
                     version="1.1" 
                     xmlns="http://www.w3.org/2000/svg" 
                     xmlns:xlink="http://www.w3.org/1999/xlink" 
                     viewBox="0 0 1024 1024">
                        <title>locked</title>
                        <path 
                            class="path1" 
                            d="M762.328 378.139q0-49.41-19.411-94.787t-51.931-78.149-77.392-52.183-94.283-19.411h-22.184q-28.234 0-55.46 6.302t-51.175 18.403-45.125 28.739-37.814 37.814-28.739 45.125-18.403 51.175-6.302 55.46v74.619q-26.722 3.529-45.125 23.949t-18.403 47.645v298.478q0 19.663 9.832 36.553t26.722 26.722 36.553 9.832h489.060q19.663 0 36.553-9.832t26.722-26.722 9.832-36.553v-296.965q0-18.151-8.571-33.78t-23.193-25.461-31.764-12.353v-74.619zM519.311 197.136q36.301 0 69.578 14.369t57.225 38.318 38.318 57.225 14.369 69.578v74.619h-381.164v-74.619q0-36.301 14.369-69.578t38.318-57.225 57.225-38.318 69.578-14.369h22.184z">
                        </path>
                    </svg>
                    Change password
                </router-link>
            </li>
            <li @click="(show4=true) ,(show2=false) ,(show3=false) ,(show1=false),(show5=false)"
                @mouseover="hover4=true"
                @mouseleave="hover4=false">
                <router-link to="/UserAccount/Account-overview" testid="notification_link">
                    <div v-if="show4 || hover4" class="green_div"></div>
                    <svg 
                     class="Icon__root--20DBB Menu__icon--2YGXY" 
                     version="1.1" 
                     xmlns="http://www.w3.org/2000/svg" 
                     xmlns:xlink="http://www.w3.org/1999/xlink" 
                     viewBox="0 0 1024 1024">
                        <title>notifications</title>
                        <path 
                            class="path1" 
                            d="M508.219 1022.992q35.797 0 65.544-18.403t46.385-49.158q-27.226 2.017-55.208 3.025t-56.721 1.008q-56.973 0-111.929-4.033 16.638 30.755 46.385 49.158t65.544 18.403zM828.88 406.877q-3.025-33.78-14.117-66.3t-28.991-60.754-41.343-52.435-51.679-43.108-59.494-30.503q1.008-6.554 1.513-11.092t0.504-9.075q0-52.435-37.31-89.745t-89.745-37.31-89.745 37.31-37.31 89.745q0 7.059 2.017 20.167-79.661 30.755-133.861 99.577t-61.763 153.524l-25.209 282.344q-23.193 8.067-41.343 17.394t-31.007 19.159-19.663 20.924-6.806 22.184q0 34.285 59.494 63.779t161.843 46.385 223.354 16.89 223.354-16.89 161.843-46.385 59.494-63.779q0-15.126-11.848-29.243t-33.78-26.722-53.192-23.697l-25.209-282.344zM508.219 53.948q32.772 0 56.217 23.445t23.445 56.217q0 1.008-0.504 2.017t-0.756 2.017-0.252 1.513q-28.234-5.546-56.469-5.546h-43.36q-28.234 0-56.469 6.050 0-1.008-0.756-3.025t-0.756-3.025q0-16.134 6.302-30.755t17.142-25.461 25.461-17.142 30.755-6.302z">
                        </path>
                    </svg>
                    Notification settings
                </router-link>
            </li>
            <li @click="(show5=true) ,(show2=false) ,(show3=false) ,(show1=false) ,(show4=false)"
                @mouseover="hover5=true"
                @mouseleave="hover5=false">
                <router-link to="/UserAccount/Account-overview" testid="recover_link">
                    <div v-if="show5 || hover5" class="green_div"></div>
                    <svg 
                     id="icon-refresh" 
                     viewBox="0 0 1024 1024">
                        <title>refresh</title>
                        <path 
                            class="path1" 
                            d="M872.744 514.773v-0.504q0-74.115-28.739-141.676t-77.897-116.719-116.719-78.149-141.676-28.991q-123.525 0-221.841 75.124-90.249 69.578-125.542 177.473-17.646 54.956-18.151 112.937 0 74.115 28.991 141.676t78.149 116.719 116.719 77.897 141.676 28.739q37.814 0 74.367-7.311t70.838-22.436q18.151-8.067 25.461-26.47t-0.756-36.049q-3.529-9.075-10.588-15.63t-15.378-9.832-17.899-3.277-18.655 4.033q-51.427 21.68-107.391 21.68-54.956 0-104.871-21.176t-85.964-57.477-57.477-86.216-21.428-104.871q0-36.806 9.58-71.594t26.974-64.536 42.352-54.704 54.704-42.352 64.536-27.226 71.594-9.832q54.956 0 104.871 21.428t86.216 57.729 57.729 86.468 21.428 105.123h-104.366q-16.134 0-19.411 7.815t7.815 18.907l136.634 136.634q11.092 11.092 26.974 11.092t26.974-11.092l136.634-136.634q7.563-7.059 8.571-13.361t-4.033-9.832-15.63-3.529h-105.375z">
                        </path>
                    </svg>
                    Recover playlists
                </router-link>
            </li>
        </ul>
        <label class="lower">____________________________________________</label>
    </div>
</template>
<style scoped>
*{
  list-style: none;
  text-decoration: none;
  padding: 0;
}
.account_sidebar{
    width: 290px;
    height: 100%;
    background-color: rgb(24, 24, 24);
}
.account_sidebar ul{
    margin-bottom: -15px;
}
.account_sidebar ul li a{
  height: 100%;
  width: 100%;
  font-size: 16px;
  color: darkgray;
  padding-left: 15px;
  line-height: 50px;
  text-decoration: none;
  
}
.account_sidebar ul li a:focus{
    color: white;
    fill:white
}
.account_sidebar ul li a svg:focus{
    fill: white;
}
.account_sidebar ul li{
border-top: 1px solid rgb(32, 32, 32);
 width: 290px;
}
svg{
    width: 20px;
    height: 25px;
    margin-left: 7%;
    margin-right: 7%;
    margin-bottom: 3%;
    fill:darkgray
}
#user_svg{
    width: 60px;
    height: 60px;
    fill: #222326;
    margin-left: 40%;
    margin-bottom: 9%;
    margin-top: 9%;
}
.green_div{
    background: #1db954;
    width: 5px;
    height: 50px;
    position: absolute;
}
.lower{
    color: rgb(19, 19, 19);
}

</style>
<script>
export default {
    data: function() {
    return {
      show1:false,
      show2:false,
      show3:false,
      show4:false,
      show5:false,
      hover1:false,
      hover2:false,
      hover3:false,
      hover4:false,
      hover5:false,
    };
  },
    name: "AccountSidebar",
}
</script>