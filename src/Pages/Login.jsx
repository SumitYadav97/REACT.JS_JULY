import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { authuser } from "../api/Service";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
function Login() {
  const [status, setStatus] = useState();
  const [error, setError] = useState();

  const navigate = useNavigate()
  const { formState: { errors }, register, handleSubmit } = useForm()
  const checkuser = async (data) => {
    try {
      const response = await authuser(data)
      if (
        response.data[0].email === data.email &&
        response.data[0].pasword === data.pasword
      ) {
        toast.success("Login Successfully..");

        setTimeout(() => {
          navigate("/Home");
        }, 1000);
        localStorage.setItem("login",true)
        localStorage.setItem("id",response.data[0].id)
      } else {
        toast.error("Invalid username or pasword");
      }
      setStatus(response)
    } catch (error) {
      setError(error)
    }
  }
  const handleFormSubmit = (data) => {
    checkuser(data)
    
  }
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
                <Form className="ltn__form-box contact-form-box"
                  onSubmit={handleSubmit(handleFormSubmit)}
                >
                  <Form.Control
                    type="email"
                    placeholder="email"
                    className="mb-2"
                    {...register("email", {
                      required: "Email is required",
                      message: "Please enter a valid email",
                    })}
                  />

                  {errors.email && (
                    <p className="text-danger mb-3">
                      {errors.email.message}
                    </p>
                  )}
                  {/* Password */}
                  <Form.Control
                    type="pasword"
                    placeholder="pasword"
                    className="mb-2"
                    {...register("pasword", {
                      required: "pasword is required",
                      minLength: {
                        value: 6,
                        message:
                          "Pasword must be at least 6 characters",
                      },
                    })}
                  />

                  {errors.pasword && (
                    <p className="text-danger mb-3">
                      {errors.pasword.message}
                    </p>
                  )}

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
                    <NavLink to="/forgot-pasword">
                      <small>FORGOTTEN YOUR PASSWORD?</small>
                    </NavLink>
                  </div>
                </Form>
                {/* {JSON.stringify(status)} */}
                <ToastContainer />
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