
import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAEavJAXHZ3_BEPRguWKcvre54kwXjlRhA",
    authDomain: "catch-of-the-day-rm-f51d8.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-rm-f51d8.firebaseio.com",
    projectId: "catch-of-the-day-rm-f51d8",
    storageBucket: "catch-of-the-day-rm-f51d8.appspot.com",
    messagingSenderId: "1083242529897",
    appId: "1:1083242529897:web:44cbd62620a89970ba0ef8",
    measurementId: "G-BKCHWCP9GJ"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;