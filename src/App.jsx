import "./App.css";

import Counter from "./Counter";
function App() {
  function handleClick() {
    alert("button clicked");
  }
  return (
    <>
      <Counter></Counter>

      <h3>React core concepts</h3>

      <button onClick={handleClick}>Click Me</button>
    </>
  );
}

export default App;
