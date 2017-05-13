// Import and configure the Firebase SDK
// These scripts are made available when the app is served or deployed on Firebase Hosting
// If you do not serve/host your project using Firebase Hosting see https://firebase.google.com/docs/web/setup
//importScripts('/__/firebase/3.9.0/firebase-app.js');
//importScripts('/__/firebase/3.9.0/firebase-messaging.js');
//importScripts('/__/firebase/init.js');

//const messaging = firebase.messaging();


 //* Here is is the code snippet to initialize Firebase Messaging in the Service
 //* Worker when your app is not hosted on Firebase Hosting.

 // [START initialize_firebase_in_sw]
 // Give the service worker access to Firebase Messaging.
 // Note that you can only use Firebase Messaging here, other Firebase libraries
 // are not available in the service worker.
 importScripts('firebase-app.js');
 importScripts('firebase-messaging.js');

 // Initialize the Firebase app in the service worker by passing in the
 // messagingSenderId.
 firebase.initializeApp({
apiKey: "AIzaSyB20q1fzede4s1sIXru9GMtswvULzQxES4",
    authDomain: "https://push-9d79c.firebaseapp.com",
    databaseURL: "https://push-9d79c.firebaseio.com",
    projectId: "push-9d79c",
    storageBucket: "push-9d79c.appspot.com",
    messagingSenderId: "685845665281"
 });

 // Retrieve an instance of Firebase Messaging so that it can handle background
 // messages.
 const messaging = firebase.messaging();
console.log('messaging');
console.log(messaging);
console.log('################');
// If you would like to customize notifications that are received in the
// background (Web app is closed or not in browser focus) then you should
// implement this optional method.
// [START background_handler]
messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  return self.registration.showNotification(notificationTitle,
      notificationOptions);
});
// [END background_handler]


