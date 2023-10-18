// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getDatabase, set, ref, get, child } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";
import { getAuth,GoogleAuthProvider, signInWithRedirect, getRedirectResult, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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

//initialize variables
const auth = getAuth();
const provider = new GoogleAuthProvider(app);
const database =getDatabase(app);
const dbref = ref(database);

//get input fields
let fnameInput = document.getElementById('fname');
let lnameInput = document.getElementById('lname');
let emailInput = document.getElementById('email');
let passwordInput = document.getElementById('password');
let confirmpasswordInput = document.getElementById('confirm-password');

//--------------------------------------