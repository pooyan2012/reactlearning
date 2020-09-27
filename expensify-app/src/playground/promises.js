const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: "pooyan",
      age: 34,
    });
  }, 2000);
});

console.log("before");

promise
  .then((data) => {
    console.log("resolve", data);
  })
  .catch((error) => {
    console.log("reject", error);
  });

console.log("after");
