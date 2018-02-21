importScripts('https://www.gstatic.com/firebasejs/4.6.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.6.2/firebase-messaging.js');

firebase.initializeApp({
    'messagingSenderId' : "147961173097"
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log('Received background message', payload);
    return self.registration.showNotification({}, {});
});