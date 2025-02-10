import { useState } from "react";
import "./App.css";

function App() {
  // currentState,updateState = useState(function which is written by react.js developer, you don't worry about it)
  // ONLY re-render that ReactElement which we want to update it
  // Re-rendering is so FAST.
  // Don't worry about how many times we have to re-render the components
  // React use Virtual DOM.
  let [counter, setCounter] = useState(0);

  function IncrementdHandler() {
    setCounter(counter + 1);
  }
  function DcrementHandler() {
    setCounter(counter - 1);
  }
  return (
    <>
      <p>{counter}</p>
      <button onClick={() => IncrementdHandler()}>Increment Counter</button>
      <button onClick={() => DcrementHandler()}>Dcrement Counter</button>
    </>
  );
}

export default App;
