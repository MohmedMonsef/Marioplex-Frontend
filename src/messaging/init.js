// <!-- The core Firebase JS SDK is always required and must be listed first -->


// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->

// importScripts('https://www.gstatic.com/firebasejs/7.14.1/firebase-app.js');
// importScripts('https://www.gstatic.com/firebasejs/7.14.1/firebase-messaging.js');
// importScripts('https://www.gstatic.com/firebasejs/7.14.1/firebase-analytics.js');
import firebase from 'firebase/app';
import 'firebase/messaging';
import axios from "axios";

  // Your web app's Firebase configuration
  export function initializeFirebase() {
if (firebase.messaging.isSupported()) {
  var firebaseConfig = {
    apiKey: "AIzaSyAQTJwTQin-ET2rjXyZEJlgfgWYrSULFYg",
    authDomain: "notification-efd46.firebaseapp.com",
    databaseURL: "https://notification-efd46.firebaseio.com",
    projectId: "notification-efd46",
    storageBucket: "notification-efd46.appspot.com",
    messagingSenderId: "648404578436",
    appId: "1:648404578436:web:7b6bf218a6fb2ff1b012d1",
    measurementId: "G-NVT784M93P"
  };
  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();
  messaging.usePublicVapidKey('BPofaWkDJxOAGwQFhhZs7FoEl07BYF1AybbDuz9eSebQXgAI0RLu2jNwvV3l5C8AJw6_1_9wzLQA4p_enila8ZM');
      messaging
      .requestPermission()
      .then(() => {
      console.log("Permission granted");
      var token = messaging.getToken();
      console.log('token dai' ,token);
      return token;
    })
    .then(token => {
        console.log(token);
        axios
        .post("api/notification/token", {
            fcmToken:token
        })
        .then(response =>{
            console.log("response" , response);
            messaging.onMessage((payload) => {
              console.log('Message received. ', payload);
              // ...
            });

        })
        .catch(error=>{
            console.log('Error Occurred', error);
        })
      
      })
      .catch(error => {
        if (error.code === 'messaging/permission-blocked') {
          console.log('Please Unblock Notification Request Manually');
        } else {
          console.log('Error Occurred', error);
        }
      });  
    }
}
// export function fun() {
//   if (firebase.messaging.isSupported()) {
//     var firebaseConfig = {
//       apiKey: "AIzaSyAQTJwTQin-ET2rjXyZEJlgfgWYrSULFYg",
//       authDomain: "notification-efd46.firebaseapp.com",
//       databaseURL: "https://notification-efd46.firebaseio.com",
//       projectId: "notification-efd46",
//       storageBucket: "notification-efd46.appspot.com",
//       messagingSenderId: "648404578436",
//       appId: "1:648404578436:web:7b6bf218a6fb2ff1b012d1",
//       measurementId: "G-NVT784M93P"
//     };
//     firebase.initializeApp(firebaseConfig);
//     const messaging = firebase.messaging();
//     messaging.usePublicVapidKey('BPofaWkDJxOAGwQFhhZs7FoEl07BYF1AybbDuz9eSebQXgAI0RLu2jNwvV3l5C8AJw6_1_9wzLQA4p_enila8ZM');
//     messaging.onMessage((payload) => {
//       console.log('Message received. ', payload);
//       // ...
//     });
//       }
//   }
  // Initialize Firebase
//  firebaseAPP.firestore().settings({timestampsInSnapshots: true});
//  export default firebaseAPP.firestore();
//   firebase.analytics();
//   const messaging = firebase.messaging();
