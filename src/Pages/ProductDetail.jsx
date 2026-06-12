import React, { Fragment, useEffect, useState } from "react";
import { addToCart } from "../store/slices/cartSlice";
import { getAllCategories, getProductsByCategory, } from "../api/Service";
import { ArrowRight, Check } from "react-bootstrap-icons";
import { Button, Card, Col, Container, ListGroup, Row, Spinner, } from "react-bootstrap";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, removeFromWishlist, } from "../store/slices/wishListslice";
import { toast, ToastContainer } from "react-toastify";
const ProductDetail = () => {
    const param = useParams();
    const location = useLocation();
    const dispatch = useDispatch();
    const wishlistItems = useSelector(
        (state) => state.wishlist.items
    );
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleWishlist = (product) => {
        const found = wishlistItems.find(
            (item) => item.id === product.id
        );

        if (found) {
            toast.info("Already Added In Wishlist");
            return;
        }

        dispatch(addToWishlist(product));
        toast.success("Item Added In Wishlist");

    };
    // Cart
    const handleCart = (product) => {
        const found = cartItems.find(
            (item) => item.id === product.id
        );

        if (found) {
            toast.info("Already Added In Cart");
            return;
        }

        dispatch(addToCart(product));
        toast.success("Item Added To Cart");
    };
    const cartItems = useSelector(
        (state) => state.cart.items
    );

    const getProducts = async () => {
        try {
            const response = await getProductsByCategory(
                param.category
            );

            setProducts(response.data.products);
            setError("");
        } catch (error) {
            if (error.response?.status === 404) {
                setError("Invalid URL or endpoint not found");
            } else {
                setError(error.message);
            }
        } finally {
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        }
    };

    const getCategories = async () => {
        try {
            const response = await getAllCategories();
            setCategories(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        setLoading(true);
        getProducts();
        getCategories();
    }, [location.pathname]);

    return (
        <div>
            <h3 className="mb-3">Products</h3>

            <Container>
                <Row>
                    {/* Sidebar */}
                    <Col md={3}>
                        <h5>Categories</h5>

                        <ListGroup>
                            {categories?.map((category) => (
                                <ListGroup.Item
                                    key={category.slug || category}
                                >
                                    <ArrowRight />{" "}
                                    <NavLink
                                        to={`/product/${category.slug || category}`}
                                        className="text-decoration-none"
                                    >
                                        {category.name || category}
                                    </NavLink>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Col>

                    {/* Products */}
                    <Col md={9}>
                        <Row>
                            {loading ? (
                                <Col>
                                    <Spinner size="sm" /> Products are loading...
                                </Col>
                            ) : error ? (
                                <Col>
                                    <p className="text-danger">{error}</p>
                                </Col>
                            ) : (
                                <>
                                    {products?.map((product) => {
                                        const isWishlisted =
                                            wishlistItems.some(
                                                (item) => item.id === product.id
                                            );

                                        return (
                                            <Col
                                                md={6}
                                                lg={4}
                                                key={product.id}
                                                className="mb-3"
                                            >
                                                <Card className="h-100">
                                                    <Card.Img
                                                        variant="top"
                                                        src={product.thumbnail}
                                                        style={{
                                                            height: "220px",
                                                            objectFit: "cover",
                                                        }}
                                                    />

                                                    <Card.Body>
                                                        <Card.Title>
                                                            {product.title}
                                                        </Card.Title>

                                                        <Card.Text>
                                                            ₹ {product.price}
                                                        </Card.Text>
                                                    </Card.Body>

                                                    <Card.Footer className="d-flex justify-content-between">
                                                        <Button

                                                            variant="outline-primary"
                                                            onClick={() => handleCart(product)}
                                                        >
                                                            Add To Cart
                                                        </Button>

                                                        {isWishlisted ? (
                                                            <Button
                                                                size="sm"
                                                                variant="success"
                                                                onClick={() =>
                                                                    toast.info("Already Added In Wishlist")
                                                                }
                                                            >
                                                                <Check />
                                                                Added
                                                            </Button>
                                                        ) : (
                                                            <Button
                                                                size="sm"
                                                                variant="outline-primary"
                                                                onClick={() => handleWishlist(product)}
                                                            >
                                                                Add To Wishlist
                                                            </Button>

                                                        )}
                                                    </Card.Footer>
                                                </Card>
                                            </Col>
                                        );
                                    })}
                                </>
                            )}
                            <ToastContainer />
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ProductDetail;