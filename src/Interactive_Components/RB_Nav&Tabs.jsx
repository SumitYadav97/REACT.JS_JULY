import { TabContainer, TabContent } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";

import {
  Calendar,
  Clock,
  CurrencyRupee,
} from "react-bootstrap-icons";
 
const tabItems = [
  { key: "overview", label: "Overview" },
  { key: "scope", label: "Project Scope" },
  { key: "team", label: "Team Members" },
  { key: "tasks", label: "Tasks" },
  { key: "chat", label: "Chats" },
];

const contentInfo = [
  { icon: <Calendar className="me-2 text-primary" size={16} />, title: "Start Date", value: "01 Jul, 2025", },
  { icon: <Calendar className="me-2 text-primary" size={16} />, title: "End Date", value: "31 Dec, 2025", },
  { icon: <Clock className="me-2 text-primary" size={16} />, title: "Estimated Time", value: "5 months", },
  { icon: <CurrencyRupee className="me-2 text-primary" size={16} />, title: "Estimated Cost", value: "₹5,80,000", },
];

const RB_Nav_Tabs = () => {
  return (
    <div className="bg-white">

      <TabContainer defaultActiveKey="overview">

        <Nav
          variant="underline"
          className="gap-4 border-bottom "
        >
          {tabItems.map((tab) => (
            <Nav.Item key={tab.key}>
              <Nav.Link
                eventKey={tab.key}
                className="fw-bold"
              >
                {tab.label}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>

        <TabContent className="mt-4">
          {tabItems.map((tab) => (
            <Tab.Pane key={tab.key} eventKey={tab.key}>
              <TabContentUI />
            </Tab.Pane>
          ))}
        </TabContent>

      </TabContainer>
    </div>
  );
};

const TabContentUI = () => (
  <>
    <p className="text-secondary mb-4">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Lorem ipsum dolor sit.
    </p>
    {contentInfo.map((item, index) => (
      <div
        key={index}
        className="d-flex align-items-center justify-content-between border-bottom py-3"
      >

        <div className="d-flex align-items-center">
          {item.icon}

          <span className="fw-semibold">
            {item.title}
          </span>
        </div>

        <span className="text-dark fw-bold">
          {item.value}
        </span>

      </div>
    ))}
  </>
);

export default RB_Nav_Tabs;