import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import { ArrowRightCircle, ArrowRightCircleFill } from 'react-bootstrap-icons';
import { AiOutlineCaretLeft, AiOutlineCaretRight } from 'react-icons/ai';
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md';

function RB_CarouselFade() {
  return (
    <Carousel prevIcon={<AiOutlineCaretLeft />} nextIcon={<AiOutlineCaretRight />

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
  );
}

export default RB_CarouselFade;