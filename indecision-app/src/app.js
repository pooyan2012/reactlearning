//9. ES6 Aside Arrow Functions
console.log("App is running...");

let app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of computer",
  options: ["One", "Two"],
};

let template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    {app.options.length > 0 ? (
      <p>
        <b>Here are your options</b>
      </p>
    ) : (
      <p>
        <b>No options</b>
      </p>
    )}
    <ol>
      <li>Item oneiuhi</li>
      <li>Item two</li>
    </ol>
  </div>
);

let user = {
  name: "Pooyan!",
  age: 34,
  location: "Tehran",
};

function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
}

let templateTwo = (
  <div>
    <h1>{user.name ? user.name : "Anonymous"}</h1>
    {user.age && user.age > 18 && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);
let appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
