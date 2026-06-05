import React, { useEffect, useState } from "react";
import { Container, Row, Col, Navbar, Form, Button, InputGroup, Dropdown, Badge, Nav, NavDropdown } from "react-bootstrap";
import { Moon, Search, Sun } from "react-bootstrap-icons";
import {
  FaFacebook, FaHeart, FaInstagramSquare, FaPinterest, FaMapMarkerAlt,
  FaEnvelope, FaShoppingCart,
  FaInstagram,
  FaTwitter
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { IoLogoTwitter } from "react-icons/io";
import './../css/style.css'
import { Image } from "react-bootstrap";

import { FaPhoneAlt, FaSearch, FaShoppingBag, FaBars, } from "react-icons/fa";

const RootLayout = () => {
  return (
    <>

      {/* main */}
      <div className="header-bottom-area ltn__border-top ltn__header-sticky d-none d-lg-block">
        <Container>
          <Navbar expand="lg" bg="white">
            <Navbar.Brand as={NavLink} to="/">
              <Image src="https://tunatheme.com/tf/html/fiama-preview/fiama/Image/logo.png" alt="" />
            </Navbar.Brand>

            <Navbar.Toggle />

            <Navbar.Collapse>
              <Nav className="mx-auto" >

                {/* Home */}
                <div className="mt-3 ">
                  <NavDropdown.Item as={NavLink} to="/Home">
                    Home
                  </NavDropdown.Item></div>


                {/* Pages */}
                <div className="mt-3 ms-3 ">
                  <NavDropdown.Item as={NavLink} to="/Checkout">
                    Checkout
                  </NavDropdown.Item></div>



                {/* Portfolio */}
                <div className="mt-3 ms-3">
                  <NavDropdown.Item as={NavLink} to="/product" >
                    Products
                  </NavDropdown.Item></div>


                {/* Contact */}
                <div className="mt-3 ms-3">
                  <NavDropdown.Item as={NavLink} to="/contact" >
                    Contact
                  </NavDropdown.Item></div>

              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </div>


      <Outlet />


      

      {/* FOOTER AREA START */}
      <footer className="ltn__footer-area">
        <div className="footer-top-area section-bg-5">
          <div className="container">
            <div className="row">

              {/* My Account */}
              <div className="col-xl-2 col-md-6 col-sm-6 col-12">
                <div className="footer-widget footer-menu-widget clearfix">
                  <h4 className="footer-title">My Account</h4>
                  <div className="footer-menu">
                    <ul>
                      <li><NavLink to="/account">My Account</NavLink></li>
                      <li><NavLink to="/checkout">Checkout</NavLink></li>
                      <li><NavLink to="/contact">Contact Us</NavLink></li>
                      <li><NavLink to="/cart">Shopping Cart</NavLink></li>
                      <li><NavLink to="/wishlist">Wishlist</NavLink></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="col-xl-2 col-md-6 col-sm-6 col-12">
                <div className="footer-widget footer-menu-widget clearfix">
                  <h4 className="footer-title">Quick Links</h4>
                  <div className="footer-menu">
                    <ul>
                      <li><NavLink to="/store-location">Store Location</NavLink></li>
                      <li><NavLink to="/order-tracking">Order Tracking</NavLink></li>
                      <li><NavLink to="/size-guide">Size Guide</NavLink></li>
                      <li><NavLink to="/account">My Account</NavLink></li>
                      <li><NavLink to="/faq">FAQs</NavLink></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Information */}
              <div className="col-xl-2 col-md-6 col-sm-6 col-12">
                <div className="footer-widget footer-menu-widget clearfix">
                  <h4 className="footer-title">Information</h4>
                  <div className="footer-menu">
                    <ul>
                      <li><NavLink to="/privacy-policy">Privacy Policy</NavLink></li>
                      <li><NavLink to="/about">About Us</NavLink></li>
                      <li><NavLink to="/careers">Careers</NavLink></li>
                      <li><NavLink to="/delivery-info">Delivery Information</NavLink></li>
                      <li><NavLink to="/terms">Terms & Conditions</NavLink></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Customer Service */}
              <div className="col-xl-2 col-md-6 col-sm-6 col-12">
                <div className="footer-widget footer-menu-widget clearfix">
                  <h4 className="footer-title">Customer Service</h4>
                  <div className="footer-menu">
                    <ul>
                      <li><NavLink to="/shipping-policy">Shipping Policy</NavLink></li>
                      <li><NavLink to="/contact">Help & Contact Us</NavLink></li>
                      <li><NavLink to="/returns">Returns & Refunds</NavLink></li>
                      <li><NavLink to="/shop">Online Stores</NavLink></li>
                      <li><NavLink to="/terms">Terms & Conditions</NavLink></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* About Shop */}
              <div className="col-xl-4 col-md-6 col-sm-6 col-12">
                <div className="footer-widget footer-about-widget">
                  <h4 className="footer-title">About Our Shop</h4>

                  <div className="site-logo mb-3">
                    <Image src="/Image/logo.png" alt="Logo" fluid />
                  </div>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod incididunt ut labore et dolore.
                  </p>

                  <div className="footer-address">
                    <ul>
                      <li>
                        <div className="footer-address-info">
                          <p>Brooklyn, New York, United States</p>
                        </div>
                      </li>

                      <li>
                        <div className="footer-address-info">
                          <p>
                            <a href="tel:+0123456789">+0123-456789</a>
                          </p>
                        </div>
                      </li>

                      <li>
                        <div className="footer-address-info">
                          <p>
                            <a href="mailto:example@example.com">
                              example@example.com
                            </a>
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="footer-payment-image mt-3">
                    <Image
                      src="/Image/icons/payment-6.png"
                      alt="Payment"
                      fluid
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="ltn__copyright-area ltn__copyright-2 section-bg-5">
          <div className="container ltn__border-top-2">
            <div className="row">
              <div className="col-md-6">
                <p>
                  © {new Date().getFullYear()} - Just For You
                </p>
              </div>

              <div className="col-md-6 text-end">
                <div className="ltn__social-media">
                  <ul>
                    <li><a href="/"><i className="icon-social-facebook"></i></a></li>
                    <li><a href="/"><i className="icon-social-twitter"></i></a></li>
                    <li><a href="/"><i className="icon-social-pinterest"></i></a></li>
                    <li><a href="/"><i className="icon-social-instagram"></i></a></li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </footer>
      {/* FOOTER AREA END */}

      {/* Brand Logos */}
      {/* <div className="ltn__brand-logo-area ltn__brand-logo-1 section-bg-1 py-4">
        <Container fluid>
          <Row className="justify-content-center text-center">
            {[1, 2, 3, 4, 5, 1, 2].map((item, index) => (
              <Col key={index} lg={1} md={2} sm={3} xs={4}>
                <Image
                  src={`/Image/brand-logo/${item}.png`}
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