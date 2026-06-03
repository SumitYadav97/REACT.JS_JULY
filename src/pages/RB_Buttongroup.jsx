import { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";

const Button_Group = () => {

  const [align, setAlign] = useState("center");

  return (
    <div>

      <ButtonGroup>
        <Button onClick={() => setAlign("left")}>
          Left
        </Button>
 
        <Button onClick={() => setAlign("center")}>
          Center
        </Button>

        <Button onClick={() => setAlign("right")}>
          Right
        </Button>
      </ButtonGroup>

      <p className="mt-3"
        style={{ textAlign: align }}>
        Sample Text
      </p>

    </div>
  );
};

export default Button_Group;