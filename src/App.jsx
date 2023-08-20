import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  const [decrement, setDecrement] = useState(50);

  const decrementClick = () => {
    setDecrement(decrement - 1);
  };
  return (
    <>
      <h1>Counter App</h1>
      <button onClick={handleClick}>Add</button>
      <div>{count}</div>
      <div>
      <button onClick={decrementClick}>Decrement</button>
    <div>{decrement}</div>
      </div>
    </>
  );
}

export default App;
