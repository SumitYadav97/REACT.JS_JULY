import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { PlusCircle, DashCircle } from "react-bootstrap-icons";

function RB_Accordion() {
  const [activeKey, setActiveKey] = useState(null);

  const handleToggle = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  return (
    <Accordion bsPrefix=" " activeKey={activeKey}>
      
      <Accordion.Item eventKey="0">
        <Accordion.Header onClick={() => handleToggle("0")}>
          <div className="d-flex w-100 justify-content-between align-items-center">
 <span className={activeKey === "0" ? "text-primary" : ""}>
      What is the cost of an online course
    </span>
            {activeKey === "0" ? (
              <DashCircle   className="text-primary"/>
            ) : (
              <PlusCircle />
            )}
          </div>
        </Accordion.Header>

        <Accordion.Body >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur tempore harum, explicabo dolorum nemo iure voluptates unde ipsum laborum soluta!
        </Accordion.Body>
      </Accordion.Item>

      <br />
      <Accordion.Item eventKey="1">
        <Accordion.Header onClick={() => handleToggle("1")}>
          <div className="d-flex w-100 justify-content-between align-items-center">
            <span>Accordion Item #2</span>

            {activeKey === "1" ? (
              <DashCircle  className="text-primary" />
            ) : (
              <PlusCircle />
            )}
          </div>
        </Accordion.Header>

        <Accordion.Body>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Accordion.Body>
      </Accordion.Item>

    </Accordion>
  );
}

export default RB_Accordion;