import React from "react";
import { Container, Row, Col, Navbar, Nav, NavDropdown, Form, Button, Card, InputGroup, SplitButton, Dropdown, ButtonGroup, DropdownButton, NavLink, } from "react-bootstrap";
import { Search } from 'react-bootstrap-icons';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { FaShop } from 'react-icons/fa6';
import Home from '../Pages/Home';
import Pages from "../Pages/Pages";

const RootLayout = () => {
  return (
    <>
      <Container fluid className="p-0">
        {/* HEADER */}
        <Navbar bg="light" className="py-3 shadow-sm">
          <Container fluid>
            <Navbar.Brand href="#">
              <img
                src="https://tunatheme.com/tf/html/fiama-preview/fiama/img/logo.png"
                alt="Logo"
              />
            </Navbar.Brand>

            <InputGroup style={{ width: "500px" }}>
              <Form.Control
                placeholder="Search..."
                style={{ borderRadius: "30px" }}
              />
            </InputGroup>

            <Button variant="outline-dark">
              Search
            </Button>

            <FaHeart size={20} className="ms-4" />
            <FaShoppingCart size={20} className="ms-3" />
          </Container>
        </Navbar>

        {/* Navigation Row  */}
        <Row className="justify-content-center gap-2 " >
          <Col xs="auto" >
            <Dropdown >
              <Dropdown.Toggle
                as="span"
                bsPrefix=" "
                className="text-muted"
                >
                <NavLink
                  to="/Home"
                  className="text-decoration-none text-muted"
                >
                  HOME
                </NavLink>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#action/3.1">Action</Dropdown.Item>
                <Dropdown.Item href="#action/3.2">
                  Another action
                </Dropdown.Item>
                <Dropdown.Item href="#action/3.3">
                  Something
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#action/3.4">
                  Separated link
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>

        <Col xs="auto">
  <NavLink
    to="/Pages"
    className="text-muted text-decoration-none"
  >
    PAGES
  </NavLink>
</Col>


          <Col xs="auto">
            <Dropdown>
              <Dropdown.Toggle
                as="span"
                bsPrefix=" "
                className="text-muted"
                style={{ cursor: "pointer" }}
              >
                SHOP
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#action/3.1">Action</Dropdown.Item>
                <Dropdown.Item href="#action/3.2">
                  Another action
                </Dropdown.Item>
                <Dropdown.Item href="#action/3.3">
                  Something
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#action/3.4">
                  Separated link
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col xs="auto" >
            <NavLink to='#'>Contact</NavLink>
          </Col>
        </Row>


        {/* Main */}
        <div className="mt-3"><Home /></div>

        {/* Pages */}
         <div className="mt-3"><Pages /></div>




        {/* FOOTER */}
        <footer className="bg-dark text-light pt-5 pb-3">
          <Container>
            <Row className="g-4">
              <Col lg={3} md={6}>
                <h5>My Account</h5>

                <ul className="list-unstyled">
                  <li>My Account</li>
                  <li>Checkout</li>
                  <li>Wishlist</li>
                  <li>Shopping Cart</li>
                </ul>
              </Col>

              <Col lg={3} md={6}>
                <h5>Quick Links</h5>

                <ul className="list-unstyled">
                  <li>Store Location</li>
                  <li>Orders Tracking</li>
                  <li>FAQs</li>
                </ul>
              </Col>

              <Col lg={3} md={6}>
                <h5>Information</h5>

                <ul className="list-unstyled">
                  <li>About Us</li>
                  <li>Privacy Policy</li>
                  <li>Terms & Conditions</li>
                </ul>
              </Col>

              <Col lg={3} md={6}>
                <h5>Contact</h5>

                <p>Brooklyn, New York, United States</p>
                <p>+0123-456789</p>
                <p>example@example.com</p>
              </Col>
            </Row>

            <hr className="border-light" />

            <div className="text-center">
              <p className="mb-0">
                © 2026 - Just For You
              </p>
            </div>
          </Container>
        </footer>
      </Container>
    </>

  );
}

export default RootLayout;
