"use strict";

//JSX - JavaScript XML

var user = {
  name: "Pooyan!",
  age: 34,
  locattion: "Tehran..."
};

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name
  ),
  React.createElement(
    "p",
    null,
    "Age: ",
    user.age
  ),
  React.createElement(
    "p",
    null,
    "Location: ",
    user.locattion
  )
);
var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
