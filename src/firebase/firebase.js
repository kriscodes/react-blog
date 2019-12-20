import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAyzc0NUQBb8oaSeMpWnwkU8322wEF0apY",
  authDomain: "kristianblogs-1e12c.firebaseapp.com",
  databaseURL: "https://kristianblogs-1e12c.firebaseio.com",
  projectId: "kristianblogs-1e12c",
  storageBucket: "kristianblogs-1e12c.appspot.com",
  messagingSenderId: "960968351212",
  appId: "1:960968351212:web:f1126823e5d0b2258134c9",
  measurementId: "G-9PJEQSK8ES"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };
