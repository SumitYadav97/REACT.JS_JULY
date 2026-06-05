import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import { api, getAllCategories, getAllProducts, getProductsByCategory } from '../api/Service'
import { ArrowRight, List } from 'react-bootstrap-icons'
import { Button, Card, Col, Container, ListGroup, Row, Spinner } from 'react-bootstrap'
import { NavLink, useLocation, useParams } from 'react-router-dom'

const ProductDetail = () => {

    const param = useParams()
    const location = useLocation()
    const [products, setProducts] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)
    const [categories, setCategories] = useState([]);

    const getProducts = async () => {
        try {
            const response = await getProductsByCategory(param.category);
            setProducts(response.data.products);
        } catch (error) {
            if (error.response?.status === 404) {
                setError("Invalid URL or endpoint not found");
            } else {
                setError(error.message);
            }
        } finally {
            setLoading(false);
        }
    };

    const fetchCategories = async () => {
        try {
            const response = await getAllCategories();
            setCategories(response.data);
        } catch (error) {
            if (error.response?.status === 404) {
                setError("Invalid URL or endpoint not found");
            } else {
                setError(error.message);
            }
        }
    }; useEffect(() => {
        setLoading(true);

        getProducts();
        fetchCategories();
    }, [location.pathname]);
    return (
        <div><h3>Products</h3><br />
            <pre> {JSON.stringify(param, null, 2)} </pre>
            <Container>
                <Row>
                    {/* Sidebar */}
                    <Col md={3}>
                        <h5>Categories</h5>
                        <ListGroup>
                            {categories?.map((category) => (
                                <ListGroup.Item key={category.slug}>
                                    <ArrowRight />{" "}
                                    <NavLink
                                        to={`/product/${category.slug}`}
                                        className="text-decoration-none"
                                    >
                                        {category.name}
                                    </NavLink>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Col>

                    {/* Products */}
                    <Col md={9}>
                        <Row>
                            {loading ?
                                <Col>
                                    <Spinner size='sm' /> Products are loading...
                                </Col>
                                :
                                <Fragment>
                                    {error ?
                                        <Col>
                                            <pre>{JSON.stringify(error, null, 2)}</pre>
                                        </Col>
                                        :
                                        <Fragment>
                                            {products?.map((product) => {
                                                return (
                                                    <Col md={6} key={product.id} className='mb-3'>
                                                        <Card>
                                                            <Card.Img src={product.thumbnail} />
                                                            <Card.Body>
                                                                {product.title}
                                                            </Card.Body>
                                                            <Card.Footer className='d-flex justify-content-between'>
                                                                <Button size='sm' variant='outline-success'>
                                                                    Add To Cart
                                                                </Button>
                                                                <Button size='sm' variant='outline-primary'>
                                                                    Add To Wishlist
                                                                </Button>
                                                            </Card.Footer>
                                                        </Card>
                                                    </Col>
                                                )
                                            })}
                                        </Fragment>
                                    }
                                </Fragment>
                            }
                        </Row>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default ProductDetail