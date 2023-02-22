import Carousel from 'react-bootstrap/Carousel';
import './CSS/Carosuel.css'

function FirstCarousel() {
  return (
   <div id='CarDiv'>
     <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://contents.mediadecathlon.com/s981261/k$a7c09f0a1394a3e9ef7561eb0aa89c3a/hp%20banner%2001.gif?format=auto&quality=70&f=1680x0"
          alt="First slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://contents.mediadecathlon.com/s980222/k$813543b34c457ae0bd1ec9f11701089c/hp%20banner%20001.gif?format=auto&quality=70&f=1680x0"
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://contents.mediadecathlon.com/s980920/k$dc00c588fe16932e454041bb36f3f270/hp%20banner%2001.gif?format=auto&quality=70&f=1680x0"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
   </div>
  );
}

export default FirstCarousel;