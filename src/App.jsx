import { useState } from "react";

import "./App.css";

const App = () => {
  const [a, setA] = useState(10);

  //props
  const Person = (props) => {
    return (
      <>
        <h3>Name: {props.name}</h3>
        <h3>Email:{props.email}</h3>
        <h3>Age:{props.age}</h3>
      </>
    );
  };

  //props in object destructureing
  const Person2 = ({ name, email, age }) => {
    return (
      <>
        <h3>Name: {name}</h3>
        <h3>Email:{email}</h3>
        <h3>Age:{age}</h3>
      </>
    );
  };
  //custom component
  const Person1 = () => {
    return (
      <>
        <h3>Name:Shahjalal</h3>
        <h3>Email:shahjalalkhan@gmail.com</h3>
        <h3>Age:23</h3>
      </>
    );
  };
  //list
  const fruits = ["apple", "banana", "mango"];
  //style
  const style = {
    color: "green",
  };
  const st = {
    color: "red",
  };

  return (
    <>
      <h1 style={style}>React Learnig App</h1>
      <button
        onClick={() => {
          setA(a + 1);
        }}
      >
        +{a}
      </button>

      {/* Internal style */}
      <h2 style={st}>hi</h2>

      {/* inline style */}
      <h3 style={{ color: "blue" }}>Hey bro</h3>

      {/* External style */}
      <p className="setColor">Hello React App</p>

      <h1>Person List</h1>
      {/* calling function */}
      <Person1 />
      <Person name=" Khan" email=" khan@gmail.com" age={23} />
      {/* <Person2 name=" S Khan" email=" skhan@gmail.com" age={23} /> */}
      <Person2 name="skhan" email="skhan@gamil.com" age={24} />

      {/* list rendering */}
      <h1 style={{ color: "red" }}>Fruits List</h1>
      <ol>
        {fruits.map((fruit) => (
          <li>{fruit}</li>
        ))}
      </ol>
    </>
  );
};

export default App;
