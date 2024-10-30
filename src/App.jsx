import "./App.css";
import Counter from "./Counter";
import Countries from "./Countries";
import Post from "./Posts";
import Users from "./Users";

function App() {
  function handleClick() {
    alert("button clicked");
  }
  return (
    <>
      <Countries></Countries>
      <Post></Post>
      <Users></Users>
      <Counter></Counter>
      

      <h3>React core concepts</h3>

      <button onClick={handleClick}>Click Me</button>
    </>
  );
}

export default App;
