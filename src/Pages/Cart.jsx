import React from "react";
import { Container, Row, Col, Table, Form, Button, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Cart = () => {
  return (  <>

  {/* Overlay */}
  <div className="ltn__utilize-overlay"></div>

  {/* Breadcrumb */}
  <div className="ltn__breadcrumb-area ltn__breadcrumb-area-4 ltn__breadcrumb-color-white---">
    <Container>
      <Row>
        <Col lg={12}>
          <div className="ltn__breadcrumb-inner text-center">
            <h1 className="ltn__page-title">Cart</h1>

            <div className="ltn__breadcrumb-list">
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>Cart</li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </div>

  {/* Cart Area */}
  <div className="liton__shoping-cart-area mb-100">
    <Container>
      <Row>
        <Col lg={12}>
          <div className="shoping-cart-inner">

            <div className="shoping-cart-table table-responsive">
              <Table>
                <tbody>

                  {[
                    {
                      img: "https://tunatheme.com/tf/html/fiama-preview/fiama/img/product/1.png",
                      name: "Brake Conversion Kit",
                      price: 149,
                    },
                    {
                      img: "https://tunatheme.com/tf/html/fiama-preview/fiama/img/product/2.png",
                      name: "OE Replica Wheels",
                      price: 85,
                    },
                    {
                      img: "https://tunatheme.com/tf/html/fiama-preview/fiama/img/product/3.png",
                      name: "Wheel Bearing Retainer",
                      price: 75,
                    },
                  ].map((item, index) => (
                    <tr key={index}>
                      <td className="cart-product-remove">×</td>

                      <td className="cart-product-image">
                        <NavLink to="/product-details">
                          <Image src={item.img} alt={item.name} fluid />
                        </NavLink>
                      </td>

                      <td className="cart-product-info">
                        <h4>
                          <NavLink to="/product-details">
                            {item.name}
                          </NavLink>
                        </h4>
                      </td>

                      <td className="cart-product-price">
                        ${item.price}.00
                      </td>

                      <td className="cart-product-quantity">
                        <div className="cart-plus-minus">
                          <Form.Control
                            type="number"
                            defaultValue={2}
                            className="cart-plus-minus-box"
                          />
                        </div>
                      </td>

                      <td className="cart-product-subtotal">
                        ${(item.price * 2).toFixed(2)}
                      </td>
                    </tr>
                  ))}

                  <tr className="cart-coupon-row">
                    <td colSpan="6">
                      <div className="cart-coupon d-flex gap-2">
                        <Form.Control
                          type="text"
                          placeholder="Coupon code"
                        />

                        <Button
                          className="theme-btn-2 btn-effect-2"
                        >
                          Apply Coupon
                        </Button>
                      </div>
                    </td>

                    <td>
                      <Button
                        className="theme-btn-2 btn-effect-2"
                        disabled
                      >
                        Update Cart
                      </Button>
                    </td>
                  </tr>

                </tbody>
              </Table>
            </div>

            {/* Cart Total */}
            <div className="shoping-cart-total mt-50">
              <h4>Cart Totals</h4>

              <Table>
                <tbody>
                  <tr>
                    <td>Cart Subtotal</td>
                    <td>$618.00</td>
                  </tr>

                  <tr>
                    <td>Shipping and Handling</td>
                    <td>$15.00</td>
                  </tr>

                  <tr>
                    <td>Vat</td>
                    <td>$0.00</td>
                  </tr>

                  <tr>
                    <td>
                      <strong>Order Total</strong>
                    </td>
                    <td>
                      <strong>$633.00</strong>
                    </td>
                  </tr>
                </tbody>
              </Table>

              <div className="btn-wrapper text-end">
                <NavLink
                  to="/checkout"
                  className="theme-btn-1 btn btn-effect-1"
                >
                  Proceed to Checkout
                </NavLink>
              </div>
            </div>

          </div>
        </Col>
      </Row>
    </Container>
  </div>
</>
  )
}

export default Cart
