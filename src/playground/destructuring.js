// const person = {
//     name: 'Tomas',
//     age: 30,
//     location: {
//         city: 'Santiago',
//         temp: -12
//     }
// };

// const {name: firstName = 'Anonymous' , age} = person;

// const {city, temp: temperature} = person.location;

// console.log(`${firstName} is ${age}`);
// console.log(`It's ${temperature} in ${city}`);

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);


// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

// const [, , state = 'New York'] = address;

// console.log(`You are in ${state}.`);

const item = ['Coffee (iced)', '$2.00', '$3.50', '$2.75'];

const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} cost ${mediumPrice}`);