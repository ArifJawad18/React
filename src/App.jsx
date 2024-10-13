import "./App.css";

function App() {
  function handleClick() {
    alert("button clicked");
  }
  return (
    <>
      <h3>React core concepts</h3>
      <button onClick={handleClick}>Click Me</button>
    </>
  );
}

export default App;
