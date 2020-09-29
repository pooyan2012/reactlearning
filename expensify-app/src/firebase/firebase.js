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
try {
  firebase.initializeApp(firebaseConfig);
} catch (e) {
  console.log(e);
}

const database = firebase.database();

export { firebase, database as default };

// database.ref().set({
//   name: 'Andrew Mead',
//   age: 26,
//   stressLevel: 6,
//   job: {
//     title: 'Software developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Philadelphia',
//     country: 'United States'
//   }
// }).then(() => {
//   console.log('Data is saved!');
// }).catch((e) => {
//   console.log('This failed.', e);
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });

// // database.ref()
// //   .remove()
// //   .then(() => {
// //     console.log('Data was removed');
// //   }).catch((e) => {
// //     console.log('Did not remove data', e);
// //   });
