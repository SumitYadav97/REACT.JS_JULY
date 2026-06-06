import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Login() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="ltn__breadcrumb-area ltn__breadcrumb-area-4 ltn__breadcrumb-color-white---">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="ltn__breadcrumb-inner text-center">
                <h1 className="ltn__page-title">Account</h1>
                <div className="ltn__breadcrumb-list">
                  <ul>
                    <li>
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li>Login</li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Login Area */}
      <div className="ltn__login-area pb-85">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="section-title-area text-center">
                <h1>
                  Sign In <br />
                  To Your Account
                </h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  <br />
                  Sit aliquid, Non distinctio vel iste.
                </p>
              </div>
            </Col>
          </Row>

          <Row>
            <Col lg={6}>
              <div className="account-login-inner">
                <Form className="ltn__form-box contact-form-box">
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Email*"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="Password*"
                    />
                  </Form.Group>

                  <div className="btn-wrapper mt-0">
                    <Button
                      variant="dark"
                      className="theme-btn-1 btn btn-block w-100"
                      type="submit"
                    >
                      SIGN IN
                    </Button>
                  </div>

                  <div className="go-to-btn mt-20">
                    <NavLink to="/forgot-password">
                      <small>FORGOTTEN YOUR PASSWORD?</small>
                    </NavLink>
                  </div>
                </Form>
              </div>
            </Col>

            <Col lg={6}>
              <div className="account-create text-center pt-50">
                <h4>DON'T HAVE AN ACCOUNT?</h4>
                <p>
                  Add items to your wishlist, get personalised recommendations,
                  <br />
                  check out more quickly, track your orders, register.
                </p>

                <div className="btn-wrapper">
                  <NavLink
                    to="/register"
                    className="theme-btn-1 btn black-btn"
                  >
                    CREATE ACCOUNT
                  </NavLink>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Login;