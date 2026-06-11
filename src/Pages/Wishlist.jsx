import React from "react";
import { Container, Row,Col,Table,Button, Image,} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../store/slices/wishlistSlice";

const Wishlist = () => {
  const dispatch = useDispatch();

  const wishlistItems = useSelector(
    (state) => state.wishlist.items
  );
  const total = wishlistItems.reduce(
    (sum, item) => sum + Number(item.price),
    0
  );
  return (
    <>
      {/* Overlay */}
      <div className="ltn__utilize-overlay"></div>

      {/* Breadcrumb */}
      <div className="ltn__breadcrumb-area ltn__breadcrumb-area-4 ltn__breadcrumb-color-white---">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="ltn__breadcrumb-inner text-center">
                <h1 className="ltn__page-title">Wishlist</h1>

                <div className="ltn__breadcrumb-list">
                  <ul>
                    <li>
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li>Wishlist</li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Wishlist Area */}
      <div className="liton__shoping-cart-area mb-100">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="shoping-cart-inner">
                <div className="shoping-cart-table table-responsive">
                  <Table>
                    <thead>
                      <tr>
                        <th>Remove</th>
                        <th>Image</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Status</th>
                       
                      </tr>
                    </thead>

                    <tbody>
                      {wishlistItems.length === 0 ? (
                        <tr>
                          <td
                            colSpan="6"
                            className="text-center py-5"
                          >
                            <h4>Your Wishlist is Empty</h4>

                            <NavLink
                              to="/product"
                              className="theme-btn-1 btn btn-effect-1 mt-3"
                            >
                              Continue Shopping
                            </NavLink>
                          </td>
                        </tr>
                      ) : (
                        wishlistItems.map((item) => (
                          <tr key={item.id}>
                            <td className="cart-product-remove">
                              <Button
                                variant="danger"
                                size="sm"
                                onClick={() =>
                                  dispatch(
                                    removeFromWishlist(item.id)
                                  )
                                }
                              >
                                ×
                              </Button>
                            </td>

                            <td className="cart-product-image">
                              <Image
                                src={item.thumbnail}
                                alt={item.title}
                                fluid
                                style={{
                                  width: "80px",
                                  height: "80px",
                                  objectFit: "cover",
                                }}
                              />
                            </td>

                            <td className="cart-product-info">
                              <h5>{item.title}</h5>
                            </td>

                            <td className="cart-product-price">
                              ₹ {item.price}
                            </td>

                            <td className="cart-product-quantity">
                              <span className="text-success">
                                In Stock
                              </span>
                            </td>

                            <td>
                             
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </Table>
                </div>

                {/* Wishlist Total */}
                {wishlistItems.length > 0 && (
                  <div className="shoping-cart-total mt-50">
                    <h4>Wishlist Summary</h4>

                    <Table>
                      <tbody>
                        <tr>
                          <td>Total Items</td>
                          <td>{wishlistItems.length}</td>
                        </tr>

                        <tr>
                          <td>
                            <strong>Total Amount</strong>
                          </td>
                          <td>
                            <strong>₹ {total}</strong>
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
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Wishlist;