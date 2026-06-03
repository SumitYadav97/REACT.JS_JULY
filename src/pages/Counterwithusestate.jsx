import { useState } from "react";
import { Button } from "react-bootstrap";


const Counterwithusestate = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    if (count >= 10) {
      alert("You can’t increase value above 10");
      return;
    }
    setCount(count + 1); 
  };  
  const Increment2 = () => {
    if (count >= 9) {
      alert("You can’t increase value above 10");
      return;
    }
    setCount(count + 2);
  };

  const handleDecrement = () => {
    if (count <= 0) {
      alert("You can’t decrease value below 0 ( zero )");
      return;
    }
    setCount(count - 1);
  };
  const Decrement2 = () => {
    if (count <= 1) {
      alert("You can’t decrease value below 0 ( zero )");
      return;
    }
    setCount(count - 2);
  };
  const handleReset = () => {
    setCount(0);
  };

  return (
    <>
      <div>Current value of ( Usestate)count = {count}</div>

 
      <Button variant="primary" onClick={handleIncrement} >+1</Button>
      <Button variant="primary" onClick={handleDecrement}>-1</Button>
      <Button variant="primary" onClick={Increment2}>+2</Button>
      <Button variant="primary" onClick={Decrement2}>-2</Button>
      <Button variant="primary" onClick={handleReset}>Reset</Button>


    </>
  );
};

export default Counterwithusestate;