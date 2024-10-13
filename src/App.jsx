import "./App.css";

import Counter from "./Counter";
function App() {
  function handleClick() {
    alert("button clicked");
  }
  return (
    <>
      <h3>React core concepts</h3>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
    </>
  );
}

export default App;
