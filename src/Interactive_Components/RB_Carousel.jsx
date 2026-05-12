import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Button, Carousel, Container } from 'react-bootstrap';
import { ArrowRightCircle, ArrowRightCircleFill } from 'react-bootstrap-icons';
import { AiOutlineCaretLeft, AiOutlineCaretRight } from 'react-icons/ai';
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md';

function RB_CarouselFade() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % 3);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + 3) % 3);
  };

  return (
    <Container>


      <Carousel activeIndex={index} onSelect={handleSelect}
        prevIcon={<AiOutlineCaretLeft />} nextIcon={<AiOutlineCaretRight />

        }>

        <Carousel.Item >

          <img
            className="d-block w-100"
            src="https://wowslider.com/sliders/demo-44/data1/images/bridge.jpg"
            alt="First slide"
            height="500px" />

          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>


        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://wowslider.com/sliders/demo-18/data1/images/shanghai.jpg"
            alt="Second slide"
            height="500px"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>


        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://wowslider.com/sliders/demo-18/data1/images/hongkong1081704.jpg"
            alt="Third slide"
            height="500px"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna.</p>

          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
      <div className="d-flex justify-content-center gap-3 mt-3">
        <button className="btn btn-primary" onClick={handlePrev}>
          Previous
        </button>
        <button className="btn btn-primary" onClick={handleNext}>
          Next
        </button>
      </div>

    </Container>
  );
}

export default RB_CarouselFade;