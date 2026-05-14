import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { PlusCircle, DashCircle } from "react-bootstrap-icons";

function RB_Accordion() {
  const [activeKey, setActiveKey] = useState(null);

  const handleToggle = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  return (
    <>
      <Accordion bsPrefix=" " activeKey={activeKey}>

        <Accordion.Item eventKey="0">
          <Accordion.Header onClick={() => handleToggle("0")}>
            <div className="d-flex w-100 justify-content-between align-items-center">
              <span className={activeKey === "0" ? "text-primary" : ""}>
                <b> What is the cost of an online course?</b>
              </span>
              {activeKey === "0" ? (
                <DashCircle className="text-primary" />
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
        {/* 2nd Acoordion_section */}
        <Accordion.Item eventKey="1">
          <Accordion.Header onClick={() => handleToggle("1")}>
            <div className="d-flex w-100 justify-content-between align-items-center">

              <span className={activeKey === "1" ? "text-primary" : ""}>
                <b> Do I need to visit any physical location?</b>
              </span>

              {activeKey === "1" ? (
                <DashCircle className="text-primary" />
              ) : (
                <PlusCircle />
              )}
            </div>
          </Accordion.Header>

          <Accordion.Body>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Accordion.Body>
        </Accordion.Item>
        <br />
        {/* 3rd accordion_section */}
        <Accordion.Item eventKey="2">
          <Accordion.Header onClick={() => handleToggle("2")}>
            <div className="d-flex w-100 justify-content-between align-items-center">

              <span className={activeKey === "2" ? "text-primary" : ""}>
               <b>What are the technology Location?</b>
              </span>

              {activeKey === "2" ? (
                <DashCircle className="text-primary" />
              ) : (
                <PlusCircle />
              )}
            </div>
          </Accordion.Header>

          <Accordion.Body>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Accordion.Body>
        </Accordion.Item>
        {/* 4th Accordion_section */}
        <br />
        <Accordion.Item eventKey="3">
          <Accordion.Header onClick={() => handleToggle("3")}>
            <div className="d-flex w-100 justify-content-between align-items-center">

              <span className={activeKey === "3" ? "text-primary" : ""}>
               <b>How can I ask questions or clear doubts?</b>
              </span>

              {activeKey === "3" ? (
                <DashCircle className="text-primary" />
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
    </>
  );
}

export default RB_Accordion;