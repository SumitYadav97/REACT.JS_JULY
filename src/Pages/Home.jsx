import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Button, Card, Carousel, Col, Container, Dropdown, Form, InputGroup, Navbar, NavLink, Row } from 'react-bootstrap';
import { ArrowRightCircle, ArrowRightCircleFill, CheckCircleFill, CircleFill, Search } from 'react-bootstrap-icons';
import { AiOutlineCaretLeft, AiOutlineCaretRight } from 'react-icons/ai';
import { BsFillPauseCircleFill } from 'react-icons/bs';
import { CiCircleInfo, CiSquareChevLeft, CiSquareChevRight } from 'react-icons/ci';
import { FaCircle, FaHeart, FaRegCircle, FaShoppingCart } from 'react-icons/fa';
import { GoDotFill } from 'react-icons/go';
import { ImRadioUnchecked } from 'react-icons/im';

import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight, MdOutlineRadioButtonUnchecked, MdRadioButtonChecked } from 'react-icons/md';
function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data.products))

  }, []);



  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect} indicators={false}
        prevIcon={<CiSquareChevLeft />
        }
        nextIcon={<CiSquareChevRight />
        }
      >
        <Carousel.Item >
          <img
            className="d-block w-100"
            src='https://tunatheme.com/tf/html/fiama-preview/fiama/img/product/2.png'
            height="500px" />

          <Carousel.Caption className='text-start'>
            <h1 className='text-secondary'>Fresh Flower</h1>
            <p className='text-secondary'> Natural & Beautiful Flower Here</p>
            <p className='text-dark'>Lorem ipsum dolor sit amet consectetur adipisicing elit <br />. Alias commodi quis, excepturi aut numquam atque!</p>
            <Button variant='secondary' style={{ borderRadius: "50px" }}>Shop Now</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src='https://tunatheme.com/tf/html/fiama-preview/fiama/img/product/6.png'
            height="500px"
          />

          <Carousel.Caption className='text-start'>
            <h1 className='text-secondary'>Fresh Flower</h1>
            <p className='text-secondary'>Natural & Beautiful Flower Here</p>
            <p className='text-dark'>Lorem ipsum dolor sit amet consectetur adipisicing elit <br />. Alias commodi quis, excepturi aut numquam atque!</p>
            <Button variant='secondary' style={{ borderRadius: "50px" }}>Shop Now</Button>
          </Carousel.Caption>
        </Carousel.Item>


        <Carousel.Item>
          <img
            className="d-block w-100"
            src='https://tunatheme.com/tf/html/fiama-preview/fiama/img/product/6.png'
            height="500px"
          />

          <Carousel.Caption className='text-start'>
            <h1 className='text-secondary'>Fresh Flower</h1>
            <p className='text-secondary'>Natural & Beautiful Flower Here</p>
            <p className='text-dark' >Lorem ipsum dolor sit amet consectetur adipisicing elit <br />. Alias commodi quis, excepturi aut numquam atque!</p>
            <Button variant='secondary' style={{ borderRadius: "50px" }}>Shop Now</Button>
          </Carousel.Caption>
        </Carousel.Item >

      </Carousel>

      {/* Card section */}
      <Container>
        <Row>
          <Col md={4} className='mt-5'>
            <Card >
              <img src="https://tunatheme.com/tf/html/fiama-preview/fiama/img/banner/1.jpg" alt="" />

            </Card>
          </Col>
          <Col md={4} className='mt-5'>
            <Card >
              <img src="https://tunatheme.com/tf/html/fiama-preview/fiama/img/banner/2.jpg" alt="" />
            </Card>
          </Col>
          <Col md={4} className='mt-5'>
            <Card >
              <img src="https://tunatheme.com/tf/html/fiama-preview/fiama/img/banner/3.jpg" alt="" />
            </Card>
          </Col>
        </Row>
      </Container>

      <div className='mt-3  text-center'>
        <h2> <b>new arrival items</b></h2>
      </div>
      <Container className="mt-5" >
        {/* Product section */}
        <Row>
          {products.map((product) => (
            <Col md={3} key={product.id} className="mb-4">
              <Card>
                <Card.Img
                  variant="top"
                  src={product.thumbnail}
                  style={{ height: "200px", objectFit: "cover" }}
                />

                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>
                    Price: ${product.price}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Container>

        <div className="mt-5">
          <Row>

            <Col md={6}>
              <Card >
                <img src="https://tunatheme.com/tf/html/fiama-preview/fiama/img/banner/6.jpg" alt="" />
              </Card>
            </Col>
            <Col md={6}>
              <Card >
                <img src="https://tunatheme.com/tf/html/fiama-preview/fiama/img/banner/7.jpg" alt="" />
              </Card>

            </Col>
          </Row>
        </div>
      </Container>

      <div className='mt-5' >

        <Container fluid>
          <img src="https://tunatheme.com/tf/html/fiama-preview/fiama/img/banner/10.jpg" alt="" />
        </Container>

      </div>
      <div className='mt-3  text-center '>
        <h1 > <b>latest news</b></h1>
      </div>
     


    </>


  );
}

export default Home;