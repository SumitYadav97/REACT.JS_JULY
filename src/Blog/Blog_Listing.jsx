import React from 'react'
import { Card, Col, Container, NavLink, Row } from 'react-bootstrap'
import { BlogData } from '../Data/BlogData'

const Blog_Listing = () => {
  return (
    <div>
      <h1>Blog</h1>

      <Container>
        <Row>
          {BlogData.map((blog) => {
            return (
              <Col md={4} key={blog.id}>
                <Card>
                  <Card.Img src={blog.image}></Card.Img>
                  <Card.Body>
                    <h3>{blog.title}</h3>
                    
                  </Card.Body>

                </Card>

              </Col>
            )
          })}
        </Row>
      </Container>
    </div>
  )
}

export default Blog_Listing