import React, { useContext } from "react";
import { Card, Button, Col, Row, Container } from "react-bootstrap";
import { WishlistContext } from "../Context/Context";
import products from "../data/Products";
import { Check, Check2Circle } from "react-bootstrap-icons";
import { toast, ToastContainer } from 'react-toastify';

const Products_ = () => {
  const { wishlistState, wishlistDispatch } = useContext(WishlistContext);
  const handleAddtoWishlist = (product) => {
    const found = wishlistState.wishlistItems.some((item) => item.id === product.id
    );

    if (found) {
      toast.info("Already exists in wishlist");
      return;
    }
    else {

      wishlistDispatch({
        type: "ADD_TO_WISHLIST",
        payload: product,
      });
      toast.success("Item Added in the Wishlist")
    };
  }

  return (
    <Container className="py-5">
      <Row>
        {products.map((product) => {
          const found = wishlistState.wishlistItems.some(
            (item) => item.id === product.id
          );

          return (
            <Col md={4} key={product.id} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src={product.thumbnail}
                  height="250"
                  style={{ objectFit: "cover" }}
                />

                <Card.Body className="d-flex flex-column">
                  <Card.Title>{product.title}</Card.Title>

                  <Card.Text className="fw-bold text-success">
                    ${product.price}
                  </Card.Text>

                  <div className="mt-auto d-flex gap-2">
                    <Button
                      variant="outline-success"
                      className="w-50"
                      onClick={() => handleAddtoWishlist(product)}>
                      Wishlist {found ? <Check2Circle /> : ""}

                    </Button>

                    <Button
                      variant="outline-success"
                      className="w-50"
                    >
                      Add to cart
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
        <ToastContainer />
      </Row>
    </Container>

  );
};

export default Products_;