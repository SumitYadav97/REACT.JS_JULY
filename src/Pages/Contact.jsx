
// FIX: Imported Image alongside Button from react-bootstrap
import { Button, Col, Container, Image, Row } from 'react-bootstrap'; 

const Contact = () => {
    return (
        <div className="ltn_google-map-area">
            <h1 className='text-center'>Contact Page</h1>
        <Container>
          <Row>
            <Col lg={12}>
              <div className="google-map">
                <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m18..."
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

    )
}

export default Contact