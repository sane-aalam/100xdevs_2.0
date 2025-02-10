import "./App.css";

let state = {
  counter: 0,
};

function App() {
  function onClickedHandler() {
    state.counter = state.counter + 1;
  }
  return (
    <>
      <button onClick={onClickedHandler()}>{state.counter}</button>
    </>
  );
}

export default App;

// React will not able to update the state using this Method own global varialbe
// React gives you one to most important method
// UseState(hooks)
