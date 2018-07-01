import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default};

// // child_remove
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// subscribe to ref
// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// }, (e) => {
//     console.log('Error fetching', e);
// });

// subscribe only one time
// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     }).catch((e) => {
//         console.log('Error fetching data', e);
//     });


// database.ref('expenses').push({
//     description: 'Gas Bill',
//     note: '',
//     amount: 1500,
//     createdAt: 1000000
// });

// database.ref('expenses').push({
//     description: 'Rent',
//     note: '',
//     amount: 3000,
//     createdAt: 2000000
// });

// database.ref('expenses').push({
//     description: 'Coffee',
//     note: '',
//     amount: 4500,
//     createdAt: 0
// });

// database.ref('notes').push({
//     title: 'Second note!',
//     body: 'This is my another note'        
// });


// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// }, (e) => {
//     console.log('Error fetching', e);
// });

// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     }).catch((e) => {
//         console.log('Error fetching data', e);
//     });


// const onValueChange =  database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error fetching', e);
// });

// setTimeout(() => {
//     database.ref('age').set(28)
// }, 3500);

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(31)
// }, 10500);

// database.ref().set({
//     name: 'Tomas Yanez',
//     age: 30,
//     stressLevel: 6,
//     job: {
//       title: 'Developer',
//       company: 'Google'  
//     },
//     location: {
//         city: 'Santiago',
//         country: 'Chile'
//     }
// }).then(() => {
//     console.log('Data is saved!');
// }).catch((e) => {
//     console.log('This failed', e);
// });

// // database.ref('isSingle').remove().then(() => {
// //     console.log('Data is removed!');
// // }).catch((e) => {
// //     console.log('Fail to remove!', e);
// // });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });

// // Updates only to root level!! use / to access child locations
