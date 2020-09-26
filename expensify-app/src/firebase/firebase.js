import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB7thhlNS7KEfw6uf7tqfXmgQchzeaxeic",
  authDomain: "expensify-1111.firebaseapp.com",
  databaseURL: "https://expensify-1111.firebaseio.com",
  projectId: "expensify-1111",
  storageBucket: "expensify-1111.appspot.com",
  messagingSenderId: "774359028220",
  appId: "1:774359028220:web:ac24ba850b89845197a279",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.database().ref().set({
  name: "Pooyan",
});
