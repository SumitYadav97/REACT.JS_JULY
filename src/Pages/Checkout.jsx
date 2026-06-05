import React from 'react'
import {
  Container,
  Form,
  Image
} from "react-bootstrap";
import { NavLink } from 'react-router-dom'
import { MdKeyboardArrowRight } from 'react-icons/md'
import logo from "./../assets/img/logo.png";


const Checkout = () => {
  return (
    <>

      <div className='bg-light mt-5 text-center' >





        {/* <!-- Utilize Cart Menu Start --> */}
        <div id="ltn__utilize-cart-menu" className="ltn__utilize ltn__utilize-cart-menu">
          <div className="ltn__utilize-menu-inner ltn__scrollbar">
            <div className="ltn__utilize-menu-head">
              <span className="ltn__utilize-menu-title">Cart</span>
              <button className="ltn__utilize-close">×</button>
            </div>
            <div className="mini-cart-product-area ltn__scrollbar">
              <div className="mini-cart-item clearfix">
                <div className="mini-cart-Image">
                  <a href="#"><Image src={logo} /></a>
                  <span className="mini-cart-item-delete"><i className="icon-trash"></i></span>
                </div>
                <div className="mini-cart-info">
                  <h6><a href="#">Premium Joyful</a></h6>
                  <span className="mini-cart-quantity">1 x $65.00</span>
                </div>
              </div>
              <div className="mini-cart-item clearfix">
                <div className="mini-cart-Image">
                  <a href="#"><Image src={logo} /></a>
                  <span className="mini-cart-item-delete"><i className="icon-trash"></i></span>
                </div>
                <div className="mini-cart-info">
                  <h6><a href="#">The White Rose</a></h6>
                  <span className="mini-cart-quantity">1 x $85.00</span>
                </div>
              </div>
              <div className="mini-cart-item clearfix">
                <div className="mini-cart-Image">
                  <a href="#"><Image src={logo} /></a>
                  <span className="mini-cart-item-delete"><i className="icon-trash"></i></span>
                </div>
                <div className="mini-cart-info">
                  <h6><a href="#">Red Rose Bouquet</a></h6>
                  <span className="mini-cart-quantity">1 x $92.00</span>
                </div>
              </div>
              <div className="mini-cart-item clearfix">
                <div className="mini-cart-Image">
                  <a href="#"><Image src={logo} /></a>
                  <span className="mini-cart-item-delete"><i className="icon-trash"></i></span>
                </div>
                <div className="mini-cart-info">
                  <h6><a href="#">Pink Flower Tree</a></h6>
                  <span className="mini-cart-quantity">1 x $68.00</span>
                </div>
              </div>
            </div>
            <div className="mini-cart-footer">
              <div className="mini-cart-sub-total">
                <h5>Subtotal: <span>$310.00</span></h5>
              </div>
              <div className="btn-wrapper">
                <a href="cart.html" className="theme-btn-1 btn btn-effect-1">View Cart</a>
                <a href="cart.html" className="theme-btn-2 btn btn-effect-2">Checkout</a>
              </div>
              <p>Free Shipping on All Orders Over $100!</p>
            </div>

          </div>
        </div>
        {/* <!-- Utilize Cart Menu End -->

        <!-- Utilize Mobile Menu Start --> */}
        <div id="ltn__utilize-mobile-menu" className="ltn__utilize ltn__utilize-mobile-menu">
          <div className="ltn__utilize-menu-inner ltn__scrollbar">
            <div className="ltn__utilize-menu-head">
              <div className="site-logo">
                <a href="index.html"><Image src={logo} /></a>
              </div>
              <button className="ltn__utilize-close">×</button>
            </div>
            <div className="ltn__utilize-menu-search-form">
              <form action="#">
                <Form.Control type="text" placeholder="Search..." />
                <button><i className="icon-magnifier"></i></button>
              </form>
            </div>
            <div className="ltn__utilize-menu">
              <ul>
                <li><a href="#">Home</a>
                  <ul className="sub-menu">
                    <li><a href="index.html">Home Style - 01</a></li>
                    <li><a href="index-2.html">Home Style - 02</a></li>
                    <li><a href="index-3.html">Home Style - 03</a></li>
                    <li><a href="index-4.html">Home Style - 04</a></li>
                  </ul>
                </li>
                <li><a href="about.html">About Us</a></li>
                <li><a href="#">Shop</a>
                  <ul className="sub-menu">
                    <li><a href="shop.html">Shop</a></li>
                    <li><a href="shop-grid.html">Shop Grid</a></li>
                    <li><a href="shop-left-sidebar.html">Shop Left sidebar</a></li>
                    <li><a href="shop-right-sidebar.html">Shop right sidebar</a></li>
                    <li><a href="product-details.html">Shop details </a></li>
                    <li><a href="cart.html">Cart</a></li>
                    <li><a href="wishlist.html">Wishlist</a></li>
                    <li><a href="checkout.html">Checkout</a></li>
                    <li><a href="order-tracking.html">Order Tracking</a></li>
                    <li><a href="account.html">My Account</a></li>
                    <li><a href="login.html">Sign in</a></li>
                    <li><a href="register.html">Register</a></li>
                  </ul>
                </li>
                <li><a href="#">News</a>
                  <ul className="sub-menu">
                    <li><a href="blog.html">News</a></li>
                    <li><a href="blog-grid.html">News Grid</a></li>
                    <li><a href="blog-left-sidebar.html">News Left sidebar</a></li>
                    <li><a href="blog-right-sidebar.html">News Right sidebar</a></li>
                    <li><a href="blog-details.html">News details</a></li>
                  </ul>
                </li>
                <li><a href="#">Pages</a>
                  <ul className="sub-menu">
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="portfolio.html">Portfolio</a></li>
                    <li><a href="portfolio-2.html">Portfolio - 02</a></li>
                    <li><a href="portfolio-details.html">Portfolio Details</a></li>
                    <li><a href="faq.html">FAQ</a></li>
                    <li><a href="locations.html">Google Map Locations</a></li>
                    <li><a href="404.html">404</a></li>
                    <li><a href="contact.html">Contact</a></li>
                    <li><a href="coming-soon.html">Coming Soon</a></li>
                  </ul>
                </li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
            </div>
            <div className="ltn__utilize-buttons ltn__utilize-buttons-2">
              <ul>
                <li>
                  <a href="account.html" title="My Account">
                    <span className="utilize-btn-icon">
                      <i className="icon-user"></i>
                    </span>
                    My Account
                  </a>
                </li>
                <li>
                  <a href="wishlist.html" title="Wishlist">
                    <span className="utilize-btn-icon">
                      <i className="icon-heart"></i>
                      <sup>3</sup>
                    </span>
                    Wishlist
                  </a>
                </li>
                <li>
                  <a href="cart.html" title="Shoping Cart">
                    <span className="utilize-btn-icon">
                      <i className="icon-handbag"></i>
                      <sup>5</sup>
                    </span>
                    Shoping Cart
                  </a>
                </li>
              </ul>
            </div>
            <div className="ltn__social-media-2">
              <ul>
                <li><a href="#" title="Facebook"><i className="icon-social-facebook"></i></a></li>
                <li><a href="#" title="Twitter"><i className="icon-social-twitter"></i></a></li>
                <li><a href="#" title="Pinterest"><i className="icon-social-pinterest"></i></a></li>
                <li><a href="#" title="Instagram"><i className="icon-social-instagram"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- Utilize Mobile Menu End --> */}

        <div className="ltn__utilize-overlay"></div>

        {/* <!-- BREADCRUMB AREA START --> */}
        <div className="ltn__breadcrumb-area ltn__breadcrumb-area-4 ltn__breadcrumb-color-white---">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="ltn__breadcrumb-inner text-center">
                  <h1 className="ltn__page-title">Checkout</h1>
                  <div className="ltn__breadcrumb-list">
                    <ul>
                      <li><a href="index.html">Home</a></li>
                      <li>Checkout</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- BREADCRUMB AREA END -->

        <!-- WISHLIST AREA START --> */}
        <div className="ltn__checkout-area mb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="ltn__checkout-inner">
                  <div className="ltn__checkout-single-content ltn__returning-customer-wrap">
                    <h5>Returning customer? <a className="ltn__secondary-color" href="#ltn__returning-customer-login" data-bs-toggle="collapse">Click here to login</a></h5>
                    <div id="ltn__returning-customer-login" className="collapse ltn__checkout-single-content-info">
                      <div className="ltn_coupon-code-form ltn__form-box">
                        <p>Please login your accont.</p>
                        <form action="#" >
                          <div className="row">
                            <div className="col-md-6">
                              <div className="Form.Control-item Form.Control-item-name ltn__custom-icon">
                                <Form.Control type="text" name="ltn__name" placeholder="Enter your name" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="Form.Control-item Form.Control-item-email ltn__custom-icon">
                                <Form.Control type="email" name="ltn__email" placeholder="Enter email address" />
                              </div>
                            </div>
                          </div>
                          <button className="btn theme-btn-1 btn-effect-1 text-uppercase">Login</button>
                          <label className="Form.Control-info-save mb-0"><Form.Control type="checkbox" name="agree" /> Remember me</label>
                          <p className="mt-30"><a href="register.html">Lost your password?</a></p>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="ltn__checkout-single-content ltn__coupon-code-wrap">
                    <h5>Have a coupon? <a className="ltn__secondary-color" href="#ltn__coupon-code" data-bs-toggle="collapse">Click here to enter your code</a></h5>
                    <div id="ltn__coupon-code" className="collapse ltn__checkout-single-content-info">
                      <div className="ltn__coupon-code-form">
                        <p>If you have a coupon code, please apply it below.</p>
                        <form action="#" >
                          <Form.Control type="text" name="coupon-code" placeholder="Coupon code" />
                          <button className="btn theme-btn-2 btn-effect-2 text-uppercase">Apply Coupon</button>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="ltn__checkout-single-content mt-50">
                    <h4 className="title-2">Billing Details</h4>
                    <div className="ltn__checkout-single-content-info">
                      <form action="#" >
                        <h6>Personal Information</h6>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="Form.Control-item Form.Control-item-name ltn__custom-icon">
                              <Form.Control type="text" name="ltn__name" placeholder="First name" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="Form.Control-item Form.Control-item-name ltn__custom-icon">
                              <Form.Control type="text" name="ltn__lastname" placeholder="Last name" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="Form.Control-item Form.Control-item-email ltn__custom-icon">
                              <Form.Control type="email" name="ltn__email" placeholder="email address" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="Form.Control-item Form.Control-item-phone ltn__custom-icon">
                              <Form.Control type="text" name="ltn__phone" placeholder="phone number" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="Form.Control-item Form.Control-item-website ltn__custom-icon">
                              <Form.Control type="text" name="ltn__company" placeholder="Company name (optional)" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="Form.Control-item Form.Control-item-website ltn__custom-icon">
                              <Form.Control type="text" name="ltn__phone" placeholder="Company address (optional)" />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-4 col-md-6">
                            <h6>Country</h6>
                            <div className="Form.Control-item">
                              <select className="nice-select">
                                <option>Select Country</option>
                                <option>Australia</option>
                                <option>Canada</option>
                                <option>China</option>
                                <option>Morocco</option>
                                <option>Saudi Arabia</option>
                                <option>United Kingdom (UK)</option>
                                <option>United States (US)</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-lg-12 col-md-12">
                            <h6>Address</h6>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="Form.Control-item">
                                  <Form.Control type="text" placeholder="House number and street name" />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="Form.Control-item">
                                  <Form.Control type="text" placeholder="Apartment, suite, unit etc. (optional)" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6">
                            <h6>Town / City</h6>
                            <div className="Form.Control-item">
                              <Form.Control type="text" placeholder="City" />
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6">
                            <h6>State </h6>
                            <div className="Form.Control-item">
                              <Form.Control type="text" placeholder="State" />
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6">
                            <h6>Zip</h6>
                            <div className="Form.Control-item">
                              <Form.Control type="text" placeholder="Zip" />
                            </div>
                          </div>
                        </div>
                        <p><label className="Form.Control-info-save mb-0"><Form.Control type="checkbox" name="agree" /> Create an account?</label></p>
                        <h6>Order Notes (optional)</h6>
                        <div className="Form.Control-item Form.Control-item-textarea ltn__custom-icon">
                          <textarea name="ltn__message" placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                        </div>

                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="ltn__checkout-payment-method mt-50">
                  <h4 className="title-2">Payment Method</h4>
                  <div id="checkout_accordion_1">
                    {/* <!-- card --> */}
                    <div className="card">
                      <h5 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-1" aria-expanded="false">
                        Check payments
                      </h5>
                      <div id="faq-item-2-1" className="collapse" data-bs-parent="#checkout_accordion_1">
                        <div className="card-body">
                          <p>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                        </div>
                      </div>
                    </div>
                    {/* <!-- card --> */}
                    <div className="card">
                      <h5 className="ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-2" aria-expanded="true">
                        Cash on delivery
                      </h5>
                      <div id="faq-item-2-2" className="collapse show" data-bs-parent="#checkout_accordion_1">
                        <div className="card-body">
                          <p>Pay with cash upon delivery.</p>
                        </div>
                      </div>
                    </div>
                    {/* <!-- card --> */}
                    <div className="card">
                      <h5 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-3" aria-expanded="false" >
                        PayPal <Image src={logo} />
                      </h5>
                      <div id="faq-item-2-3" className="collapse" data-bs-parent="#checkout_accordion_1">
                        <div className="card-body">
                          <p>Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ltn__payment-note mt-30 mb-30">
                    <p>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</p>
                  </div>
                  <button className="btn theme-btn-1 btn-effect-1 text-uppercase" type="submit">Place order</button>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="shoping-cart-total mt-50">
                  <h4 className="title-2">Cart Totals</h4>
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>Brake Conversion Kit <strong>× 2</strong></td>
                        <td>$298.00</td>
                      </tr>
                      <tr>
                        <td>OE Replica Wheels <strong>× 2</strong></td>
                        <td>$170.00</td>
                      </tr>
                      <tr>
                        <td>Wheel Bearing Retainer <strong>× 2</strong></td>
                        <td>$150.00</td>
                      </tr>
                      <tr>
                        <td>Shipping and Handing</td>
                        <td>$15.00</td>
                      </tr>
                      <tr>
                        <td>Vat</td>
                        <td>$00.00</td>
                      </tr>
                      <tr>
                        <td><strong>Order Total</strong></td>
                        <td><strong>$633.00</strong></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </>
  )
}

export default Checkout
