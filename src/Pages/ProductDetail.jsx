import React, { useState } from 'react'
import { Button, Card, CardGroup, Carousel, Col, Container, Row } from 'react-bootstrap'
import { CiHeart, CiSquareChevLeft, CiSquareChevRight } from 'react-icons/ci'
import { FaFacebook, FaHeart, FaInstagramSquare, FaPinterest } from 'react-icons/fa'
import { IoLogoTwitter } from 'react-icons/io'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { RiStarSLine } from 'react-icons/ri'
import { NavLink } from 'react-router-dom'

const ProductDetail = () => {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        if (count >= 10) {
            alert("Maximum Amount Reached");
            return;
        }
        setCount(count + 1);
    };
    const handleDecrement = () => {
        if (count <= 0) {
            alert("You can’t decrease value below 0 ( zero )");
            return;
        }
        setCount(count - 1);
    };
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    const [products, setProducts] = useState([]);
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



            <Row className='mt-5'>
                <Col md={2} >
                    <Card>
                        <img src="https://tunatheme.com/tf/html/fiama-preview/fiama/img/product/4.png" alt="Rose" style={{ height: "150px", width: "150px" }} />
                    </Card>
                    <Card >
                        <img src="https://tunatheme.com/tf/html/fiama-preview/fiama/img/product/3.png" alt="Rose" style={{ height: "150px", width: "150px" }} />

                    </Card>
                    <Card >
                        <img src="https://tunatheme.com/tf/html/fiama-preview/fiama/img/product/1.png" alt="Rose" style={{ height: "150px", width: "150px" }} />
                    </Card>
                </Col >
                {/* col-2 */}
                <Col md={4}>
                    <Card className='me-5'>
                        <img
                            src="https://tunatheme.com/tf/html/fiama-preview/fiama/img/product/1.png"
                            alt="Rose"
                            className="img-fluid"
                        />
                    </Card>
                </Col>

                <Col md={6} className="text-start">
                    <h3 className=" ms-3 " >Pink Flower Tree Red</h3>

                    <div className="text-start">
                        <div className="d-flex ms-5">
                            <h3 className=" me-3 " >$49.00</h3>
                            <h3 className=" text-muted text-decoration-line-through">$65.00</h3>
                            <p className='text-warning' style={{ marginLeft: "10px" }}> <h5><RiStarSLine /><RiStarSLine /> <RiStarSLine /> <RiStarSLine /> <RiStarSLine /></h5>
                            </p>
                            <p className='text-warning' style={{ marginLeft: "10px" }}> <h6>(95 Reviews)</h6></p>
                        </div>
                        <div>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio inventore consequatur possimus non, praesentium et quas, culpa, sint quam facilis debitis.
                        </div>
                        <div className='mt-3'>
                            <b>Color</b>

                        </div>

                        <div className="d-flex gap-2">
                            <div className="bg-primary rounded-circle" style={{ width: "30px", height: "30px" }} />
                            <div className="bg-danger rounded-circle" style={{ width: "30px", height: "30px" }} />
                            <div className="bg-info rounded-circle" style={{ width: "30px", height: "30px" }} />
                            <div className="bg-success rounded-circle" style={{ width: "30px", height: "30px" }} />
                            <div className="bg-warning rounded-circle" style={{ width: "30px", height: "30px" }} />
                        </div>
                        <div className='mt-5'>Size</div>
                    </div>
                    <div className="d-flex gap-3 text-muted">
                        <span>S</span>
                        <span>M</span>
                        <span>L</span>
                        <span>XL</span>
                        <span>XXL</span>
                    </div>
                    <div>


                        <div className="d-flex  gap-2 mt-3">
                            <Button variant="light" onClick={handleDecrement}>
                                -
                            </Button>

                            <span className='mt-2'>{count}</span>

                            <Button variant="light" onClick={handleIncrement}>
                                +
                            </Button>
                            <span>
                                <Button variant='danger'>Add to cart</Button>
                                <span className='ms-3'><CiHeart size={20} /></span>
                            </span>
                        </div>
                        <div className=' d-flex mt-3 gap-2'>
                            <span>Share</span>
                            <span><FaFacebook /></span>
                            <span><IoLogoTwitter /> </span>
                            <span><FaPinterest /></span>
                            <span><FaInstagramSquare /></span>
                        </div>
                    </div>
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

                {/*Carousel */}
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
