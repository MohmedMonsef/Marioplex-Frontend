importScripts("https://www.gstatic.com/firebasejs/6.4.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/6.4.0/firebase-messaging.js");

if (firebase.messaging.isSupported()) {
  console.log("hooooooooo");
  var firebaseConfig = {
    messagingSenderId: "648404578436",
  };
  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();
  console.log("xxxxxxxx");
  messaging.setBackgroundMessageHandler(function (payload) {
    console.log(" Received background message ", payload);
    var sender = JSON.parse(payload.data.message);
    var notificationTitle = "CometChat Pro Notification";
    var notificationOptions = {
      body: payload.data.alert,
      icon: sender.data.entities.sender.entity.avatar,
    };
    return self.registration.showNotification(
      notificationTitle,
      notificationOptions
    );
  });
  self.addEventListener("notificationclick", function (event) {
    event.notification.close();
    //handle click event onClick on Web Push Notification
  });
} else {
  console.log("not supported");
}
