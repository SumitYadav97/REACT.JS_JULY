import React, { useState } from 'react'
import { Card, Col, Container, Dropdown, Form, InputGroup, NavLink, Pagination, Row } from 'react-bootstrap'
import { MdKeyboardArrowRight } from 'react-icons/md'

const Shop_ = () => {
  const [price, setPrice] = useState(15);

  return (

    <>
      <div className='bg-light mt-5 text-center' >
        <h3> <b>Shop</b></h3>


        <div >
          <NavLink to="/home" className="text-decoration-none text-dark pb-5">
            HOME
            <span> <MdKeyboardArrowRight /> Shop</span></NavLink>

        </div>
      </div>
      <Container>
        <Row md={4}>
          <InputGroup className="w-25 ms-5">
            <Form.Control
              type="text"
              placeholder="Search your keywords"
            />
          </InputGroup>
          <span className='text-muted'>Show 9 to 20 results</span>
          <span>
            <Dropdown>
              <Dropdown.Toggle variant="bg-light border border-none" id="dropdown-basic" style={{ marginLeft: "200px" }}>
                Short by new arrivals
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Default sorting</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Short by Popularity</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown></span>
        </Row>
        <Row className='text-center'>
          {/* Sidebar */}
          <Col md={3}>
            <div className='mt-5 border-bottom'>
              <b style={{ marginRight: "90px" }}>Price</b>
            </div>
            <div className='mt-3' style={{ marginRight: "90px" }}> <b>your range:</b> </div>
            <Form.Label className='mt-3' style={{ marginRight: "90px" }}> <b>$15 = ${price}</b></Form.Label>

            <Form.Range
              min={15}
              max={1500}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <div className='mt-3 border-bottom  text-start' style={{ marginRight: "90px" }}>
              <b>Categories</b>
            </div>
            <div className='text-start' >
              <div style={{ marginRight: "90px" }} className='mt-3 text-muted'>
                Clothing
              </div>
              <div style={{ marginRight: "90px" }} className='mt-2 text-muted'>
                Bags
              </div>
              <div style={{ marginRight: "90px" }} className='mt-2 text-muted'>
                Shoes
              </div>
              <div style={{ marginRight: "90px" }} className='mt-2 text-muted'>
                Jewelry
              </div>
              <div style={{ marginRight: "90px" }} className='mt-2 text-muted'>
                Accessories
              </div>
              <div style={{ marginRight: "90px" }} className='mt-2 text-muted'>
                Food / Drink store
              </div>
              <div style={{ marginRight: "90px" }} className='mt-2 text-muted'>
                Gift store
              </div>
              <div style={{ marginRight: "90px" }} className='mt-2 text-muted'>
                Accessories
              </div>
              <div style={{ marginRight: "90px" }} className='mt-2 text-muted'>
                Watch
              </div>
              <div style={{ marginRight: "90px" }} className='mt-2 text-muted'>
                Uncategorized
              </div>
              <div style={{ marginRight: "90px" }} className='mt-2 text-muted'>
                Other
              </div>
              <div className='text-bold mt-3 border-bottom'>
                Color
              </div>
              <div className="d-flex gap-2 mt-3">
                <div className="bg-primary rounded-circle" style={{ width: "30px", height: "30px" }} />
                <div className="bg-danger rounded-circle" style={{ width: "30px", height: "30px" }} />
                <div className="bg-info rounded-circle" style={{ width: "30px", height: "30px" }} />
                <div className="bg-success rounded-circle" style={{ width: "30px", height: "30px" }} />
                <div className="bg-warning rounded-circle" style={{ width: "30px", height: "30px" }} />
              </div>
              <div className="d-flex gap-3 text-muted mt-3">
                <span>S</span>
                <span>M</span>
                <span>L</span>
                <span>XL</span>
                <span>XXL</span>
              </div>
            </div>  
          </Col>  
          <Col md={3} >
            <Card className='mt-5'>
              <Card.Img src="https://tunatheme.com/tf/html/fiama-preview/fiama/img/product/12.png" />
              <Card.Body>
              </Card.Body>
            </Card>
            <Card className='mt-3'>
              <Card.Img src="https://tunatheme.com/tf/html/fiama-preview/fiama/img/product/12.png" />
              <Card.Body>
              </Card.Body>
            </Card>
            <Card className='mt-3'>
              <Card.Img src="https://tunatheme.com/tf/html/fiama-preview/fiama/img/product/12.png" />
              <Card.Body>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className='mt-5'>
              <Card.Img src="https://tunatheme.com/tf/html/fiama-preview/fiama/img/product/12.png" />
              <Card.Body>
              </Card.Body>
            </Card>
            <Card className='mt-3'>
              <Card.Img src="https://tunatheme.com/tf/html/fiama-preview/fiama/img/product/12.png" />
              <Card.Body>
              </Card.Body>
            </Card>
            <Card className='mt-3'>
              <Card.Img src="https://tunatheme.com/tf/html/fiama-preview/fiama/img/product/12.png" />
              <Card.Body>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className='mt-5'>
              <Card.Img src="https://tunatheme.com/tf/html/fiama-preview/fiama/img/product/12.png" />
              <Card.Body>
              </Card.Body>
            </Card>
            <Card className='mt-3'>
              <Card.Img src="https://tunatheme.com/tf/html/fiama-preview/fiama/img/product/12.png" />
              <Card.Body>
              </Card.Body>
            </Card>
            <Card className='mt-3'>
              <Card.Img src="https://tunatheme.com/tf/html/fiama-preview/fiama/img/product/12.png" />
              <Card.Body>
              </Card.Body>
            </Card>

          </Col>
           <Pagination className='justify-content-center mt-5' style={{marginLeft:"90px"}}>
      
      <Pagination.Prev />
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Ellipsis />

      <Pagination.Item>{10}</Pagination.Item>
      <Pagination.Item>{11}</Pagination.Item>
      <Pagination.Item active>{12}</Pagination.Item>
      <Pagination.Item>{13}</Pagination.Item>
      <Pagination.Item disabled>{14}</Pagination.Item>

      <Pagination.Ellipsis />
      <Pagination.Item>{20}</Pagination.Item>
      <Pagination.Next />
     
    </Pagination>
        </Row>

      </Container>
    </>
  )
}

export default Shop_
