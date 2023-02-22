import Carousel from 'react-bootstrap/Carousel';
import './CSS/Carosuel.css'

function SecodCarousel() {
  return (
   <div id='SecondCarDiv'>
     <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://logan.nnnow.com/content/dam/nnnow-project/29-dec-2022/fm/29DEC22-FM-Shirts-BP-Banner-DSK-re.jpg"
          alt="First slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://logan.nnnow.com/content/dam/nnnow-project/29-dec-2022/fm/29DEC22-Jeans-ThickStrip.jpg"
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://storage.sg.content-cdn.io/in-resources/1665f289-f3fd-4844-a3ba-644cef519e51/Images/userimages/home-banner/banner2.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
   </div>
  );
}

export default SecodCarousel;