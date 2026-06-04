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
    
    {/* main */}
     <div className="header-bottom-area ltn__border-top ltn__header-sticky d-none d-lg-block">
      <Container>
        <Navbar expand="lg" bg="white">
          <Navbar.Brand as={NavLink} to="/">
            <img src="https://tunatheme.com/tf/html/fiama-preview/fiama/img/logo.png" alt="" />
          </Navbar.Brand>

          <Navbar.Toggle />

          <Navbar.Collapse>
            <Nav className="mx-auto" >

              {/* Home */}
              <NavDropdown title="Home">
                <NavDropdown.Item as={NavLink} to="/" >
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
              <NavDropdown title="checkout">
                <NavDropdown.Item as={NavLink} to="/checkout">checkout</NavDropdown.Item>
               
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

      
    </>
  );
};

export default RootLayout;