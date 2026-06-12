import React, { useState } from "react";
import { Container, Row, Col, Table, Button, Image, } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../store/slices/cartSlice";
import { Crosshair, Trash } from "react-bootstrap-icons";

const Cart = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );
  const [quantity, setQuantity] = useState(1);

  const increase = () => {
    setQuantity((prev) => prev + 1);
  };
  const decrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };
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
                            onClick={() => dispatch(removeFromCart(item.id))
                            }
                          >
                            <Trash />
                          </Button>
                        </td>
                        <td>
                          <Image src={item.thumbnail} alt={item.title} width="80" />
                        </td>
                        <td>
                          <h5>{item.title}</h5>
                        </td>
                        <td>
                          ₹ {item.price}
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <Button
                              size="sm"
                              className="theme-btn-1 btn btn-effect-1"
                              style={{ border: "none" }}
                              onClick={decrease}
                            >
                              -
                            </Button>

                            <span>{quantity}</span>

                            <Button
                              size="sm"
                              className="theme-btn-1 btn btn-effect-1"
                              style={{ border: "none" }}
                              onClick={increase}
                            >
                              +
                            </Button>
                          </div>
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

                      </td>
                    </tr>

                    <tr>
                      <td>Shipping</td>
                      <td>₹ 50.00</td>
                    </tr>

                    <tr>
                      <td>
                        <strong>Total</strong>
                      </td>
                      <td>
                        <strong>

                        </strong>
                      </td>
                    </tr>
                  </tbody>
                </Table>

                <div className="text-end">
                  {cartItems.length > 0 && (
                    <div className="text-end">
                      <NavLink
                        to="/checkout"
                        className="theme-btn-1 btn btn-effect-1 mt-3"
                        style={{ border: "none" }}
                      >
                        Proceed To Checkout
                      </NavLink>
                    </div>
                  )}
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