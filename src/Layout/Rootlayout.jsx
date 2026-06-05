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
import logo from "./../assets/img/logo.png";

import brand1 from "./../assets/img/brand-logo/1.png";
import brand2 from "./../assets/img/brand-logo/2.png";
import brand3 from "./../assets/img/brand-logo/3.png";
import brand4 from "./../assets/img/brand-logo/4.png";
import brand5 from "./../assets/img/brand-logo/5.png";

import { FaPhoneAlt, FaSearch, FaShoppingBag, FaBars, } from "react-icons/fa";

const RootLayout = () => {
  const [darkMode, setDarkMode] = useState(false);
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
      {/* <!-- HEADER AREA START (header-3) --> */}
      <header class="ltn__header-area ltn__header-3 section-bg-6">
        {/* <!-- ltn__header-middle-area start --> */}
        <div class="ltn__header-middle-area">
          <div class="container">
            <div class="row">
              <div class="col">
                <div class="site-logo">
                  <a href="/">
                    <Image src={logo} />
                  </a>                        </div>
              </div>
              <div class="col header-contact-serarch-column d-none d-xl-block">
                <div class="header-contact-search">
                  {/* <!-- header-feature-item --> */}
                  <div class="header-feature-item">
                    <div class="header-feature-icon">
                      <i class="icon-phone"></i>
                    </div>
                    <div class="header-feature-info">
                      <h6>Phone</h6>
                      <p><a href="tel:0123456789">+0123-456-789</a></p>
                    </div>
                  </div>
                  {/* <!-- header-search-2 --> */}
                  <div class="header-search-2">
                    <form id="#123" method="get" action="#">
                      <input type="text" name="search" value="" placeholder="Search here..." />
                      <button type="submit">
                        <span><i class="icon-magnifier"></i></span>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="ltn__header-options">
                  <ul>
                    <li class="d-none">
                      {/* <!-- ltn__currency-menu --> */}
                      <div class="ltn__drop-menu ltn__currency-menu">
                        <ul>
                          <li><a href="#" class="dropdown-toggle"><span class="active-currency">USD</span></a>
                            <ul>
                              <li><a href="login.html">USD - US Dollar</a></li>
                              <li><a href="wishlist.html">CAD - Canada Dollar</a></li>
                              <li><a href="register.html">EUR - Euro</a></li>
                              <li><a href="account.html">GBP - British Pound</a></li>
                              <li><a href="wishlist.html">INR - Indian Rupee</a></li>
                              <li><a href="wishlist.html">BDT - Bangladesh Taka</a></li>
                              <li><a href="wishlist.html">JPY - Japan Yen</a></li>
                              <li><a href="wishlist.html">AUD - Australian Dollar</a></li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="d-none">
                      {/* <!-- header-search-1 --> */}
                      <div class="header-search-wrap">
                        <div class="header-search-1">
                          <div class="search-icon">
                            <i class="icon-magnifier  for-search-show"></i>
                            <i class="icon-magnifier-remove  for-search-close"></i>
                          </div>
                        </div>
                        <div class="header-search-1-form">
                          <form id="#" method="get" action="#">
                            <input type="text" name="search" value="" placeholder="Search here..." />
                            <button type="submit">
                              <span><i class="icon-magnifier"></i></span>
                            </button>
                          </form>
                        </div>
                      </div>
                    </li>
                    <li class="d-none">
                      {/* <!-- user-menu --> */}
                      <div class="ltn__drop-menu user-menu">
                        <ul>
                          <li>
                            <a href="#"><i class="icon-user"></i></a>
                            <ul>
                              <li><a href="login.html">Sign in</a></li>
                              <li><a href="register.html">Register</a></li>
                              <li><a href="account.html">My Account</a></li>
                              <li><a href="wishlist.html">Wishlist</a></li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      {/* <!-- mini-cart 2 --> */}
                      <div class="mini-cart-icon mini-cart-icon-2">
                        <a href="#ltn__utilize-cart-menu" class="ltn__utilize-toggle">
                          <span class="mini-cart-icon">
                            <i class="icon-handbag"></i>
                            <sup>2</sup>
                          </span>
                          <h6><span>
                            <Button as={NavLink} to="/Cart">
                              Cart
                            </Button></span> <span class="ltn__secondary-color">$89.25</span></h6>
                        </a>
                      </div>
                    </li>
                    <li>
                      {/* <!-- Mobile Menu Button --> */}
                      <div class="mobile-menu-toggle d-lg-none">
                        <a href="#ltn__utilize-mobile-menu" class="ltn__utilize-toggle">
                          <svg viewBox="0 0 800 600">
                            <path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" id="top"></path>
                            <path d="M300,320 L540,320" id="middle"></path>
                            <path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" id="bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318) "></path>
                          </svg>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- ltn__header-middle-area end --> */}
      </header>

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



                {/* Products */}
                <div className="mt-3 ms-3">
                  <NavDropdown.Item as={NavLink} to="/product" >
                    Products
                  </NavDropdown.Item></div>


                {/* Contact */}
                <div className="mt-3 ms-3">
                  <NavDropdown.Item as={NavLink} to="/contact" >
                    Contact
                  </NavDropdown.Item></div>

                   <div className="mt-3 ms-3">
                  <NavDropdown.Item as={NavLink} to="/Profile" >
                    Profile
                  </NavDropdown.Item></div>


              </Nav>
            </Navbar.Collapse>
          </Navbar>

        </Container>
      </div>


      <Outlet />

<div className="ltn__brand-logo-area ltn__brand-logo-1 section-bg-1 pt-35 pb-35 plr--5">

    <div className="d-flex justify-content-center align-items-center flex-wrap gap-4">

      <div className="ltn__brand-logo-item">
        <Image src={brand1} alt="Brand Logo" fluid />
      </div>

      <div className="ltn__brand-logo-item">
        <Image src={brand2} alt="Brand Logo" fluid />
      </div>

      <div className="ltn__brand-logo-item">
        <Image src={brand3} alt="Brand Logo" fluid />
      </div>

      <div className="ltn__brand-logo-item">
        <Image src={brand4} alt="Brand Logo" fluid />
      </div>

      <div className="ltn__brand-logo-item">
        <Image src={brand5} alt="Brand Logo" fluid />
      </div>

    </div>
  
</div>


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