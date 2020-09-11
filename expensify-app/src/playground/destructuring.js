//
//  Object Destructuring
//

/*const person = {
  name: "pooyan",
  age: 34,
  location: {
    city: "karaj",
    temp: 25,
  },
};

const { name: firstName = "Anonymous", age } = person;
console.log(`${firstName} is ${age}.`);

const { city, temp: temperature } = person.location;
if (city && temperature) {
  console.log(`It's ${temperature} in ${city}`);
}
*/

// const book = {
//   title: "Ego is the enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     name: "Penguin",
//   },
// };

// const { name: publisherName = "Self-Published" } = book.publisher;

// console.log(publisherName);

//
//  Array Destructuring
//

const address = [
  "1299 S Juniper Street",
  "Philadelphia",
  "Pennsylvania",
  "19147",
];
const [, city, state = "New York"] = address;
console.log(`You are in ${city} ${state}.`);

const item = ["Coffe (hot)", "$2.00", "$2.50", "$2.75"];
//grab first and third items using array destructuring
const [type, , cost] = item;
console.log(`A medium ${type} costs ${cost}`);
