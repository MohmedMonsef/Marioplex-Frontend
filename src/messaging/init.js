// <!-- The core Firebase JS SDK is always required and must be listed first -->

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->

// importScripts('https://www.gstatic.com/firebasejs/7.14.1/firebase-app.js');
// importScripts('https://www.gstatic.com/firebasejs/7.14.1/firebase-messaging.js');
// importScripts('https://www.gstatic.com/firebasejs/7.14.1/firebase-analytics.js');
import firebase from "firebase/app";
import "firebase/messaging";
import axios from "axios";
let messaging;

export function get_messaging() {
  return messaging;
}

// Your web app's Firebase configuration
export function initializeFirebase() {
  if (firebase.messaging.isSupported()) {
    var firebaseConfig = {
      apiKey: "AIzaSyAr0_LjcEdJVsvhQD8SC6Aggl9gzfgsRjA",
      authDomain: "notif-demo-e8dae.firebaseapp.com",
      databaseURL: "https://notif-demo-e8dae.firebaseio.com",
      projectId: "notif-demo-e8dae",
      storageBucket: "notif-demo-e8dae.appspot.com",
      messagingSenderId: "356913468865",
      appId: "1:356913468865:web:52bba10aea1a12265a4b40",
      measurementId: "G-89JE5P29CZ",
    };
    if (firebase.apps.length) {
      return;
    }
    firebase.initializeApp(firebaseConfig);
    messaging = firebase.messaging();
    messaging.onMessage((payload) => {
      console.log("Message received. ", payload);
      // var sender = JSON.parse(payload.data);
      var notificationTitle = payload.data.title;
      var notificationOptions = {
        body: payload.data.body,
        // title: payload.notification.title
        // icon: window.document.URL.replace(/^(.\/)./, "$1") + "../src/assets/icon.png",
      };
      var notification = new Notification(
        notificationTitle,
        notificationOptions
      );
      notification.onclick = function(event) {
        event.preventDefault(); // prevent the browser from focusing the Notification's tab
        window.open(payload.data.click_action, "_blank");
        notification.close();
      };
    });
    messaging.usePublicVapidKey(
      "BMVdof5UoSTW4JmECt6UudHs0WITxpNyyBwAsAhr6ShO1ZAl6SYJHsKclwpD6X2xWiDYboDLGvicDJwb59oY9gU"
    );
    messaging
      .requestPermission()
      .then(() => {
        console.log("Permission granted");
        var token = messaging.getToken();
        console.log("token dai", token);
        return token;
      })
      .then((token) => {
        console.log(token);
        axios
          .post("api/notification/token", {
            fcmToken: token,
          })
          .then((response) => {
            console.log("response", response);
          })
          .catch((error) => {
            console.log("Error Occurred", error);
          });
      })
      .catch((error) => {
        if (error.code === "messaging/permission-blocked") {
          console.log("Please Unblock Notification Request Manually");
        } else {
          console.log("Error Occurred", error);
        }
      });
  }
}
