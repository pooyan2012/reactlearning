//12. Manual Data Binding
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
/////////////////////////////
let count = 0;

let addOne = () => {
  count++;
  renderCounterApp();
};

let minusOne = () => {
  count--;
  renderCounterApp();
};

let resetValue = () => {
  count = 0;
  renderCounterApp();
};

const appRoot = document.getElementById("app");

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={minusOne}>-1</button>
      <button onClick={resetValue}>reset</button>
      <button onClick={addOne}>+1</button>
    </div>
  );
  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
