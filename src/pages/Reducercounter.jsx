import React, { useReducer } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      if (state + action.value > 10) {
        alert("You can’t increase value above 10");
        return state;
      }
      return state + action.value;
 
    case "decrement":
      if (state - action.value < 0) {
        alert("You can’t decrease value below 0");
        return state;
      }
      return state - action.value;

    case "reset":
      return 0;

    default:
      return state;
  }
};

const ReducerCounter_ = () => {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <div>Current value of (useReducer) Count = {count}</div>
      <Button onClick={() => dispatch({ type: "increment", value: 1 })}>+1</Button>
      <Button onClick={() => dispatch({ type: "decrement", value: 1 })}>-1</Button>
      <Button onClick={() => dispatch({ type: "increment", value: 2 })}>+2</Button>
      <Button onClick={() => dispatch({ type: "decrement", value: 2 })}>-2</Button>
      <Button onClick={() => dispatch({ type: "reset" })}>Reset</Button>
    </>
  );
};

export default ReducerCounter_;  