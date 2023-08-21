import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  // const handleClick = () => {
  //   setCount(count + 1);
  // };

  const [decrement, setDecrement] = useState(50);

  // const decrementClick = () => {
  //   setDecrement(decrement - 1);
  // };
  return (
    <>
      <h1>Counter App</h1>
      <button className="btn1"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <div>{count}</div>

      <button className="btn2"
        onClick={() => {
          setDecrement(decrement - 1);
        }}
      >
        Decrement
      </button>
      <div>{decrement}</div>
    </>
  );
}

export default App;
