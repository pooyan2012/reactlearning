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

const book = {
  title: "Ego is the enemy",
  author: "Ryan Holiday",
  publisher: {
    name: "Penguin",
  },
};

const { name: publisherName = "Self-Published" } = book.publisher;

console.log(publisherName);
