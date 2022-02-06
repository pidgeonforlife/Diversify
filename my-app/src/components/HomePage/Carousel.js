import Carousel from 'react-bootstrap/Carousel'
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carousel.css'

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item className='carousel'>
          <img
            className="d-block w-100"
            src="./images/diversify.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='carousel'>
          <img
            className="d-block w-100 h-5000"
            src="./images/diverse-group-young-adults1.jpg"
            alt="Second slide"
          />
  
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='carousel'>
          <img
            className="d-block w-100"
            src="./images/Diversity-Tech-Header-3.jpg"
            alt="Third slide"
          />
  
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
export default ControlledCarousel;