import React from "react";
import { Container, Row, Col, Table, Button, Image, } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, increaseQty, decreaseQty, } from "../store/slices/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const subtotal = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );
  return (
    <>
      <div className="ltn__utilize-overlay"></div>
      <div className="ltn__breadcrumb-area ltn__breadcrumb-area-4">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="text-center">
                <h1>Cart</h1>
              </div>
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
                          <Button variant="danger" size="sm" 
                          onClick={() =>dispatch(removeFromCart(item.id))
                            }
                          >
                            ×
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

                        <td>
                          ₹ {item.price}
                        </td>

                        <td>
                          <div className="d-flex gap-2 align-items-center">
                            <Button size="sm"
                              onClick={() =>
                                dispatch(
                                  decreaseQty(item.id)
                                )
                              }
                            >
                              -
                            </Button>

                            <span>
                              {item.quantity}
                            </span>

                            <Button
                              size="sm"
                              onClick={() =>
                                dispatch(
                                  increaseQty(item.id)
                                )
                              }
                            >
                              +
                            </Button>
                          </div>
                        </td>

                        <td>
                          ₹{" "}
                          {(
                            item.price *
                            item.quantity
                          )}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="6"
                        className="text-center"
                      >
                        <h2> Cart is Empty</h2>
                       
                      </td>
                    </tr>
                  )}
                </tbody>
              </Table>

              <div className="shoping-cart-total mt-4">
                <h4>Cart Totals</h4>

                <Table>
                  <tbody>
                    <tr>
                      <td>Subtotal</td>
                      <td>
                        ₹ {subtotal}
                      </td>
                    </tr>

                    <tr>
                      <td>Shipping</td>
                      <td>₹ 0.00</td>
                    </tr>

                    <tr>
                      <td>
                        <strong>Total</strong>
                      </td>
                      <td>
                        <strong>
                          ₹ {subtotal}
                        </strong>
                      </td>
                    </tr>
                  </tbody>
                </Table>

                <div className="text-end">
                  <NavLink
                    to="/checkout"
                    className="btn btn-primary"
                  >
                    Proceed To Checkout
                  </NavLink>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Cart;