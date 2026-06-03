import React, { useEffect, useState } from "react";
import { Container, Row, Col, Navbar, Form, Button, InputGroup, Dropdown, Badge, Nav, NavDropdown } from "react-bootstrap";
import { Moon, Search, Sun } from "react-bootstrap-icons";
import { FaFacebook, FaHeart, FaInstagramSquare, FaPinterest,  FaMapMarkerAlt,
  FaEnvelope, FaShoppingCart, 
  FaInstagram,
  FaTwitter} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { IoLogoTwitter } from "react-icons/io";
import './../css/style.css'


import { FaPhoneAlt, FaSearch, FaShoppingBag, FaBars,} from "react-icons/fa";

const RootLayout = () => {
  return (
    <>
     <Container className="ltn__header-area ltn__header-3 section-bg-6">
      <div className="ltn__header-middle-area py-3">
        <Container>
          <Row className="align-items-center">

            {/* Logo */}
            <Col lg={3}>
              <div className="site-logo">
                <img
                  src="/img/logo.png"
                  alt="Logo"
                  style={{ width: "150px" }}
                />
              </div>
            </Col>

            {/* Phone + Search */}
            <Col lg={6} className="d-none d-xl-block">
              <div className="d-flex justify-content-between align-items-center">

                <div className="d-flex align-items-center">
                  <FaPhoneAlt size={20} />

                  <div className="ms-3">
                    <h6 className="mb-0">Phone</h6>
                    <p className="mb-0">+0123-456-789</p>
                  </div>
                </div>

                <Form>
                  <InputGroup>
                    <Form.Control
                      type="text"
                      placeholder="Search here..."
                    />

                    <button
                      type="submit"
                      className="btn btn-success"
                    >
                      <FaSearch />
                    </button>
                  </InputGroup>
                </Form>

              </div>
            </Col>

            {/* Cart + Mobile Menu */}
            <Col lg={3}>
              <div className="d-flex justify-content-end align-items-center gap-4">

                {/* Cart */}
                <div className="position-relative">
                  <FaShoppingBag size={28} />

                  <Badge
                    bg="danger"
                    pill
                    className="position-absolute top-0 start-100 translate-middle"
                  >
                    2
                  </Badge>
                </div>

                <div>
                  <small>Your Cart</small>
                  <h6 className="mb-0 text-success">
                    $89.25
                  </h6>
                </div>

                {/* Mobile Menu */}
                <button className="btn d-lg-none">
                  <FaBars size={24} />
                </button>

              </div>
            </Col>

          </Row>
        </Container>
      </div>
    </Container>
    {/* main */}
     <div className="header-bottom-area ltn__border-top ltn__header-sticky d-none d-lg-block">
      <Container>
        <Navbar expand="lg" bg="white">
          <Navbar.Brand as={NavLink} to="/">
            <img
              src="/img/logo.png"
              alt="Logo"
              width="120"
            />
          </Navbar.Brand>

          <Navbar.Toggle />

          <Navbar.Collapse>
            <Nav className="mx-auto">

              {/* Home */}
              <NavDropdown title="Home">
                <NavDropdown.Item as={NavLink} to="/">
                  Home Style 01
                </NavDropdown.Item>

                <NavDropdown.Item>
                  Home Style 02
                </NavDropdown.Item>

                <NavDropdown.Item>
                  Home Style 03
                </NavDropdown.Item>

                <NavDropdown.Item>
                  Home Style 04
                </NavDropdown.Item>
              </NavDropdown>

              {/* Pages */}
              <NavDropdown title="Pages">
                <NavDropdown.Item>About Us</NavDropdown.Item>
                <NavDropdown.Item>Portfolio</NavDropdown.Item>
                <NavDropdown.Item>Portfolio Details</NavDropdown.Item>
                <NavDropdown.Item>FAQ</NavDropdown.Item>
                <NavDropdown.Item>Contact</NavDropdown.Item>
                <NavDropdown.Item>404 Page</NavDropdown.Item>
              </NavDropdown>

              {/* Shop */}
              <NavDropdown title="Shop">
                <NavDropdown.Item as={NavLink} to="/shop">
                  Shop
                </NavDropdown.Item>

                <NavDropdown.Item>
                  Shop Grid
                </NavDropdown.Item>

                <NavDropdown.Item>
                  Product Details
                </NavDropdown.Item>

                <NavDropdown.Divider />

                <NavDropdown.Item>
                  Cart
                </NavDropdown.Item>

                <NavDropdown.Item>
                  Wishlist
                </NavDropdown.Item>

                <NavDropdown.Item>
                  Checkout
                </NavDropdown.Item>
              </NavDropdown>

              {/* Portfolio */}
              <NavDropdown title="Portfolio" as={NavLink} to="/product">
                <NavDropdown.Item >
                  Portfolio
                </NavDropdown.Item>

                <NavDropdown.Item as={NavLink} to="/product">
                  Portfolio 02
                </NavDropdown.Item>

                <NavDropdown.Item as={NavLink} to="/product">
                  Portfolio Details
                </NavDropdown.Item>
              </NavDropdown>

              {/* News */}
              <NavDropdown title="News">
                <NavDropdown.Item>
                  News
                </NavDropdown.Item>

                <NavDropdown.Item>
                  News Grid
                </NavDropdown.Item>

                <NavDropdown.Item>
                  News Details
                </NavDropdown.Item>
              </NavDropdown>

              {/* Contact */}
              <Nav.Link as={NavLink} to="/contact">
                Contact
              </Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
     

      <Outlet />




       {/* Brand Logos */}
      {/* <div className="ltn__brand-logo-area ltn__brand-logo-1 section-bg-1 py-4">
        <Container fluid>
          <Row className="justify-content-center text-center">
            {[1, 2, 3, 4, 5, 1, 2].map((item, index) => (
              <Col key={index} lg={1} md={2} sm={3} xs={4}>
                <img
                  src={`/img/brand-logo/${item}.png`}
                  alt="Brand Logo"
                  className=""
                />
              </Col>
            ))}
          </Row>
        </Container>
      </div> */}

      {/* Footer */}
      
      <footer className="ltn__footer-area">
        <div className="footer-top-area section-bg-5 py-5">
          <Container>
            <Row>
              {/* My Account */}
              <Col xl={2} md={6}>
                <h4>My Account</h4>
                <ul className="list-unstyled">
                  <li>My Account</li>
                  <li>Checkout</li>
                  <li>Contact Us</li>
                  <li>Shopping Cart</li>
                  <li>Wishlist</li>
                </ul>
              </Col>

              {/* Quick Links */}
              <Col xl={2} md={6}>
                <h4>Quick Links</h4>
                <ul className="list-unstyled">
                  <li>Store Location</li>
                  <li>Order Tracking</li>
                  <li>Size Guide</li>
                  <li>My Account</li>
                  <li>FAQs</li>
                </ul>
              </Col>

              {/* Information */}
              <Col xl={2} md={6}>
                <h4>Information</h4>
                <ul className="list-unstyled">
                  <li>Privacy Policy</li>
                  <li>About Us</li>
                  <li>Careers</li>
                  <li>Delivery Information</li>
                  <li>Terms & Conditions</li>
                </ul>
              </Col>

              {/* Customer Service */}
              <Col xl={2} md={6}>
                <h4>Customer Service</h4>
                <ul className="list-unstyled">
                  <li>Shipping Policy</li>
                  <li>Help & Contact</li>
                  <li>Returns & Refunds</li>
                  <li>Online Stores</li>
                  <li>Terms & Conditions</li>
                </ul>
              </Col>

              {/* About Shop */}
              <Col xl={4}>
                <h4>About Our Shop</h4>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sed do eiusmod tempor incididunt ut labore.
                </p>

                <div className="mb-2">
                  <FaMapMarkerAlt className="me-2" />
                  Brooklyn, New York, United States
                </div>

                <div className="mb-2">
                  <FaPhoneAlt className="me-2" />
                  +0123-456789
                </div>

                <div className="mb-3">
                  <FaEnvelope className="me-2" />
                  example@example.com
                </div>

                <img
                  src="/img/icons/payment-6.png"
                  alt="Payment"
                  className="img-fluid"
                />
              </Col>
            </Row>
          </Container>
        </div>

        {/* Copyright */}
        <div className="ltn__copyright-area section-bg-5 border-top py-3">
          <Container>
            <Row className="align-items-center">
              <Col md={6}>
                <p className="mb-0">
                  © - Just For You
                </p>
              </Col>

              <Col md={6} className="text-md-end">
                <a href="#" className="me-3">
                  <FaFacebook />
                </a>

                <a href="#" className="me-3">
                  <FaTwitter />
                </a>

                <a href="#" className="me-3">
                  <FaPinterest />
                </a>

                <a href="#">
                  <FaInstagram />
                </a>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
    </>
  );
};

export default RootLayout;