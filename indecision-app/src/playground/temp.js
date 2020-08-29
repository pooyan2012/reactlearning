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