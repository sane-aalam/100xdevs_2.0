import React, { useState } from "react";
import "./App.css";

//* done all(concepts)
// Jsx, class vs className, static vs dynamic websites,
// State, components, re-rendering
// According to state component will be render.
// The equivalent code in React looks like this DOM(working)

function App() {
  const [counter, setCounter] = useState(0);
  const [counter1, setCounter1] = useState(12);
  const [counter2, setCounter2] = useState(13);
  const [counter3, setCounter3] = useState(14);

  return (
    <div>
      <CumstomButton counter={counter} setCounter={setCounter} /> <br />
      <br />
      <CumstomButton counter={counter1} setCounter={setCounter1} /> <br />
      <br />
      <CumstomButton counter={counter2} setCounter={setCounter2} /> <br />
      <br />
      <CumstomButton counter={counter3} setCounter={setCounter3} /> <br />
      <br />
    </div>
  );
}

//* React Element
// React.createElement() - used to create the React Element into React.

//* → React Component
// → ParentComponent → Passes data (props)
function CumstomButton(props) {
  const { counter, setCounter } = props;

  function IncrementButton() {
    setCounter(counter + 1);
  }
  // console.log(counter); value = 0;
  // console.log(setCounter);  native code
  return (
    <button onClick={() => IncrementButton()}> counter : {counter} </button>
  );
}

export default App;
