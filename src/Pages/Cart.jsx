import React, { useState } from "react";
import { Container, Row, Col, Table, Button, Image, InputGroup, Form, } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, increaseQty, decreaseQty, } from "../store/slices/cartSlice";
import { Trash } from "react-bootstrap-icons";
import { toast, ToastContainer } from "react-toastify";
import { FaMinus, FaPlus } from "react-icons/fa";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [coupon, setCoupon] = useState("");
  const [isCouponApplied, couponApplied] = useState(false);
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 50;
  const discount = isCouponApplied ? subtotal * 0.1 : 0; //10% off
  const total = subtotal - discount + shipping;
  const applyCoupon = () => {
    if (coupon.trim().toUpperCase() === "GET10") {
      couponApplied(true);
      toast.success("Successfully applied coupon code");
    } else {
      couponApplied(false);
      toast.error("Invalid coupon code");
    }
  };

  return (
    <>
      <div className="ltn__breadcrumb-area ltn__breadcrumb-area-4">
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <h1>Cart</h1>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="liton__shoping-cart-area mb-100">
        <Container>
          <Row>
            <Col lg={12}>
              <Table responsive>
                <tbody>
                  {cartItems.length > 0 ? (
                    cartItems.map((item) => (
                      <tr key={item.id}>
                        <td>
                          <Button
                            variant="danger"
                            size="sm"
                            onClick={() =>
                              dispatch(removeFromCart(item.id))
                            }
                          >
                            <Trash />
                          </Button>
                        </td>

                        <td>
                          <Image
                            src={item.thumbnail}
                            alt={item.title}
                            width="80"
                          />
                        </td>

                        <td>
                          <h5>{item.title}</h5>
                        </td>

                        <td>₹ {item.price}</td>

                        <td>
                          <InputGroup style={{ width: "120px" }}>
                            <InputGroup.Text
                              role="button"
                              onClick={() => dispatch(decreaseQty(item.id))}
                            >
                              <FaMinus />
                            </InputGroup.Text>

                            <Form.Control
                              value={item.quantity}
                              readOnly
                              className="text-center"
                            />

                            <InputGroup.Text
                              role="button"
                              onClick={() => dispatch(increaseQty(item.id))}
                            >
                              <FaPlus />
                            </InputGroup.Text>
                          </InputGroup>
                        </td>

                        <td>
                          ₹ {(item.price * item.quantity).toFixed(2)}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="text-center">
                        <h2>Cart is Empty</h2>
                      </td>
                    </tr>
                  )}
                </tbody>
              </Table>
              {/* Coupon */}
              {cartItems.length > 0 && (
                <div className="d-flex gap-2 mb-4">
                  <Form.Control
                    type="text"
                    placeholder="Enter Coupon Code"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                  />

                  <Button onClick={applyCoupon}>
                    Apply Coupon
                  </Button>
                </div>
              )}

              {/* Cart Total */}
              <div className="shoping-cart-total mt-4">
                <h4>Cart Totals</h4>

                <Table>
                  <tbody>
                    <tr>
                      <td>Subtotal</td>
                      <td>₹ {subtotal.toFixed(2)}</td>
                    </tr>

                    <tr>
                      <td>Shipping</td>
                      <td>₹ {shipping}</td>
                    </tr>

                    <tr>
                      <td style={{ color: "red" }}>
                        Coupon Discount (10% OFF)
                      </td>
                      <td style={{ color: "red" }}>
                        - ₹ {discount.toFixed(2)}
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <strong>Total</strong>
                      </td>
                      <td>
                        <strong>
                          ₹ {total.toFixed(2)}
                        </strong>
                      </td>
                    </tr>
                  </tbody>
                </Table>

                {cartItems.length > 0 && (
                  <div className="text-end">
                    <NavLink
                      to="/checkout"
                      className="theme-btn-1 btn btn-effect-1 mt-3"
                    >
                      Proceed To Checkout
                    </NavLink>
                  </div>
                )}
              </div>
            </Col>
          </Row>
        </Container>

        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </>
  );
};

export default Cart;