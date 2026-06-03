import React, { useEffect, useState } from "react";
import { Container, Row, Col, Navbar, Form, Button, InputGroup, Dropdown, Badge, } from "react-bootstrap";
import './../assets/sass/style.css'
import { Moon, Search, Sun } from "react-bootstrap-icons";
import { FaFacebook, FaHeart, FaInstagramSquare, FaPinterest, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { IoLogoTwitter } from "react-icons/io";

const RootLayout = () => {


  return (
    <>
      {/* HEADER */}
      <Container fluid className="text-center">
        <Navbar bg="light">

          <Navbar.Brand>
            <img
              src="https://tunatheme.com/tf/html/fiama-preview/fiama/img/logo.png"
              alt="Logo"

              style={{ width: "150px" }}
            />
          </Navbar.Brand>

          <div className="text-center">
            <InputGroup>
              <Form.Control
                placeholder="Search... "
                style={{ borderRadius: "30px", width: "350px", marginLeft: "200px" }}
              />
            </InputGroup>
          </div>

          <NavLink
            to="/Wishlist"
            className="text-dark "
            style={{ marginLeft: "100px" }}
          >
            <FaHeart size={22} />
          </NavLink>
        </Navbar>
      </Container>



      {/* NAVIGATION */}
      <div className="d-flex flex-wrap justify-content-center gap-4 py-3 border-bottom">
        <NavLink to="/home" className="text-decoration-none text-dark">
          HOME
        </NavLink>

        <NavLink to="/Shop" className="text-decoration-none text-dark">
          SHOP
        </NavLink>

        <Dropdown>
          <Dropdown.Toggle as="span" bsPrefix=" " style={{ cursor: "pointer" }}>
            PRODUCT
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item as={NavLink} to="/Product">
              Product1
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <NavLink to="/Checkout" className="text-decoration-none text-dark">
          CHECKOUT
        </NavLink>
      </div>
      {/* outlet */}
      <div className="mt-3">
        <Outlet /> 
      </div>


{/* logos */}
 <Container>
        <div className='d-flex justify-content-between align-items-center mt-5 '>
          <span><img src="https://tunatheme.com/tf/html/fiama-preview/fiama/img/brand-logo/1.png" alt="" /></span>
          <span><img src="https://tunatheme.com/tf/html/fiama-preview/fiama/img/brand-logo/2.png" alt="" /></span>
          <span><img src="https://tunatheme.com/tf/html/fiama-preview/fiama/img/brand-logo/3.png" alt="" /></span>
          <span><img src="https://tunatheme.com/tf/html/fiama-preview/fiama/img/brand-logo/4.png" alt="" /></span>
          <span><img src="https://tunatheme.com/tf/html/fiama-preview/fiama/img/brand-logo/5.png" alt="" /></span>
          <span><img src="https://tunatheme.com/tf/html/fiama-preview/fiama/img/brand-logo/5.png" alt="" /></span>
        </div>
      </Container>
      {/* FOOTER */}
      <footer className="bg-dark text-light pt-5 pb-3 mt-5">
        <Container>
          <Row>
            <Col md={3}>
              <h5>My Account</h5>
              <ul className="list-unstyled text-secondary">
                <li>My Account</li>
                <li>Contact</li>
                <li>Checkout</li>
                <li>Wishlist</li>
                <li>Shopping Cart</li>
              </ul>
            </Col>

            <Col md={3}>
              <h5>Quick Links</h5>
              <ul className="list-unstyled text-secondary">
                <li>Store Location</li>
                <li>Orders Tracking</li>
                <li>FAQs</li>
              </ul>
            </Col>

            <Col md={3}>
              <h5>Information</h5>
              <ul className="list-unstyled text-secondary">
                <li>About Us</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </Col>

            <Col md={3} >
              <h5>Contact</h5>
              <span className="text-secondary">
                <p>Brooklyn, New York</p>
                <p>+0123-456789</p>
                <p>example@example.com</p>
              </span>
            </Col>
          </Row>

          <hr />
          <Row>
            <Col md={6}>
              <div className="text-start text-secondary">
                <p className="mb-0">© 2026 - Just For You</p>
              </div>

            </Col>
            <Col md={6}>
              <div className=' d-flex mt-3 gap-2'>

                <span><FaFacebook /></span>
                <span><IoLogoTwitter /> </span>
                <span><FaPinterest /></span>
                <span><FaInstagramSquare /></span>
              </div>

            </Col>
          </Row>

        </Container>
      </footer>

    </>
  );
};

export default RootLayout;