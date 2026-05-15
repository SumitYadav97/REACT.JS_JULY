import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { PlusCircle, DashCircle } from "react-bootstrap-icons";

function Customtoggle({ eventKey, title, activeKey, onToggle }) {
  const active = activeKey === eventKey;

  return (
    <div
      onClick={() => onToggle(eventKey)}
      className="d-flex justify-content-between align-items-center w-100 px-3 py-3"
      style={{ cursor: "pointer",
        border: "1px solid #dee2e6",
        
      }}
    >
      <span className={active ? "text-primary fw-bold" : "fw-bold"}>
        {title}
      </span>

      {active ? (
        <DashCircle className="text-primary fs-5" />
      ) : (
        <PlusCircle className="fs-5" />
      )}
    </div>
  );
}

function RB_Accordion() {
  const [activeKey, setActiveKey] = useState(null);

  const handleToggle = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  const Data = [
    {
      key: "0",
      title: "What is the cost of an online course?",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur tempore harum, explicabo dolorum nemo iure voluptates unde ipsum laborum soluta!",
    },
    {
      key: "1",
      title: "Do I need to visit any physical location?",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit culpa odio saepe vitae ipsum vel non nemo minima dignissimos dolorem.",
    },
    {
      key: "2",
      title: "What are the technology Location?",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit asperiores eveniet a soluta similique. Sint quis sunt minus minima voluptates!",
    },
    {
      key: "3",
      title: "How can I ask questions or clear doubts?",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius possimus non modi incidunt laudantium asperiores voluptates vel sunt vitae porro.",
    },
  ];

  return (
    <Accordion activeKey={activeKey} className="mt-3 text-start">
      {Data.map((item) => (
        <Accordion.Item
          eventKey={item.key}
          key={item.key}
          className="mb-3 border-0" >
          <Customtoggle
            eventKey={item.key}
            title={item.title}
            activeKey={activeKey}
            onToggle={handleToggle}/>

          <Accordion.Collapse eventKey={item.key}>
            <div className="p-3 " >
              {item.body}
            </div>
          </Accordion.Collapse>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}

export default RB_Accordion;