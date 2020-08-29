//4. ES6 Classes Part II

console.log("App is running...");

let app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of computer",
  options: [],
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    renderApp();
  }
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};
const removeAll = () => {
  app.options = [];
  renderApp();
};
const appRoot = document.getElementById("app");

const renderApp = () => {
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
      <p>{app.options.length}</p>
      <ol>
        {app.options.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
        <button onClick={removeAll}>Remove All</button>
        <button disabled={app.options.length === 0} onClick={onMakeDecision}>
          What shoud i do?
        </button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

renderApp();
