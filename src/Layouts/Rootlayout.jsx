import { Outlet, NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, Badge, Button, Col, Container } from "react-bootstrap";
import { ArrowBarRight, Moon, Sun } from "react-bootstrap-icons";
import { BsArrowBarRight } from "react-icons/bs";
import { FaArrowRight, } from "react-icons/fa";
import { useEffect, useState } from "react";
import { IoSunny } from "react-icons/io5";

const RootLayout = () => {
  const [darkMode, setDarkMode] = useState(true);
  useEffect(() => {
    const htmlElement = document.querySelector("html");
    htmlElement.setAttribute("data-bs-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <>
      <Container className="text-end">

        <Badge onClick={() => setDarkMode(!darkMode)} className=
          "me-2 rounded-5 p-2"
          bg={darkMode ? "light" : "dark"} role=
          "button">
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}

        </Badge>

      </Container>

      <div className="container-fluid  p-4">

        <div className="row g-4">


          <nav className="col-md-3 ">
            <div className="d-flex ">
              <Button>Bootstrap  Components</Button>
            </div>
            <Accordion defaultActiveKey="0" className="text-start">
              <Accordion.Item >
                <Accordion.Header>Type-1 Component</Accordion.Header>
                <Accordion.Body className="d-flex">
                  <ul className="nav flex-column gap-2">
                    <li className="nav-item">
                      <NavLink to="/counter1"
                      >
                        <FaArrowRight />
                        Counter useState
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/counter2"
                      >
                        <FaArrowRight />
                        Counter Reducer
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/profile"
                      >
                        <FaArrowRight />
                        Static Profile
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink to="/todolist">
                        <FaArrowRight />
                        Todo-list
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/table">
                        <FaArrowRight />
                        RB_Badge
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/breadcrumb">
                        <FaArrowRight />
                        RB_Breadcumb
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/buttons">
                        <FaArrowRight />
                        RB_Buttons
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink to="/button_group">
                        <FaArrowRight />
                        RB_Buttons_Group
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/Basic_card">
                        <FaArrowRight />
                        Basic_card
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/RB_Images">
                        <FaArrowRight />
                        RB_Images
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/RB_Listgroup">
                        <FaArrowRight />
                        RB_Listgroup
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/RB_Figure">
                        <FaArrowRight />
                        RB_Figure
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/RB_pagination">
                        <FaArrowRight />
                        RB_pagination
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/RB_progressbar">
                        <FaArrowRight />
                        RB_progressbar
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/RB_Spinner">

                        <FaArrowRight />
                        RB_Spinner
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/Dynamic_EmployeeTable">

                        <FaArrowRight />
                        Dynamic_Table
                      </NavLink>
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Type-2 Component</Accordion.Header>
                <Accordion.Body>
                  <ul className="nav flex-column gap-2 text-align-left">
                    <li className="nav-item">
                      <NavLink to="/RB_Accordion">
                        <FaArrowRight />
                        RB_Accordion
                      </NavLink>

                    </li>
                    <li className="nav-item">
                      <NavLink to="/RB_Dropdown">
                        <FaArrowRight />
                        RB_Dropdown
                      </NavLink>

                    </li>

                    <li className="nav-item">
                      <NavLink to="/RB_Carousel">
                        <FaArrowRight />
                        RB_Carousel
                      </NavLink>

                    </li>
                    <li className="nav-item">
                      <NavLink to="/RB_Modals_">
                        <FaArrowRight />
                        RB_Modals_
                      </NavLink>

                    </li>
                    <li className="nav-item">
                      <NavLink to="/NavbarWithOffcanvas">
                        <FaArrowRight />
                        NavbarWithOffcanvas
                      </NavLink>

                    </li>

                    <li className="nav-item">
                      <NavLink to="/RB_Nav_Tabs">
                        <FaArrowRight />
                        RB_Nav_Tabs
                      </NavLink>

                    </li>

                    <li className="nav-item">
                      <NavLink to="/RB_Overlay">
                        <FaArrowRight />
                        RB_Overlay
                      </NavLink>

                    </li>

                  </ul>

                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <Accordion defaultActiveKey="2" >
              <Accordion.Item eventKey="0">
                <Accordion.Header >Form</Accordion.Header>
                <Accordion.Body>
                  <ul className="text-start">
                    <li className="nav-item">
                      <NavLink to="/ReactHookForm">
                        <FaArrowRight />
                        RHF_Basic_Form
                      </NavLink>

                    </li>

                     <li className="nav-item">
                      <NavLink to="/RHF_YUP">
                        <FaArrowRight />
                        RHF_yup_Form
                      </NavLink>

                    </li>
                  </ul>
                  
                </Accordion.Body>
              </Accordion.Item>
            </Accordion> 
              <Accordion  defaultActiveKey="3" >
              <Accordion.Item eventKey="0">
                <Accordion.Header >Blog</Accordion.Header>
                <Accordion.Body>
                  <ul  className="text-start">
                    <li  className="nav-item">
                      <NavLink to="/Blog_Listing">
                        <FaArrowRight />
                      Blog Listing
                      </NavLink>

                    </li>

                     <li className="nav-item">
                      <NavLink to="/Blog_Details">
                        <FaArrowRight />
                        Blog Details
                      </NavLink>

                    </li>
                   
                  </ul>
                  
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            
          </nav>
          <Col>
            <main >
              <div className="card shadow-sm border-0 min-vh-100">
                <div className="card-body">
                  <Outlet />
                </div>
              </div>
            </main>
          </Col>
        </div>
      </div>
    </>
  );
};


export default RootLayout;