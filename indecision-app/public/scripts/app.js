"use strict";

//9. ES6 Aside Arrow Functions
console.log("App is running...");

var app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of computer",
  options: ["One", "Two"]
};

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    "p",
    null,
    app.subtitle
  ),
  app.options.length > 0 ? React.createElement(
    "p",
    null,
    React.createElement(
      "b",
      null,
      "Here are your options"
    )
  ) : React.createElement(
    "p",
    null,
    React.createElement(
      "b",
      null,
      "No options"
    )
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "Item oneiuhi"
    ),
    React.createElement(
      "li",
      null,
      "Item two"
    )
  )
);
/////////////////////////////
var count = 0;

var addOne = function addOne() {
  count++;
  renderCounterApp();
};

var minusOne = function minusOne() {
  count--;
  renderCounterApp();
};

var resetValue = function resetValue() {
  count = 0;
  renderCounterApp();
};

var appRoot = document.getElementById("app");

var renderCounterApp = function renderCounterApp() {
  var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Count: ",
      count
    ),
    React.createElement(
      "button",
      { onClick: minusOne },
      "-1"
    ),
    React.createElement(
      "button",
      { onClick: resetValue },
      "reset"
    ),
    React.createElement(
      "button",
      { onClick: addOne },
      "+1"
    )
  );
  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
