//JSX - JavaScript XML

var user = {
    name: "Pooyan!",
    age: 34,
    location: "Tehran",
};

function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
}

var templateTwo = (
  <div>
    <h1>{user.name ? user.name : "Anonymous"}</h1>
    {user.age && user.age > 18 && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);
var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
