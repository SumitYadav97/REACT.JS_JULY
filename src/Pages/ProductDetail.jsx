import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, CardGroup, Carousel, Col, Container, ListGroup, Row } from 'react-bootstrap'
import { CiHeart, CiSquareChevLeft, CiSquareChevRight } from 'react-icons/ci'
import { FaFacebook, FaHeart, FaInstagramSquare, FaPinterest } from 'react-icons/fa'
import { IoLogoTwitter } from 'react-icons/io'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { RiStarSLine } from 'react-icons/ri'
import { NavLink } from 'react-router-dom'
import { api, getProductsCategory } from '../api/Service'
import { ArrowRight } from 'react-bootstrap-icons'
import { useLocation, useParams } from 'react-router-dom'


const ProductDetail = () => {

    const [index, setIndex] = useState(0);
    const param = useParams()
    const location = useLocation()
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
   useEffect(() => {
    setLoading(true);

    api.get('/products')
        .then((response) => {
            setProducts(response.data.products);

            const uniqueCategories = [
                ...new Set(
                    response.data.products.map(
                        (product) => product.category
                    )
                )
            ];

            setCategories(uniqueCategories);
        })
        .catch((error) => {
            setError(error.message);
        })
        .finally(() => {
            setLoading(false);
        });
}, []);
    return (
        <>

            <div className='bg-light mt-5 text-center' >
                <h3> <b>PRODUCTS</b></h3>


                <div >
                    <NavLink to="/home" className="text-decoration-none text-dark">
                        HOME
                    </NavLink> <span> <MdKeyboardArrowRight /> Products</span>

                </div>
            </div>

            <Row className="mt-5">

    <Col md={3}>
        <h6>Categories</h6>

        <ListGroup>
            <ListGroup.Item>
                <NavLink
                    to="/product"
                    className="text-decoration-none text-dark"
                >
                    All Products
                </NavLink>
            </ListGroup.Item>

            {categories.map((category) => (
                <ListGroup.Item key={category}>
                    <NavLink
                        to={`/product/${category}`}
                        className="text-decoration-none text-dark"
                    >
                        <ArrowRight /> {category}
                    </NavLink>
                </ListGroup.Item>
            ))}
        </ListGroup>
    </Col>

    <Col md={9}>
        <Row>
            {products.map((product) => (
                <Col md={4} key={product.id} className="mb-4">
                    <Card>
                        <Card.Img
                            src={product.thumbnail}
                            style={{
                                height: "250px",
                                objectFit: "cover"
                            }}
                        />
                        <Card.Body>
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Text>
                                ${product.price}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    </Col>


                {/* Right Products */}
                <Col md={9}>
                    <Row>
                        {products.map(product => (
                            <Col md={4} className="mb-4" key={product.id}>
                                <Card>
                                    <Card.Img
                                        variant="top"
                                        src={product.thumbnail}
                                        style={{
                                            height: "250px",
                                            objectFit: "cover"
                                        }}
                                    />
                                    <Card.Body>
                                        <Card.Title>{product.title}</Card.Title>

                                        <Card.Text>
                                            ${product.price}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
            <div className=' text-center mt-5'>
                <span><Button variant='danger'>Description</Button> </span>
                <span><Button variant='secondary'>Reveiw</Button> </span>
                <span><Button variant='secondary'>Shipping</Button> </span>

            </div>
            <Container className=' text-center mt-3'>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nost exercit ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepte sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit volu accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explica Nemllo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,</span>
            </Container>
            <div className=' text-center mt-3'>
                <h3><b>Realted products</b></h3>
            </div>
            {/* Carousel section */}

            <Carousel activeIndex={index} onSelect={handleSelect} indicators={false}>


                <Carousel.Item>

                    <Row>
                        <Col md={3}>
                            <Card>
                                <Card.Img src="https://tunatheme.com/tf/html/fiama-preview/fiama/img/product/12.png" />
                                <Card.Body>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={3}>
                            <Card>
                                <Card.Img src="https://tunatheme.com/tf/html/fiama-preview/fiama/img/product/7.png" />
                                <Card.Body>

                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={3}>
                            <Card>
                                <Card.Img src="https://tunatheme.com/tf/html/fiama-preview/fiama/img/product/4.png" />
                                <Card.Body>

                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={3}>
                            <Card>
                                <Card.Img src="https://tunatheme.com/tf/html/fiama-preview/fiama/img/product/6.png" />
                                <Card.Body>
                                    <span></span>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Carousel.Item>

                <Carousel.Item>
                    <Row>
                        <Col md={3}>
                            <Card>
                                <Card.Img src="https://tunatheme.com/tf/html/fiama-preview/fiama/img/product/10.png" />
                                <Card.Body>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={3}>
                            <Card>
                                <Card.Img src="https://tunatheme.com/tf/html/fiama-preview/fiama/img/product/6.png" />
                                <Card.Body>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={3}>
                            <Card>
                                <Card.Img src="https://tunatheme.com/tf/html/fiama-preview/fiama/img/product/4.png" />
                                <Card.Body>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={3}>
                            <Card>
                                <Card.Img src="https://tunatheme.com/tf/html/fiama-preview/fiama/img/product/10.png" />
                                <Card.Body>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Carousel.Item>

            </Carousel>

        </>
    )
}

export default ProductDetail