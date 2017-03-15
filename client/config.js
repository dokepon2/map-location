import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDUFeMNeJJhG12Xjb5Q5GlHFFzj1wmfFvg",
    authDomain: "userlocation-5ec8f.firebaseapp.com",
    databaseURL: "https://userlocation-5ec8f.firebaseio.com",
    storageBucket: "userlocation-5ec8f.appspot.com",
    messagingSenderId: "710896714995"
};
firebase.initializeApp(config);

export default firebase;