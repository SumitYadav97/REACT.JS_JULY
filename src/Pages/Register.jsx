import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { registeruser } from "../api/Service";

function Register() {

  const [status, setStatus] = useState();
  const { formState: { errors }, register, handleSubmit } = useForm();
  const navigate = useNavigate()
  const addNewUser = async (data) => {
    try {
      console.log("Sending:", data);

      const response = await registeruser(data);

      console.log("Response:", response.data);

      setStatus(response.data);
    } catch (error) {
      console.error("API Error:", error.response?.data || error.message);
    }
  };

  const handleFormSubmit = (data) => {
    // const newUser = {
    //   username: data.username,
    //   pasword: data.pasword,
    //   email: data.email,
    // };
    addNewUser(data);
    navigate("/Login")
  };
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
                    <li>Register</li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="ltn__login-area pb-90">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="section-title-area text-center">
                <h1>
                  Register <br />
                  Your Account
                </h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  <br />
                  Sit aliquid, non distinctio vel iste.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={6} className="offset-lg-3">
              <div className="account-login-inner">
                <Form
                  className="ltn__form-box contact-form-box"
                  onSubmit={handleSubmit(handleFormSubmit)}
                >
                  {/* Name */}
                  <Form.Control
                    type="text"
                    placeholder="username"
                    className="mb-2"
                    {...register("username", {
                      required: "Name is required",
                    })}
                  />

                  {errors.username && (
                    <p className="text-danger mb-3">
                      {errors.username.message}
                    </p>
                  )}

                  {/* Email */}
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

                  {/* Marketing Consent */}
                  <Form.Check
                    type="checkbox"
                    className="mb-3"
                    label="I consent to Herboil processing my personal data in order to send personalized marketing material in accordance with the consent form and the privacy policy."
                    
                  />

                  {/* Privacy Policy */}
                  <Form.Check
                    type="checkbox"
                    className="mb-2"
                    label='By clicking "Create Account", I consent to the privacy policy.'
                    {...register("privacyPolicy", {
                      required:
                        "Please accept the privacy policy",
                    })}
                  />

                  {errors.privacyPolicy && (
                    <p className="text-danger mb-3">
                      {errors.privacyPolicy.message}
                    </p>
                  )}

                  <div className="btn-wrapper">
                    <Button
                      variant="light"
                      type="submit"
                      className="theme-btn-1 btn reverse-color btn-block w-100"
                    >
                      CREATE ACCOUNT
                    </Button>
                  </div>
                </Form>
                {/* {status}
                {JSON.stringify(status)} */}

                <div className="by-agree text-center mt-4">
                  <p>
                    By creating an account, you agree to our:
                  </p>

                  <p>
                    <NavLink to="#">
                      TERMS OF CONDITIONS | PRIVACY POLICY
                    </NavLink>
                  </p>

                  <div className="go-to-btn mt-5">
                    <NavLink to="/login">
                      ALREADY HAVE AN ACCOUNT ?
                    </NavLink>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Register;