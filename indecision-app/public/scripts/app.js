"use strict";

//12. Manual Data Binding

console.log("App is running...");

var app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of computer",
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();

  var option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    console.log(option);
    renderApp();
  }
};

var removeAll = function removeAll() {
  app.options = [];
  renderApp();
};
var appRoot = document.getElementById("app");

var renderApp = function renderApp() {
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
      "p",
      null,
      app.options.length
    ),
    React.createElement(
      "ol",
      null,
      app.options.map(function (item) {
        return React.createElement(
          "li",
          { key: item },
          item
        );
      })
    ),
    React.createElement(
      "form",
      { onSubmit: onFormSubmit },
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement(
        "button",
        null,
        "Add Option"
      ),
      React.createElement(
        "button",
        { onClick: removeAll },
        "Remove All"
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

renderApp();
