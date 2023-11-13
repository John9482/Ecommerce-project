const { initializeApp: initializeAdminApp } = ('firebase-admin/app');
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB0cj2nhCWU6kjWRRox9h2PqQmDYbYUX5c",
    authDomain: "gameverse-9c15b.firebaseapp.com",
    databaseURL: "https://gameverse-9c15b-default-rtdb.firebaseio.com",
    projectId: "gameverse-9c15b",
    storageBucket: "gameverse-9c15b.appspot.com",
    messagingSenderId: "200183330100",
    appId: "1:200183330100:web:64398e87f58ba07ba6e161"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);