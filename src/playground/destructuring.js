/* Object Destructuring */

// const person = {
//     name: 'Maneesh',
//     age: 26,
//     location: {
//         city: 'Seattle', 
//         temp: 92
//     }
// };

// const { name = 'Anonymous', age } = person;
// console.log(`${person.name} is ${person.age} and lives in ${person.location.city}`);
// console.log(`${name} is ${age} and lives in ${person.location.city}`);

// const { temp, city } = person.location;
// console.log(`It's ${person.location.temp} in ${person.location.city}`)
// console.log(`It's ${temp} in ${city}`)

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'        
//     }
// }

// const {name: publisherName = 'Self-Published' } = book.publisher;
// console.log(publisherName);


/* Array Destructuring */

// const address = ['1299 South Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
// const [street, city, state = 'New York', zip] = address;
// console.log(`You are in ${city}, ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const  [coffee, , medium, large] = item;
console.log(`A medium ${coffee} costs ${medium}`);