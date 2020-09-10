import firebase from "firebase"

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyCc2WZ0RjcSgW9hk1xIaTD7jveu7B0ZgPc",
    authDomain: "majaha.firebaseapp.com",
    databaseURL: "https://majaha.firebaseio.com",
    projectId: "majaha",
    storageBucket: "majaha.appspot.com",
    messagingSenderId: "439492529893",
    appId: "1:439492529893:web:19fce51a534ad052e58e0c",
    measurementId: "G-0K6LY0VD2K"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth }