"use strict";

//JSX - JavaScript XML

var user = {
  name: "Pooyan!",
  age: 34,
  location: "Tehran"
};

function getLocation(location) {
  if (location) {
    return React.createElement(
      "p",
      null,
      "Location: ",
      location
    );
  }
}

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name ? user.name : "Anonymous"
  ),
  user.age && user.age > 18 && React.createElement(
    "p",
    null,
    "Age: ",
    user.age
  ),
  getLocation(user.location)
);
var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
