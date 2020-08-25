//JSX - JavaScript XML

var user = {
  name: "Pooyan!",
  age: 34,
  locattion: "Tehran...",
};

var templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.locattion}</p>
  </div>
);
var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
