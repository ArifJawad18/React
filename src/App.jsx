import "./App.css";
import Counter from "./Counter";
import Users from "./Users";

function App() {
  function handleClick() {
    alert("button clicked");
  }
  return (
    <>
      <Users></Users>
      <Counter></Counter>

      <h3>React core concepts</h3>

      <button onClick={handleClick}>Click Me</button>
    </>
  );
}

export default App;
