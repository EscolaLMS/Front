// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.8.0/firebase-app.js");
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.8.0/firebase-messaging.js");

const firebaseConfig = {
  apiKey: "AIzaSyDoAVMFXyk6oCB51mDnLBeS0FNdz_cmaWY",
  authDomain: "escolasoft-wellms-sm.firebaseapp.com",
  projectId: "escolasoft-wellms-sm",
  storageBucket: "escolasoft-wellms-sm.appspot.com",
  messagingSenderId: "1045794598307",
  appId: "1:1045794598307:web:6df5be8879e2f58ece7e16",
};
// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig);
// eslint-disable-next-line no-undef
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("xxx init Received background message ", payload);
  const notificationTitle = payload.notification.title + ".";
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
    data: payload.data.redirect_url,
    actions: [{ action: "open_url", title: "Open" }],
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
  self.addEventListener(
    "notificationclick",
    function (event) {
      switch (event.action) {
        case "open_url":
          clients.openWindow(event.notification.data);
          break;
      }
    },
    false
  );
});
