// // child_removed
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
// });

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// });

// const expenses = [{
//     id: '1',
//     description: 'Gum',
//     note: '',
//     amount: 195,
//     createdAt: 0
//   }, {
//     id: '2',
//     description: 'Rent',
//     note: '',
//     amount: 109500,
//     createdAt: moment(0).subtract(4, 'days').valueOf()
//   }, {
//     id: '3',
//     description: 'Credit Card',
//     note: '',
//     amount: 4500,
//     createdAt: moment(0).add(4, 'days').valueOf()
//   }];

//   database.ref('expenses').push(expenses[0]);
//   database.ref('expenses').push(expenses[1]);
//   database.ref('expenses').push(expenses[2]);
  
// const firebaseNotes = {
//     notes: {
//         blah: {
//             id: '12',
//             title: 'first note',
//             body: 'this is my note'        
//         },
//         bloo: {
//             id: '76',
//             title: 'another note',
//             body: 'this is my note'
//         }
//     }
// };

// const notes = [{
//     id: '12',
//     title: 'first note',
//     body: 'this is my note'
// }, {
//     id: '76',
//     title: 'another note',
//     body: 'this is my note'
// }];

// database.ref('notes').set(notes);


// database.ref().on('value', (snapshot) => {
//     const curr = snapshot.val();
//     console.log(curr.name, 'is a', curr.job.title, 'at', curr.job.company);
// });

// database.ref().set({
//     name: 'Maneesh Karna',
//     age: 26,
//     stressLevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Seattle',
//         country: 'United States'
//     }
// }).then(() => {
//     console.log('data is saved');
// }).catch((error) => {
//     console.log('this failed', error)
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Washington D.C.'
// });

